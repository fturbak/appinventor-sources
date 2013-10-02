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
 *    + checkout AI1 v134a to explore component database. 
 *      - initially think simple_components.js contains database, but this is really from AI2
 *        and is still in repository since I didn't do ant clean! 
 *      - learn on Jun 09 that the *real* database is in components/build/classes/XmlComponentDescription/ya_lang_def.xml
 *    + compare canvas-with-ball programs in AI1 and AI2 in preparation for conversion. 
 * 
 *  [lyn, 2015 Jun 09]: more work on da big push: 
 *    + Although AI1 v134a has a simple_component.json file, it only has component properties, 
 *      and not events or methods. Event/methods are in components/build/classes/XmlComponentDescription/ya_lang_def.xml
 *      - Copy this file to AI1_v134a_ya_lang_def.xml
 *      - it's too painful to read and process XML file in JavaScript, so ...
 *      - create python file XMLLangDefToJsonComponentSpecs.py that processes xml lang def in AI1_v134a_ya_lang_def.xml
 *          to produce json component spec AI1_v134a_component_specs defined in AI1_v134a_component_specs.js.
 *          This json summarizes key aspects of events and methods. 
 *      - Below, the function addComponentEntriesToAI1ConversionMap processes these specs and adds them to AI1ConversionMap
 *    + Handle component event and (nongeneric) methods, which takes a long time because of component spec issues above. 
 *      Also, handling associating AI1 argument declaration names with correct event handler/procedure parameter names
 *      is tricky, and requires sorting blocks by declaraion status. 
 *    + Handle event parameters and local variable declarations ("name" blocks of genus "argument")
 *        and local variable getters ("value" blocks of genus "getter"). One tricky aspect is handling
 *        orphaned getter blocks -- getter where associated where "name" block isn't plugged in or is in different scope.
 *        Handle these by creating getters beginning with name "*orphanedArg".
 * 
 *  [lyn, 2015 Jun 09]: yet more work on da big push: 
 *    + Fix bug in handling of orphaned arguments
 *    + Convert global declarations, global getters, global setters
 *    + Convert all math ops
 *    + Disaster: fast 13" macbook becomes unusable, must move to older, slower 15" macbook.
 *    + Convert ifelse (in straightforward way, maybe can be fancier later)
 *    + Simplify passing of maps between conversion functions by bundling in a single maps variable.
 *    + Convert procedure declarations, which isn't hard, and much code can be shared. 

 * TODO: 
 *   + Procedures and variables
 *   + Other Control blocks
 *   + Finish all simple expression and statement blocks
 *   + Generic components, methods, and properties 
 *   + Comments
 *   + Collapsed blocks
 *   + Disabled blocks
 *   + Problematic blocks:
 *     - none color block 
 *     - distinguishing math and numeric equality
 *   + Adding evidence of conversion in XML somewhere 
 *   + param names that change in AI2
 *   + Version upgrading issues
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

var maxIdSoFar = 0; // Keep track of largest Id seen, for generating new ones. 

// Given a list of AI1 blocks and block stubs, return a map of all AI1 block Ids to blocks 
function blockIdMap(blocksAndStubs) {
  var IdMap = {};
  for (var i = 0, blockOrStub; blockOrStub = blocksAndStubs[i]; i++) {
    var block = getBlock(blockOrStub); 
    var id = block.attributes.getNamedItem("id").value;
    maxIdSoFar = Math.max(maxIdSoFar, id); 
    IdMap[id] = blockOrStub; // When stub, put stub here!
  }
  return IdMap;
}

// Return next unused id. We only call this after blockIdMap is created, which simplifies implementation.
function nextId() {
  maxIdSoFar++;
  return maxIdSoFar;
}

// Returns a list of blocks and stubs ordered by the genus of the underlying block. 
// Declaration blocks (event handlers, procedures definitions, global variable declarations)
// come before non-declaration blocks
function sortedBlocks(idMap) {
  var keys = Object.keys(idMap); 
  var blocks = [];
  for (var i = 0; i < keys.length; i++) {
    blocks.push(getBlock(idMap[keys[i]]));
  }
  blocks.sort(blockComparator); 
  return blocks; 
}

// Comparator for ordering block. All declaration blocks (global variables, 
// event handlers, procedures) should come before  non-declaration blocks (everything else). 
// This guarantees that variable declarations will be processed before their uses. 
function blockComparator(blk1, blk2) { // blk1 and blk2 are blocks, not stubs
  var id1 = blk1.getAttribute("id");
  var id2 = blk2.getAttribute("id");
  if (isDeclaration(blk1)) {
    if (isDeclaration(blk2)) {
      return id1 - id2; // arbitrarily sort declarations by id
    } else {
      return -1; // declarations precede non-declarations;
    }
  } else { // blk1 not a declaration
    if (isDeclaration(blk2)) {
      return 1;  // declarations precede non-declarations;
    } else {
      return id1 - id2; // arbitrarily sort non-declarations by id
    }
  }
}

function isDeclaration(block) { // block, not a stub
  var genus = block.getAttribute("genus-name");
  var spec = AI1ConversionMap[genus];
  if (spec) {
    return spec.kind == "declaration"; // i.e., true for component events, procedure declarations, global variable declarations
  } else {
    return false;
  }
}

// inputIdMap associates AI1 block ids with the AI1 block
// outputIdMap associates AI1 block ids with the converted AI2 block
function convertBlocks(inputIdMap, componentTypeMap) {
  var sorted = sortedBlocks(inputIdMap); 
  var sortedBlockIds = sorted.map(function (block) { return block.getAttribute("id"); });
  var outputIdMap = {}; // Map id of AI1 input block to AI2 output block, effectively memoizing conversion
  var parentMap = {}; // Map id of AI input block to parent id of AI1 input block. Used to determine top level AI input blocks
                      // = top level AI2 output blocks
  var variableMap = {}; // Map variable "name" block (genus "argument") to the event-handler or procedure declaration name it should be. 
  var maps = {"inputIdMap": inputIdMap, "outputIdMap": outputIdMap, "componentTypeMap": componentTypeMap, 
	      "parentMap": parentMap, "variableMap": variableMap};

  for (var i = 0, id; id = sortedBlockIds[i]; i++) {
    convertBlock(id, maps);
  }
  // Top Level blocks are those without parents. 
  var topLevelBlockIds = sortedBlockIds.filter(function(blockId) {return (blockId in outputIdMap) && !(blockId in parentMap);});
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

function convertBlock(id, maps) {
  var block = getBlock(maps.inputIdMap[id]);
  var genus = block.getAttribute("genus-name");
  if (genus == "argument") {
    // AI1 "argument" blocks, i.e., variable declaration name blocks, do not translate to an AI2 block. 
    // However, for variable translations, need to know the label on this block, so return 
    // the label as a string rather than any result block. We do *not* store Id for these
    // blocks in the outputIdMap. 
    var connectors = block.getElementsByTagName("BlockConnector");
    if (connectors.length == 1 && connectors[0].getAttribute("connector-kind") == "plug") {
      var argName = getLabelText(block); // name on the block 
      if (connectors[0].getAttribute("con-block-id")) {
	return argName; // return label since it will be associated with parent param name
      } else { // It's an orphaned top-level block, and need to associate it with *some* variable name!
	var convertedName = maps.variableMap[argName];
	if (! convertedName) { // No getter for argName has been looked up yet
	  maps.variableMap[argName] = nameNotInValues(maps.variableMap);
	} // Otherwise argName has already been converted to orphan arg name by looking up associated getter elsewhere
	return argName; // Still need to return (the value is arbitrary) to avoid other processing.
      }
    } else {
      throw new Error("convertBlock on argument: unexpected connector info");
    }
  }
  var spec = AI1ConversionMap[genus];
  if (! spec) {
    resultBlock = undefined;
    reportError("Don't know how to translate AI1 block genus " + genus);
  } else {
    var resultBlock = goog.dom.createDom('block');
    resultBlock.setAttribute("id", id);
    resultBlock.setAttribute("type", spec.type);
    spec.convert(id, block, spec, resultBlock, maps); // Apply conversion function specific to spec.
    maps.outputIdMap[id] = resultBlock; // Note that if genus == "argument", we return above, 
    // and so also do not include such blocks in the outputIdMap.
  }
  return resultBlock; 
}

function convertVariableGetter(id, block, spec, resultBlock, maps) {
  /* Example:
    A1:
    <BlockStub><StubParentName>y</StubParentName><StubParentGenus>argument</StubParentGenus><Block id="819" genus-name="getter" >
      <Location><X>274</X><Y>1109</Y></Location>
      <Label>y</Label>
      <Plug>
        <BlockConnector connector-kind="plug" connector-type="poly" init-type="poly" label="" position-type="single" con-block-id="811" ></BlockConnector>
      </Plug>
      </Block>
    </BlockStub>
    => AI2:
      <block type="lexical_variable_get" id="37">
        <mutation>
          <eventparam name="y"></eventparam>
        </mutation>
        <field name="VAR">y</field> // In general this name might be different than label getter due to weird 
                                    // way AI1 handles naming via "name" and "value" naming blocks. 
                                    // But converter does the right thing to fill in this field appropriately
      </block> 
  */

  var argName = getLabelText(block);
  var varName = maps.variableMap[argName];
  if (! varName) { // The associated "name" block (genus "argument") is an orphan, or declared in some other scope. 
    var varName = nameNotInValues(maps.variableMap); // create new orphaned argument name ...
    maps.variableMap[argName] = varName; // and remember it
  }
  appendChildren(resultBlock, 
                 [// AI2 loading will add this, so we don't need to add it here. 
                  // createElement("mutation", {}, 
                  //               [createElement("eventparam", {"name": varName}, [])]), 
                  createFieldElement("VAR", varName), 
                  ]);  
}

function convertLeaf(id, block, spec, resultBlock, maps) {
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
  var fieldValue = spec.fieldValue ? spec.fieldValue : getLabelText(block); 
  // Special case for processing text value string (to handle newlines properly)
  // I.e., need to replace three characters \\n by two characters \n:
  if (spec.type == "text") {
    fieldValue = fieldValue.replace(/\\\\n/g, '\\n');
  }
  resultBlock.appendChild(createFieldElement(spec.fieldName, fieldValue));
}

function convertComponentSetter(id, block, spec, resultBlock, maps) {
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
  var componentType = maps.componentTypeMap[instanceName];
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
  convertChildWithLabel("to", "VALUE", id, block, resultBlock, maps);
  convertNextStatement(id, block, resultBlock, maps);
} 

function convertComponentGetter(id, block, spec, resultBlock, maps) {
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
  var componentType = maps.componentTypeMap[instanceName];
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
}

function convertComponentEvent(id, block, spec, resultBlock, maps) {
      /* AI: <Block id="545" genus-name="Button-Click" > ... <Label>Button1.Click</Label> ... 
               <Sockets num-sockets="1" >
                 <BlockConnector connector-kind="socket" connector-type="cmd" init-type="cmd" label="do" is-indented="yes" 
                  position-type="single" con-block-id="555" ></BlockConnector>
               </Sockets>
              </Block>
          => AI2:
          <block type="component_event">
            <mutation component_type="Button" instance_name="Button1" event_name="Click"></mutation>
            <field name="COMPONENT_SELECTOR">Button1</field>
            <statement name="DO">...block for #555...</statement>
          </block>
      */
  var label = getLabelText(block);
  var splitList = label.split("."); // E.g. "Button1.Click" => ["Button1", "Click"]
  var instanceName = splitList[0];
  var eventName = splitList[1]; // Same as spec["eventName"]
  var componentType = maps.componentTypeMap[instanceName]; // Same as spec["componentName"]
  appendChildren(resultBlock, 
                 [createElement("mutation", 
                                {"component_type": componentType, 
                                 "instance_name": instanceName,
                                 "event_name": eventName, 
                                }, 
                                []), 
                  createFieldElement("COMPONENT_SELECTOR", instanceName), 
                  ]);

  // process argument name declarations of event handler
  var socketLabels = getExpressionSocketLabels(block);
  var socketIds = getExpressionSocketIds(block);
  var paramNames = spec["paramNames"];
  assert(sameNames(socketLabels, paramNames), 
         "socketLabels is " + namesToString(socketLabels) + "but paramNames is " + namesToString(paramNames));
  for (var index = 0; index < paramNames.length; index++) {
    var socketId = socketIds[index];
    if (socketId) {
      var argNameLabel = convertBlock(socketId, maps);
      if (! typeof(argNameLabel) == "string") {
        throw new Error("convertComponentEvent: unexpected argNameLabel " + argNameLabel);
      } else {
        maps.variableMap[argNameLabel] = paramNames[index]; // Remember that arg name should be mapped back to param name
                                                       // *** This assumes param name is the same in AI2, which may not be true ***
      }
    }
  }

  // process body of event handler
  convertChildWithLabel("do", "DO", id, block, resultBlock, maps);
}

function convertComponentMethod(id, block, spec, resultBlock, maps) {
  /* AI: 
   <Block id="855" genus-name="Canvas-DrawCircle" >
     <Location><X>109</X><Y>1427</Y></Location>
     <Label>Canvas1.DrawCircle</Label>
     <BeforeBlockId>851</BeforeBlockId>
     <AfterBlockId>841</AfterBlockId>
     <Sockets num-sockets="3" >
       <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="x" position-type="single" con-block-id="863" ></BlockConnector>
       <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="y" position-type="single" con-block-id="865" ></BlockConnector>
       <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="r" position-type="single" con-block-id="861" ></BlockConnector>
    </Sockets>
  </Block>
  => AI2: 
      <block type="component_method" id="170" inline="false">
        <mutation component_type="Canvas" method_name="DrawCircle" is_generic="false" instance_name="Canvas1"></mutation>
        <field name="COMPONENT_SELECTOR">Canvas1</field>
        <value name="ARG0">...conversion of block 863...</value>
        <value name="ARG1">...conversion of block 865...</value>
        <value name="ARG21">...conversion of block 861...</value>
        <next>...code for block 841...</next>
      </block> */
  var label = getLabelText(block);
  var splitList = label.split("."); // E.g. "Canvas1.DrawCircle" => ["Canvas1", "DrawCircle"]
  var instanceName = splitList[0];
  var eventName = splitList[1]; // Same as spec["methodName"]
  var componentType = maps.componentTypeMap[instanceName]; // Same as spec["componentName"]
  appendChildren(resultBlock, 
                 [createElement("mutation", 
                                {"component_type": componentType, 
                                 "instance_name": instanceName,
                                 "method_name": eventName, 
                                 "is_generic": false
                                }, 
                                []), 
                  createFieldElement("COMPONENT_SELECTOR", instanceName), 
                  ]);
  var argIds = getExpressionSocketIds(block); // List of ids/nulls for arg blocks
  var numArgs = argIds.length; // Number of arg sockets in input and output block 

  for (var i = 0; i < numArgs; i++) {
    convertChildWithId(argIds[i], "ARG" + i, id, block, resultBlock, maps); 
  }
  if (spec.kind == "statement") {
    convertNextStatement(id, block, resultBlock, maps);
  }
}

function convertGlobalDeclaration(id, block, spec, resultBlock, maps) {
  // This conversion is special only because of field name NAME. Otherwise it would be an operator. 
  /* AI:
   <Block id="811" genus-name="def" >...     
    <Location><X>292</X><Y>58</Y></Location>
    <Label>clicks</Label>
    <Sockets num-sockets="1" >
      <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="as" position-type="single" con-block-id="823" ></BlockConnector>
    </Sockets>
  </Block>
  => AI2: 
    <block type="global_declaration" id="811" inline="false" x="292" y="58">
      <field name="NAME">clicks</field>
     <value name="VALUE">...conversion of block 823...</value>
   </block> 
  */
  var globalName = getLabelText(block);
  resultBlock.appendChild(createFieldElement("NAME", globalName));
  convertChildWithLabel("as", "VALUE", id, block, resultBlock, maps);
}

function convertGlobalGetter(id, block, spec, resultBlock, maps) {
  /* AI:
     <BlockStub><StubParentName>clicks</StubParentName><StubParentGenus>def</StubParentGenus>
       <Block id="849" genus-name="getterGlobal" >...
         <Label>clicks</Label>
         <Plug>
           <BlockConnector connector-kind="plug" connector-type="poly" init-type="poly" label="" position-type="single" con-block-id="845" ></BlockConne
ctor>
         </Plug>
       </Block>
     </BlockStub>
  => AI2: 
     <block type="lexical_variable_get" id="849">
       <field name="VAR">global clicks</field>
     </block>
  */
  var globalName = "global " + getLabelText(block);
  resultBlock.appendChild(createFieldElement("VAR", globalName));
}

function convertGlobalSetter(id, block, spec, resultBlock, maps) {
  // This conversion is special only because of field name VAR. Otherwise it would be an operator. 
  /* AI:
    <BlockStub><StubParentName>clicks</StubParentName><StubParentGenus>def</StubParentGenus>
      <Block id="829" genus-name="setterGlobal" >...
        <Label>clicks</Label>
        <BeforeBlockId>825</BeforeBlockId>
        <AfterBlockId>786</AfterBlockId>
        <Sockets num-sockets="1" >
          <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="to" position-type="single" con-block-id="833" ></BlockConnector>
        </Sockets>
      </Block>
    </BlockStub>
  => AI2: 
      <block type="lexical_variable_set" id="101" inline="false">
        <field name="VAR">global count</field>
        <value name="VALUE">...conversion of block 833...</value>
        <next>...conversion of block 786...</next>
      <block>
  */
  var globalName = "global " + getLabelText(block);
  resultBlock.appendChild(createFieldElement("VAR", globalName));
  convertChildWithLabel("to", "VALUE", id, block, resultBlock, maps);
  convertNextStatement(id, block, resultBlock, maps);
}

function convertExpressionOperator(id, block, spec, resultBlock, maps) {
  /* AI1:
    <Block id="685" genus-name="string-equal" >
      <Location><X>537</X><Y>1101</Y></Location>
      <Label>text=</Label>
      <Plug>
        <BlockConnector connector-kind="plug" connector-type="poly" init-type="poly" label="" position-type="single" con-block-id="693" ></BlockConnector><
     /Plug>
     <Sockets num-sockets="2" >
      <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="text1" position-type="single" con-block-id="687" ></BlockConnector>
      <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="text2" position-type="single" con-block-id="689" ></BlockConnector>
    </Sockets>
  </Block>
  => AI2: 
          <block id="537" type="text_compare" inline="true">
            <field name="OP">EQUAL</field>
            <value name="TEXT1">...conversion of 687...</value>
            <value name="TEXT2">...conversion of 689...</value>
          </block>
   Note: There are lots of special cases involving things like inlining, AI1 extensible args, etc. 
  */

  /* Can't just use if (spec.inline) because ignored if result is false! */
  if (Object.keys(spec).indexOf("inline") != -1) { // Respect any inline specification given 
    resultBlock.setAttribute("inline", spec.inline);
  }
  
  var argIds = getExpressionSocketIds(block); // List of ids/nulls for arg blocks
  if (spec.extensibleInputs) { // Like make-text, make-a-list
    assert(argIds[argIds.length - 1] == null, 
           "convertExpresionOperator: last arg of extensibleInputs is non-null -- " + argIds[argIds.length - 1]); 
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
           "convertExpresionOperator: numArgs (" + numArgs + ") != spec.randNames.length (" + randNames.length + ")");
  } else if (spec.randName) {
    randNames = range(0, numArgs).map(function (n) { return spec.randName + n; }); // E.g. ADD0, ADD1, ... 
  } else {
    throw new Error("convertExpresionOperator: spec declares neither randNames nor randName");
  }
  for (var i = 0; i < numArgs; i++) {
    convertChildWithId(argIds[i], randNames[i], id, block, resultBlock, maps);
  }
}

function convertIfElse(id, block, spec, resultBlock, maps) {
  /* Simple conversion
     AI1: 
     <Block id="691" genus-name="ifelse" >
       <Location><X>202</X><Y>876</Y></Location>
       <Label>ifelse</Label>
       <BeforeBlockId>548</BeforeBlockId>
       <AfterBlockId>572</BeforeBlockId>
       <Sockets num-sockets="3" >
         <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="test" position-type="single" con-block-id="693" ><BlockConnector>
         <BlockConnector connector-kind="socket" connector-type="cmd" init-type="cmd" label="then-do" is-indented="yes" position-type="single" con-block-id="699" ></BlockConnector>
         <BlockConnector connector-kind="socket" connector-type="cmd" init-type="cmd" label="else-do" is-indented="yes" position-type="single" con-block-id="739" ></BlockConnector>
       </Sockets>
     </Block>
     => AI2:
       <block type="controls_if" id="19" inline="false" x="123" y="54">
         <mutation elseif="0" else="1"></mutation>
         <value name="IF0">...conversion of block 593</value>
         <statement name="DO0">...conversion of block 699</value>
         <statement name="ELSE">...conversion of block 7399</value>
         <next>...conversion of block 572...</next>
       </block>
  */
  resultBlock.appendChild(createElement("mutation", {"elseif": "0", "else":"1"}, []));
  convertChildWithLabel("test", "IF0", id, block, resultBlock, maps);
  convertChildWithLabel("then-do", "DO0", id, block, resultBlock, maps);
  convertChildWithLabel("else-do", "ELSE", id, block, resultBlock, maps);
  convertNextStatement(id, block, resultBlock, maps);
}

function convertVoidProcedureDeclaration(id, block, spec, resultBlock, maps) {
  /* AI1: 
     <Block id="1395" genus-name="define-void" >
       <Location><X>511</X><Y>28</Y></Location>
       <Label>changeOuptutBy</Label>
       <Sockets num-sockets="3" >
         <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="arg" is-expandable="yes" position-type="single" con-block-id="1401" ></BlockConnector>
         <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="arg" is-expandable="yes" position-type="single" ></BlockConnector>
         <BlockConnector connector-kind="socket" connector-type="cmd" init-type="cmd" label="do" is-indented="yes" position-type="single" con-block-id="1459" ></BlockConnector>
       </Sockets>
     </Block>
     => AI2: 
     <block type="procedures_defnoreturn" id="1395" x="40" y="29">
       <mutation>
         <arg name="amount"></arg> // List of args goes here
       </mutation>
       <field name="NAME">changeOutputBy</field>
       <field name="VAR0">amount</field> // List of args also goes here
       <statement name="STACK">...conversion of block 1459</statement>
     </block>
  */
  processProcedureNameAndParams(id, block, spec, resultBlock, maps); 
  convertChildWithLabel("do", "STACK", id, block, resultBlock, maps);  
}

function convertFruitfulProcedureDeclaration(id, block, spec, resultBlock, maps) {
  /* Example1: (no statement before return expression)
     AI1: 
      <Block id="1481" genus-name="define" >
        <Location><X>94</X><Y>553</Y></Location>
        <Label>sumOfSquares</Label>
        <Sockets num-sockets="5" >
          <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="arg" is-expandable="yes" position-type="single" con-block-id="1491" ></BlockConnector>
          <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="arg" is-expandable="yes" position-type="single" con-block-id="1495" ></BlockConnector>
          <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="arg" is-expandable="yes" position-type="single" ></BlockConnector>
          <BlockConnector connector-kind="socket" connector-type="cmd" init-type="cmd" label="do" is-indented="yes" position-type="single" ></BlockConnector>
          <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="return" position-type="single" con-block-id="1499"></BlockConnector>
        </Sockets>
      </Block>
     => AI2: 
       <block type="procedures_defreturn" id="192" inline="false" x="49" y="312">
         <mutation>
           <arg name="x"></arg>
           <arg name="y"></arg>
         </mutation>
         <field name="NAME">sumOfSquares</field>
         <field name="VAR0">x</field>
         <field name="VAR1">y</field>
         <value name="RETURN">...conversion of block 1499</value>
       </block>

   Example2 (has a statement before return expression)
     AI1: 
      <Block id="1481" genus-name="define" >
        <Location><X>94</X><Y>553</Y></Location>
        <Label>sumOfSquares</Label>
        <Sockets num-sockets="5" >
          <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="arg" is-expandable="yes" position-type="single" con-block-id="1491" ></BlockConnector>
          <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="arg" is-expandable="yes" position-type="single" con-block-id="1495" ></BlockConnector>
          <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="arg" is-expandable="yes" position-type="single" con-block-id="1497" ></BlockConnector>
          <BlockConnector connector-kind="socket" connector-type="cmd" init-type="cmd" label="do" is-indented="yes" position-type="single"  ></BlockConnector>
          <BlockConnector connector-kind="socket" connector-type="poly" init-type="poly" label="return" position-type="single" con-block-id="1499"></BlockConnector>
        </Sockets>
      </Block>
     => AI2: 
       <block type="procedures_defreturn" id="192" inline="false" x="49" y="312">
         <mutation>
           <arg name="x"></arg>
           <arg name="y"></arg>
         </mutation>
         <field name="NAME">sumOfSquares</field>
         <field name="VAR0">x</field>
         <field name="VAR1">y</field>
         <value name="RETURN">
           <block type="controls_do_then_return" id="262" inline="false">
             <statement name="STM">...conversion of block 1497</statement>
             <value name="VALUE">...conversion of block 1499</statement>
           </block>
         </value>
       </block>
  */
  var result = processProcedureNameAndParams(id, block, spec, resultBlock, maps); 
  convertStmAndExpChildrenWithLabel("do", "return", "RETURN", id, block, resultBlock, maps);  
}

// Determine procedure name and param names, and add corresponding children to result block.
// Used by both fruitful and void procedures. 
function processProcedureNameAndParams(id, block, spec, resultBlock, maps) {
  var procName = getLabelText(block); 
  var paramDeclIds = getExpressionSocketIds(block); 
  paramDeclIds.pop(); // Remove last argDecl (the extensible one)
  var paramNames = [] 
  for (var i = 0; i < paramDeclIds.length; i++) {
    var paramDeclId = paramDeclIds[i]; 
    if (paramDeclId) {
      var paramName = convertBlock(paramDeclId, maps);
      if (! typeof(paramDeclName) == "string") {
        throw new Error("convertVoidProcedureDeclaration: unexpected paramDeclName " + paramDeclName);
      } else { 
	paramNames.push(paramName); 
        maps.variableMap[paramName] = paramName; // Remember that arg name should map to itself.  
      }
    } else { // No param declared, must make one up
      paramNames.push("unnamedArg" + i);  
    }
  }
  resultBlock.appendChild(createElement("mutation", {}, 
					paramNames.map(function (paramName) {
					    createElement("arg", {name: paramName}, []); })));
  resultBlock.appendChild(createFieldElement("NAME", procName)); 
  appendChildren(resultBlock, 
		 paramNames.map(function (paramName, index) {
		     createFieldElement("VAR" + index, paramName); }));
}

function convertChildWithLabel(childLabel, convertedChildName, parentId, parentBlock, resultBlock, maps) {
  var childId = getSocketLabelId(childLabel, parentBlock); 
  convertChildWithId(childId, convertedChildName, parentId, parentBlock, resultBlock, maps);
}

function convertChildWithId(childId, convertedChildName, parentId, parentBlock, resultBlock, maps) {
    if (childId) {
	var outputTag = getSocketOutputTagForId(childId, parentBlock); // Returns "value" for expressions, "statement" for statements, undefined otherwise
	if (!outputTag) {
	    throw new Error("convertChildWithId: no output tag for childId " + childId); 
	} else {
	    maps.parentMap[childId] = parentId; // Mark that child has id as parent
	    var childBlock = convertBlock(childId, maps);
	    resultBlock.appendChild(createElement(outputTag, {name: convertedChildName}, [childBlock]));
	}
    }
}

// Converts a nexts statement, if there is one; if not (e.g., at last statement or in an expression), does nothing
function convertNextStatement(parentId, parentBlock, resultBlock, maps) {
  var nextId = getNextId(parentBlock); 
  if (nextId) {
    maps.parentMap[nextId] = nextId; // Mark that next has id as parent
    var nextBlock = convertBlock(nextId, maps);
    resultBlock.appendChild(createElement("next", {}, [nextBlock]));
  }
}

// Converts a pair of statement and expression to an expression.
// If statment is nontrivial, creates DO-RETURN block;
// otherwise converts to just the expression
function convertStmAndExpChildrenWithLabel(stmLabel, expLabel, convertedChildName, parentId, parentBlock, resultBlock, maps) {
  var stmId = getSocketLabelId(stmLabel, parentBlock); 
  var expId = getSocketLabelId(expLabel, parentBlock); 
  if (! stmId) {
    convertChildWithId(expId, convertedChildName, parentId, parentBlock, resultBlock, maps);
  } else { // Statement is nontrivial; create DO-RETURN block
    // Consider stm and exp to be children of parent, even though they're really children of DO-RETURN.
    // This is OK because parent map is just used to determine top-level blocks. 
    maps.parentMap[stmId] = parentId; 
    maps.parentMap[expId] = parentId; 
    var stmBlock = convertBlock(stmId, maps);
    var expBlock = convertBlock(expId, maps);
    var doReturnBlock = makeDoReturnBlock(stmBlock, expBlock); 
    resultBlock.appendChild(createElement("value", {name: convertedChildName}, [doReturnBlock]));    
  }
}

function makeDoReturnBlock(stmBlock, expBlock) {
  return createElement("block", {type: "controls_do_then_return", inline: "false", id: nextId()}, 
		       [createElement("statement", {name: "STM"}, [stmBlock]), 
			createElement("value", {name: "VALUE"}, [expBlock])]);
}					      

// Table that guides the conversion of AI1 to AI2 blocks. 
// This table is automatically extended by information in AI1_simple_components, 
// as defined in the file AI1_v134a_simple_components.js
var AI1ConversionMap = 
{
  // Nonglobal Variables
  "argument": {kind: "bogus"},  //  "argument" is a special case because not converted. 
                                // But still need to know if it's a declaraion or not. 
  
  "getter": {convert: convertVariableGetter, type: "lexical_variable_get", kind: "expression"}, 

  // Global Variables
  "def": {convert: convertGlobalDeclaration, type: "global_declaration", kind: "declaration"}, 
  "getterGlobal": {convert: convertGlobalGetter, type: "lexical_variable_get", kind: "expression"}, 
  "setterGlobal": {convert: convertGlobalSetter, type: "lexical_variable_set", kind: "statement"}, 

  // Component properties
  "componentGetter": {convert: convertComponentGetter, type:"component_set_get", kind: "expression"},  
  "componentSetter": {convert: convertComponentSetter, type:"component_set_get", kind: "statement"},  

  // Procedure declarations and calls
  "define-void": {convert: convertVoidProcedureDeclaration, type:"procedures_defnoreturn", kind: "declaration"},  
  "define": {convert: convertFruitfulProcedureDeclaration, type:"procedures_defreturn", kind: "declaration"},  

  // Control blocks
  "ifelse": {convert: convertIfElse, type:"controls_if", kind: "statement"},  

  // Colors
  "color-black": {convert: convertLeaf, type: "color_black", fieldName: "COLOR", fieldValue: "#000000", kind: "expression"},  
  "color-blue": {convert: convertLeaf, type: "color_blue", fieldName: "COLOR", fieldValue: "#0000ff", kind: "expression"},  
  "color-cyan": {convert: convertLeaf, type: "color_cyan", fieldName: "COLOR", fieldValue: "#00ffff", kind: "expression"},  
  "color-dark-gray": {convert: convertLeaf, type: "color_dark_gray", fieldName: "COLOR", fieldValue: "#444444", kind: "expression"},  
  "color-light-gray": {convert: convertLeaf, type: "color_light_grey", fieldName: "COLOR", fieldValue: "#cccccc", kind: "expression"},  
  "color-gray": {convert: convertLeaf, type: "color_grey", fieldName: "COLOR", fieldValue: "#888888", kind: "expression"},  
  "color-green": {convert: convertLeaf, type: "color_green", fieldName: "COLOR", fieldValue: "#00ff00", kind: "expression"},  
  "color-magenta": {convert: convertLeaf, type: "color_magenta", fieldName: "COLOR", fieldValue: "#ff00ff", kind: "expression"}, 
  // "color-none": {convert: convertLeaf, type: "color_none", fieldName: "COLOR", fieldValue: "#ff00ff", kind: "expression"},  
  "color-orange": {convert: convertLeaf, type: "color_orange", fieldName: "COLOR", fieldValue: "#ffc800", kind: "expression"},  
  "color-pink": {convert: convertLeaf, type: "color_pink", fieldName: "COLOR", fieldValue: "#ffafaf", kind: "expression"},  
  "color-red": {convert: convertLeaf, type: "color_red", fieldName: "COLOR", fieldValue: "#ff0000", kind: "expression"},  
  "color-white": {convert: convertLeaf, type: "color_white", fieldName: "COLOR", fieldValue: "#ffffff", kind: "expression"},  
  "color-yellow": {convert: convertLeaf, type: "color_yellow", fieldName: "COLOR", fieldValue: "#ffff00", kind: "expression"},  

  // Logic
  "true": {convert: convertLeaf, type: "logic_boolean", fieldName: "BOOL", fieldValue: "TRUE", kind: "expression"},  
  "false": {convert: convertLeaf, type: "logic_boolean", fieldName: "BOOL", fieldValue: "FALSE", kind: "expression"},  
  "yail-equal": {convert: convertExpressionOperator, type:"logic_compare", opFieldName:"OP", opFieldValue: "EQ", 
                 inline: true,randNames: ["A", "B"], kind: "expression"}, 
  "yail-not-equal": {convert: convertExpressionOperator, type:"logic_compare", opFieldName:"OP", opFieldValue: "NEQ", 
                 inline: true,randNames: ["A", "B"], kind: "expression"}, 

  // Math
  "number": {convert: convertLeaf, type: "math_number", fieldName: "NUM", kind: "expression"}, 
  "lessthan": {convert: convertExpressionOperator, type:"math_compare", opFieldName:"OP", opFieldValue: "LT", 
                 inline: true,randNames: ["A", "B"], kind: "expression"}, 
  "greaterthan": {convert: convertExpressionOperator, type:"math_compare", opFieldName:"OP", opFieldValue: "GT", 
                 inline: true,randNames: ["A", "B"], kind: "expression"}, 
  "lessthanorequal": {convert: convertExpressionOperator, type:"math_compare", opFieldName:"OP", opFieldValue: "LTE", 
                 inline: true,randNames: ["A", "B"], kind: "expression"}, 
  "greaterthanorequal": {convert: convertExpressionOperator, type:"math_compare", opFieldName:"OP", opFieldValue: "GTE", 
                 inline: true,randNames: ["A", "B"], kind: "expression"}, 
  "number-plus": {convert: convertExpressionOperator, type:"math_add", 
                  numItemsName:"items", randNames:["NUM0", "NUM1"], kind: "expression"},
  "number-minus": {convert: convertExpressionOperator, type:"math_subtract", randNames:["A", "B"], kind: "expression"},
  "number-times": {convert: convertExpressionOperator, type:"math_multiply", 
		   numItemsName:"items", randNames:["NUM0", "NUM1"], kind: "expression"},
  "number-divide": {convert: convertExpressionOperator, type:"math_division", randNames:["A", "B"], kind: "expression"},
  "number-expt": {convert: convertExpressionOperator, type:"math_power", randNames:["A", "B"], kind: "expression"},
  "number-random-integer": {convert: convertExpressionOperator, type:"math_random_int", randNames:["FROM", "TO"], kind: "expression"},
  "number-random-set-seed": {convert: convertExpressionOperator, type:"math_random_set_seed", randNames:["NUM"], kind: "expression"},
  "number-sqrt": {convert: convertExpressionOperator, type:"math_single", opFieldName:"OP", 
                  opFieldValue: "ROOT", randNames:["NUM"], kind: "expression"},
  "number-abs": {convert: convertExpressionOperator, type:"math_single", opFieldName:"OP", 
                 opFieldValue: "ABS", randNames:["NUM"], kind: "expression"},
  "number-negate": {convert: convertExpressionOperator, type:"math_single", opFieldName:"OP", 
                    opFieldValue: "NEG", randNames:["NUM"], kind: "expression"},
  "number-log": {convert: convertExpressionOperator, type:"math_single", opFieldName:"OP", 
                 opFieldValue: "LN", randNames:["NUM"], kind: "expression"},
  "number-exp": {convert: convertExpressionOperator, type:"math_single", opFieldName:"OP", 
                 opFieldValue: "EXP", randNames:["NUM"], kind: "expression"},
  "number-round": {convert: convertExpressionOperator, type:"math_single", opFieldName:"OP", 
                   opFieldValue: "ROUND", randNames:["NUM"], kind: "expression"},
  "number-ceiling": {convert: convertExpressionOperator, type:"math_single", opFieldName:"OP", 
                     opFieldValue: "CEILING", randNames:["NUM"], kind: "expression"},
  "number-floor": {convert: convertExpressionOperator, type:"math_single", opFieldName:"OP", 
                   opFieldValue: "FLOOR", randNames:["NUM"], kind: "expression"},
  "number-modulo": {convert: convertExpressionOperator, type:"math_divide", inline: false, opFieldName:"OP", 
                    opFieldValue: "MODULO", randNames:["DIVIDEND", "DIVISOR"], kind: "expression"},
  "number-quotient": {convert: convertExpressionOperator, type:"math_divide", inline: false, opFieldName:"OP", 
                      opFieldValue: "QUOTIENT", randNames:["DIVIDEND","DIVISOR"], kind: "expression"},
  "number-remainder": {convert: convertExpressionOperator, type:"math_divide", inline: false, opFieldName:"OP", 
                       opFieldValue: "REMAINDER", randNames:["DIVIDEND", "DIVISOR"], kind: "expression"},
  "number-max": {convert: convertExpressionOperator, type:"math_on_list", "extensibleInputs": true, 
		 numItemsName:"items", opFieldName:"OP", opFieldValue: "MAX", randName:"NUM", kind: "expression"},
  "number-min": {convert: convertExpressionOperator, type:"math_on_list", "extensibleInputs": true, 
                 numItemsName:"items", opFieldName:"OP", opFieldValue: "MIN", randName:"NUM", kind: "expression"}, 
  "number-sin": {convert: convertExpressionOperator, type:"math_trig", opFieldName:"OP", 
                 opFieldValue: "SIN", randNames:["NUM"], kind: "expression"},
  "number-cos": {convert: convertExpressionOperator, type:"math_trig", opFieldName:"OP", 
                 opFieldValue: "COS", randNames:["NUM"], kind: "expression"},
  "number-tan": {convert: convertExpressionOperator, type:"math_trig", opFieldName:"OP", 
                 opFieldValue: "TAN", randNames:["NUM"], kind: "expression"},
  "number-asin": {convert: convertExpressionOperator, type:"math_trig", opFieldName:"OP", 
                  opFieldValue: "ASIN", randNames:["NUM"], kind: "expression"},
  "number-acos": {convert: convertExpressionOperator, type:"math_trig", opFieldName:"OP", 
                  opFieldValue: "ACOS", randNames:["NUM"], kind: "expression"},
  "number-atan": {convert: convertExpressionOperator, type:"math_trig", opFieldName:"OP", 
                  opFieldValue: "ATAN", randNames:["NUM"], kind: "expression"},
  "number-atan2": {convert: convertExpressionOperator, type:"math_trig", randNames:["Y", "X"], kind: "expression"},
  "number-degrees-to-radians": {convert: convertExpressionOperator, type:"math_convert_angles", opFieldName:"OP", 
                                opFieldValue: "DEGREES_TO_RADIANS", randNames:["NUM"], kind: "expression"},
  "number-radians-to-degrees": {convert: convertExpressionOperator, type:"math_convert_angles", opFieldName:"OP", 
                                opFieldValue: "RADIANS_TO_DEGREES", randNames:["NUM"], kind: "expression"},
  "format-as-decimal": {convert: convertExpressionOperator, type:"math_format_as_decimal", 
			randNames:["NUM", "PLACES"], kind: "expression"},
  "number-is-number?": {convert: convertExpressionOperator, type:"math_is_a_number", randNames:["NUM"], kind: "expression"},

  // Strings/text 
  "text": {convert: convertLeaf, type: "text", fieldName: "TEXT", kind: "expression"},  
  "string-append": {convert: convertExpressionOperator, type:"text_join", 
                    inline: true, numItemsName:"items", randNames:["ADD0", "ADD1"], kind: "expression"},
  "string-vappend": {convert: convertExpressionOperator, type:"text_join", "extensibleInputs": true, 
                     numItemsName:"items", randName:"ADD", kind: "expression"},
  "string-downcase": {convert: convertExpressionOperator, type:"text_changeCase", 
                      opFieldName:"OP", opFieldValue: "DOWNCASE", randNames: ["TEXT"], kind: "expression"},
  "string-upcase": {convert: convertExpressionOperator, type:"text_changeCase", 
                    opFieldName:"OP", opFieldValue: "UPCASE", randNames: ["TEXT"], kind: "expression"},
  "string-empty?": {convert: convertExpressionOperator, type:"text_isEmpty", randNames: ["VALUE"], kind: "expression"},
  "string-equal": {convert: convertExpressionOperator, type:"text_compare", opFieldName:"OP", 
                   opFieldValue: "EQUAL", inline: true, randNames: ["TEXT1", "TEXT2"], kind: "expression"},
  "string-greater-than": {convert: convertExpressionOperator, type:"text_compare", opFieldName:"OP", opFieldValue: "GT", 
                          inline: true, randNames: ["TEXT1", "TEXT2"], kind: "expression"},
  "string-less-than": {convert: convertExpressionOperator, type:"text_compare", opFieldName:"OP", 
                       opFieldValue: "LT", inline: true, randNames: ["TEXT1", "TEXT2"], kind: "expression"}, 
  "string-length": {convert: convertExpressionOperator, type:"text_length", randNames: ["VALUE"], kind: "expression"}, 
  "string-starts-at": {convert: convertExpressionOperator, type:"text_starts_at", randNames: ["TEXT", "PIECE"], kind: "expression"}, 
  "string-trim": {convert: convertExpressionOperator, type:"text_trim", randNames: ["TEXT"], kind: "expression"}, 
};

// Add entries to AI1ConversionMap from AI1_v134a_component_specs,
// as defined in the file AI1_v134a_component_specs.js
function addComponentEntriesToAI1ConversionMap() {
  var eventAndMethodNames = Object.keys(AI1_v134a_component_specs);
  for (var i = 0; i < eventAndMethodNames.length; i++) {  
    var name = eventAndMethodNames[i]; // E.g. "Button-Click", "Canvas-Dragged"
    var componentSpec = AI1_v134a_component_specs[name];
    var splitList = name.split("-"); // E.g. "Button-Click" => ["Button", "Click"]
    var componentName = splitList[0];
    var eventOrMethodName = splitList[1];
    var type = componentSpec['type'];
    if (type == 'component_event') {
      componentSpec["convert"] = convertComponentEvent;
      componentSpec["componentName"] = componentName;
      componentSpec["eventName"] = eventOrMethodName;
      componentSpec["kind"] = "declaration"
    } else if (type == 'component_method') {
      componentSpec["convert"] = convertComponentMethod;
      componentSpec["componentName"] = componentName;
      componentSpec["methodName"] = eventOrMethodName;
      // Already has kind in the method spec, so no need to set here. 
    } else {
      throw new Error("addComponentEntriesToAI1ConversionMap encountered spec not for method or event");
    } 
    AI1ConversionMap[name] = componentSpec;
  }
  /* // Code written when I though specs would have format of simple_components.json
  for (var i = 0, componentSpec; componentSpec = AI1_simple_components[i]; i++) {
    var componentName = componentSpec.name;

    // Add component events to table
    var events = componentSpec.events;
    for (var j = 0, event; event = events[j]; j++) {
      var eventName = event.name; 
      var hypenatedEventName = componentName + "-" + eventName; E.g., "Button-Click"
      var paramNames = event.params.map(function (paramSpec) { return paramSpec.name; }); 
      AI1ConversionMap[hypenatedEventName] = {kind: "componentEvent", type:"component_event", "paramNames":paramNames};
      // E.g.: "Button-Click": {kind: "componentEvent", type:"component_event", "paramNames":[]}, 
    }

    // Add component methods to table
    var events = componentSpec.methods;
    for (var k = 0, method; method = methods[k]; k++) {
      var methodName = method.name; 
      var hypenatedEventName = componentName + "-" + methodName; // E.g., "Ball-Bounce"
      var paramNames = method.params.map(function (paramSpec) { return paramSpec.name; }); 
      var isExpression = Boolean(method.returnType);
      AI1ConversionMap[hypenatedEventName] = {kind: "componentMethodCall", type:"component_method", 
                                              "paramNames":paramNames, "isExpression": isExpression};
      // E.g.: "Clock-AddDays": {kind: "componentMethodCall", type:"component_method", "paramNames":["instant", "days"], "isExpression":true}
      //       "Canvase-DrawCircle": {kind: "componentMethodCall", type:"component_method", 
      //                              "paramNames":["centerX", "centerY", "radius"], "isExpression":false}
    }
  }
  */
}

// Actually add the component entries. Right now!
addComponentEntriesToAI1ConversionMap(); 

var defaultConversionSpec = {kind: "unknown"};

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

// Return an array of the Ids of all expression socket block connectors. 
// Uses null in place of an Id for an empty socket
function getExpressionSocketIds (block) {
  var connectors = getExpressionSocketBlockConnectors(block);
  return connectors.map(function (connector) { return connector.getAttribute("con-block-id"); });
  // When getSocketBlockConnectors(block) returned an HTMLCollection rather than array, this was necessary
  /*
  ids = []; 
  for (var i = 0, connector; connector = connectors[i]; i++) {
    ids.push(connector.getAttribute("con-block-id"));
  }  
  return ids; 
  */
}

// Returns "value" for expressions, "statement" for statements, undefined otherwise
function getSocketOutputTagForId(childId, parentBlock) {
  var connectors = getSocketBlockConnectors(parentBlock);
  for (var i = 0, connector; connector = connectors[i]; i++) {
    if (connector.getAttribute("con-block-id") == childId) {
	connectorType = connector.getAttribute("connector-type");
      if (connectorType == "poly") { // it's an expression
	return "value";
      } else if (connectorType == "cmd") { // it's a statement
	return "statement";
      } else {
	throw new Error("getSocketOutputTagForId: unrecognized connectorType " + connectorType); 
      }
    }
  }
  return undefined; // Didn't find id
}

// Return an array of the labels of all expression socket block connectors. 
function getExpressionSocketLabels (block) {
  var connectors = getExpressionSocketBlockConnectors(block);
  return connectors.map(function (connector) { return connector.getAttribute("label"); });
}

function getExpressionSocketBlockConnectors (block) {
  var connectors = getSocketBlockConnectors(block); 
  return connectors.filter(function (connector) { return connector.getAttribute("connector-type") == "poly"; }); 
}

function getStatementSocketBlockConnectors (block) {
  var connectors = getSocketBlockConnectors(block); 
  return connectors.filter(function (connector) { return connector.getAttribute("connector-type") == "cmd"; }); 
}

// Returns a array (not an HTMLCollection) of all socket BlockConnectors,
// both for expression sockets (connector-type="poly") and statement-sockets
// (connector-type="cmd"). 
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
      // Convert from an HTMLCollection to an array, since other ops
      // need to use this result as an array (e.g., to map or filter it). 
      var result = []; 
      for (var i = 0; i < connectors.length; i++) {
        result.push(connectors[i]);
      }
      return result;
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
  // console.log("getBlock");
  // console.log(blockOrStub);
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

function sameNames(names1, names2) {
  if (names1.length != names2.length) {
    return false;
  } else {
    for (var i = 0; i < names1.length; i++) {
      if (names1[i] != names2[i]) {
        return false;
      }
    }
  }
  return true; 
}

// return string representation of array of strings
function namesToString(names) {
  return "[" + names.join(",") + "]";
}

// return a "fresh" name that does not appear as a value in the varmap
var orphanedArgName = "*orphanedArg";

function nameNotInValues(varMap) {
  var orphanedValues = objectValues(varMap).filter(function (name) { return beginsWith(name, orphanedArgName); });
  var i = 1; 
  var nextName = orphanedArgName; // Initial name has no number
  while (orphanedValues.indexOf(nextName) != -1) {
    i++;
    nextName = orphanedArgName + i;  // Subsequent names have numbers
  }
  return nextName; // First name that's not in list. 
}

function objectValues(obj) {
  var keys = Object.keys(obj);
  return keys.map(function (key) { return obj[key]; }); 
}

function beginsWith(string, prefix) {
  if (prefix.length > string.length) { 
    return false; 
  } else {
    return string.slice(0, prefix.length) == prefix;
  }
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

