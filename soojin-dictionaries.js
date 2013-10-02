/**
 * Visual Blocks Language
 *
 * Copyright 2012 Massachusetts Institute of Technology. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview List blocks for Blockly, modified for App Inventor
 * @author fraser@google.com (Neil Fraser)
 * @author andrew.f.mckinney@gmail.com (Andrew F. McKinney)
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to language files.
 */

if (!Blockly.Language) Blockly.Language = {};

Blockly.Language.lists_create_with = {
  // Create a list with any number of elements of any type.
  category: Blockly.LANG_CATEGORY_LISTS,
  helpUrl: Blockly.LANG_LISTS_CREATE_WITH_EMPTY_HELPURL,
  init: function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('ADD0')
        .appendTitle("make a list");
    this.appendValueInput('ADD1');
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.setTooltip(Blockly.LANG_LISTS_CREATE_WITH_TOOLTIP);
    this.itemCount_ = 2;
    this.emptyInputName = 'EMPTY';
    this.repeatingInputName = 'ADD';
    this.appendCollapsedInput().appendTitle('make a list', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  mutationToDom: Blockly.mutationToDom,
  domToMutation: Blockly.domToMutation,
  decompose: function(workspace){
    return Blockly.decompose(workspace,'lists_create_with_item',this);
  },
  compose: Blockly.compose,
  saveConnections: Blockly.saveConnections,
  addEmptyInput: function(){
    this.appendDummyInput(this.emptyInputName)
      .appendTitle(Blockly.LANG_LISTS_CREATE_EMPTY_TITLE);
  },
  addInput: function(inputNum){
    var input = this.appendValueInput(this.repeatingInputName + inputNum);
    if(inputNum === 0){
      input.appendTitle("make a list");
    }
    return input;
  },
  updateContainerBlock: function(containerBlock) {
    containerBlock.setTitleValue(Blockly.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD,"CONTAINER_TEXT");
  },
  // create type blocks for both make a list (two items) and create empty list
  typeblock: [
      { translatedName: Blockly.LANG_LISTS_CREATE_WITH_TITLE_MAKE_LIST },
      { translatedName: Blockly.LANG_LISTS_CREATE_EMPTY_TITLE,
        mutatorAttributes: { items: 0 } }]

};

Blockly.Language.lists_create_with_item = {
  // Add items.
  init: function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendDummyInput()
        .appendTitle(Blockly.LANG_LISTS_CREATE_WITH_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};


Blockly.Language.lists_add_items = {
  // Create a list with any number of elements of any type.
  category: Blockly.LANG_CATEGORY_LISTS,
  helpUrl: Blockly.LANG_LISTS_ADD_ITEMS_HELPURL,
  init: function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('add items to list').appendTitle(' list');
    this.appendValueInput('ITEM0').appendTitle('item').setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_ADD_ITEMS_TOOLTIP);
    this.setMutator(new Blockly.Mutator(['lists_add_items_item']));
    this.itemCount_ = 1;
    this.emptyInputName = null;
    this.repeatingInputName = 'ITEM';
    this.appendCollapsedInput().appendTitle('add items list', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  mutationToDom: Blockly.mutationToDom,
  domToMutation: Blockly.domToMutation,
  decompose: function(workspace){
    return Blockly.decompose(workspace,'lists_add_items_item',this);
  },
  compose: Blockly.compose,
  saveConnections: Blockly.saveConnections,
  addEmptyInput: function(){},
  addInput: function(inputNum){
    var input = this.appendValueInput(this.repeatingInputName + inputNum);
    input.appendTitle('item').setAlign(Blockly.ALIGN_RIGHT);
    return input;
  },
  updateContainerBlock: function(containerBlock) {
    containerBlock.setTitleValue(Blockly.LANG_LISTS_ADD_ITEMS_CONTAINER_TITLE_ADD,"CONTAINER_TEXT");
    containerBlock.setTooltip(Blockly.LANG_LISTS_ADD_ITEMS_CONTAINER_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.LANG_LISTS_ADD_ITEMS_TITLE_ADD }]

};

Blockly.Language.lists_add_items_item = {
  // Add items.
  init: function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendDummyInput()
        .appendTitle(Blockly.LANG_LISTS_ADD_ITEM_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.LANG_LISTS_ADD_ITEM_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Language.lists_is_in = {
  // Is in list?.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_IS_IN_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("boolean",Blockly.Language.OUTPUT));
    this.appendValueInput('ITEM').appendTitle('is in list?').appendTitle('thing');
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('list').setAlign(Blockly.ALIGN_RIGHT);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_IS_IN_TOOLTIP);
    this.appendCollapsedInput().appendTitle('in list', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_IS_IN_TITLE_IS_IN }]
};


Blockly.Language.lists_length = {
  // Length of list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_LENGTH_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("number",Blockly.Language.OUTPUT));
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('length of list').appendTitle('list');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_LENGTH_TOOLTIP);
    this.appendCollapsedInput().appendTitle('length', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_LENGTH_INPUT_LENGTH }]
};

Blockly.Language.lists_is_empty = {
  // Is the list empty?.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_IS_EMPTY_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("boolean",Blockly.Language.OUTPUT));
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('is list empty?').appendTitle('list');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_IS_EMPTY_TOOLTIP);
    this.appendCollapsedInput().appendTitle('is empty?', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_TITLE_IS_EMPTY }]
};

Blockly.Language.lists_pick_random_item = {
  // Length of list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_PICK_RANDOM_ITEM_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, null);
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('pick a random item').appendTitle('list');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_PICK_RANDOM_TOOLTIP);
    this.appendCollapsedInput().appendTitle('pick random', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_PICK_RANDOM_TITLE_PICK_RANDOM }]
};

Blockly.Language.lists_position_in = {
  // Postion of item in list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_POSITION_IN_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("number",Blockly.Language.OUTPUT));

    this.appendValueInput('ITEM').appendTitle('index in list').appendTitle('thing');
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('list').setAlign(Blockly.ALIGN_RIGHT);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_POSITION_IN_TOOLTIP);
    this.appendCollapsedInput().appendTitle('index', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_POSITION_IN_TITLE_POSITION }]
};


Blockly.Language.lists_select_item = {
  // Select from list an item.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_SELECT_ITEM_TITLE_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, null);
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('select list item').appendTitle('list');
    this.appendValueInput('NUM').setCheck(Blockly.Language.YailTypeToBlocklyType("number",Blockly.Language.INPUT)).appendTitle('index').setAlign(Blockly.ALIGN_RIGHT);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_SELECT_ITEM_TOOLTIP);
    this.appendCollapsedInput().appendTitle('select', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_SELECT_ITEM_TITLE_SELECT }]
};

Blockly.Language.lists_insert_item = {
  // Insert Item in list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_INSERT_ITEM_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('insert list item').appendTitle('list');
    this.appendValueInput('INDEX').setCheck(Blockly.Language.YailTypeToBlocklyType("number",Blockly.Language.INPUT)).appendTitle('index').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('ITEM').setCheck(Blockly.Language.YailTypeToBlocklyType("any",Blockly.Language.INPUT)).appendTitle('item').setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_INSERT_TOOLTIP);
    this.appendCollapsedInput().appendTitle('insert', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_INSERT_TITLE_INSERT_LIST }]
};

Blockly.Language.lists_replace_item = {
  // Replace Item in list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_REPLACE_ITEM_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('replace list item').appendTitle('list');
    this.appendValueInput('NUM').setCheck(Blockly.Language.YailTypeToBlocklyType("number",Blockly.Language.INPUT)).appendTitle('index').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('ITEM').appendTitle('replacement').setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_REPLACE_ITEM_TOOLTIP);
    this.appendCollapsedInput().appendTitle('replace', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_REPLACE_ITEM_TITLE_REPLACE }]
};

Blockly.Language.lists_remove_item = {
  // Remove Item in list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_REMOVE_ITEM_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('remove list item').appendTitle('list');
    this.appendValueInput('INDEX').setCheck(Blockly.Language.YailTypeToBlocklyType("number",Blockly.Language.INPUT)).appendTitle('index').setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_REMOVE_ITEM_TOOLTIP);
    this.appendCollapsedInput().appendTitle('remove', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_REMOVE_ITEM_TITLE_REMOVE }]
};

Blockly.Language.lists_append_list = {
  // Append to list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_APPEND_LIST_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('LIST0').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('append to list').appendTitle('list1');
    this.appendValueInput('LIST1').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('list2').setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_APPEND_LIST_TOOLTIP);
    this.appendCollapsedInput().appendTitle('append', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_APPEND_LIST_TITLE_APPEND }]
};


Blockly.Language.lists_copy = {
  // Make a copy of list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_COPY_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('copy list').appendTitle('list');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_COPY_TOOLTIP);
    this.appendCollapsedInput().appendTitle('copy', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_COPY_TITLE_COPY }]
};

Blockly.Language.lists_is_list = {
  // Is a list?
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_IS_LIST_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("boolean",Blockly.Language.OUTPUT));
    this.appendValueInput('ITEM').appendTitle('is a list?').appendTitle('thing');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_IS_LIST_TOOLTIP);
    this.appendCollapsedInput().appendTitle('list?', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_IS_LIST_TITLE_IS_LIST }]
};

Blockly.Language.lists_to_csv_row = {
  // Make a csv row from list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_TO_CSV_ROW_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('list to csv row').appendTitle('list');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_TO_CSV_ROW_TOOLTIP);
    this.appendCollapsedInput().appendTitle('to csv row', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_TO_CSV_ROW_TITLE_TO_CSV }]
};

Blockly.Language.lists_to_csv_table = {
  // Make a csv table from list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_TO_CSV_TABLE_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('list to csv table').appendTitle('list');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_TO_CSV_TABLE_TOOLTIP);
    this.appendCollapsedInput().appendTitle('to csv table', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_TO_CSV_TABLE_TITLE_TO_CSV }]
};

Blockly.Language.lists_from_csv_row = {
  // Make list from csv row.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_FROM_CSV_ROW_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
    this.appendValueInput('TEXT').setCheck(Blockly.Language.YailTypeToBlocklyType("text",Blockly.Language.INPUT)).appendTitle('list from csv row').appendTitle('text');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_FROM_CSV_ROW_TOOLTIP);
    this.appendCollapsedInput().appendTitle('from csv row', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_FROM_CSV_ROW_TITLE_FROM_CSV }]
};

Blockly.Language.lists_from_csv_table = {
  // Make list from csv table.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_FROM_CSV_TABLE_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
    this.appendValueInput('TEXT').setCheck(Blockly.Language.YailTypeToBlocklyType("text",Blockly.Language.INPUT)).appendTitle('list from csv table').appendTitle('text');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_FROM_CSV_TABLE_TOOLTIP);
    this.appendCollapsedInput().appendTitle('from csv table', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_FROM_CSV_TABLE_TITLE_FROM_CSV }]
};

Blockly.Language.lists_lookup_in_pairs = {
  // Look up in a list of pairs (key, value).
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_LOOKUP_IN_PAIRS_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("any",Blockly.Language.OUTPUT));
    this.appendValueInput('KEY').setCheck(Blockly.Language.YailTypeToBlocklyType("any",Blockly.Language.INPUT)).appendTitle('lookup in pairs').appendTitle('key');
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('pairs').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('NOTFOUND').setCheck(Blockly.Language.YailTypeToBlocklyType("any",Blockly.Language.INPUT)).appendTitle('notFound').setAlign(Blockly.ALIGN_RIGHT);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_LOOKUP_IN_PAIRS_TOOLTIP);
    this.appendCollapsedInput().appendTitle('lookup', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_LOOKUP_IN_PAIRS_TITLE_LOOKUP_IN_PAIRS }]
};
<<<<<<< HEAD:appinventor/blocklyeditor/src/language/common/dictionaries.js
=======


Blockly.Language.lists_mutatorcontainer = {
    init: function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    var group = new Blockly.RadioButtonGroup();
    this.appendDummyInput()
    	.appendTitle(new Blockly.FieldRadioButton(group), 'CHANGE_LIST')
    	.appendTitle("changes existing list");
    this.appendDummyInput()
 		.appendTitle(new Blockly.FieldRadioButton(group), 'MAKE_NEW_LIST')
 		.appendTitle("makes new list");
    this.setTooltip('');
    this.setTooltip(Blockly.LANG_CONTROLS_IF_ELSEIF_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Language.lists_map = {
  // For each loop.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_MAP_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('LIST')
    	.setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
    	.appendTitle(Blockly.LANG_LISTS_MAP_DEST_TITLE_MAP, 'TITLE')
    	.setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput('DESCRIPTION')
		.appendTitle(Blockly.LANG_LISTS_MAP_DEST_INPUT_ITEM)
		.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_MAP_DEST_INPUT_VAR,
                                                   true, // name is editable
                                                   Blockly.FieldFlydown.DISPLAY_BELOW),
                 'VAR')
         .appendTitle(Blockly.LANG_LISTS_MAP_DEST_INPUT_TO)
         .setAlign(Blockly.ALIGN_RIGHT);
    this.appendIndentedValueInput('TO');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator([]));
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_MAP_TOOLTIP);
    this.appendCollapsedInput()
        .appendTitle(Blockly.LANG_LISTS_MAP_TITLE_MAP, 'COLLAPSED_TEXT');
    this.changeList = true;
    this.makeNewList = false;
  },
  onchange: Blockly.WarningHandler.checkErrors,
  updateBlock_: function() {
	  if (this.changeList) {
		  this.removeInput('LIST');
		  this.removeInput('DESCRIPTION');
		  this.removeInput('TO');
		  this.outputConnection = null;
		
		  this.appendValueInput('LIST')
	        .setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
	        .appendTitle(Blockly.LANG_LISTS_MAP_DEST_TITLE_MAP, 'TITLE')
	        .setAlign(Blockly.ALIGN_RIGHT);
	    this.appendDummyInput('DESCRIPTION')
	    	.appendTitle(Blockly.LANG_LISTS_MAP_DEST_INPUT_ITEM)
	    	.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_MAP_DEST_INPUT_VAR,
	                                                       true, // name is editable
	                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
	                     'VAR')
	         .appendTitle(Blockly.LANG_LISTS_MAP_DEST_INPUT_TO)
	    	.setAlign(Blockly.ALIGN_RIGHT);
	    this.appendIndentedValueInput('TO');
	    this.setPreviousStatement(true);
	    this.setNextStatement(true);
	  } else if (this.makeNewList) {
		  this.removeInput('LIST');
		  this.removeInput('DESCRIPTION');
		  this.removeInput('TO');
		  this.previousConnection = null;
		  this.nextConnection = null;
		  
		  this.appendValueInput('LIST')
	        .setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
	        .appendTitle(Blockly.LANG_LISTS_MAP_TITLE_MAP, 'TITLE')
	        .setAlign(Blockly.ALIGN_RIGHT);
	      this.appendDummyInput('DESCRIPTION')
	    	.appendTitle(Blockly.LANG_LISTS_MAP_INPUT_ITEM)
	    	.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_MAP_INPUT_VAR,
	                                                       true, // name is editable
	                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
	                     'VAR')
	         .appendTitle(Blockly.LANG_LISTS_MAP_INPUT_TO)
	    	.setAlign(Blockly.ALIGN_RIGHT);
	      this.appendIndentedValueInput('TO');
	      this.setOutput(true, null);
	  } 
  },
  mutationToDom: function() {
	var container = document.createElement('mutation');
    if (this.changeList) {
      container.setAttribute('destructive', this.changeList);
    } 
    
    return container;
  },
   domToMutation: function(xmlElement) {
	if(xmlElement.getAttribute('destructive') === null){
	  this.changeList = false;
	} else {
	  this.changeList = xmlElement.getAttribute('destructive');
	}
	
	this.updateBlock_();
   },
   decompose: function(workspace) {
      var containerBlock = new Blockly.Block(workspace,
		                                           'lists_mutatorcontainer');
	  containerBlock.initSvg();
	  //var expression = this.getInput('DO');
	  
	  containerBlock.setTitleValue(this.changeList ? 'TRUE' : 'FALSE','CHANGE_LIST');
	  containerBlock.setTitleValue(this.makeNewList ? 'TRUE' : 'FALSE','MAKE_NEW_LIST');
	
	  return containerBlock;
	  },
  compose: function(containerBlock) {
	  var expression = this.getInput('TO');
	  //expression.connection.targetConnection
	  	  
	  this.changeList = containerBlock.getTitleValue('CHANGE_LIST') == 'TRUE' ? true : false;
	  this.makeNewList = containerBlock.getTitleValue('MAKE_NEW_LIST') == 'TRUE' ? true : false;
	  
	  this.updateBlock_();  
  },
  saveConnections: Blockly.saveConnections,
  getVars: function() {
    return [this.getTitleValue('VAR')];
  },
  blocksInScope: function() {
    var toBlock = this.getInputTargetBlock('TO');
    if (toBlock) {
      return [toBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
    return [this.getTitleValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  },
  typeblock: [{ translatedName: Blockly.LANG_LISTS_MAP_TITLE_MAP }],
  prepareCollapsedText: function(){
    this.getTitle_('COLLAPSED_TEXT')
        .setText(Blockly.LANG_LISTS_MAP_TITLE_MAP);
  }
};


Blockly.Language.lists_filter = {
		  // For each loop.
		  category : Blockly.LANG_CATEGORY_LISTS,
		  helpUrl : Blockly.LANG_LISTS_MAP_HELPURL,
		  init : function() {
			  this.setColour(Blockly.LIST_CATEGORY_HUE);
			    this.appendValueInput('LIST')
			        .setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
			        .appendTitle(Blockly.LANG_LISTS_FILTER_DEST_TITLE_FILTER, 'TITLE')
			        .setAlign(Blockly.ALIGN_RIGHT);
			    this.appendDummyInput('DESCRIPTION')
			    	.appendTitle(Blockly.LANG_LISTS_FILTER_DEST_INPUT_ITEM)
			    	.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_FILTER_DEST_INPUT_VAR,
			                                                       true, // name is editable
			                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
			                     'VAR')
			        .appendTitle(Blockly.LANG_LISTS_FILTER_DEST_INPUT_PASSING)
			    	.setAlign(Blockly.ALIGN_RIGHT);
			    this.appendIndentedValueInput('TEST')
			        .appendTitle(Blockly.LANG_LISTS_FILTER_DEST_INPUT_TEST);
			    this.setPreviousStatement(true);
			    this.setNextStatement(true);
			    this.setMutator(new Blockly.Mutator([]));
			    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_FILTER_DEST_TOOLTIP);
			    this.appendCollapsedInput()
			        .appendTitle(Blockly.LANG_LISTS_FILTER_DEST_TITLE_FILTER,'COLLAPSED_TEXT');
		    this.changeList = true;
		    this.makeNewList = false;
		  },
		  onchange: Blockly.WarningHandler.checkErrors,
		  updateBlock_: function() {
			  if (this.changeList) {
				  this.removeInput('LIST');
				  this.removeInput('DESCRIPTION');
				  this.removeInput('TEST');
				  this.outputConnection = null;
				
				this.appendValueInput('LIST')
			        .setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
			        .appendTitle(Blockly.LANG_LISTS_FILTER_DEST_TITLE_FILTER, 'TITLE')
			        .setAlign(Blockly.ALIGN_RIGHT);
			    this.appendDummyInput('DESCRIPTION')
			    	.appendTitle(Blockly.LANG_LISTS_FILTER_DEST_INPUT_ITEM)
			    	.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_FILTER_DEST_INPUT_VAR,
			                                                       true, // name is editable
			                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
			                     'VAR')
			        .appendTitle(Blockly.LANG_LISTS_FILTER_DEST_INPUT_PASSING)
			    	.setAlign(Blockly.ALIGN_RIGHT);
			    this.appendIndentedValueInput('TEST')
			        .appendTitle(Blockly.LANG_LISTS_FILTER_DEST_INPUT_TEST);
				  
			    this.setPreviousStatement(true);
			    this.setNextStatement(true);
			  } else if (this.makeNewList) {
				  this.removeInput('LIST');
				  this.removeInput('DESCRIPTION');
				  this.removeInput('TEST');
				  this.previousConnection = null;
				  this.nextConnection = null;
				  
				  this.appendValueInput('LIST')
			        .setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
			        .appendTitle(Blockly.LANG_LISTS_FILTER_TITLE_FILTER, 'TITLE')
			        .setAlign(Blockly.ALIGN_RIGHT);
			    this.appendDummyInput('DESCRIPTION')
			    	.appendTitle(Blockly.LANG_LISTS_FILTER_INPUT_ITEM)
			    	.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_FILTER_INPUT_VAR,
			                                                       true, // name is editable
			                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
			                     'VAR')
			        .appendTitle(Blockly.LANG_LISTS_FILTER_INPUT_PASSING)
			    	.setAlign(Blockly.ALIGN_RIGHT);
			    this.appendIndentedValueInput('TEST')
			        .appendTitle(Blockly.LANG_LISTS_FILTER_INPUT_TEST);
				  
			      this.setOutput(true, null);
			  } 
		  },
		  mutationToDom: function() {
			var container = document.createElement('mutation');
		    if (this.changeList) {
		      container.setAttribute('destructive', this.changeList);
		    } 
		    
		    return container;
		  },
		   domToMutation: function(xmlElement) {
			if(xmlElement.getAttribute('destructive') === null){
			  this.changeList = false;
			} else {
			  this.changeList = xmlElement.getAttribute('destructive');
			}
			
			this.updateBlock_();
		   },
		   decompose: function(workspace) {
		      var containerBlock = new Blockly.Block(workspace,
				                                           'lists_mutatorcontainer');
			  containerBlock.initSvg();
			  //var expression = this.getInput('DO');
			  
			  containerBlock.setTitleValue(this.changeList ? 'TRUE' : 'FALSE','CHANGE_LIST');
			  containerBlock.setTitleValue(this.makeNewList ? 'TRUE' : 'FALSE','MAKE_NEW_LIST');
			
			  return containerBlock;
			  },
		  compose: function(containerBlock) {
			  var expression = this.getInput('TO');
			  //expression.connection.targetConnection
			  	  
			  this.changeList = containerBlock.getTitleValue('CHANGE_LIST') == 'TRUE' ? true : false;
			  this.makeNewList = containerBlock.getTitleValue('MAKE_NEW_LIST') == 'TRUE' ? true : false;
			  
			  this.updateBlock_();  
		  },
		  saveConnections: Blockly.saveConnections,
		  getVars: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  blocksInScope: function() {
		    var toBlock = this.getInputTargetBlock('TO');
		    if (toBlock) {
		      return [toBlock];
		    } else {
		      return [];
		    }
		  },
		  declaredNames: function() {
		    return [this.getTitleValue('VAR')];
		  },
		  renameVar: function(oldName, newName) {
		    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
		      this.setTitleValue(newName, 'VAR');
		    }
		  },
		  typeblock: [{ translatedName: Blockly.LANG_LISTS_MAP_TITLE_MAP }],
		  prepareCollapsedText: function(){
		    this.getTitle_('COLLAPSED_TEXT')
		        .setText(Blockly.LANG_LISTS_MAP_TITLE_MAP);
		  }
		};



Blockly.Language.lists_reduce = {
  // For each loop.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_REDUCE_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('LIST')
        .setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
        .appendTitle(Blockly.LANG_LISTS_REDUCE_TITLE_REDUCE)
        .appendTitle(Blockly.LANG_LISTS_REDUCE_INPUT_INLIST)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('INITANSWER')
    	.appendTitle(Blockly.LANG_LISTS_REDUCE_INPUT_INITIAL_ANSWER)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput('DESCRIPTION')
    	.appendTitle(Blockly.LANG_LISTS_REDUCE_INPUT_COMBINE)
    	.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_REDUCE_INPUT_VAR,
                                                       true, // name is editable
                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
                     'VAR1')
        .appendTitle(Blockly.LANG_LISTS_REDUCE_INPUT_AND)
        .appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_REDUCE_INPUT_ANSWER,
                                                       true, // name is editable
                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
                     'VAR2') 
    	.setAlign(Blockly.ALIGN_RIGHT);
    this.appendIndentedValueInput('COMBINE');
    this.setOutput(true, null);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_REDUCE_TOOLTIP);
    this.appendCollapsedInput()
        .appendTitle(Blockly.LANG_LISTS_REDUCE_TITLE_REDUCE, 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  getVars: function() {
	var names = []
	names.push(this.getTitleValue('VAR1'));
	names.push(this.getTitleValue('VAR2'));
    return names;
  },
  blocksInScope: function() {
    var combineBlock = this.getInputTargetBlock('COMBINE');
    if (combineBlock) {
      return [combineBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
	return this.getVars();
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR1'))) {
      this.setTitleValue(newName, 'VAR1');
    }
    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR2'))) {
        this.setTitleValue(newName, 'VAR2');
    }
  },
  typeblock: [{ translatedName: Blockly.LANG_LISTS_REDUCE_TITLE_REDUCE }],
  prepareCollapsedText: function(){
    this.getTitle_('COLLAPSED_TEXT')
        .setText(Blockly.LANG_LISTS_REDUCE_TITLE_REDUCE);
		  }
};

Blockly.Language.lists_reverse = {
  // Make a new reversed list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_REVERSE_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('make new reversed list from');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_REVERSE_TOOLTIP);
    this.appendCollapsedInput().appendTitle('reverse', 'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.LANG_LISTS_REVERSE_TITLE_REVERSE }]
}; 

Blockly.Language.lists_sort = {
  // Make a new sorted list.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_SORT_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.setOutput(true, Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.OUTPUT));
    this.appendValueInput('LIST').setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT)).appendTitle('make new sorted list from');
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_SORT_TOOLTIP);
    this.appendCollapsedInput().appendTitle('sort', 'COLLAPSED_TEXT');
   },
   onchange: Blockly.WarningHandler.checkErrors,
   typeblock: [{ translatedName: Blockly.LANG_LISTS_SORT_TITLE_SORT }]
};

Blockly.Language.lists_sort_comparator = {
  // For each loop.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_SORT_COMPARATOR_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('LIST')
        .setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
        .appendTitle(Blockly.LANG_LISTS_SORT_COMPARATOR_TITLE_SORT)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput('DESCRIPTION')
    	.appendTitle(Blockly.LANG_LISTS_SORT_COMPARATOR_INPUT_COMPARATOR)
    	.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_SORT_COMPARATOR_INPUT_VAR1,
                                                       true, // name is editable
                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
                     'VAR1')
        .appendTitle(Blockly.LANG_LISTS_SORT_COMPARATOR_INPUT_AND)
        .appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_SORT_COMPARATOR_INPUT_VAR2,
                                                       true, // name is editable
                                                       Blockly.FieldFlydown.DISPLAY_BELOW),
                     'VAR2')  
    	.setAlign(Blockly.ALIGN_RIGHT);
    this.appendIndentedValueInput('COMPARE');
    this.setOutput(true, null);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_SORT_COMPARATOR_TOOLTIP);
    this.appendCollapsedInput()
        .appendTitle(Blockly.LANG_LISTS_SORT_COMPARATOR_TITLE_SORT,'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  getVars: function() {
		var names = []
		names.push(this.getTitleValue('VAR1'));
		names.push(this.getTitleValue('VAR2'));
	    return names;
  },
  blocksInScope: function() {
    var compareBlock = this.getInputTargetBlock('COMPARE');
    if (compareBlock) {
      return [compareBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
	 return this.getVars();
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR1'))) {
      this.setTitleValue(newName, 'VAR1');
    }
    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR2'))) {
        this.setTitleValue(newName, 'VAR2');
    }
  },
  typeblock: [{ translatedName: Blockly.LANG_LISTS_SORT_COMPARATOR_TITLE_SORT }],
  prepareCollapsedText: function(){
    this.getTitle_('COLLAPSED_TEXT')
        .setText(Blockly.LANG_LISTS_SORT_COMPARATOR_TITLE_SORT);
  }
};

Blockly.Language.lists_sort_key = {
  // For each loop.
  category : Blockly.LANG_CATEGORY_LISTS,
  helpUrl : Blockly.LANG_LISTS_SORT_KEY_HELPURL,
  init : function() {
    this.setColour(Blockly.LIST_CATEGORY_HUE);
    this.appendValueInput('LIST')
        .setCheck(Blockly.Language.YailTypeToBlocklyType("list",Blockly.Language.INPUT))
        .appendTitle(Blockly.LANG_LISTS_SORT_KEY_TITLE_SORT)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput('DESCRIPTION')
    	.appendTitle(Blockly.LANG_LISTS_SORT_KEY_INPUT_KEY)    	
    	.appendTitle(new Blockly.FieldParameterFlydown(Blockly.LANG_LISTS_SORT_KEY_INPUT_VAR,
    													true, // name is editable
    													Blockly.FieldFlydown.DISPLAY_BELOW),
    													'VAR')
    	.setAlign(Blockly.ALIGN_RIGHT);
    this.appendIndentedValueInput('KEY');
    this.setOutput(true, null);
    Blockly.Language.setTooltip(this, Blockly.LANG_LISTS_SORT_KEY_TOOLTIP);
    this.appendCollapsedInput()
        .appendTitle(Blockly.LANG_LISTS_SORT_KEY_TITLE_SORT,'COLLAPSED_TEXT');
  },
  onchange: Blockly.WarningHandler.checkErrors,
  getVars: function() {
    return [this.getTitleValue('VAR')];
  },
  blocksInScope: function() {
    var keyBlock = this.getInputTargetBlock('KEY');
    if (keyBlock) {
      return [keyBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
    return [this.getTitleValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  },
  typeblock: [{ translatedName: Blockly.LANG_LISTS_SORT_KEY_TITLE_SORT }],
  prepareCollapsedText: function(){
    this.getTitle_('COLLAPSED_TEXT')
        .setText(Blockly.LANG_LISTS_SORT_KEY_TITLE_SORT);
   }
};

>>>>>>> added filter mutator:appinventor/blocklyeditor/src/language/common/lists.js
