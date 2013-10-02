// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2013-2014 MIT, All rights reserved
// Released under the MIT License https://raw.github.com/mit-cml/app-inventor/master/mitlicense.txt
/**
 * @license
 * @fileoverview Visual blocks editor for App Inventor
 * Methods to handle converting apps from older versions to current
 *
 * @author wolber@usfca.edu (David Wolber)
 */

'use strict';

goog.require('Blockly.Component');
goog.require('Blockly.ComponentTypes');
goog.require('goog.dom');
goog.require('goog.dom.xml');

goog.provide('Blockly.Versioning');


/******************************************************************************
 Blockly.Versioning.translateVersionXML and Blockly.Versioning.translateVersionBlocks
 are the two key functions for upgrades in AI2. Both are invoked only within
 Blockly.SaveFile.load. They implement a two-phase strategy for upgrades:

 Phase 1: Blockly.Versioning.translateVersionXML directly updates the XML dom that has
    been read in from an .aia file before that dom is converted into blocks.

 Phase 2: Blockly.Versioning.translateVersionBlocks is called after the
    blocks of the main workspace have been created from the XML.

 Some upgrades are easier to perform on the XML, others are easier to perform on blocks.
 For example, any upgrades involving renaming are easier to perform on the blocks
 because they can leverage all the blocks-level renaming functions within
 Blockly.LexicalVariable (defined in blockleditor/src/field_lexical_variable.js).
 These renaming functions "understand" scope in a way that would be challenging to
 express directly at the XML level.
 ******************************************************************************/

/**
 * translateVersion is called from Blockly.SaveFile.load to translate
 * old blocks into current version.
 * blocksContent, some xml, is sent in, its (possibly) modified value is returned.
 * Note that this is the translation that occurs on the xml, we also do a pass
 * after app is in Blockly format.
*/

Blockly.Versioning.translateVersionXML = function(blocksContent) {
  // get the text into a dom object xmlFromFile
  var parser = new DOMParser();
  var domFromFile = parser.parseFromString(blocksContent,"text/xml");
  var xmlFromFile = domFromFile.firstChild;  // get the xml element within doc tag
  // see if we have a version. If not, we need to translate
  var versionTags = xmlFromFile.getElementsByTagName('yacodeblocks');
  // if there is no version in the file, then this is an early ai2 project, prior to
  // 10/21/13, when the blocks internal xml structure was overhauled
  // with descriptive mutator tags. blocksOverhaul translates the blocks
  
  Blockly.Versioning.langVersion=17;  // default for oldest ai2
  if (versionTags.length==0) {
    Blockly.Versioning.v17_blocksOverhaul(xmlFromFile);
  }
  else {
    Blockly.Versioning.langVersion=versionTags[0].getAttribute('language-version')
    // we set this so we can use it in translateVersionBlocks
  }
  // Note we can do more translation here, checking for version>x
  // but some translation is also done post blockly load...see below
  var serializer = new XMLSerializer();
  return serializer.serializeToString(xmlFromFile);

};

/**
 * translateVersionBlocks is the second-pass translator. It does translation
 * on Blockly data structure after xml has been loaded
*/
Blockly.Versioning.translateVersionBlocks = function() {
  if (Blockly.Versioning.langVersion<18)
    Blockly.Versioning.v18_canvasNameChanges();
};


/******************************************************************************
 * Details for specific upgrades go below, in reverse chronological order.
 * The code for each upgrade *MUST* be well-documented in order to help
 * those implementing similar upgrades in the future.
 ******************************************************************************/

/**----------------------------------------------------------------------------
 * Upgrade to YAVersion 18
 * @author wolber@usfca.edu (David Wolber)
 *
 * v18_canvasNameChanges does the translation for the Canvas component changes to
 * dragged and touched events, which had parameter name changes (touchedSprite to
 * touchedAnySprite and draggedSprite to draggedAnySprite). The translation
 * is performed after the app is in Blockly blocks form.
 *
 * [lyn, 10/03/2014] Notes:
 *  * This code used to be in blocklyeditor/src/versioning/018_canvasNameChanges.js
 *    but I moved it here as part of consolidating all upgrade code in one file.
 *  * I prefixed the function name with "v18_" to clarify which
 *    functions are used in the upgrade to YAVersion 18.
 *  * The change to YAVersion 18 also changes the Canvas.DrawCircle parameters
 *    x & y to xCenter and yCenter respectively. These do not require a code
 *    upgrade, but do require new translations to be handled for i18n
 ----------------------------------------------------------------------------*/

Blockly.Versioning.v18_canvasNameChanges = function() {
  Blockly.Versioning.changeEventParameterName("Canvas","Dragged","draggedSprite",
      "draggedAnySprite");
  Blockly.Versioning.changeEventParameterName("Canvas","Touched","touchedSprite",
      "touchedAnySprite");
};

/**----------------------------------------------------------------------------
 * Upgrade to YAVersion 17:
 * @author wolber@usfca.edu (David Wolber)
 *
 * Code for translating early ai2 blocks to 10/20/13 version
 * if there is no version # in the Blockly file, then it is an early ai2 project, prior to
 * 10/21/13, when the blocks internal xml structure was overhauled
 * with descriptive mutator tags. blocksOverhaul translates the blocks
 * Methods to handle serialization of the blocks workspace
 *
 * [lyn, 10/03/2014] Notes:
 *  * This code used to be in blocklyeditor/src/versioning/017_blocksOverhaul.js
 *    but I moved it here as part of consolidating all upgrade code in one file.
 *  * I prefixed all the function names with "v17_" to clarify which
 *    functions are used in the upgrade to YAVersion 17.
 ----------------------------------------------------------------------------*/


Blockly.Versioning.v17_blocksOverhaul = function(xmlFromFile) {
  // we loaded in something with no version, we need to translate
  var renameAlert = 0;
  var blocks = xmlFromFile.getElementsByTagName('block');
  for (var i = 0, im = blocks.length; i < im; i++)  {
    var blockElem = blocks[i];
    var blockType = blockElem.getAttribute('type');
    // all built-in blocks have an entry already in Blockly.Language
    //  we don't need to translate those, so if the following is non-null we ignore
    if (Blockly.Blocks[blockType] == null)
    {
      // add some translations for language changes...
      //   these should really be in a map or at procedure that checks and
      //   returns replacement...straight translations...we could also put
      //   lexical_variable_get and set here so that we don't have to have a special
      //   case below
      if (blockType == 'procedures_do_then_return')
        blockElem.setAttribute('type',"controls_do_then_return");
      else
      if (blockType == 'procedure_lexical_variable_get')
        blockElem.setAttribute('type',"lexical_variable_get");
      else
      if (blockType == 'for_lexical_variable_get')
        blockElem.setAttribute('type',"lexical_variable_get");
      else {
        var splitComponent = blockType.split('_');
        if (splitComponent.length > 2) {
          // This happens when someone puts an _ in a block name!
          splitComponent = [splitComponent.slice(0, -1).join('_'), splitComponent.pop()];
        }
        // there are some blocks that are not built-in but are not component based,
        //   we want to ignore them
        if (splitComponent[0] != 'lexical') {
          // methods on any (generics) have a blocktype of _any_someComponent_method
          //   so 1st check if type has 'any' in it, if so we have a generic method
          if (splitComponent[1] == 'any')  // we have a generic method call
            Blockly.Versioning.v17_translateAnyMethod(blockElem);
          else {
            // we have a set, get, component get, event, or method
            // check if the first thing is a component type. If so, the only
            // legal thing it could be is a (generic) component set/get
            //   but old programs allow instance names same as type names, so
            //   we can get a Accelerometer.Shaking which is really an instance event
            if ((Blockly.ComponentTypes[splitComponent[0]] != null) &&
                (splitComponent[1] == 'setproperty' || splitComponent[1] == 'getproperty'))
              Blockly.Versioning.v17_translateComponentSetGetProperty(blockElem);
            else {
              var instance = splitComponent[0];
              var componentType = Blockly.Component.instanceNameToTypeName(instance);
              if (componentType == instance && renameAlert === 0) {
                alert("Your app was created in an earlier version of App Inventor and may be loaded incorrectly."+
                    " The problem is that it names a component instance"+
                    " the same as the component type, which is longer allowed.");
                renameAlert = 1;
              }
              // we should really check for null here so if there are blocks that
              //   are not instance_ we can ignore. Right now the following ifs
              //   probably make sure of this-- if none of the questions about rightside
              //    are answered affirmatively, but this should be checked here as well
              var rightside = splitComponent[1];
              if (rightside == 'setproperty' || rightside == 'getproperty')
                Blockly.Versioning.v17_translateSetGetProperty(blockElem);
              else
              if (rightside == 'component')
                Blockly.Versioning.v17_translateComponentGet(blockElem);
              else
              if (Blockly.ComponentTypes[componentType].eventDictionary[rightside] != null)
                Blockly.Versioning.v17_translateEvent(blockElem);
              else
              if (Blockly.ComponentTypes[componentType].methodDictionary[rightside] != null)
                Blockly.Versioning.v17_translateMethod(blockElem);
            }
          }
        }
      }
    }
  }

};

/**
 * v17_translateEvent is called when we know we have an Event element that
 * needs to be translated.
 */
Blockly.Versioning.v17_translateEvent = function(blockElem) {
  //get the event type and instance name,
  // the type attribute is "component_event"
  var blockType = blockElem.getAttribute('type');
  var component_event = blockType;
  // event block types look like: <block type="Button1_Click" x="132" y="72">
  var splitComponent = component_event.split('_');
  if (splitComponent.length > 2) {
    // This happens when someone puts an _ in a block name!
    splitComponent = [splitComponent.slice(0, -1).join('_'), splitComponent.pop()];
  }
  var instance = splitComponent[0];
  var event=splitComponent[1];
  // Paul has a function to convert instance to type
  var componentType = Blockly.Component.instanceNameToTypeName(instance);
  // ok, we have all the info, now we can override the old event attribute with 'event'
  blockElem.setAttribute('type','component_event');
  // <mutation component_type=​"Canvas" instance_name=​"Canvas1" event_name=​"Dragged">​</mutation>
  // add mutation tag
  var mutationElement = goog.dom.createElement('mutation');
  //mutationElement.setAttribute('component_type',component);
  mutationElement.setAttribute('instance_name', instance);
  mutationElement.setAttribute('event_name', event);
  mutationElement.setAttribute('component_type',componentType);
  blockElem.insertBefore(mutationElement,blockElem.firstChild);

};
/**
 * v17_translateMethod is called when we know we have a component method element that
 * needs to be translated.
 */
Blockly.Versioning.v17_translateMethod = function(blockElem) {
  // the type attribute is "instance_method"
  var blockType = blockElem.getAttribute('type');
  // method block types look like: <block type="TinyDB_StoreValue" ...>
  var splitComponent = blockType.split('_');
  if (splitComponent.length > 2) {
    // This happens when someone puts an _ in a block name!
    splitComponent = [splitComponent.slice(0, -1).join('_'), splitComponent.pop()];
  }
  var instance = splitComponent[0];
  var method = splitComponent[1];
  // Paul has a function to convert instance to type
  var componentType = Blockly.Component.instanceNameToTypeName(instance);
  // ok, we have all the info, now we can override the old event attribute with 'event'
  blockElem.setAttribute('type','component_method');
  // <mutation component_type=​"Canvas" instance_name=​"Canvas1" event_name=​"Dragged">​</mutation>
  // add mutation tag
  var mutationElement = goog.dom.createElement('mutation');
  //mutationElement.setAttribute('component_type',component);
  mutationElement.setAttribute('instance_name', instance);
  mutationElement.setAttribute('method_name', method);
  mutationElement.setAttribute('component_type',componentType);
  mutationElement.setAttribute('is_generic','false');
  blockElem.insertBefore(mutationElement,blockElem.firstChild);

};
/**
 * v17_translateAnyMethod is called when we know we have a method on a generic (any)
 * component.
 */
Blockly.Versioning.v17_translateAnyMethod = function(blockElem) {
  // the type attribute is "instance_method"
  var blockType = blockElem.getAttribute('type');
  // any method block types look like: <block type="_any_ImageSprite_MoveTo" inline="false">
  var splitComponent = blockType.split('_');
  if (splitComponent.length > 3) {
    // This happens when someone puts an _ in a block name!
    var ctemp = splitComponent.slice(-2);
    splitComponent = [splitComponent.slice(0, -2).join('_'), ctemp.pop(), ctemp.pop()];
  }
  var componentType = splitComponent[2];
  var method=splitComponent[3];
  // ok, we have all the info, now we can override the old event attribute with 'event'
  blockElem.setAttribute('type','component_method');
  // <mutation component_type=​"Canvas" instance_name=​"Canvas1" event_name=​"Dragged">​</mutation>
  // add mutation tag
  var mutationElement = goog.dom.createElement('mutation');
  mutationElement.setAttribute('method_name', method);
  mutationElement.setAttribute('component_type',componentType);
  mutationElement.setAttribute('is_generic','true');
  blockElem.insertBefore(mutationElement,blockElem.firstChild);

};
/**
 * v17_translateComponentGet is called when we know we have a component get, e.g.
 * TinyDB_component as the block
 */
Blockly.Versioning.v17_translateComponentGet = function(blockElem) {
  // the type attribute is "instance_method"
  var blockType = blockElem.getAttribute('type');
  // block type looks like: <block type="TinyDB1_component" ..> note an instance
  //    not a type as you'd expect
  var splitComponent = blockType.split('_');
  if (splitComponent.length > 2) {
    // This happens when someone puts an _ in a block name!
    splitComponent = [splitComponent.slice(0, -1).join('_'), splitComponent.pop()];
  }
  var instance = splitComponent[0];
  // if we got here splitComponent[1] must be "component"
  // Paul has a function to convert instance to type
  var componentType = Blockly.Component.instanceNameToTypeName(instance);
  // ok, we have all the info, now we can override the old event attribute with 'event'
  blockElem.setAttribute('type','component_component_block');
  // <mutation component_type=​"Canvas" instance_name=​"Canvas1" event_name=​"Dragged">​</mutation>
  // add mutation tag
  var mutationElement = goog.dom.createElement('mutation');
  //mutationElement.setAttribute('component_type',component);
  mutationElement.setAttribute('instance_name', instance);
  mutationElement.setAttribute('component_type',componentType);
  blockElem.insertBefore(mutationElement,blockElem.firstChild);

};

/**
 * v17_translateSetGetProperty is called when we know we have a get or set on an instance
 */
Blockly.Versioning.v17_translateSetGetProperty = function(blockElem) {
  // the type attribute is "instance_setproperty" or "component_getproperty"
  var blockType = blockElem.getAttribute('type');
  // set block look like: <block type="Button1_setproperty" x="132" y="72">
  var splitComponent=blockType.split('_');
  if (splitComponent.length > 2) {
    // This happens when someone puts an _ in a block name!
    splitComponent = [splitComponent.slice(0, -1).join('_'), splitComponent.pop()];
  }
  var instance = splitComponent[0];
  var type=splitComponent[1]; //setproperty or getproperty
  // Paul has a function to convert instance to type
  var componentType = Blockly.Component.instanceNameToTypeName(instance);
  // grab titles to find the particular property. There is a title elem with
  //   a "PROP" attribute right under and within the block element itself
  //   There might be many titles, but we grab the first.
  var titles = blockElem.getElementsByTagName('title');
  var propName = 'unknown';
  for (var i = 0, len = titles.length; i < len; i++)
  {
    if (titles[i].getAttribute('name') == 'PROP') {
      propName = titles[i].textContent;
      break;
    }
  }
  // ok, we have all the info, now we can override the old event attribute with 'event'
  blockElem.setAttribute('type','component_set_get');
  // <mutation component_type=​"Canvas" instance_name=​"Canvas1" event_name=​"Dragged">​</mutation>
  // add mutation tag
  var mutationElement = blockElem.getElementsByTagName('mutation')[0];
  //mutationElement.setAttribute('component_type',component);
  mutationElement.setAttribute('instance_name', instance);
  mutationElement.setAttribute('property_name', propName);
  if (type == 'setproperty') {
    mutationElement.setAttribute('set_or_get', 'set');
  } else {
    mutationElement.setAttribute('set_or_get','get');
  }
  mutationElement.setAttribute('component_type', componentType);
  mutationElement.setAttribute('is_generic','false');
  // old blocks had a 'yailtype' attribute in mutator, lets get rid of
  if (mutationElement.getAttribute('yailtype') != null)
    mutationElement.removeAttribute('yailtype');
};

/**
 * v17_translateComponentSetGetProperty is called when we know we have a get or set on a
 * generic component.
 */
Blockly.Versioning.v17_translateComponentSetGetProperty = function(blockElem) {
  // the type attribute is "component_setproperty" or "component_getproperty"
  //   where component is a type, e.g., Button
  var blockType = blockElem.getAttribute('type');
  // set block looks like: <block type="Button_setproperty" >
  var splitComponent = blockType.split('_');
  if (splitComponent.length > 2) {
    // This happens when someone puts an _ in a block name!
    splitComponent = [splitComponent.slice(0, -1).join('_'), splitComponent.pop()];
  }
  var type = splitComponent[1]; //setproperty or getproperty
  var componentType = splitComponent[0];
  // grab titles to find the particular property
  var titles = blockElem.getElementsByTagName('title');
  var propName = 'unknown';
  for (var i = 0, len = titles.length; i < len; i++)
  {
    if (titles[i].getAttribute('name') == 'PROP') {
      propName = titles[i].textContent;
      break;
    }
  }
  // ok, we have all the info, now we can override the old event attribute with 'event'
  blockElem.setAttribute('type','component_set_get');
  // <mutation component_type=​"Canvas" instance_name=​"Canvas1" event_name=​"Dragged">​</mutation>
  // add mutation tag
  var mutationElement = blockElem.getElementsByTagName('mutation')[0];
  //mutationElement.setAttribute('component_type',component);
  mutationElement.setAttribute('property_name', propName);
  if (type == 'setproperty') {
    mutationElement.setAttribute('set_or_get', 'set');
  } else {
    mutationElement.setAttribute('set_or_get','get');
  }
  mutationElement.setAttribute('component_type',componentType);
  mutationElement.setAttribute('is_generic','true');
  // old blocks had a 'yailtype' attribute in mutator, lets get rid of
  if (mutationElement.getAttribute('yailtype')!=null)
    mutationElement.removeAttribute('yailtype');
};

/******************************************************************************
 General helper methods for upgrades go in this section
 ******************************************************************************/

/**
 * @authors wolber@usfca.edu (David Wolber) & fturbak@wellesley.edu (Lyn Turba)
 * changeEventParameterName changes any event handler parameter name. Note this code is
 * performed on Blockly blocks after xml has been loaded (when it's much easier
 * to correctly handle the subtleties of renaming involving lexical scoping).
 *
 * There are complications due to handling this renaming in the presence of i18n.
 * In particular, all references to the old localized parameter name within
 * the body must be renamed to new localized parameter names in a way that
 * avoids any accidental variable capture by local variables within the body.
 */
Blockly.Versioning.changeEventParameterName = function(componentType, eventName,
                                                       oldParamName, newParamName) {
  if (Blockly.mainWorkspace) {
    var blocks = Blockly.mainWorkspace.getAllBlocks();
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      if (block.blockType === 'event') {
        if ((block.eventName===eventName) && (block.typeName===componentType)) {

          // Event params will have been saved previously in XML using oldParamName.
          // Find i18n translation of oldParamName within block
          var eventParamDict = Blockly.LexicalVariable.eventParameterDict(block);
          var oldParamTranslation = eventParamDict[oldParamName];
          if (oldParamTranslation) { // Is oldParamName referenced in event body?
                                     // If not, no further action is required.

            // For consistency, update .eventparam for blocks in which it's oldParamName to newParamName
            var descendants = block.getDescendants();
            for (var j = 0, descendant; descendant = descendants[j]; j++) {
              if (descendant.eventparam &&  (descendant.eventparam == oldParamName)) {
                descendant.eventparam = newParamName;
              }
            }

            // Find i18n translation of newParamName
            var newParamTranslation = window.parent.BlocklyPanel_getLocalizedParameterName(newParamName);

            // Event handler block will have been automatically created with newParamTranslation
            // So need to rename all occurrences of oldParamTranslation within its body
            // to newParamTranslation.
            var childBlocks = block.getChildren(); // should be at most one body block
            for (var k= 0, childBlock; childBlock = childBlocks[k]; k++) {
              var freeSubstitution = new Blockly.Substitution([oldParamTranslation], [newParamTranslation]);
              // renameFree does the translation.
              Blockly.LexicalVariable.renameFree(childBlock, freeSubstitution);
            }
          }
        }
      }
    }
  }
};




