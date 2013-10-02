/*
 * ai1ConvertBlocks.js: Conversion of XML block representation in AI1 .blk files
 *   to XML block representation of AI2 .bky files. 
 * 
 * Author: Lyn Turbak (fturbak@wellesley.edu)
 *
 * History: 
 *
 *  [lyn, 2014 Jul 06-18]: Develop main architecture for converting .blk to .bky XML representations, 
 *     including details for leaf blocks, simple component events, component property setters. 
 * 
 *  [lyn, 2015 Jun 03]: Swap in code architecture from last July.
 * 
 *  [lyn, 2015 Jun 06]: Fix escapeHTML to handle spaces and newlines
 * 
 *  [lyn, 2015 Jun 07]: Implement component property getters 
 * 
 *  [lyn, 2015 Jun 08]: Da beginning of da big push: 
 *    + handle simple binary operator blocks
 *    + special case handling of \n in text block string
 *    + handle empty sockets in operators blocks
 *    + successfully convert A1ConvertTestEquals.zip and AIConvertEmptySockets.zip
 *    + generalize operator conversion to expOp, which handles all expression operators, 
 *        including those with extensible number of args (e.g., make-text). 
 *    + fix bug in domToPrettyText (trimming lines) so that .blk XML displays OK. 
 *    + successfully test conversion of all text operators with empty sockets (AIConvertTextOps.zip)
 *    + checkout AI1 v134a to explore component database. Add file AI1_v134a_simple_components.js
 *         containing component database
 * 
 *    
 * TODO: 
 *   + Component events, methods, and variables
 *   + Global variables and references
 *   + Procedures and variables
 *   + Control blocks
 *   + Finish all simple expression and statement blocks
 *   + Comments
 *   + Collapsed blocks
 *   + Disabled blocks
 */ 

goog.require('goog.dom');

function convert_A11_XML_to_AI2_XML(AI1_XML) { // Both AI1_XML and AI2_XML are strings
  var parseBlocksResult  = parseBlocks(AI1_XML);
  var blocksAndStubs = parseBlocksResult.blocksAndStubs;
  var componentTypeMap = parseBlocksResult.componentTypeMap;
  var AI1_IdMap = blockIdMap(blocksAndStubs); 
  // var keys = [];
  // for (var key in IdMap) {
  //     keys.push(key);
  // }
  // alert(JSON.stringify(keys));
  var AI2_XML = convertBlocks(AI1_IdMap, componentTypeMap); 
  return domToPrettyText(AI2_XML)
}


// Return the blocks & block stubs from the XML for an AI1 file. 
function parseBlocks(text) {
  var oParser = new DOMParser();
  var dom = oParser.parseFromString(text, 'text/xml');
  var yaCodeBlocks = getChildByTagName("YACodeBlocks", dom);

  var pages = getChildByTagName("Pages", yaCodeBlocks); 
  var page = getChildByTagName("Page", pages); 
  var pageBlocks = getChildByTagName("PageBlocks", page); 

  var youngAndroidMaps = getChildByTagName("YoungAndroidMaps", yaCodeBlocks); 
  var youngAndroidUuidMap = getChildByTagName("YoungAndroidUuidMap", youngAndroidMaps); 
  var uuidEntries = youngAndroidUuidMap.getElementsByTagName("YoungAndroidUuidEntry");
  var componentTypeMap = {};
  for (var i = 0, entry; entry = uuidEntries[i]; i++) {
    componentTypeMap[entry.getAttribute("component-id")] = entry.getAttribute("component-genus");
  }
  // var yacodeblocks = getFirstElementChild("yacodeblocks", dom); 
  // var pages = getFirstElementChild("pages", yacodeblocks); 
  // var page = getFirstElementChild("page", pages); 
  // var pageblocks = getFirstElementChild("pageblocks", page); 
  return {"blocksAndStubs": pageBlocks.children, "componentTypeMap": componentTypeMap};
}

// Given a list of AI1 blocks and block stubs, return an object with 
// (1) top-level blocks a (2) a map of AI1 block Ids to blocks 
function blockIdMap(blocksAndStubs) {
  var IdMap = {};
  for (var i = 0, blockOrStub; blockOrStub = blocksAndStubs[i]; i++) {
    var block = getBlock(blockOrStub); 
    var id = block.attributes.getNamedItem("id").value;
    IdMap[id] = blockOrStub; // When stub, put stub here!
  }
  return IdMap;
}

function convertBlocks(inputIdMap, componentTypeMap) {
  var blockIds = Object.keys(inputIdMap);
  var outputIdMap = {};
  var parentMap = {};

  function convertBlock(id) {
    var block = getBlock(inputIdMap[id]);
    var genus = block.getAttribute("genus-name")
    var label = getLabelText(block);
    var spec = getConversionSpec(genus);
    var specKind = spec.kind;
    var resultBlock = goog.dom.createDom('block');
    resultBlock.setAttribute("id", id);
    resultBlock.setAttribute("type", spec.type);
    if (specKind == "leaf") {
      /* Example 1:
           AI1 <Block id="670" genus-name="number" > ... <Label>17</Label> ...  </Block>
           => AI2:
             <block type="math_number" id="670">
               <field name="NUM">17</field>
             </block>
         Example 2: 
           AI1 <Block id="417" genus-name="color-red" > ... <Label>Red</Label> ... </Block>
           => AI2:
             <block type="color_red" id="417">
               <field name="COLOR">#ff0000</field>
             </block>
      */
      // spec.fieldValue overrides label in the case of colors (want "#ff0000", not "Red")
      //   and boolean literals (want "TRUE", not "true")
      var fieldValue = spec.fieldValue ? spec.fieldValue : label; 
      // Special case for processing text value string (to handle newlines properly)
      // I.e., need to replace three characters \\n by two characters \n:
      if (spec.type == "text") {
        fieldValue = fieldValue.replace(/\\\\n/g, '\\n');
      }
      resultBlock.appendChild(createFieldElement(spec.fieldName, fieldValue));
    } else if (specKind == "componentSetter") {
      /* Example: 
         AI1: 
           <Block id="549" genus-name="componentSetter" > ... 
             <Label>Button1.Visible</Label> ...
             <AfterBlockId>553</AfterBlockId> ...
             <Sockets num-sockets="1" >
               <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="to" 
                position-type="single" con-block-id="551" >
               </BlockConnector>
              </Sockets>
           </Block>
          => AI2:
           <block type="component_set_get" id="549" inline="false">
           <mutation component_type="Button" set_or_get="set" property_name="Visible" 
            is_generic="false" instance_name="Button1"></mutation>
             <field name="COMPONENT_SELECTOR">Button1</field>
             <field name="PROP">Text</field>
             <value name="VALUE">...code for block 551...</value>
             <next>...code for block 553...</next>
           </block>
       */
      var label = getLabelText(block);
      var splitList = label.split("."); // E.g. "Button1.Visible" => ["Button1", "Visible"]
      var instanceName = splitList[0];
      var propertyName = splitList[1];
      var componentType = componentTypeMap[instanceName];
      resultBlock.setAttribute("inline", "false");
      
      appendChildren(resultBlock, 
                     [createElement("mutation", 
                                    {"component_type": componentType, 
                                     "instance_name": instanceName,
                                     "property_name": propertyName, 
                                     "set_or_get": "set", 
                                     "is_generic": "false",
                                    }, 
                                    []), 
                      createFieldElement("COMPONENT_SELECTOR", instanceName), 
                      createFieldElement("PROP", propertyName)
                      ]);
      var valueId = getSocketLabelId("to", block); 
      if (valueId) {
        parentMap[valueId] = id; // Mark that value has id as parent
        var valueBlock = convertBlock(valueId); 
        resultBlock.appendChild(createElement("value", {"name": "VALUE"}, [valueBlock])); 
      }
      var nextId = getNextId(block); 
      if (nextId) {
        parentMap[nextId] = id; // Mark that next has id as parent
        var nextBlock = convertBlock(nextId); 
        resultBlock.appendChild(createElement("next", {}, [nextBlock])); 
      }
    } else if (specKind == "componentGetter") {
      /* Example: 

            AI1: 
             <BlockStub><StubParentName>Button1.BackgroundColor</StubParentName><StubParentGenus>read-write-property</StubParentGenus>
               <Block id="552" genus-name="componentGetter" >
                 <Location><X>272</X><Y>97</Y></Location>
                 <Label>Button1.BackgroundColor</Label>
                 <Plug><BlockConnector connector-kind="plug" connector-type="poly" init-type="poly" label="" position-type="single" con-block-id="550" ></BlockConnector></Plug>
               </Block>
             </BlockStub>
          => AI2:
             <block type="component_set_get" id="552" x="272" y="97">
               <mutation component_type="Button" set_or_get="get" property_name="BackgroundColor" is_generic="false" instance_name="Button1"></mutation>
               <field name="COMPONENT_SELECTOR">Button1</field>
               <field name="PROP">BackgroundColor</field>
             </block>
       */
      var label = getLabelText(block);
      var splitList = label.split("."); // E.g. "Button1.Visible" => ["Button1", "Visible"]
      var instanceName = splitList[0];
      var propertyName = splitList[1];
      var componentType = componentTypeMap[instanceName];
      resultBlock.setAttribute("inline", "false");
      
      appendChildren(resultBlock, 
                     [createElement("mutation", 
                                    {"component_type": componentType, 
                                     "instance_name": instanceName,
                                     "property_name": propertyName, 
                                     "set_or_get": "get", 
                                     "is_generic": "false",
                                    }, 
                                    []), 
                      createFieldElement("COMPONENT_SELECTOR", instanceName), 
                      createFieldElement("PROP", propertyName)
                      ]);
    } else if (specKind == "componentEvent") {
      /* AI: <Block id="545" genus-name="Button-Click" > ... <Label>Button1.Click</Label> ... 
               <Sockets num-sockets="1" >
                 <BlockConnector connector-kind="socket" connector-type="cmd" init-type="cmd" label="do" is-indented="yes" 
                  position-type="single" con-block-id="555" ></BlockConnector>
               </Sockets>
              </Block>
          => AI2:
          <block type="component_event" id="1" x="21" y="2">
            <mutation component_type="Button" instance_name="Button1" event_name="Click"></mutation>
            <field name="COMPONENT_SELECTOR">Button1</field>
            <statement name="DO">...block for #555...</statement>
          </block>
      */
      var label = getLabelText(block);
      var splitList = label.split("."); // E.g. "Button1.Click" => ["Button1", "Click"]
      var instanceName = splitList[0];
      var eventName = splitList[1];
      var componentType = componentTypeMap[instanceName];
      appendChildren(resultBlock, 
                     [createElement("mutation", 
                                    {"component_type": componentType, 
                                     "instance_name": instanceName,
                                     "event_name": eventName, 
                                    }, 
                                    []), 
                      createFieldElement("COMPONENT_SELECTOR", instanceName), 
                      ]);
      var doId = getSocketLabelId("do", block); 
      if (doId) {
        parentMap[doId] = id; // Mark that do statement has id as parent
        var doBlock = convertBlock(doId); 
        resultBlock.appendChild(createElement("statement", {"name": "DO"}, [doBlock])); 
      }
      /*
    } else if (specKind == "inlineBinop") {
      resultBlock.setAttribute("inline", "true");
      resultBlock.appendChild(createFieldElement(spec.opFieldName, spec.opFieldValue));
      argIds = getSocketIds(block); // should have two of them 
      assert(argIds.length == 2, 
             "convertBlock, inlineBinop: argIds.length (" + argIds.length + ") != 2");
      assert(spec.randNames.length == 2, 
             "convertBlock, inlineBinop: spec.randNames.length (" + spec.randNames.length + ") != 2");
      for (var i = 0; i < 2; i++) {
        var argId = argIds[i];
        if (argId) { // i.e,. socket isn't empty; 
          parentMap[argId] = id; // Mark that value has id as parent
          var argBlock = convertBlock(argId); 
          resultBlock.appendChild(createElement("value", {"name": spec.randNames[i]}, [argBlock]));
        }
      }
    } else if (specKind == "inlineBinopToMutator") { // e.g. AI1 string-append => AI2 join 
      resultBlock.setAttribute("inline", "true");
      resultBlock.appendChild(createElement("mutation", makeDict([spec.numItemsName, 2]), []));
      argIds = getSocketIds(block); // should have two of them 
      assert(argIds.length == 2, 
             "convertBlock, binopToMutator: argIds.length (" + argIds.length + ") != 2");
      for (var i = 0; i < 2; i++) {
        var argId = argIds[i];
        if (argId) { // i.e,. socket isn't empty; 
          parentMap[argId] = id; // Mark that value has id as parent
          var argBlock = convertBlock(argId); 
          resultBlock.appendChild(createElement("value", 
                                                {"name": spec.randName + i}, // e.g., "ADD0"
                                                [argBlock]));
        }
      }
      */
    } else if (specKind == "expOp") { // Value-returning expression with operands 
      if (spec.inline) { // Respect any inline specification given 
        resultBlock.setAttribute("inline", spec.inline);
      }
      var argIds = getSocketIds(block); // List of ids/nulls for arg blocks
      if (spec.extensibleInputs) { // Like make-text, make-a-list
        assert(argIds[argIds.length - 1] == null, 
               "convertBlock, expOp: last arg of extensibleInputs is non-null -- " + argIds[argIds.length - 1]); 
        argIds.pop(); // Last arg socket isn't real, so remove it
      } 
      var numArgs = argIds.length; // Number of arg sockets in input and output block 
      if (spec.numItemsName) { // If numItemsName is mentioned, put it in mutator with numArgs
        resultBlock.appendChild(createElement("mutation", makeDict([spec.numItemsName, numArgs]), []));
      }
      if (spec.opFieldName) { // If an operation field is specified, include it as a FIELD element 
        resultBlock.appendChild(createFieldElement(spec.opFieldName, spec.opFieldValue));
      } 
      var randNames = []; // Stub
      if (spec.randNames) {
        // Expect argument sockets to match up with converted block operand names 
        randNames = spec.randNames;
        assert(numArgs == randNames.length, 
               "convertBlock, expOp: numArgs (" + numArgs + ") != spec.randNames.length (" + randNames.length + ")");
      } else if (spec.randName) {
        randNames = range(0, numArgs).map(function (n) { return spec.randName + n; }); // E.g. ADD0, ADD1, ... 
      } else {
        throw new Error("convertBlock, expOp: spec declares neither randNames nor randName");
      }
      for (var i = 0; i < numArgs; i++) {
        var argId = argIds[i];
        if (argId) { // i.e,. socket isn't empty; 
          parentMap[argId] = id; // Mark that value has id as parent
          var argBlock = convertBlock(argId); 
          resultBlock.appendChild(createElement("value", {"name": randNames[i]}, [argBlock]));
        }
      }
    } else if (specKind == "unknown") {
      reportError("Don't know how to translate AI1 block genus " + genus);
      resultBlock = undefined;
    }
    if (specKind != "unknown") {
      outputIdMap[id] = resultBlock;
    }
    return resultBlock; 
  }

  for (var i = 0, id; id = blockIds[i]; i++) {
    convertBlock(id); // stores result in outputIdMap
  }
  // Top Level blocks are those without parents. 
  var topLevelBlockIds = blockIds.filter(function(blockId) {return (blockId in outputIdMap) && !(blockId in parentMap);});
  var xml = goog.dom.createDom('xml')
  for (var i = 0, topLevelId; topLevelId = topLevelBlockIds[i]; i++) {
    // For testing only, include all converted blocks
    var converted = outputIdMap[topLevelId];
    // Add location information for top-level blocks
    var unconverted = inputIdMap[topLevelId];
    var location = getLocation(unconverted);
    if (location.x && location.y) {
      converted.setAttribute("x", location.x);
      converted.setAttribute("y", location.y);
    }
    if (converted) {
      xml.appendChild(converted); // Careful! Appending an element that is already a child of another element will move it. 
    }
  } 
  return xml;
}

var AI1ConversionMap = 
{"number": {"kind": "leaf", "type": "math_number", "fieldName": "NUM"}, 
 "text": {"kind": "leaf", "type": "text", "fieldName": "TEXT"}, 
 "true": {"kind": "leaf", "type": "logic_boolean", "fieldName": "BOOL", "fieldValue": "TRUE"},
 "false": {"kind": "leaf", "type": "logic_boolean", "fieldName": "BOOL", "fieldValue": "FALSE"},
 "color-black": {"kind": "leaf", "type": "color_black", "fieldName": "COLOR", "fieldValue": "#000000"},
 "color-blue": {"kind": "leaf", "type": "color_blue", "fieldName": "COLOR", "fieldValue": "#0000ff"},
 "color-cyan": {"kind": "leaf", "type": "color_cyan", "fieldName": "COLOR", "fieldValue": "#00ffff"},
 "color-dark-gray": {"kind": "leaf", "type": "color_dark_gray", "fieldName": "COLOR", "fieldValue": "#444444"},
 "color-light-gray": {"kind": "leaf", "type": "color_light_grey", "fieldName": "COLOR", "fieldValue": "#cccccc"},
 "color-gray": {"kind": "leaf", "type": "color_grey", "fieldName": "COLOR", "fieldValue": "#888888"},
 "color-green": {"kind": "leaf", "type": "color_green", "fieldName": "COLOR", "fieldValue": "#00ff00"},
 "color-magenta": {"kind": "leaf", "type": "color_magenta", "fieldName": "COLOR", "fieldValue": "#ff00ff"},
 // "color-none": {"kind": "leaf", "type": "color_none", "fieldName": "COLOR", "fieldValue": "#ff00ff"},
 "color-orange": {"kind": "leaf", "type": "color_orange", "fieldName": "COLOR", "fieldValue": "#ffc800"},
 "color-pink": {"kind": "leaf", "type": "color_pink", "fieldName": "COLOR", "fieldValue": "#ffafaf"},
 "color-red": {"kind": "leaf", "type": "color_red", "fieldName": "COLOR", "fieldValue": "#ff0000"},
 "color-white": {"kind": "leaf", "type": "color_white", "fieldName": "COLOR", "fieldValue": "#ffffff"},
 "color-yellow": {"kind": "leaf", "type": "color_yellow", "fieldName": "COLOR", "fieldValue": "#ffff00"},
 "componentGetter": {"kind": "componentGetter", "type":"component_set_get"},
 "componentSetter": {"kind": "componentSetter", "type":"component_set_get"},
 "string-append": {"kind": "expOp", "type":"text_join", "inline": true, "numItemsName":"items", "randNames":["ADD0", "ADD1"]},
 "string-vappend": {"kind": "expOp", "type":"text_join", "extensibleInputs": true, "numItemsName":"items", "randName":"ADD"},
 "string-downcase": {"kind": "expOp", "type":"text_changeCase", "opFieldName":"OP", "opFieldValue": "DOWNCASE", "randNames": ["TEXT"]},
 "string-upcase": {"kind": "expOp", "type":"text_changeCase", "opFieldName":"OP", "opFieldValue": "UPCASE", "randNames": ["TEXT"]},
 "string-empty?": {"kind": "expOp", "type":"text_isEmpty", "randNames": ["VALUE"]},
 "string-equal": {"kind": "expOp", "type":"text_compare", "opFieldName":"OP", "opFieldValue": "EQUAL", 
                  "inline": true, "randNames": ["TEXT1", "TEXT2"]},
 "string-greater-than": {"kind": "expOp", "type":"text_compare", "opFieldName":"OP", "opFieldValue": "GT", 
                         "inline": true, "randNames": ["TEXT1", "TEXT2"]},
 "string-less-than": {"kind": "expOp", "type":"text_compare", "opFieldName":"OP", "opFieldValue": "LT", 
                      "inline": true, "randNames": ["TEXT1", "TEXT2"]},
 "string-length": {"kind": "expOp", "type":"text_length", "randNames": ["VALUE"]},
 "string-starts-at": {"kind": "expOp", "type":"text_starts_at", "randNames": ["TEXT", "PIECE"]},
 "string-trim": {"kind": "expOp", "type":"text_trim", "randNames": ["TEXT"]},
 "yail-equal": {"kind": "expOp", "type":"logic_compare", "opFieldName":"OP", "opFieldValue": "EQ", 
                "inline": true,"randNames": ["A", "B"]},
 "Button-Click": {"kind": "componentEvent", "type":"component_event"}, // simple for now
};

var defaultConversionSpec = {"kind": "unknown"};

function getConversionSpec (genus) {
  var spec = AI1ConversionMap[genus];
  if (spec) {
    return spec;
  } else {
    return defaultConversionSpec;
  }
}

// Abstraction for creating DOM element using JavaScript dictionaries = objects for attributes
// and lists for children.
function createElement (tag, attributeDict, children) {
  var elt = goog.dom.createDom(tag);
  for (var attributeName in attributeDict) {
    elt.setAttribute(attributeName, attributeDict[attributeName]);
  }
  appendChildren(elt, children);
  return elt;
}

function appendChildren(block, children) {
  for (var i = 0, child; child = children[i]; i++) {
    block.appendChild(child); 
  }
}

function createFieldElement (name, text) {
  var field = goog.dom.createDom('field');
  field.setAttribute("name", name);
  field.appendChild(goog.dom.createTextNode(text));
  return field;
}

// Return the Id of block connected via socket with given label. 
// Returns undefined if this socket is empty or there is no such socket. 
/*
function getSocketLabelId (label, block) {
  var connectors = block.getElementsByTagName("BlockConnector"); 
  for (var i = 0, connector; connector = connectors[i]; i++) {
    if (connector.getAttribute("label") == label) {
      var conId = connector.getAttribute("con-block-id");
      return conId; // may be undefined? 
    }
  }
  throw "getSocketLabelId: no socket with label " + label; 
}
*/

// Return the Id of block connected via socket with given label. 
// Returns null if this socket is empty or there is no such socket. 
function getSocketLabelId (label, block) {
  var connectors = getSocketBlockConnectors(block);
  for (var i = 0, connector; connector = connectors[i]; i++) {
    if (connector.getAttribute("label") == label) {
      var conId = connector.getAttribute("con-block-id");
      return conId; // will be null if no con-block-id attribute
    }
  }
  throw new Error("getSocketLabelId: no socket with label " + label); 
}

// Return an ordered list the Ids of all socket block connectors. 
// Uses undefined in place of an Id for an empty socket
function getSocketIds (block) {
  var connectors = getSocketBlockConnectors(block);
  // connectors is an HTMLCollection, and not a list, so can't use map. :-(
  // return connectors.map(function (connector) { return connector.getAttribute("con-block-id"); });
  ids = []; 
  for (var i = 0, connector; connector = connectors[i]; i++) {
    ids.push(connector.getAttribute("con-block-id"));
  }  
  return ids; 
}

function getSocketBlockConnectors (block) {
  var socketLists = block.getElementsByTagName("Sockets");
  if (socketLists.length == 0) {
    return [];
  } else if (socketLists.length == 1) { // This is the expected case
    var socketsElt = socketLists[0];
    var declaredNumSockets = parseInt(socketsElt.getAttribute("num-sockets"));
    var connectors = socketsElt.getElementsByTagName("BlockConnector"); 
    if (connectors.length != declaredNumSockets) {
      throw new Error("getSocketBlockConnectors: declared number of sockets " + declaredNumSockets 
                      + " does not match actual number of sockets " + connectors.length);
    } else {
      return connectors;
    }
  } else {
    throw new Error("getSocketBlockConnectors: more than one element tagged Sockets: " + sockets.length);
  }
}

function getNextId (block) {
  var nextElt = getChildByTagName("AfterBlockId", block);
  if (nextElt) {
    var textNode = nextElt.firstChild;
    if (textNode.nodeName == "#text") {
      return textNode.nodeValue;
    } else {
      throw new Error("getNextId did not have text child");
    }
  } else {
    return undefined; // default if no next element. 
  }
}

function getChildByTagName (tag, block) {
  var elts = block.getElementsByTagName(tag);
  if (elts.length == 0) {
    return undefined; 
  } else { // return the first
    return elts[0];
  }
}

function getLocation (block) {
  var result = {"x": undefined, "y": undefined}; 
  var locationElt = getChildByTagName("Location", block);
  if (location) {
    result.x = getElementText(getChildByTagName("X", locationElt));
    result.y = getElementText(getChildByTagName("Y", locationElt));
  }
  return result;
}

function getLabelText (block) {
  return getElementText(getChildByTagName("Label", block));
}

function getElementText (elt) {
  var textNode = elt.firstChild;
  if (textNode.nodeName == "#text") {
    return textNode.nodeValue;
  } else {
    throw new Error("getElementText did not have text child");
  }
}

// Return the block from a block or block stub
function getBlock(blockOrStub) {
  var tag = blockOrStub.tagName;
  if (tag == "Block") {
    return blockOrStub;
  } else if (tag == "BlockStub") {
    return blockStubBlock(blockOrStub);
  } else {
    throw new Error("getBlock encountered element with unexpected tag " + tag); 
  }
}

function blockStubBlock(stub) {
  var children = stub.children;
  for (var i = 0, child; child = children[i]; i++) {
    if (child.tagName == "Block") {
      return child;
    }
  }
  throw new Error("blocksStubBlock did not find child with tag Block");
}

function getFirstElementChild(tag, dom) {
  if (dom && dom.firstElementChild && dom.firstElementChild.nodeName) {
    var lowerName = dom.firstElementChild.nodeName.toLowerCase(); 
    var lowerTag = tag.toLowerCase(); 
    if (lowerName == lowerTag) {
      return dom.firstElementChild;
    } else {
      throw new Error('getFirstAndOnlyChild looking for tag ' + lowerTag + ' but found tag ' + lowerName);
    }
  } else {
    throw new Error('getFirstAndOnlyChild: something wrong with dom.');
  }
}

// Adapted from http://forums.asp.net/t/1151879.aspx?HttpUtility+HtmlEncode+in+javaScript+
function escapeHTML (str) {
  var div = document.createElement('div');
  var text = document.createTextNode(str);
  div.appendChild(text);
  withTagsEscaped = div.innerHTML;
  withNewlinesEscaped = withTagsEscaped.replace(/\n\s*\n/g, '<br>').replace(/\n/g, '<br>')
  withSpacesEscaped = withNewlinesEscaped.replace(/ /g, '&nbsp;');
  return withSpacesEscaped;
}

// From Blockly core xml.js
/**
 * Converts a DOM structure into properly indented text.
 * @param {!Element} dom A tree of XML elements.
 * @return {string} Text representation.
 */
domToPrettyText = function(dom) {
  // This function is not guaranteed to be correct for all XML.
  // But it handles the XML that Blockly generates.
  var blob = domToText(dom);
  // Place every open and close tag on its own line.
  var lines = blob.split('<');
  // Indent every line.
  var indent = '';
  for (var x = 1; x < lines.length; x++) {
    // var line = lines[x]; 
    var line = lines[x].trim(); // *** Lyn sez: need to trim here, else terminal newline screws up check for '/>' 
                                // and adds extra blank line between lines
    if (line[0] == '/') {
      indent = indent.substring(2);
    }
    lines[x] = indent + '<' + line;
    if (line[0] != '/' && line.slice(-2) != '/>') { // *** Lyn note: no change in indentation for line ending in '/>'
      indent += '  ';
    }
  }
  // Pull simple tags back together.
  // E.g. <foo></foo>
  var text = lines.join('\n');
  text = text.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, '$1</$2>');
  // Trim leading blank line.
  return text.replace(/^\n/, '');
};

/**
 * Converts a DOM structure into plain text.
 * Currently the text format is fairly ugly: all one line with no whitespace.
 * @param {!Element} dom A tree of XML elements.
 * @return {string} Text representation.
 */
domToText = function(dom) {
  var oSerializer = new XMLSerializer();
  return oSerializer.serializeToString(dom);
};

/*
// Replace this by reportError from ai1ConvertZip.js
function appdendError (msg) {
  document.getElementById('errors').innerHTML = 
    document.getElementById('errors').innerHTML + "<br>" + msg;
}
*/

function clearErrors () {
  document.getElementById('errors').innerHTML = "";
}

function prettifyXMLText (xmlText) {
  var oParser = new DOMParser();
  var dom = oParser.parseFromString(xmlText, 'text/xml');
  var pretty = domToPrettyText(dom);
  return pretty;
}

function makeDict(alternatingKeyValueList) {
  var dict = {};
  for (var i = 0; i < alternatingKeyValueList.length; i+=2) {
    var key = alternatingKeyValueList[i];
    var value = alternatingKeyValueList[i+1];
    dict[key] = value;
  }
  return dict;
}

// As in Python, return list of numbers from lo (inclusive) to hi (exclusive)
function range(lo, hi) {
  var nums = [];
  for (var n = lo; n < hi; n++) {
    nums.push(n);
  }
  return nums; 
}

// From http://stackoverflow.com/questions/15313418/javascript-assert
function assert(condition, message) {
  if (!condition) {
    message = message || "Assertion failed";
    if (typeof Error !== "undefined") {
      throw new Error(message);
    }
    throw message; // Fallback
  }
}