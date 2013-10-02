//Blocks -> Text Converter

Blockly.BlocksToTextConverter = {};

Blockly.BlocksToTextConverter.expressionBlocks = ["controls_choose","logic_operation","logic_negate","logic_compare","math_compare",
"math_add", "math_multiply", "math_subtract", "math_division", "math_power", "math_divide", "math_single", "math_abs", "math_neg",
"math_round", "math_ceiling", "math_floor", "math_trig", "math_cos", "math_tan", "local_declaration_expression", "lexical_variable_get", "color_black",
"color_blue", "color_white", "color_magenta", "color_red", "color_light_gray", "color_pink", "color_gray", "color_orange", 
"color_dark_gray", "color_yellow", "color_green", "color_cyan", "color_make_color", "lists_create_with", "math_number", "text",
"logic_boolean", "logic_false", "component_set_get", "code_write_tail_exp"];

Blockly.BlocksToTextConverter.statementBlocks = ["controls_if","lexical_variable_set","code_write_tail_stmt", "local_declaration_statement", "component_set_get"];

Blockly.BlocksToTextConverter.topLevelBlocks = ["global_declaration","procedures_defnoreturn","procedures_defreturn","component_event", , "procedures_callreturn", ];

Blockly.BlocksToTextConverter.tailText;

Blockly.BlocksToTextConverter.type = "";

Blockly.BlocksToTextConverter.getImmediateChildrenByTagName = function(element, tagName){
	var elementsWithTag = [];
	var current = element.firstElementChild;
	while(!!current){
		if(current.nodeName.toLowerCase() === tagName.toLowerCase()){
			elementsWithTag.push(current);
		}
		current = current.nextElementSibling;
	}
	return elementsWithTag;
}

Blockly.BlocksToTextConverter.checkEmptySockets = function(block){
	if(Blockly.WarningHandler.checkEmptySockets.call(block)){
		return true;
	} else{ //check decendants of block
		var children = block.getChildren();
		for (var i = 0; i<children.length; i++){
			if(Blockly.WarningHandler.checkEmptySockets.call(children[i])){
				return true;
			}
		}
		return false;
	}
}

Blockly.BlocksToTextConverter.blockToTAIL = function(block){
	var root = Blockly.Xml.blockToDom_(block);
	Blockly.BlocksToTextConverter.tailText = "";
	//translate root node
	Blockly.BlocksToTextConverter.translateBlock(root);

	var tailBlockDom = document.createElement("block");
	tailBlockDom.setAttribute("type", Blockly.BlocksToTextConverter.type);
	var title = document.createElement("title");
	title.setAttribute("name","CODE");
	title.innerHTML = Blockly.BlocksToTextConverter.tailText;
	tailBlockDom.appendChild(title);

	var tailBlock = Blockly.Xml.domToBlock_(block.workspace,tailBlockDom);
	return tailBlock;
};

Blockly.BlocksToTextConverter.translateBlock = function(element){
	var tagName = element.nodeName.toLowerCase();
	if(tagName === "block"){
		var type = element.getAttribute("type");
		if(type === "component_set_get"){
			var mutations = Blockly.BlocksToTextConverter.getImmediateChildrenByTagName(element, "mutation");
			var mutation;
			if(mutations.length !== 0){
				mutation = mutations[0];
			}
			if(mutation.getAttribute("set_or_get") === "get"){
				Blockly.BlocksToTextConverter.type = "code_write_tail_exp";
				Blockly.BlocksToTextConverter.translateExpressionBlock(element);
			} else{
				Blockly.BlocksToTextConverter.type = "code_write_tail_stmt";
				Blockly.BlocksToTextConverter.translateStatementBlock(element);
			}

		}
		else{
			if(Blockly.BlocksToTextConverter.expressionBlocks.indexOf(type) !== -1){
		    //element is an expression block
		    Blockly.BlocksToTextConverter.type = "code_write_tail_exp";
		    Blockly.BlocksToTextConverter.translateExpressionBlock(element);
		  } else if(Blockly.BlocksToTextConverter.statementBlocks.indexOf(type) !== -1){
			  //element is a statement block
			  Blockly.BlocksToTextConverter.type = "code_write_tail_stmt";
			  Blockly.BlocksToTextConverter.translateStatementBlock(element);
			} else if(Blockly.BlocksToTextConverter.topLevelBlocks.indexOf(type) !== -1){
			  //element is a top level block
			  Blockly.BlocksToTextConverter.type = "code_write_tail_decl";
			  Blockly.BlocksToTextConverter.translateTopLevelBlock(element);
			} else{
		    //do nothing
		    console.log("I'm getting not getting an expression, statement, or top level block!! D=")
		  }
		}
	}
}

/**************************************Expression Blocks*****************************************/

Blockly.BlocksToTextConverter.translateExpressionBlock = function(element){
	var elementType = element.getAttribute("type");
	//expression block
	Blockly.BlocksToTextConverter.tailText += '{';
	Blockly.BlocksToTextConverter["translate_" + elementType].call(this, element);
	Blockly.BlocksToTextConverter.tailText += '}';
}

Blockly.BlocksToTextConverter.translate_controls_choose = function(element){
	var children = element.children;
	var ifBlock = children.namedItem("TEST").firstElementChild;
	var thenBlock = children.namedItem("THENRETURN").firstElementChild;
	var elseBlock = children.namedItem("ELSERETURN").firstElementChild;

	Blockly.BlocksToTextConverter.tailText += 'if ';
	Blockly.BlocksToTextConverter.translateExpressionBlock(ifBlock);
	Blockly.BlocksToTextConverter.tailText += ' then: ';
	Blockly.BlocksToTextConverter.translateExpressionBlock(thenBlock);
	Blockly.BlocksToTextConverter.tailText += ' else: ';
	Blockly.BlocksToTextConverter.translateExpressionBlock(elseBlock);
}

Blockly.BlocksToTextConverter.translate_logic_operation = function(element){
	var children = element.children;
	var aBlock = children.namedItem("A").firstElementChild;
	var bBlock = children.namedItem("B").firstElementChild;
	var op = children.namedItem("OP").innerHTML.toLowerCase();

	Blockly.BlocksToTextConverter.translateExpressionBlock(aBlock);
	Blockly.BlocksToTextConverter.tailText += ' ' + op + ' ' ;
	Blockly.BlocksToTextConverter.translateExpressionBlock(bBlock);
}

Blockly.BlocksToTextConverter.translate_logic_negate = function(element){
	var children = element.children;
	var child = children.namedItem("BOOL");

	Blockly.BlocksToTextConverter.tailText += "not";

	Blockly.BlocksToTextConverter.translateExpressionBlock(child);
}

Blockly.BlocksToTextConverter.translate_logic_compare = function(element){
	var children = element.children;
	var aBlock = children.namedItem("A").firstElementChild;
	var bBlock = children.namedItem("B").firstElementChild;
	var op = children.namedItem("OP").innerHTML;

	if(op === "EQ"){
		op = "equals";
	} else{
		op = "not_equals";
	}

	Blockly.BlocksToTextConverter.translateExpressionBlock(aBlock);
	Blockly.BlocksToTextConverter.tailText += ' ' + op + ' ' ;
	Blockly.BlocksToTextConverter.translateExpressionBlock(bBlock);
}

Blockly.BlocksToTextConverter.translate_math_compare = function(element){
	var children = element.children;
	var aBlock = children.namedItem("A").firstElementChild;
	var bBlock = children.namedItem("B").firstElementChild;
	var op = children.namedItem("OP").innerHTML;
	
	if(op === "EQ"){
		op = '=';
	} else if(op === "NEQ"){
		op = '!=';
	} else if(op === "LT"){
		op = '<';
	} else if(op === "GT"){
		op = '>';
	} else if(op === "LTE"){
		op = '<=';
	} else {
		op = '>='
	}

	Blockly.BlocksToTextConverter.translateExpressionBlock(aBlock);
	Blockly.BlocksToTextConverter.tailText += ' ' + op + ' ';
	Blockly.BlocksToTextConverter.translateExpressionBlock(bBlock);
}

Blockly.BlocksToTextConverter.translate_math_add = function(element){
	var children = element.children;
	
	var mutationBlock;
	for(var i=0; i<children.length; i++){
		var child = children.item(i);
		if(child.nodeName.toLowerCase() === "mutation"){
			mutationBlock = child;
		}
	}

	var numItems = (!!mutationBlock) ? parseInt(mutationBlock.getAttribute("items")) : 0;
	
	var value = children.namedItem("NUM0").firstElementChild;
	Blockly.BlocksToTextConverter.translateExpressionBlock(value);

	for (var i = 1; i<numItems; i++){
		var value = children.namedItem("NUM"+i).firstElementChild;

		Blockly.BlocksToTextConverter.tailText += ' + ';
		Blockly.BlocksToTextConverter.translateExpressionBlock(value);
	}
}

Blockly.BlocksToTextConverter.translate_math_multiply = function (element) {
	var children = element.children;
	
	var mutationBlock;
	for(var i=0; i<children.length; i++){
		var child = children.item(i);
		if(child.nodeName.toLowerCase() === "mutation"){
			mutationBlock = child;
		}
	}

	var numItems = (!!mutationBlock) ? parseInt(mutationBlock.getAttribute("items")) : 0;
	
	var value = children.namedItem("NUM0").firstElementChild;
	Blockly.BlocksToTextConverter.translateExpressionBlock(value);

	for (var i = 1; i<numItems; i++){
		var value = children.namedItem("NUM"+i).firstElementChild;

		Blockly.BlocksToTextConverter.tailText += ' * ';
		Blockly.BlocksToTextConverter.translateExpressionBlock(value);
	}
}

Blockly.BlocksToTextConverter.translate_math_subtract = function (element) {
	var children = element.children;
	var aBlock = children.namedItem("A").firstElementChild;
	var bBlock = children.namedItem("B").firstElementChild;

	Blockly.BlocksToTextConverter.translateExpressionBlock(aBlock);
	Blockly.BlocksToTextConverter.tailText += ' - ';
	Blockly.BlocksToTextConverter.translateExpressionBlock(bBlock);
}

Blockly.BlocksToTextConverter.translate_math_division = function (element) {
	var children = element.children;
	var aBlock = children.namedItem("A").firstElementChild;
	var bBlock = children.namedItem("B").firstElementChild;

	Blockly.BlocksToTextConverter.translateExpressionBlock(aBlock);
	Blockly.BlocksToTextConverter.tailText += ' / ';
	Blockly.BlocksToTextConverter.translateExpressionBlock(bBlock);
}

Blockly.BlocksToTextConverter.translate_math_power = function (element) {
	var children = element.children;
	var aBlock = children.namedItem("A").firstElementChild;
	var bBlock = children.namedItem("B").firstElementChild;

	Blockly.BlocksToTextConverter.translateExpressionBlock(aBlock);
	Blockly.BlocksToTextConverter.tailText += ' ^ ';
	Blockly.BlocksToTextConverter.translateExpressionBlock(bBlock);
}

Blockly.BlocksToTextConverter.translate_math_divide = function(element){
	var children = element.children;
	var dividend = children.namedItem("DIVIDEND").firstElementChild;
	var divisor = children.namedItem("DIVISOR").firstElementChild;
	
	var op = children.namedItem("OP").innerHTML.toLowerCase() + '_of';

	Blockly.BlocksToTextConverter.tailText += op + ' ';
	Blockly.BlocksToTextConverter.translateExpressionBlock(dividend);
	Blockly.BlocksToTextConverter.tailText += ' / ';
	Blockly.BlocksToTextConverter.translateExpressionBlock(divisor);
}

Blockly.BlocksToTextConverter.translate_math_single = function(element){
	var children = element.children;
	var expr = children.namedItem("NUM").firstElementChild;
	
	var op = children.namedItem("OP").innerHTML.toLowerCase();
	if (op === "root") {
		op = 'sqrt';
	} else if(op === "neg"){
		op = '-';
	} else if(op === "ln"){
		op = 'log';
	} else if(op === "exp"){
		op = 'e^';
	} //no else case, op should remain the same for abs, round, ceiling, and floor

	Blockly.BlocksToTextConverter.tailText += op + ' ';
	Blockly.BlocksToTextConverter.translateExpressionBlock(expr);
}

Blockly.BlocksToTextConverter.translate_math_abs = function(element){
	Blockly.BlocksToTextConverter.translate_math_single(element);
}

Blockly.BlocksToTextConverter.translate_math_neg = function(element){
	Blockly.BlocksToTextConverter.translate_math_single(element);
}

Blockly.BlocksToTextConverter.translate_math_round = function(element){
	Blockly.BlocksToTextConverter.translate_math_single(element);
}

Blockly.BlocksToTextConverter.translate_math_ceiling = function(element){
	Blockly.BlocksToTextConverter.translate_math_single(element);
}

Blockly.BlocksToTextConverter.translate_math_floor = function(element){
	Blockly.BlocksToTextConverter.translate_math_single(element);
}

Blockly.BlocksToTextConverter.translate_math_trig = function(element){
	var children = element.children;
	var expr = children.namedItem("NUM").firstElementChild;

	var op = children.namedItem("OP").innerHTML.toLowerCase();

	Blockly.BlocksToTextConverter.tailText += op + ' ';
	Blockly.BlocksToTextConverter.translateExpressionBlock(expr);
}

Blockly.BlocksToTextConverter.translate_math_cos = function(element){
	Blockly.BlocksToTextConverter.translate_math_trig(element);
}

Blockly.BlocksToTextConverter.translate_math_tan = function(element){
	Blockly.BlocksToTextConverter.translate_math_trig(element);
}

Blockly.BlocksToTextConverter.translate_local_declaration_expression = function(element){
	Blockly.BlocksToTextConverter.tailText += 'initialize_local';
	var children = element.children;
	
	var mutationBlock;
	for(var i=0; i<children.length; i++){
		var child = children.item(i);
		if(child.nodeName.toLowerCase() === "mutation"){
			mutationBlock = child;
		}
	}

	var numVars = (!!mutationBlock) ? mutationBlock.childElementCount : 0;

	for(var i=0; i<numVars; i++){
		Blockly.BlocksToTextConverter.tailText += ' <';
		var varName = children.namedItem("VAR"+i).innerHTML;
		var exprBlock = children.namedItem("DECL"+i).firstElementChild;
		Blockly.BlocksToTextConverter.tailText += varName + '> to: ';
		Blockly.BlocksToTextConverter.translateExpressionBlock(exprBlock);
	}

	Blockly.BlocksToTextConverter.tailText += ' in: ';
	var returnExprBlock = children.namedItem("RETURN").firstElementChild;
	Blockly.BlocksToTextConverter.translateExpressionBlock(returnExprBlock);
}

Blockly.BlocksToTextConverter.translate_lexical_variable_get = function(element){
	Blockly.BlocksToTextConverter.tailText += 'get ';
	var title = element.firstElementChild;
	Blockly.BlocksToTextConverter.tailText += title.innerHTML;
}

Blockly.BlocksToTextConverter.translate_color_black = function(element){
	var hexValue = element.firstElementChild.innerHTML.toLowerCase();
	if (hexValue === "#000000"){
		Blockly.BlocksToTextConverter.tailText += 'color black';
	} else{
		Blockly.BlocksToTextConverter.tailText += 'color ' + hexValue;
	}
}

Blockly.BlocksToTextConverter.translate_color_blue = function(element){
	var hexValue = element.firstElementChild.innerHTML.toLowerCase();
	if (hexValue === "#0000ff"){
		Blockly.BlocksToTextConverter.tailText += 'color blue';
	} else{
		Blockly.BlocksToTextConverter.tailText += 'color ' + hexValue;
	}
}

Blockly.BlocksToTextConverter.translate_color_white = function(element){
	var hexValue = element.firstElementChild.innerHTML.toLowerCase();
	if (hexValue === "#ffffff"){
		Blockly.BlocksToTextConverter.tailText += 'color white';
	} else{
		Blockly.BlocksToTextConverter.tailText += 'color ' + hexValue;
	}
}

Blockly.BlocksToTextConverter.translate_color_magenta = function(element){
	var hexValue = element.firstElementChild.innerHTML.toLowerCase();
	if (hexValue === "#ff00ff"){
		Blockly.BlocksToTextConverter.tailText += 'color magenta';
	} else{
		Blockly.BlocksToTextConverter.tailText += 'color ' + hexValue;
	}
}

Blockly.BlocksToTextConverter.translate_color_red = function(element){
	var hexValue = element.firstElementChild.innerHTML.toLowerCase();
	if (hexValue === "#ff0000"){
		Blockly.BlocksToTextConverter.tailText += 'color red';
	} else{
		Blockly.BlocksToTextConverter.tailText += 'color ' + hexValue;
	}
}

Blockly.BlocksToTextConverter.translate_color_light_gray = function(element){
	var hexValue = element.firstElementChild.innerHTML.toLowerCase();
	if (hexValue === "#cccccc"){
		Blockly.BlocksToTextConverter.tailText += 'color light_gray';
	} else{
		Blockly.BlocksToTextConverter.tailText += 'color ' + hexValue;
	}
}

Blockly.BlocksToTextConverter.translate_color_pink = function(element){
	var hexValue = element.firstElementChild.innerHTML.toLowerCase();
	if (hexValue === "#ffafaf"){
		Blockly.BlocksToTextConverter.tailText += 'color pink';
	} else{
		Blockly.BlocksToTextConverter.tailText += 'color ' + hexValue;
	}
}

Blockly.BlocksToTextConverter.translate_color_gray = function(element){
	var hexValue = element.firstElementChild.innerHTML.toLowerCase();
	if (hexValue === "#888888"){
		Blockly.BlocksToTextConverter.tailText += 'color gray';
	} else{
		Blockly.BlocksToTextConverter.tailText += 'color ' + hexValue;
	}
}

Blockly.BlocksToTextConverter.translate_color_orange = function(element){
	var hexValue = element.firstElementChild.innerHTML.toLowerCase();
	if (hexValue === "#ffc800"){
		Blockly.BlocksToTextConverter.tailText += 'color orange';
	} else{
		Blockly.BlocksToTextConverter.tailText += 'color ' + hexValue;
	}
}

Blockly.BlocksToTextConverter.translate_color_dark_gray = function(element){
	var hexValue = element.firstElementChild.innerHTML.toLowerCase();
	if (hexValue === "#444444"){
		Blockly.BlocksToTextConverter.tailText += 'color dark_gray';
	} else{
		Blockly.BlocksToTextConverter.tailText += 'color ' + hexValue;
	}
}

Blockly.BlocksToTextConverter.translate_color_yellow = function(element){
	var hexValue = element.firstElementChild.innerHTML.toLowerCase();
	if (hexValue === "#ffff00"){
		Blockly.BlocksToTextConverter.tailText += 'color yellow';
	} else{
		Blockly.BlocksToTextConverter.tailText += 'color ' + hexValue;
	}
}

Blockly.BlocksToTextConverter.translate_color_green = function(element){
	var hexValue = element.firstElementChild.innerHTML.toLowerCase();
	if (hexValue === "#00ff00"){
		Blockly.BlocksToTextConverter.tailText += 'color green';
	} else{
		Blockly.BlocksToTextConverter.tailText += 'color ' + hexValue;
	}
}

Blockly.BlocksToTextConverter.translate_color_cyan = function(element){
	var hexValue = element.firstElementChild.innerHTML.toLowerCase();
	if (hexValue === "#00ffff"){
		Blockly.BlocksToTextConverter.tailText += 'color cyan';
	} else{
		Blockly.BlocksToTextConverter.tailText += 'color ' + hexValue;
	}
}

Blockly.BlocksToTextConverter.translate_color_make_color = function(element){
	var children = element.children;
	var expr = children.namedItem("COLORLIST").firstElementChild;

	Blockly.BlocksToTextConverter.tailText += 'make_color ';
	Blockly.BlocksToTextConverter.translateExpressionBlock(expr);
}

Blockly.BlocksToTextConverter.translate_lists_create_with = function(element){
	Blockly.BlocksToTextConverter.tailText += 'list';
	var children = element.children;
	var mutation = parseInt(element.firstElementChild.getAttribute("items"));
	for(var i=0; i<mutation; i++){
		var valBlock = children.namedItem("ADD" + i);
		if(valBlock){
			var block = valBlock.firstElementChild;
			Blockly.BlocksToTextConverter.tailText += ' ';
			Blockly.BlocksToTextConverter.translateExpressionBlock(block);
		}
	}
}

Blockly.BlocksToTextConverter.translate_math_number = function(element){
	Blockly.BlocksToTextConverter.tailText += element.firstElementChild.innerHTML;
}

Blockly.BlocksToTextConverter.translate_text = function(element){
	Blockly.BlocksToTextConverter.tailText += '"' + element.firstElementChild.innerHTML + '"';
}

Blockly.BlocksToTextConverter.translate_logic_boolean = function(element){
	Blockly.BlocksToTextConverter.tailText += element.firstElementChild.innerHTML.toLowerCase();
}

Blockly.BlocksToTextConverter.translate_logic_false = function(element){
	Blockly.BlocksToTextConverter.translate_logic_boolean(element);
}

Blockly.BlocksToTextConverter.translate_code_write_tail_exp = function(element){
	Blockly.BlocksToTextConverter.tailText += 'TAIL_exp';
	
	var child = element.firstElementChild;
	var expression_text = child.innerHTML;

	Blockly.BlocksToTextConverter.tailText += ' ' + expression_text;
}

/**************************************Statement Blocks*****************************************/

Blockly.BlocksToTextConverter.translateStatementBlock = function(element){
	var elementType = element.getAttribute("type");
	//expression block
	Blockly.BlocksToTextConverter.tailText += '[';
	Blockly.BlocksToTextConverter["translate_" + elementType].call(this, element);
	Blockly.BlocksToTextConverter.tailText += ']';
}

Blockly.BlocksToTextConverter.translateStatementSequence = function(element){
//	var elementType = element.getAttribute("type");
	if(!!element){ //if element is not null (make sure it's not the empty statement)
		//var children = element.children;
	  var curBlock = element.firstElementChild; //this should be the first statement block
	  Blockly.BlocksToTextConverter.translateStatementBlock(curBlock);
	  var next_arr = Blockly.BlocksToTextConverter.getImmediateChildrenByTagName(curBlock,"next");
	  if(next_arr.length === 1){
	  	Blockly.BlocksToTextConverter.translateStatementSequence(next_arr[0]);
	  }
	}
}
// Blockly.BlocksToTextConverter.translate_controls_choose = function(element){
// 	var children = element.children;
// 	var ifBlock = children.namedItem("TEST").firstElementChild;
// 	var thenBlock = children.namedItem("THENRETURN").firstElementChild;
// 	var elseBlock = children.namedItem("ELSERETURN").firstElementChild;

// 	Blockly.BlocksToTextConverter.tailText += 'if ';
// 	Blockly.BlocksToTextConverter.translateExpressionBlock(ifBlock);
// 	Blockly.BlocksToTextConverter.tailText += ' then: ';
// 	Blockly.BlocksToTextConverter.translateExpressionBlock(thenBlock);
// 	Blockly.BlocksToTextConverter.tailText += ' else: ';
// 	Blockly.BlocksToTextConverter.translateExpressionBlock(elseBlock);
// }

Blockly.BlocksToTextConverter.translate_controls_if = function(element){
	var children = element.children;
	var mutations = Blockly.BlocksToTextConverter.getImmediateChildrenByTagName(element,"mutation");

	var ifBlock = children.namedItem("IF0").firstElementChild;
	var thenSuite = children.namedItem("DO0");

	Blockly.BlocksToTextConverter.tailText += 'if ';
	Blockly.BlocksToTextConverter.translateExpressionBlock(ifBlock);
	Blockly.BlocksToTextConverter.tailText += ' then: ';
	Blockly.BlocksToTextConverter.translateStatementSequence(thenSuite);

	//if this block is in a seq of statements which have mutation sub-elements, 
	//then mutations.length will be > 1 ------ ignore this comment, bug fixed by Karishma 03.21.14
	if (mutations.length === 1){
		var elseIfCount = parseInt(mutations[0].getAttribute("elseif"));
		var elseCount = parseInt(mutations[0].getAttribute("else"));
		for(var i=1; i<=elseIfCount; i++){
			var elseIfBlock = children.namedItem("IF"+i).firstElementChild;
			var thenBlocks = children.namedItem("DO"+i);

			Blockly.BlocksToTextConverter.tailText += ' else_if: ';
			Blockly.BlocksToTextConverter.translateExpressionBlock(elseIfBlock);
			Blockly.BlocksToTextConverter.tailText += ' then: ';
			Blockly.BlocksToTextConverter.translateStatementSequence(thenBlocks);
		}

		for(var i=1; i<=elseCount; i++){
			var elseBlocks = children.namedItem("ELSE");

			Blockly.BlocksToTextConverter.tailText += ' else: ';
			Blockly.BlocksToTextConverter.translateStatementSequence(elseBlocks);
		}
	} else{
		console.log("Blocks To Text Converter - translate_controls_if: something is wrong with mutations");
	}
}

Blockly.BlocksToTextConverter.translate_lexical_variable_set = function(element){
	var children = element.children;
	var varName = children.namedItem("VAR").innerHTML;
	var value = children.namedItem("VALUE").firstElementChild;

	Blockly.BlocksToTextConverter.tailText += 'set ' + varName + ' to: ';
	Blockly.BlocksToTextConverter.translateExpressionBlock(value);
}

Blockly.BlocksToTextConverter.translate_code_write_tail_stmt = function(element){
	Blockly.BlocksToTextConverter.tailText += 'TAIL_stmt';
	
	var child = element.firstElementChild;
	var stmt_text = child.innerHTML;

	Blockly.BlocksToTextConverter.tailText += ' ' + stmt_text;
}



/**************************************Top Level Blocks*****************************************/

Blockly.BlocksToTextConverter.translateTopLevelBlock = function(element){
	var elementType = element.getAttribute("type");
	//expression block
	Blockly.BlocksToTextConverter.tailText += '(';
	Blockly.BlocksToTextConverter["translate_" + elementType].call(this, element);
	Blockly.BlocksToTextConverter.tailText += ')';
}

Blockly.BlocksToTextConverter.translate_global_declaration = function(element){
	var children = element.children;
	var varName = children.namedItem("NAME").innerHTML;
	var value = children.namedItem("VALUE").firstElementChild;

	Blockly.BlocksToTextConverter.tailText += 'initialize_global <' + varName + '> to: ';
	Blockly.BlocksToTextConverter.translateExpressionBlock(value);
}

Blockly.BlocksToTextConverter.translate_procedures_defnoreturn = function(element){
	var children = element.children;
	var procName = children.namedItem("NAME").innerHTML;
	
	Blockly.BlocksToTextConverter.tailText += 'to <' + procName + '> ';

	var numParams = 0;
	var mutations = Blockly.BlocksToTextConverter.getImmediateChildrenByTagName(element,"mutation");
	if(mutations.length === 1){
		numParams = mutations[0].childElementCount;
	}else{
		console.log("Blocks To Text Converter - translate_procedures_defnoreturn: something is wrong with mutations");
	}

	for(var i=0; i<numParams; i++){
		var argName = children.namedItem("VAR"+i).innerHTML;
		Blockly.BlocksToTextConverter.tailText += '<' + argName + '> ';
	}

	var suite = children.namedItem("STACK");
	Blockly.BlocksToTextConverter.tailText += 'do: ';
	Blockly.BlocksToTextConverter.translateStatementSequence(suite);
}

Blockly.BlocksToTextConverter.translate_procedures_defreturn = function(element){
	var children = element.children;
	var procName = children.namedItem("NAME").innerHTML;
	
	Blockly.BlocksToTextConverter.tailText += 'to <' + procName + '> ';

	var numParams = 0;
	var mutations = Blockly.BlocksToTextConverter.getImmediateChildrenByTagName(element,"mutation");
	if(mutations.length === 1){
		numParams = mutations[0].childElementCount;
	}else{
		console.log("Blocks To Text Converter - translate_procedures_defnoreturn: something is wrong with mutations");
	}

	for(var i=0; i<numParams; i++){
		var argName = children.namedItem("VAR"+i).innerHTML;
		Blockly.BlocksToTextConverter.tailText += '<' + argName + '> ';
	}

	var retVal = children.namedItem("RETURN").firstElementChild;
	Blockly.BlocksToTextConverter.tailText += 'result: ';
	Blockly.BlocksToTextConverter.translateExpressionBlock(retVal);
}

Blockly.BlocksToTextConverter.translate_component_event = function(element){
	var children = element.children;
	var componentName = children.namedItem("COMPONENT_SELECTOR").innerHTML;
	var mutations = Blockly.BlocksToTextConverter.getImmediateChildrenByTagName(element,"mutation");
	if(mutations.length !== 1){
		console.log("BlocksToTextCovereter - translate_component_event: Something is wrong with this block.")
	}
	var eventName = mutations[0].getAttribute("event_name");

	Blockly.BlocksToTextConverter.tailText += 'when ' + componentName + '.' + eventName + ' do: ';

	var suite = children.namedItem("DO");

	Blockly.BlocksToTextConverter.translateStatementSequence(suite);
}

//Hacky....fix later!!
Blockly.BlocksToTextConverter.translate_component_set_get = function(element){
	var children = element.children;
	var componentName = children.namedItem("COMPONENT_SELECTOR").innerHTML;
	var propName = children.namedItem("PROP").innerHTML;
	
	var mutations = Blockly.BlocksToTextConverter.getImmediateChildrenByTagName(element,"mutation");
	if(mutations.length !== 1){
		console.log("BlocksToTextCovereter - translate_component_event: Something is wrong with this block.")
	}
	var setGet = mutations[0].getAttribute("set_or_get");

	if(setGet === "set"){
		var valBlock = children.namedItem("VALUE").firstElementChild;
		Blockly.BlocksToTextConverter.tailText += 'set ' + componentName + '.' + propName + ' to: ';
		Blockly.BlocksToTextConverter.translateExpressionBlock(valBlock);
	} else{
		Blockly.BlocksToTextConverter.tailText += componentName + '.' + propName;
	}
}

