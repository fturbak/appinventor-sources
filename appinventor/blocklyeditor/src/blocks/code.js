/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://code.google.com/p/blockly/
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
 * @fileoverview Blocks for textual languages in App Inventor
 * @author kchadha@wellesley.edu (Karishma Chadha)
 *
 */

/**
 * Lyn's Change History:
 * [lyn, 08/24/2104] Moved this file from blocklyeditor/src/language/common/code.js to
 *   blocklyeditor/src/blocks/code.js and adapted to style of other blocks files.
 *
 */

'use strict';

goog.provide('Blockly.Blocks.code');

Blockly.Blocks['code_write_tail_exp'] = {
  category: Blockly.Msg.LANG_CATEGORY_CODE,
  init: function() {
    this.setColour(Blockly.CODE_CATEGORY_HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LANG_CODE_WRITE_EXP_TITLE)
      .appendField(new Blockly.FieldCodeBlockInput(Blockly.Msg.LANG_CODE_WRITE_EXP_DEFAULT_INPUT), 'CODE'); 
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.LANG_CODE_WRITE_EXP_TOOLTIP);
    // [2021/01/14, lyn]: Need to figure this out: this.errors = [{name:"checkANTLRErrors"}];
  },
  // [2021/01/14, lyn]: Need to figure this out: onchange: Blockly.WarningHandler.checkErrors,
  // [2021/01/14, lyn]: Need to figure this out: typeblock: [{ translatedName: Blockly.Msg.LANG_CODE_WRITE_EXP_TYPEBLOCK_TITLE}],
  // [2021/01/14, lyn]: Need to figure this out: 
  /* 
  codeCustomContextMenu: function(options) {
    var myBlock = this;    var convertToBlocksOption = {text: Blockly.Msg.LANG_CODE_CONVERT_TO_BLOCKS_OPTION};
    convertToBlocksOption.enabled = (!this.errorIcon && !this.disabled);
    convertToBlocksOption.callback = function() {
      Blockly.Tail.generateAIExpressionBlock(myBlock, true);
      myBlock.dispose(true, false);
    };
    options.push(convertToBlocksOption);
  }
  */ 
};

 //if the tail block is connected to another block, replace the connections for the newly generated blocks
   //  if(keepConnections && myBlock.outputConnection.targetConnection){
   //  	var otherBlockConnection = myBlock.outputConnection.targetConnection;
   //  	var newConnection = newBlock.outputConnection;
   //  	myBlock.unplug(true,true);
   //  	otherBlockConnection.connect(newConnection);
   //  } else { //else move new generated blocks to location of myBlock

  	//   // Move the duplicate next to the old block.
	  //   var xy = myBlock.getRelativeToSurfaceXY();
	  //   // if (Blockly.RTL) {
	  //   // 	xy.x -= Blockly.SNAP_RADIUS;
	  //   // } else {
	  //   // 	xy.x += Blockly.SNAP_RADIUS;
	  //   // }
	  //   // xy.y += Blockly.SNAP_RADIUS * 2;
	  //   newBlock.moveBy(xy.x, xy.y);
	  // }

Blockly.Blocks['code_write_tail_stmt'] = {
  category: Blockly.Msg.LANG_CATEGORY_CODE,
  init: function(){
    this.setColour(Blockly.CODE_CATEGORY_HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LANG_CODE_WRITE_STMT_TITLE)
      .appendField(new Blockly.FieldCodeBlockInput(Blockly.Msg.LANG_CODE_WRITE_STMT_DEFAULT_INPUT), 'CODE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CODE_WRITE_STMT_TOOLTIP);
    // [2021/01/14, lyn]: Need to figure this out: this.errors = [{name:"checkANTLRErrors"}];
  },
  // [2021/01/14, lyn]: Need to figure this out: onchange: Blockly.WarningHandler.checkErrors,
  // [2021/01/14, lyn]: Need to figure this out: typeblock: [{ translatedName: Blockly.Msg.LANG_CODE_WRITE_STMT_TYPEBLOCK_TITLE }],
  // [2021/01/14, lyn]: Need to figure this out: 
  /* codeCustomContextMenu: function(options){
    var myBlock = this;
    var convertToBlocksOption = {text: Blockly.Msg.LANG_CODE_CONVERT_TO_BLOCKS_OPTION};
    convertToBlocksOption.enabled = (!this.errorIcon && !this.disabled);
    convertToBlocksOption.callback = function(){
      Blockly.Tail.generateAIStatementBlock(myBlock, true);
      myBlock.dispose(false, false); //we don't want to use the healstack option here
    };
    options.push(convertToBlocksOption);
  }
  */
};



// var reposition = true; //variable which indicates whether the newly generated block(s) need to be repositioned or not

	// //if the tail block is connected to another block, replace the connections for the newly generated blocks
 //  if(keepConnections){
 //  	if(myBlock.previousConnection.targetConnection){
 //  		//no need to reposition if the block is connected to a previous block
 //      //(this if statement will handle putting the block in the correct place)
 //  		reposition = false;
 //  		var previousBlockConnection = myBlock.previousConnection.targetConnection;
 //  		var newConnection = newBlock.previousConnection;
 //  		myBlock.unplug(false,false);
 //  		previousBlockConnection.connect(newConnection);
 //  	}
 //  	if(myBlock.nextConnection.targetConnection){
 //  		//if this block only has a next block but not a previous block, we do need to reposition
 //      //if this block did have a previous block, we don't need to reposition, but the above if
 //      //statement will take care of that, so we don't need to change the value of reposition here
 //  		var nextBlockConnection = myBlock.nextConnection.targetConnection;
 //  		var newConnection = newBlock.nextConnection;
 //  		//disconnecting child of myBlock so that we can connect it to the newly generated block
 //  		var nextBlock = myBlock.nextConnection.targetBlock();
 //  		nextBlock.unplug(false,false);
 //  		newConnection.connect(nextBlockConnection);
 //   	}
 //  }
 //  if(reposition){
 //  	var xy = myBlock.getRelativeToSurfaceXY();
 //    newBlock.moveBy(xy.x, xy.y);
 //  }
 // //  if(!newBlock.previousConnection.targetConnection) { //else move new generated blocks to location of myBlock
	// //   //this doesn't need to happen for a tail stmt block that has a previous block connected, 
	// //   //but it does need to happen for a block that doesn't, but does have a next block, 
	// //   //so we should just do this in all cases to be safe....

 // //    // Move the duplicate next to the old block.
 // //    //console.log("WHAT IS HAPPENING????!!!!!!");
 // //    var xy = myBlock.getRelativeToSurfaceXY();
 // //    newBlock.moveBy(xy.x, xy.y);
	// // }

Blockly.Blocks['code_write_tail_decl'] = {
    category: Blockly.Msg.LANG_CATEGORY_CODE,
    init: function(){
      this.setColour(Blockly.CODE_CATEGORY_HUE);
      this.appendDummyInput()
          .appendField(Blockly.Msg.LANG_CODE_WRITE_DECL_TITLE)
          .appendField(new Blockly.FieldCodeBlockInput(Blockly.Msg.LANG_CODE_WRITE_DECL_DEFAULT_INPUT), 'CODE');
      this.setTooltip(Blockly.LANG_CODE_WRITE_DECL_TOOLTIP);
      // [2021/01/14, lyn]: Need to figure this out: this.errors = [{name:"checkANTLRErrors"}];
    },
    // [2021/01/14, lyn]: Need to figure this out: onchange: Blockly.WarningHandler.checkErrors,
    // [2021/01/14, lyn]: Need to figure this out: typeblock: [{ translatedName: Blockly.Msg.LANG_CODE_WRITE_STMT_TYPEBLOCK_TITLE }],
    // [2021/01/14, lyn]: Need to figure this out: 
    /* codeCustomContextMenu: function(options){
    	var myBlock = this;
    	var convertToBlocksOption = {text: Blockly.Msg.LANG_CODE_CONVERT_TO_BLOCKS_OPTION};
        convertToBlocksOption.enabled = (!this.errorIcon && !this.disabled);
    	convertToBlocksOption.callback = function(){
    		Blockly.Tail.generateAITopLevelBlock(myBlock, true);
    		myBlock.dispose(false, false); //we don't want to use the healstack option here
    	};
    	options.push(convertToBlocksOption);
    }
    */
};

