Blockly.FieldCodeBlockInput = function(text, opt_changeHandler) {
 // Call parent's constructor.
  Blockly.FieldTextInput.call(this, text);
  this.changeHandler_ = opt_changeHandler;
};

// FieldCodeBlockInput is a subclass of FieldTextInput.
goog.inherits(Blockly.FieldCodeBlockInput, Blockly.FieldTextInput);

Blockly.FieldCodeBlockInput.prototype.textDoneChanging = true;

/**
 * Set the text in this field.
 * @param {string} text New text.
 */
Blockly.FieldCodeBlockInput.prototype.setText = function(text) {
  if (this.changeHandler_) {
    var validated = this.changeHandler_(text);
    // If the new text is invalid, validation returns null.
    // In this case we still want to display the illegal result.
    if (validated !== null && validated !== undefined) {
      text = validated;
    }
  }
  if(this.sourceBlock_ && this.sourceBlock_.outputConnection){
    this.sourceBlock_.outputConnection.setCheck(this.sourceBlock_.outputConnection.check_)
  }
  Blockly.Field.prototype.setText.call(this, text);
};

//copied from FieldTextInput
/**
 * Handle a change to the editor.
 * @param {!Event} e Keyboard event.
 * @private
 */
Blockly.FieldCodeBlockInput.prototype.onHtmlInputChange_ = function(e) {
  var htmlInput = Blockly.FieldTextInput.htmlInput_; //FieldTextInput was the only thing that worked here...
  if (e.keyCode == 13) {
    // Enter
    textDoneChanging=true;
    Blockly.WidgetDiv.hide();
  } else if (e.keyCode == 27) {
    // Esc
    textDoneChanging=true;
    this.setText(htmlInput.defaultValue);
    Blockly.WidgetDiv.hide();
  } else {
    // Update source block.
    textDoneChanging=false;
    var text = htmlInput.value;
    if (text !== htmlInput.oldValue_) {
      htmlInput.oldValue_ = text;
      this.setText(text);
      this.validate_();
    } else if (goog.userAgent.WEBKIT) {
      // Cursor key.  Render the source block to show the caret moving.
      // Chrome only (version 26, OS X).
      this.sourceBlock_.render();
    }
  }
};