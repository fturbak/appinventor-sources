// -*- mode: java; c-basic-offset: 2; -*-
// Copyright 2013-2014 MIT, All rights reserved
// Released under the MIT License https://raw.github.com/mit-cml/app-inventor/master/mitlicense.txt
/**
 * @fileoverview Control blocks for Blockly, modified for App Inventor
 * @author fraser@google.com (Neil Fraser)
 * @author andrew.f.mckinney@gmail.com (Andrew F. McKinney)
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to language files.
 */

/**
 * Lyn's History:
 * [lyn, 10/27/13] Specify direction of flydowns
 * [lyn, 10/25/13] Made collapsed block labels more sensible.
 * [lyn, 10/10-14/13]
 *   + Installed flydown index variable declarations in forRange and forEach loops
 *   + Abstracted over string labels on all blocks using constants defined in en/_messages.js
 *   + Renamed "for <i> start [] end [] step []" block to "for each <number> from [] to [] by []"
 *   + Renamed "for each <i> in list []" block to "for each <item> in list []"
 *   + Renamed "choose test [] then-return [] else-return []" to "if [] then [] else []"
 *     (TODO: still needs to have a mutator like the "if" statement blocks).
 *   + Renamed "evaluate" block to "evaluate but ignore result"
 *   + Renamed "do {} then-return []" block to "do {} result []" and re-added this block
 *     to the Control drawer (who removed it?)
 *   + Removed get block (still in Variable drawer; no longer needed with parameter flydowns)
 * [lyn, 11/29-30/12]
 *   + Change forEach and forRange loops to take name as input text rather than via plug.
 *   + For these blocks, add extra methods to support renaming.
 * [Hal, 6/30/14] Redo the If block creation code and add the expression form of If.
 */

'use strict';

goog.provide('Blockly.Blocks.control');

goog.require('Blockly.Blocks.Utilities');


// This a constructor for the two If blocks: If (the statement form) & If_expression
// Arg is true if there is an output (expression); false if no output (statement)
// The two blocks are identical except that the input slots on the "then" pieces are
// value slots for IfExpression and statement slots for IfStatement.  Also
// ifExpression must always have an ELSE slot.
// The titles and tooltext are also different.


Blockly.Blocks['create_if_block'] = function (if_has_output) {
  // Use RESULT or DO for the input socket name,
  // depending on whether this is the IF statement or the IF expression
  // (but use ELSE for the input to the ELSE socket in both cases).
  var resultName = (if_has_output) ? 'RETURN' : 'DO';

  // Conditionalize the messages on the input sockets
  var msgThen = (if_has_output) ?
      Blockly.Msg.LANG_CONTROLS_IF_EXPRESSION_INPUT_THEN :
      Blockly.Msg.LANG_CONTROLS_IF_STATEMENT_INPUT_THEN ;

  var msgElse = (if_has_output) ?
      Blockly.Msg.LANG_CONTROLS_IF_EXPRESSION_INPUT_ELSE :
      Blockly.Msg.LANG_CONTROLS_IF_STATEMENT_INPUT_ELSE;

  return {
    category: Blockly.Msg.LANG_CATEGORY_CONTROLS,

    helpUrl: Blockly.Msg.LANG_CONTROLS_IF_HELPURL,
    init: function() {
      // Assign 'this' to a variable for use in closures within this function
      var thisBlock = this; // correct block for closure;

      // Appending function that adds expression sockets for IF expressions
      // and statement sockets for IF statememts
      this.appendMyInput = function (inputName) {
        if (if_has_output) {
          return thisBlock.appendValueInput(inputName);
        } else {
          return thisBlock.appendStatementInput(inputName);
        }
      };

      this.setColour(Blockly.CONTROL_CATEGORY_HUE);
      this.setOutput(if_has_output, null);

      // socket for the first condition
      this.appendValueInput('IF0')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean",Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_CONTROLS_IF_MSG_IF);

      // socket for the first input (DO or RETURN)
      this.appendMyInput(resultName + '0')
          .appendField(msgThen)
          .setAlign(Blockly.ALIGN_RIGHT);

      // there are no elseIf blocks initially
      this.elseifCount_ = 0;

      if (if_has_output) {
        // the If Expression initially ends with an ELSE.
        // This code guarantees that ELSE clause will appear on the block in the drawer.
        this.appendValueInput('ELSE')
            .appendField(msgElse)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.elseCount_ = 1;
      } else {
        // If statement initially has no ELSE
        this.elseCount_ = 0;
      }

      this.setPreviousStatement(!if_has_output);
      this.setNextStatement(!if_has_output);

      if (if_has_output) {
        // For IF expression, do not have ELSE block in mutator drawer
        this.setMutator(new Blockly.Mutator(['controls_if_elseif']));
      } else {
        // IF statement has both ELSE IF and ELSE blocks in drawer
        this.setMutator(new Blockly.Mutator(['controls_if_elseif', 'controls_if_else']));
      }

      this.warnings = [{name:"checkEmptySockets", sockets:[{baseName:"IF"}, {baseName:"DO"}]}];

      // set the tooltip text
      if (if_has_output) {
        this.setTooltip(function() {
          if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
            return Blockly.Msg.LANG_CONTROLS_IF_EXPRESSION_TOOLTIP_1;
          } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
            return Blockly.Msg.LANG_CONTROLS_IF_EXPRESSION_TOOLTIP_2;
          } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
            return Blockly.Msg.LANG_CONTROLS_IF_EXPRESSION_TOOLTIP_3;
          } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
            return Blockly.Msg.LANG_CONTROLS_IF_EXPRESSION_TOOLTIP_4;
          }
          return '';
        });
      } else {
        this.setTooltip(function() {
          if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
            return Blockly.Msg.LANG_CONTROLS_IF_STATEMENT_TOOLTIP_1;
          } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
            return Blockly.Msg.LANG_CONTROLS_IF_STATEMENT_TOOLTIP_2;
          } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
            return Blockly.Msg.LANG_CONTROLS_IF_STATEMENT_TOOLTIP_3;
          } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
            return Blockly.Msg.LANG_CONTROLS_IF_STATEMENT_TOOLTIP_4;
          }
          return '';
        });
      };

    },

    mutationToDom: function() {
      if (!this.elseifCount_ && !this.elseCount_) {
        return null;
      }
      var container = document.createElement('mutation');
      if (this.elseifCount_) {
        container.setAttribute('elseif', this.elseifCount_);
      }
      if (this.elseCount_) {
        container.setAttribute('else', 1);
      }
      return container;
    },

    domToMutation: function(xmlElement) {
      // build the elseIf and Else slots from the counts in the Dom.
      if (xmlElement.getAttribute('elseif') === null) {
        this.elseifCount_ = 0;
      } else {
        this.elseifCount_ = window.parseInt(xmlElement.getAttribute('elseif'), 10);
      }

      // For IF expression, must remove default ELSE input from initial block
      // in order to add ELSE IF inputs before it.
      if (if_has_output) {
        this.removeInput('ELSE');
      }

      // handle the elseIf slots
      for (var x = 1; x <= this.elseifCount_; x++) {
        this.appendValueInput('IF' + x)
          .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean", Blockly.Blocks.Utilities.INPUT))
          .appendField(Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSEIF)
        this.appendMyInput(resultName + x)
            .appendField(msgThen)
            .setAlign(Blockly.ALIGN_RIGHT);
      }

      if (if_has_output) {
        // If expression always has an ELSE clause
        this.elseCount_ = 1;
      } else {
        // For if statements, read the else count from the DOM.
        this.elseCount_ = window.parseInt(xmlElement.getAttribute('else'), 10);
      }

      // no need to do anything for an expression, since the else was added in the block initialization
      if (this.elseCount_) {
        this.appendMyInput('ELSE')
            .appendField(msgElse)
            .setAlign(Blockly.ALIGN_RIGHT);
      }
    },

    decompose: function(workspace) {
      var containerBlock = new Blockly.Block.obtain(workspace, 'controls_if_if');
      containerBlock.initSvg();
      var connection = containerBlock.getInput('STACK').connection;
      for (var x = 1; x <= this.elseifCount_; x++) {
        var elseifBlock = new Blockly.Block.obtain(workspace, 'controls_if_elseif');
        elseifBlock.initSvg();
        connection.connect(elseifBlock.previousConnection);
        connection = elseifBlock.nextConnection;
      }
      // Only add an ELSE clause block for IF statements, *not* IF expressions
      if (!if_has_output && this.elseCount_) {
        var elseBlock = new Blockly.Block.obtain(workspace, 'controls_if_else');
        elseBlock.initSvg();
        connection.connect(elseBlock.previousConnection);
      }
      return containerBlock;
    },

    compose: function(containerBlock) {
      // Rebuild the block's optional inputs from the mutator window

      if (this.elseCount_) {
        this.removeInput('ELSE');
      }
      this.elseCount_ = 0;

      // Disconnect all the elseif input blocks and destroy the inputs.
      for (var x = this.elseifCount_; x > 0; x--) {
        this.removeInput('IF' + x);
        this.removeInput(resultName + x);
      };
      this.elseifCount_ = 0;


      var clauseBlock = containerBlock.getInputTargetBlock('STACK');

      var ifInput, thenInput, elseInput;
      while (clauseBlock) {
        switch (clauseBlock.type) {
        case 'controls_if_elseif':
          this.elseifCount_++;
          // add the IF part
          ifInput = this.appendValueInput('IF' + this.elseifCount_)
            .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean",Blockly.Blocks.Utilities.INPUT))
            .appendField(Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSEIF);
          // add the THEN part (DO or RETURN)
          thenInput = this.appendMyInput(resultName + this.elseifCount_)
                      .appendField(msgThen)
                      .setAlign(Blockly.ALIGN_RIGHT);
          // Reconnect any child blocks.
          if (clauseBlock.testConnection_) {
            ifInput.connection.connect(clauseBlock.testConnection_);
          }
          if (clauseBlock.thenConnection_) {
            thenInput.connection.connect(clauseBlock.thenConnection_);
          }
          break;

        case 'controls_if_else':
          this.elseCount_ = 1;
          elseInput = this.appendMyInput('ELSE')
                          .appendField(msgElse)
                          .setAlign(Blockly.ALIGN_RIGHT);

          // Reconnect any child blocks.
          if (clauseBlock.elseConnection_) {
            elseInput.connection.connect(clauseBlock.elseConnection_);
          }
          break;

        default:
          throw 'Unknown block type.';
        }

        clauseBlock = clauseBlock.nextConnection &&
          clauseBlock.nextConnection.targetBlock();
      }

      // In the expression case, there must be a final else.
      // There are no ELSE clause blocks in this case, so need to treat this as a special case,
      // reconnected with connection saved in this.ifExpressionElseConnection_
      if (if_has_output) {
        this.elseCount_ = 1;
        elseInput = this.appendMyInput('ELSE')
            .appendField(msgElse)
            .setAlign(Blockly.ALIGN_RIGHT);

        // Reconnect any child blocks.
        if (this.ifExpressionElseConnection_) {
          elseInput.connection.connect(this.ifExpressionElseConnection_);
        }
      }
    },

    saveConnections: function(containerBlock) {
      // Store a pointer to any connected child blocks.
      var inputDo;
      var clauseBlock = containerBlock.getInputTargetBlock('STACK');
      var x = 1;
      while (clauseBlock) {
        switch (clauseBlock.type) {
          case 'controls_if_elseif':
            var inputIf = this.getInput('IF' + x);
            var inputResult = this.getInput(resultName + x);
            clauseBlock.testConnection_ =
                inputIf && inputIf.connection.targetConnection;
            clauseBlock.thenConnection_ =
                inputResult && inputResult.connection.targetConnection;
            x++;
            break;
          case 'controls_if_else':
            var inputResult = this.getInput('ELSE');
            clauseBlock.elseConnection_ =
                inputResult && inputResult.connection.targetConnection;
            break;
          default:
            throw 'Unknown block type.';
        }
        clauseBlock = clauseBlock.nextConnection &&
            clauseBlock.nextConnection.targetBlock();
      }
      // For IF expression, store ELSE connection in IF block, not clause block
      // (because there is no ELSE clause block)
      if (if_has_output) {
        var elseInput = this.getInput('ELSE');
        this.ifExpressionElseConnection_ =  elseInput &&  elseInput.connection.targetConnection;
      }
    },
    typeblock: [{ translatedName: Blockly.Msg.LANG_CONTROLS_IF_IF_TITLE_IF }]
  }
};

Blockly.Blocks['controls_if'] = Blockly.Blocks.create_if_block(false);

Blockly.Blocks['controls_if_expression'] = Blockly.Blocks.create_if_block(true);

Blockly.Blocks['controls_if_if'] = {
  // this is the if block in the mutator's mini-workspace
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_CONTROLS_IF_IF_TITLE_IF);
    this.appendStatementInput('STACK');
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_IF_IF_TOOLTIP)
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.contextMenu = false;
  }
};

Blockly.Blocks['controls_if_elseif'] = {
  // this is the else_if block in the mutator's mini-workspace
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TITLE_ELSEIF);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['controls_if_else'] = {
  // this is the else block in the mutator's mini-workspace
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_CONTROLS_IF_ELSE_TITLE_ELSE);
    this.setPreviousStatement(true);
    this.setNextStatement(false);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_IF_ELSE_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['controls_forRange'] = {
  // For range.
  category : Blockly.Msg.LANG_CATEGORY_CONTROLS,
  helpUrl : Blockly.Msg.LANG_CONTROLS_FORRANGE_HELPURL,
  init : function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    //this.setOutput(true, null);
    // Need to deal with variables here
    // [lyn, 11/30/12] Changed variable to be text input box that does renaming right (i.e., avoids variable capture)
    // Old code:
    // this.appendValueInput('VAR').appendField('for range').appendField('variable').setAlign(Blockly.ALIGN_RIGHT);
    // this.appendValueInput('START').setCheck(Number).appendField('start').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('START')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_ITEM)
        .appendField(new Blockly.FieldParameterFlydown(Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_VAR, true, Blockly.FieldFlydown.DISPLAY_BELOW), 'VAR')
        .appendField(Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_START)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('END')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_END)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('STEP')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("number",Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_STEP)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_DO)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_FORRANGE_TOOLTIP);
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  blocksInScope: function() {
    var doBlock = this.getInputTargetBlock('DO');
    if (doBlock) {
      return [doBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_ITEM }]
};

Blockly.Blocks['controls_forEach'] = {
  // For each loop.
  category : Blockly.Msg.LANG_CATEGORY_CONTROLS,
  helpUrl : Blockly.Msg.LANG_CONTROLS_FOREACH_HELPURL,
  init : function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    //this.setOutput(true, null);
    // [lyn, 10/07/13] Changed default name from "i" to "item"
    // [lyn, 11/29/12] Changed variable to be text input box that does renaming right (i.e., avoids variable capture)
    // Old code:
    // this.appendValueInput('VAR').appendField('for range').appendField('variable').setAlign(Blockly.ALIGN_RIGHT);
    // this.appendValueInput('START').setCheck(Number).appendField('start').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('LIST')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("list",Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_ITEM)
        .appendField(new Blockly.FieldParameterFlydown(Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_VAR,
            true, Blockly.FieldFlydown.DISPLAY_BELOW), 'VAR')
        .appendField(Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_INLIST)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendStatementInput('DO').appendField(Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_FOREACH_TOOLTIP);
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  blocksInScope: function() {
    var doBlock = this.getInputTargetBlock('DO');
    if (doBlock) {
      return [doBlock];
    } else {
      return [];
    }
  },
  declaredNames: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_ITEM }]
};

/* [lyn 10/10/13] With parameter flydown changes,
* I don't think a special GET block in the Control drawer is necesssary
Blockly.Blocks.for_lexical_variable_get = {
  // Variable getter.
  category: Blockly.Msg.LANG_CATEGORY_CONTROLS,
  helpUrl: Blockly.Msg.LANG_CONTROLS_GET_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.fieldVar_ = new Blockly.FieldLexicalVariable(" ");
    this.fieldVar_.setBlock(this);
    this.appendDummyInput()
        .appendField("get")
        .appendField(this.fieldVar_, 'VAR');
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.LANG_VARIABLES_GET_TOOLTIP);
    this.errors = [{name:"checkIsInDefinition"},{name:"checkDropDownContainsValidValue",dropDowns:["VAR"]}];
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  onchange: function() {
     // [lyn, 11/10/12] Checks if parent has changed. If so, checks if curent variable name
     //    is still in scope. If so, keeps it as is; if not, changes to ???
     //    *** NEED TO MAKE THIS BEHAVIOR BETTER!
    if (this.fieldVar_) {
       var currentName = this.fieldVar_.getText();
       var nameList = this.fieldVar_.getNamesInScope();
       var cachedParent = this.fieldVar_.getCachedParent();
       var currentParent = this.fieldVar_.getBlock().getParent();
       // [lyn, 11/10/12] Allow current name to stay if block moved to workspace in "untethered" way.
       //   Only changed to ??? if tether an untethered block.
       if (currentParent != cachedParent) {
         this.fieldVar_.setCachedParent(currentParent);
         if  (currentParent !== null) {
           for (var i = 0; i < nameList.length; i++ ) {
             if (nameList[i] === currentName) {
               return; // no change
             }
           }
           // Only get here if name not in list
           this.fieldVar_.setText(" ");
         }
       }
    }
    Blockly.WarningHandler.checkErrors.call(this);
  },
  renameLexicalVar: function(oldName, newName) {
    // console.log("Renaming lexical variable from " + oldName + " to " + newName);
    if (oldName === this.getFieldValue('VAR')) {
        this.setFieldValue(newName, 'VAR');
    }
  }
};
*/

Blockly.Blocks['controls_while'] = {
  // While condition.
  category : Blockly.Msg.LANG_CATEGORY_CONTROLS,
  helpUrl : Blockly.Msg.LANG_CONTROLS_WHILE_HELPURL,
  init : function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput('TEST')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean",Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_CONTROLS_WHILE_TITLE)
        .appendField(Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_TEST)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_DO)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_WHILE_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_CONTROLS_WHILE_TITLE }]
};

// [lyn, 01/15/2013] Remove DO C-sockets because now handled more modularly by DO-THEN-RETURN block.
Blockly.Blocks['controls_choose'] = {
  // Choose.
  category : Blockly.Msg.LANG_CATEGORY_CONTROLS,
  helpUrl : Blockly.Msg.LANG_CONTROLS_CHOOSE_HELPURL,
  init : function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.setOutput(true, null);
    this.appendValueInput('TEST')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("boolean",Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_CONTROLS_CHOOSE_TITLE)
        .appendField(Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_TEST)
        .setAlign(Blockly.ALIGN_RIGHT);
    // this.appendStatementInput('DO0').appendField('then-do').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('THENRETURN')
        .appendField(Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_THEN_RETURN)
        .setAlign(Blockly.ALIGN_RIGHT);
    // this.appendStatementInput('ELSE').appendField('else-do').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('ELSERETURN')
        .appendField(Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_ELSE_RETURN)
        .setAlign(Blockly.ALIGN_RIGHT);
    /* this.setTooltip('If the condition being tested is true, the agent will '
       + 'run all the blocks attached to the \'then-do\' section and return the value attached '
       + 'to the \'then-return\'slot. Otherwise, the agent will run all blocks attached to '
       + 'the \'else-do\' section and return the value in the \'else-return\' slot.');
       */
    // [lyn, 01/15/2013] Edit description to be consistent with changes to slots.
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_CHOOSE_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_CONTROLS_CHOOSE_TITLE + ' ' +
      Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_THEN_RETURN + ' ' +
      Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_ELSE_RETURN}]
};

// [lyn, 10/10/13] This used to be in the control drawer as well as the procedure drawer
// but someone removed it from the control drawer. I think it still belongs here.
Blockly.Blocks['controls_do_then_return'] = {
  // String length.
  category: Blockly.Msg.LANG_CATEGORY_CONTROLS,
  helpUrl: Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendStatementInput('STM')
        .appendField(Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_DO);
    this.appendValueInput('VALUE')
        .appendField(Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_RETURN)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TITLE }]
};

// [lyn, 01/15/2013] Added
Blockly.Blocks['controls_eval_but_ignore'] = {
  category: Blockly.Msg.LANG_CATEGORY_CONTROLS,
  helpUrl: Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput('VALUE')
        .appendField(Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TITLE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TITLE }]
};

/* [lyn 10/10/13] Hal doesn't like NOTHING. Must rethink
// [lyn, 01/15/2013] Added
Blockly.Blocks.controls_nothing = {
  // Expression for the nothing value
  category: Blockly.Msg.LANG_CATEGORY_CONTROLS,
  helpUrl: Blockly.Msg.LANG_CONTROLS_NOTHING_HELPURL,
  init: function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField("nothing");
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_NOTHING_TOOLTIP);
  },
  onchange: Blockly.WarningHandler.checkErrors,
  typeblock: [{ translatedName: Blockly.Msg.LANG_CONTROLS_NOTHING_TITLE }]
};
*/


Blockly.Blocks['controls_openAnotherScreen'] = {
  // Open another screen
  category : Blockly.Msg.LANG_CATEGORY_CONTROLS,
  helpUrl : Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_HELPURL,
  init : function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput('SCREEN')
        .appendField(Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TITLE)
        .appendField(Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_INPUT_SCREENNAME)
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("text",Blockly.Blocks.Utilities.INPUT));
    this.setPreviousStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TITLE }]
};

Blockly.Blocks['controls_openAnotherScreenWithStartValue'] = {
  // Open another screen with start value
  category : Blockly.Msg.LANG_CATEGORY_CONTROLS,
  helpUrl : Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_HELPURL,
  init : function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput('SCREENNAME')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("text",Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TITLE)
        .appendField(Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_SCREENNAME)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('STARTVALUE')
        .appendField(Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_STARTVALUE)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TITLE }]
};

Blockly.Blocks['controls_getStartValue'] = {
  // Get start value
  category : Blockly.Msg.LANG_CATEGORY_CONTROLS,
  helpUrl : Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_HELPURL,
  init : function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.setOutput(true, null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TITLE);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TITLE }]
};

Blockly.Blocks['controls_closeScreen'] = {
  // Close screen
  category : Blockly.Msg.LANG_CATEGORY_CONTROLS,
  helpUrl : Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_HELPURL,
  init : function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TITLE);
    this.setPreviousStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TITLE }]
};

Blockly.Blocks['controls_closeScreenWithValue'] = {
  // Close screen with value
  category : Blockly.Msg.LANG_CATEGORY_CONTROLS,
  helpUrl : Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_HELPURL,
  init : function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput('SCREEN')
        .appendField(Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TITLE)
        .appendField(Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_INPUT_RESULT)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TITLE }]
};

Blockly.Blocks['controls_closeApplication'] = {
  // Close application
  category : Blockly.Msg.LANG_CATEGORY_CONTROLS,
  helpUrl : Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_HELPURL,
  init : function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendDummyInput().appendField(Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TITLE);
    this.setPreviousStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TITLE }]
};

Blockly.Blocks['controls_getPlainStartText'] = {
  // Get plain start text
  category : Blockly.Msg.LANG_CATEGORY_CONTROLS,
  helpUrl : Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_HELPURL,
  init : function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.setOutput(true, Blockly.Blocks.Utilities.YailTypeToBlocklyType("text",Blockly.Blocks.Utilities.OUTPUT));
    this.appendDummyInput().appendField('get plain start text');
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TITLE }]
};

Blockly.Blocks['controls_closeScreenWithPlainText'] = {
  // Close screen with plain text
  category : Blockly.Msg.LANG_CATEGORY_CONTROLS,
  helpUrl : Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_HELPURL,
  init : function() {
    this.setColour(Blockly.CONTROL_CATEGORY_HUE);
    this.appendValueInput('TEXT')
        .setCheck(Blockly.Blocks.Utilities.YailTypeToBlocklyType("text",Blockly.Blocks.Utilities.INPUT))
        .appendField(Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TITLE)
        .appendField(Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_INPUT_TEXT)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setTooltip(Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TOOLTIP);
  },
  typeblock: [{ translatedName: Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TITLE }]
};
