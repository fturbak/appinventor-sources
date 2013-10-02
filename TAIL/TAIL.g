grammar TAIL;

options {
	language = JavaScript;
	backtrack = true;
}

tokens {
	LSQUARE = '[';
	RSQUARE = ']';
	LCURLY = '{';
	RCURLY = '}';
	LPAREN = '(';
	RPAREN = ')';
	LANGLE = '<';
	RANGLE = '>';
	DOT = '.';
	COMMA = ',';
	
	//Known Keywords

	TRUE = 'true';
	FALSE = 'false';
	WHEN = 'when';
	IF = 'if';
	THEN = 'then:';
	ELSE = 'else:';
	ELSE_IF = 'else_if:';
	FOR_EACH = 'for_each';
	DO = 'do:';
	RESULT = 'result:';
	TO = 'to';
	LABEL_TO = 'to:';
	CALL = 'call';
	INIT_GLOBAL_VAR = 'initialize_global';
	INIT_LOCAL_VAR = 'initialize_local';
	GET = 'get';
	SET = 'set';
	GLOBAL = 'global';
	IN = 'in:';

	//operators
	NOT = 'not';
	AND = 'and';
	OR = 'or';
	LEQ = '<=';
	GEQ = '>=';
	LOGIC_EQ = 'equals';
	LOGIC_NOT_EQ = 'not_equals';
	EQ = '=';
	NOT_EQ = '!=';

	ADD = '+';
	SUBTRACT = '-';
	MULTIPLY = '*';
	DIVIDE = '/';
	POWER = '^';

	//Unary Ops (neg will be the same as subtract)
	SQRT = 'sqrt';
	ABS = 'abs';
	LOG = 'log';
	E_EXP = 'e^';
	ROUND = 'round';
	CEILING = 'ceiling';
	FLOOR = 'floor';

	//Trig Ops
	SIN='sin';
	COS='cos';
	TAN='tan';
	ASIN='asin';
	ACOS='acos';
	ATAN='atan';

	//Colors

	COLOR = 'color';
	MAKE_COLOR = 'make_color';
	BLACK = 'black';
	BLUE = 'blue';
	WHITE = 'white';
	MAGENTA = 'magenta';
	RED = 'red';
	LIGHT_GRAY = 'light_gray';
	PINK = 'pink';
	GRAY = 'gray';
	ORANGE = 'orange';
	DARK_GRAY = 'dark_gray';
	YELLOW = 'yellow';
	GREEN = 'green';
	CYAN = 'cyan';

	//lists
	MAKE_LIST = 'make_a_list';
	LIST = 'list';

	//Generic Component Block Stuff
	OF_COMPONENT = 'of_component:';
	FOR_COMPONENT = 'for_component:';
	COMPONENT = 'component';

	//TAIL Block Stuff
	TAIL_EXP = 'TAIL_exp';
	TAIL_STMT = 'TAIL_stmt';
}

@lexer::members{
	var errors = [];
  TAILLexer.prototype.emitErrorMessage = function(error) {
  	    //var hdr = getErrorHeader(e);
        //var msg = getErrorMessage(e, tokenNames);
        errors.push(error);
    }
  TAILLexer.prototype.getErrors = function() {
        return errors;
    }
}

@members{
	var errors = [];
  TAILParser.prototype.emitErrorMessage = function(error) {
        //var hdr = getErrorHeader(e);
        //var msg = getErrorMessage(e, tokenNames);
        errors.push(error);
    };
  TAILParser.prototype.getErrors = function() {
        return errors;
    };
  TAILParser.prototype.recoverFromMismatchedToken = function(input, ttype, follow){
  	throw new org.antlr.runtime.MismatchedTokenException(ttype, input);
  }

  TAILException = function(msg) {
    TAILException.superclass.constructor.call(this, msg);
    this.message = msg;
  };
  org.antlr.lang.extend(TAILException, Error, {
    name: "org.antlr.runtime.TAILException"
  });  

  TAILParser.prototype.isValidComponentName = function(componentName){
  	var componentInstance = Blockly.ComponentInstances[componentName];
  	//from appinventor/blocklyeditor/src/component.js
  	return (typeof componentInstance == "object" && componentInstance.uid != null);
  };
  TAILParser.prototype.isValidComponentFieldName = function(fields, componentType, fieldName){
  	//I am using "field" as a general name for event, property or method
  	//fields should be of the form "events", "properties", or "methods"
  	var componentInfo = Blockly.ComponentTypes[componentType].componentInfo;
		var componentFields = componentInfo[fields];
		for (var i = 0; i<componentFields.length; i++){
			if(componentFields[i].name === fieldName){
				return true;
			}
		}
		return false;
  };
}

@rulecatch{
	catch (re){
		throw re;
	}
}


/*---------------------------------------------------------
 * PARSER RULES
 *---------------------------------------------------------*/

// program 
// 	: (eventHandler | procdef | funcdef | globalvar_decl)*;

// eventHandler 
// 	: LPAREN WHEN dotted_name (var_decl)? KEYWORD (statement_block)* RPAREN;

// procdef
// 	: LPAREN TO IDENTIFIER DO (statement_block)* RPAREN; //should a valid program allow empty procdefs and event handlers?

// funcdef
// 	: LPAREN TO IDENTIFIER RESULT expression_block RPAREN;

// globalvar_decl
// 	: LPAREN INIT_VAR var_decl 'to:' expression_block;

// var_decl
// 	: LANGLE IDENTIFIER RANGLE;

// workspace returns [var xml]
// @init{
// 	$xml = document.createElement("xml");
// }
// 	: (statement_block {$xml.appendChild(statement_block.elt); } | expression_block {$xml.appendChild($expression_block.elt);})*

top_level_block returns [var elt]
	: LPAREN top_level RPAREN {$elt = $top_level.elt;}
	;

top_level returns [var elt]
	: global_var_decl {$elt = $global_var_decl.elt;}
	| procedure_decl {$elt = $procedure_decl.elt;}
	| function_decl {$elt = $function_decl.elt;}
	| event_handler {$elt = $event_handler.elt;}
	;

global_var_decl returns [var elt]
@init{
	$elt = document.createElement("block");
	$elt.setAttribute("type","global_declaration");
	$elt.setAttribute("inline","false");

	var title = document.createElement("title");
	title.setAttribute("name","NAME");
	var value = document.createElement("value");
	value.setAttribute("name","VALUE");
}
	: INIT_GLOBAL_VAR LANGLE IDENTIFIER RANGLE LABEL_TO expression_block
	{
		title.innerHTML = $IDENTIFIER.text;
		value.appendChild($expression_block.elt);
		$elt.appendChild(title);
		$elt.appendChild(value);
	}
	;

procedure_decl returns [var elt]
@init{
	$elt = document.createElement("block");
	$elt.setAttribute("type","procedures_defnoreturn");

	var hasMutations = false;
	var mutation = document.createElement("mutation");
	var argsCount = 0;

	var name = document.createElement("title");
	name.setAttribute("name","NAME");

	var var_title_arr = [];
}
	: TO LANGLE proc_name=IDENTIFIER RANGLE {name.innerHTML = $proc_name.text;}
	 (LANGLE arg_name=IDENTIFIER RANGLE {
	 	  hasMutations = true;
	 	  var arg = document.createElement("arg");
	 	  arg.setAttribute("name",$arg_name.text);
	 	  mutation.appendChild(arg);
	 	  var var_title = document.createElement("title");
	 	  var_title.setAttribute("name","VAR"+argsCount);
	 	  var_title.innerHTML = $arg_name.text;
	 	  var_title_arr.push(var_title);
	 	  argsCount++;
	 	})*
	 DO suite {
	 	if(hasMutations){
	 		$elt.appendChild(mutation);
	 	}
	 	$elt.appendChild(name);
	 	for(var i=0; i<var_title_arr.length; i++){
	 		$elt.appendChild(var_title_arr[i]);
	 	}
	 	var seq = $suite.elt;
	 	seq.setAttribute("name","STACK");
	 	$elt.appendChild(seq);
	 }
	;

function_decl returns [var elt]
@init{
	$elt = document.createElement("block");
	$elt.setAttribute("type","procedures_defreturn");

	var hasMutations = false;
	var mutation = document.createElement("mutation");
	var argsCount = 0;

	var name = document.createElement("title");
	name.setAttribute("name","NAME");

	var var_title_arr = [];

	var value = document.createElement("value");
	value.setAttribute("name","RETURN");
}
	: TO LANGLE func_name=IDENTIFIER RANGLE {name.innerHTML = $func_name.text;}
	 (LANGLE arg_name=IDENTIFIER RANGLE {
	 	  hasMutations = true;
	 	  var arg = document.createElement("arg");
	 	  arg.setAttribute("name",$arg_name.text);
	 	  mutation.appendChild(arg);
	 	  var var_title = document.createElement("title");
	 	  var_title.setAttribute("name","VAR"+argsCount);
	 	  var_title.innerHTML = $arg_name.text;
	 	  var_title_arr.push(var_title);
	 	  argsCount++;
	 	})*
	 RESULT expression_block {
	 	if(hasMutations){
	 		$elt.appendChild(mutation);
	 	}
	 	$elt.appendChild(name);
	 	for(var i=0; i<var_title_arr.length; i++){
	 		$elt.appendChild(var_title_arr[i]);
	 	}
	 	value.appendChild($expression_block.elt);
	 	$elt.appendChild(value);
	 }
	;

event_handler returns [var elt]
@init{
	$elt = document.createElement("block");
	$elt.setAttribute("type","component_event");
	var mutation = document.createElement("mutation");
	//mutation.setAttribute("component_type",)
	//mutation attributes will be set inside the body of the rule
	//dotted names allow spaces...which we don't want allowed...
	var title = document.createElement("title");
	title.setAttribute("name","COMPONENT_SELECTOR");
}
	: WHEN component=IDENTIFIER DOT event=IDENTIFIER
	{
		var componentName = $component.text;
		var eventName = $event.text;
		var componentInstance = Blockly.ComponentInstances[componentName];
		var componentType;
		if (this.isValidComponentName(componentName)){
			componentType = Blockly.Component.instanceNameToTypeName(componentName);
			mutation.setAttribute("component_type", componentType);
			mutation.setAttribute("instance_name", componentName);
			title.innerHTML = componentName;
		} else {
			throw new TAILException("Invalid component name: " + componentName);
			//this.emitErrorMessage("Invalid component name: " + componentName);
			//the parser will continue even after this error because syntactically this is still correct...
		}
		if(this.isValidComponentFieldName("events", componentType, eventName)){
			mutation.setAttribute("event_name", eventName);
		}else{
			throw new TAILException("Invalid event name: " + eventName);
			//this.emitErrorMessage("Invalid event name: " + eventName);
		} //no need for else case, we've already added an error to the errors array above

	}
	 (LANGLE arg=IDENTIFIER RANGLE)* //apparently we don't have to put these in the DOM....
	  DO suite
	  {
	  	var statements = $suite.elt;
	  	statements.setAttribute("name","DO");

	  	$elt.appendChild(mutation);
	  	$elt.appendChild(title);
	  	$elt.appendChild(statements);
	  }
	;

expression_start returns [var xml]
@init{
	$xml = document.createElement("block");
}
	: expression_block {$xml.appendChild($expression_block.elt);}
	;

expression_block returns [var elt]
	: LCURLY expression RCURLY {$elt = $expression.elt;}
	;

suite returns [var elt]
@init{
	$elt = document.createElement("statement"); //TODO figure out what goes here???!!!??
	//the name attribute of the set of statements will be set by whatever is calling this rule.
	var count = 0;
	var prevStatementBlock;
	var currentStatementBlock;
	var stmt_arr = [];
}
	: (statement_block 
		{
		  if (count === 0){ // this is the very first statement
		  	prevStatementBlock = $statement_block.elt;
		  	$elt.appendChild(prevStatementBlock);
		  }else{ //all of the rest of the statement blocks
		  	var next = document.createElement("next");
		  	var currentStmt = $statement_block.elt;
		  	next.appendChild(currentStmt);
		  	prevStatementBlock.appendChild(next);
		  	prevStatementBlock = currentStmt;
		  }
		  count++;
		})* 

	//This code used to be inside the parens above....
	// {
	// 	if (count === 0){ // this is the very first statement
	// 		prevStatementBlock = $statement_block.elt;
	// 		$elt.appendChild(prevStatementBlock);
	// 	}else{ //all of the rest of the statement blocks
	// 		var next = document.createElement("next");
	// 		var currentStmt = $statement_block.elt;
	// 		next.appendChild(currentStmt);
	// 		prevStatementBlock.appendChild(next);
	// 		prevStatementBlock = currentStmt;
	// 	}
	// 	count++;
	// }
	//TODO: stuff needs to go here...actiony things...
	// {
	// 	for (var i = 0; i<stmt_arr.length; i++){
	// 		currentStatementBlock = stmt_arr[i];
	// 		if(i===0){
	// 			$elt.appendChild(currentStatementBlock);
	// 			prevStatementBlock = currentStatementBlock;
	// 		} else{
	// 			var next = document.createElement("next");
	// 			next.appendChild(currentStatementBlock);
	// 			prevStatementBlock.appendChild(currentStatementBlock);
	// 			prevStatementBlock = currentStatementBlock;
	// 		}
	// 	}
	// }
	; //think about requiring newlines

	// {//stmt_arr.push($statement_block.elt);}

statement_block returns [var elt]
	: LSQUARE statement RSQUARE
	{$elt = $statement.elt;}
	;

statement returns [var elt]
	: if_stmt {$elt = $if_stmt.elt;}
	| variable_set_stmt {$elt = $variable_set_stmt.elt;}
	| component_stmt {$elt = $component_stmt.elt;}
	| tail_stmt {$elt = $tail_stmt.elt;}
	;

if_stmt returns [var elt]
@init{
	$elt = document.createElement("block");
	$elt.setAttribute("inline","false");
	$elt.setAttribute("type","controls_if");

	var mutation = document.createElement("mutation");
	var mutations = false;
	var else_if_count = 0;
	var else_count = 0;
}
	: IF e1=expression_block {
		var val = document.createElement("value");
		val.setAttribute("name","IF0");
		val.appendChild($e1.elt);
		$elt.appendChild(val);
	} 
	THEN a=suite{
		var then_stmts = $a.elt;
		then_stmts.setAttribute("name", "DO0");
		//then_stmts.appendChild($a.elt);
		$elt.appendChild(then_stmts);
	} 
	((ELSE_IF {mutations = true; else_if_count++;} e2=expression_block{
		var value = document.createElement("value");
		value.setAttribute("name","IF"+else_if_count);
		value.appendChild($e2.elt);
		$elt.appendChild(value);
	} THEN b=suite {
		var else_if_stmts = $b.elt;
		else_if_stmts.setAttribute("name","DO"+else_if_count);
		// else_if_stmts.appendChild($b.elt);
		$elt.appendChild(else_if_stmts);
	})* (ELSE c=suite {
		mutations = true;
		else_count++;

		var else_stmts = $c.elt;
		else_stmts.setAttribute("name","ELSE");
		// else_stmts.appendChild($c.elt);
		$elt.appendChild(else_stmts);
	})?)?
	{
		if(mutations){
			if (else_if_count !== 0){
				mutation.setAttribute("elseif",else_if_count);
			}
			if (else_count !== 0){
				mutation.setAttribute("else",else_count);
			}
			$elt.insertBefore(mutation, $elt.firstElementChild);
		}
	}
	;

variable_set_stmt returns [var elt]
@init{
	$elt = document.createElement("block");
	$elt.setAttribute("type","lexical_variable_set");
	$elt.setAttribute("inline","false");

	var title = document.createElement("title");
	title.setAttribute("name","VAR");

	var var_name = "";

	var value = document.createElement("value");
	value.setAttribute("name","VALUE");
}
	: SET (GLOBAL {var_name += "global ";})? IDENTIFIER {var_name += $IDENTIFIER.text;} LABEL_TO expression_block {
		title.innerHTML = var_name;
		$elt.appendChild(title);

		value.appendChild($expression_block.elt);
		$elt.appendChild(value);
	}
	;

component_stmt returns [var elt]
@init{
	$elt = document.createElement("block");
	$elt.setAttribute("inline","false");
	var mutation = document.createElement("mutation");
	var isGeneric = false;
}
	: SET component=IDENTIFIER DOT property=IDENTIFIER (OF_COMPONENT of_comp=expression_block {isGeneric = true;})? LABEL_TO to=expression_block {
		
		$elt.setAttribute("type","component_set_get");
		mutation.setAttribute("set_or_get", "set");

		var componentName = $component.text;
		var propName = $property.text;

		var componentType;
		if(isGeneric){
			if(!Blockly.ComponentTypes.haveType(componentName)){
				throw new TAILException("Invalid Generic Component Name: " + componentName);
			} else{
				componentType = componentName;
			}
		} else{
			if(!this.isValidComponentName(componentName)){
				throw new TAILException("Invalid Component Name: " + componentName);
			} else{
				componentType = Blockly.Component.instanceNameToTypeName(componentName);
			}
		}

		mutation.setAttribute("component_type",componentType);
		mutation.setAttribute("is_generic", isGeneric);

		if(!this.isValidComponentFieldName("properties", componentType, propName)){
			throw new TAILException("Invalid Component Property Name: " + propName);
		} else {
			mutation.setAttribute("property_name",propName);
			if(!isGeneric){
				mutation.setAttribute("instance_name",componentName);
				var title = document.createElement("title");
				title.setAttribute("name","COMPONENT_SELECTOR");
				title.innerHTML = componentName;
				$elt.appendChild(title);
			}
			var title = document.createElement("title");
			title.setAttribute("name","PROP");
			title.innerHTML = propName;
			$elt.appendChild(title);

			if(isGeneric){
				var componentVal = document.createElement("value");
				componentVal.setAttribute("name","COMPONENT");
				componentVal.appendChild($of_comp.elt);
				$elt.appendChild(componentVal);
			}

			var value = document.createElement("value");
			value.setAttribute("name","VALUE");
			value.appendChild($to.elt);
			$elt.appendChild(value);
		}
		$elt.insertBefore(mutation, $elt.firstElementChild);
	}
	| {var valArr = []; var argCount=0;}
	CALL component=IDENTIFIER DOT method=IDENTIFIER 
	(FOR_COMPONENT for_comp=expression_block {isGeneric=true;})? 
	(LABEL arg=expression_block {
		var val = document.createElement("value"); 
		val.setAttribute("name","ARG"+argCount);
		val.appendChild($arg.elt);
		valArr.push(val);
	})*{
		$elt.setAttribute("type","component_method");
		
		var componentName = $component.text;
		var methodName = $method.text;

		var componentType;
		if(isGeneric){
			if(!Blockly.ComponentTypes.haveType(componentName)){
				throw new TAILException("Invalid Generic Component Name: " + componentName);
			} else{
				componentType = componentName;
			}
		} else{
			if(!this.isValidComponentName(componentName)){
				throw new TAILException("Invalid Component Name: " + componentName);
			} else{
				componentType = Blockly.Component.instanceNameToTypeName(componentName);
			}
		}
		mutation.setAttribute("component_type",componentType);
		mutation.setAttribute("is_generic", isGeneric);
		if(!this.isValidComponentFieldName("methods", componentType, methodName)){
			throw new TAILException("Invalid Component Method Name: " + methodName);
		} else {
			mutation.setAttribute("method_name",methodName);
			if(!isGeneric){
				mutation.setAttribute("instance_name",componentName);
				$elt.appendChild(mutation);

				var title = document.createElement("title");
				title.setAttribute("name","COMPONENT_SELECTOR");
				title.innerHTML = componentName;
				$elt.appendChild(title);
			} else{
				$elt.appendChild(mutation);
				var value = document.createElement("value");
				value.setAttribute("name","COMPONENT");
				value.appendChild($for_comp.elt);
				$elt.appendChild(value);
			}
		}
		for (var i = 0; i<valArr.length; i++){
				$elt.appendChild(valArr[i]);
		}	
	}
	;


tail_stmt returns [var elt]
@init{
	console.log("In the TAIL STMT Rule...");
	$elt = document.createElement("block");
	$elt.setAttribute("type","code_write_tail_stmt");
	
	var title = document.createElement("title");
	title.setAttribute("name","CODE");
}
	: TAIL_STMT statement_block 
	{
		title.innerHTML = $text.substring($TAIL_STMT.text.length,$text.length).trim();
		$elt.appendChild(title);
	}
	;

expression returns [var elt]
	: if_expr {$elt = $if_expr.elt;}
	//| do_result_expr {$elt = $do_result_expr.elt;}
	| logic_expr {$elt = $logic_expr.elt;}
	| not_expr {$elt = $not_expr.elt;}
	| compare_eq_expr {$elt = $compare_eq_expr.elt;}
	| compare_math_eq_expr {$elt = $compare_math_eq_expr.elt;}
	| compare_math_expr {$elt = $compare_math_expr.elt;}
	| math_expr {$elt = $math_expr.elt;}
	| init_local_expr {$elt = $init_local_expr.elt;}
	| component_expr {$elt = $component_expr.elt;}
	| variable_ref_expr {$elt = $variable_ref_expr.elt;}
	| color_expr {$elt = $color_expr.elt;}
	| list_expr {$elt = $list_expr.elt;}
	| tail_expr {$elt = $tail_expr.elt;}
	| atom {$elt = $atom.elt;}
	;

// assign_stmt
// 	: SET IDENTIFIER ('to:')? expression_block;

// if_stmt
// 	: IF expression_block THEN (statement_block)* (ELSE_IF (statement_block)*)* ELSE (statement_block)*;



/************************************************Expressions*****************************************************************/

if_expr returns [var elt]
@init{
	$elt = document.createElement("block");
	$elt.setAttribute("type","controls_choose");
	$elt.setAttribute("inline","false");
}
	: IF a=expression_block THEN b=expression_block ELSE c=expression_block
	{
		var testVal = document.createElement("value");
		testVal.setAttribute("name","TEST");
		testVal.appendChild($a.elt);

		var thenVal = document.createElement("value");
		thenVal.setAttribute("name","THENRETURN");
		thenVal.appendChild($b.elt);

		var elseVal = document.createElement("value");
		elseVal.setAttribute("name","ELSERETURN");
		elseVal.appendChild($c.elt);

		$elt.appendChild(testVal);
		$elt.appendChild(thenVal);
		$elt.appendChild(elseVal);
	}
	;

// do_result_expr returns [var elt]
// @init{
// 	$elt = document.createElement("block");
// 	Attribute type = document.createAttribute("type");
// 	type.value = "controls_do_then_return";
// 	Attribute inline = document.createAttribute("inline");
// 	inline.value = "false";

// 	$elt.setAttribute(type);
// 	$elt.setAttribute(inline);
// }
// 	: 'do' (statement_block)* RESULT expression_block; //TODO finish this when I add statements

logic_expr returns [var elt]
@init{
	$elt = document.createElement("block");

	$elt.setAttribute("type","logic_operation");
	$elt.setAttribute("inline","true");

	var operation = "";
}
	: a = expression_block
	  (AND {operation="AND";}| OR {operation="OR";})
	  b = expression_block
	  {
	  	var title = document.createElement("title");
	  	title.setAttribute("name","OP");
	  	title.innerHTML = operation;

	  	var valA = document.createElement("value");
	  	valA.setAttribute("name","A");
	  	valA.appendChild($a.elt);

	  	var valB = document.createElement("value");
	  	valB.setAttribute("name","B");
	  	valB.appendChild($b.elt);

	  	$elt.appendChild(title);
	  	$elt.appendChild(valA);
	  	$elt.appendChild(valB);
	  }
	  ;

not_expr returns [var elt]
@init{
	$elt = document.createElement("block");

	$elt.setAttribute("type","logic_negate");
	$elt.setAttribute("inline","false");
}
	: NOT expression_block
	{
		var value = document.createElement("value");
		value.setAttribute("name","BOOL");
		value.appendChild($expression_block.elt);

		$elt.appendChild(value);
	}
	;

compare_eq_expr returns [var elt]
@init{
	$elt = document.createElement("block");

	$elt.setAttribute("type","logic_compare");
	$elt.setAttribute("inline","true");

	var operation = "";
}
	: a=expression_block (LOGIC_EQ {operation = "EQ";} | LOGIC_NOT_EQ {operation = "NEQ";}) b=expression_block
	{
		var title = document.createElement("title");
	  title.setAttribute("name","OP");
	  title.innerHTML = operation;

	  var valA = document.createElement("value");
	  valA.setAttribute("name","A");
	  valA.appendChild($a.elt);

	  var valB = document.createElement("value");
	  valB.setAttribute("name","B");
	  valB.appendChild($b.elt);

	  $elt.appendChild(title);
	  $elt.appendChild(valA);
	  $elt.appendChild(valB);
	}
	;

compare_math_eq_expr returns [var elt] //exactly the same as compare_eq_expr except for commented line below and the operators used
@init{
	$elt = document.createElement("block");

	$elt.setAttribute("type","math_compare"); 
	//this is the only difference between this rule and the rule above
	$elt.setAttribute("inline","true");

	var operation = "";
}
	: a=expression_block (EQ {operation = "EQ";} | NOT_EQ {operation = "NEQ";}) b=expression_block
	{
		var title = document.createElement("title");
	  title.setAttribute("name","OP");
	  title.innerHTML = operation;

	  var valA = document.createElement("value");
	  valA.setAttribute("name","A");
	  valA.appendChild($a.elt);

	  var valB = document.createElement("value");
	  valB.setAttribute("name","B");
	  valB.appendChild($b.elt);

	  $elt.appendChild(title);
	  $elt.appendChild(valA);
	  $elt.appendChild(valB);
	}
	;

compare_math_expr returns [var elt]
@init{
	$elt = document.createElement("block");

	$elt.setAttribute("type","math_compare");
	$elt.setAttribute("inline","true");

	var operation = "";
}
	: a=expression_block (LANGLE {operation = "LT";}| RANGLE {operation = "GT";}| LEQ {operation = "LTE";}| GEQ {operation = "GTE";}) b=expression_block 
	//EQ and NOT_EQ are not listed here, because although they're meant for math blocks, you can plug-in non math blocks in their sockets
	{
		var title = document.createElement("title");
	  title.setAttribute("name","OP");
	  title.innerHTML = operation;

	  var valA = document.createElement("value");
	  valA.setAttribute("name","A");
	  valA.appendChild($a.elt);

	  var valB = document.createElement("value");
	  valB.setAttribute("name","B");
	  valB.appendChild($b.elt);

	  $elt.appendChild(title);
	  $elt.appendChild(valA);
	  $elt.appendChild(valB);		
	}
	;

math_expr returns [var elt]
	: mutable_arith_expr {$elt = $mutable_arith_expr.elt;}
	//for add and multiply which allow mutations in Blockly (TAIL will NOT be allowing mutations)
	| non_mutable_arith_expr {$elt = $non_mutable_arith_expr.elt;}
	| special_math_expr {$elt = $special_math_expr.elt;} 
	//this is for modulo_of, remainder_of, and quotient_of
	| unary_math_expr {$elt = $unary_math_expr.elt;}
	| math_trig_expr {$elt = $math_trig_expr.elt;}
	;

mutable_arith_expr returns [var elt]
@init{
	$elt = document.createElement("block");
	//type will get a value inside the rule
	$elt.setAttribute("inline","true");

	//initalizing these in advance to be used later
	var mutation = document.createElement("mutation");
	var itemCount = 0;
	var valArr = [];
	//var value;

	var addValue = function(element){
		var value = document.createElement("value");
		value.setAttribute("name", "NUM" + itemCount);
		value.appendChild(element);
		valArr.push(value);
		itemCount++;
	}
}
	: a=expression_block
	  {
		  // value = document.createElement("value");
		  // value.setAttribute("name", "NUM" + itemCount);
		  // value.appendChild($a.elt);
		  // valArr.push(value);
		  // itemCount++;
		  addValue($a.elt);
	  }
	  (	(ADD b=expression_block
	  		{
	  			// value = document.createElement("value");
	  			// value.setAttribute("name", "NUM" + itemCount);
	  			// value.appendChild($b.elt);
	  			// valArr.push(value);
	  			// itemCount++;
	  			addValue($b.elt);
	  		}
	  	)+ 
	  	{$elt.setAttribute("type","math_add");}
	  | (MULTIPLY c=expression_block 
	      {
	      	// value = document.createElement("value");
	      	// value.setAttribute("name", "NUM" + itemCount);
	      	// value.appendChild($c.elt);
	      	// valArr.push(value);
	      	// itemCount++;
	      	addValue($c.elt);
	      }
	    )+
	    {$elt.setAttribute("type","math_multiply");}
	  )
	  {
	  	mutation.setAttribute("items",itemCount);
	  	$elt.appendChild(mutation);

	  	for (var i = 0; i<valArr.length; i++){
	  		$elt.appendChild(valArr[i]);
	  	}
	  }
	;

non_mutable_arith_expr returns [var elt]
@init{
	$elt = document.createElement("block");
	//type will get a value inside the rule
	$elt.setAttribute("inline","true");
}
	: a=expression_block 
	(
		SUBTRACT {
			$elt.setAttribute("type","math_subtract");
		} 
		| DIVIDE {
			$elt.setAttribute("type","math_division");
		} 
		| POWER {
			$elt.setAttribute("type","math_power");
		}
	) 
	b=expression_block
	{
		var valA = document.createElement("value");
	  valA.setAttribute("name","A");
	  valA.appendChild($a.elt);

	  var valB = document.createElement("value");
	  valB.setAttribute("name","B");
	  valB.appendChild($b.elt);

	  $elt.appendChild(valA);
	  $elt.appendChild(valB);
	}
	;
special_math_expr returns [var elt]
@init{
	$elt = document.createElement("block");
	$elt.setAttribute("type","math_divide");
	$elt.setAttribute("inline","true");

	var operation = "";
}
	:('modulo_of' {operation="MODULO";}
		| 'remainder_of' {operation="REMAINDER";}
		| 'quotient_of' {operation="QUOTIENT";}) 
	a=expression_block DIVIDE b=expression_block
	{
		var title = document.createElement("title");
		title.setAttribute("name","OP");
		title.innerHTML = operation;

		var dividend = document.createElement("value");
		dividend.setAttribute("name","DIVIDEND");
		dividend.appendChild($a.elt);

		var divisor = document.createElement("value");
		divisor.setAttribute("name","DIVISOR");
		divisor.appendChild($b.elt); 

		$elt.appendChild(title);
		$elt.appendChild(dividend);
		$elt.appendChild(divisor);
	}
	;

unary_math_expr returns [var elt]
@init{
	$elt = document.createElement("block");
	$elt.setAttribute("type","math_single");
	$elt.setAttribute("inline","false");

	var operation = "";

}
	: op=(SQRT {operation = "ROOT";}
		| ABS {operation = "ABS";}
		| SUBTRACT {operation = "NEG";}
		| LOG {operation = "LN";}
		| E_EXP {operation = "EXP";}
		| ROUND {operation = "ROUND";}
		| CEILING {operation = "CEILING";}
		| FLOOR {operation = "FLOOR";})
	expression_block
	{
		var title = document.createElement("title");
		title.setAttribute("name","OP");
		title.innerHTML = operation;

		var value = document.createElement("value");
		value.setAttribute("name","NUM");
		value.appendChild($expression_block.elt);

		$elt.appendChild(title);
		$elt.appendChild(value);
	}
	;

math_trig_expr returns [var elt]
@init{
	$elt = document.createElement("block");
	$elt.setAttribute("type","math_trig");
	$elt.setAttribute("inline","false");

	var operation = "";
}
	: (SIN {operation="SIN";}
		|COS {operation="COS";}
		|TAN {operation="TAN";}
		|ASIN {operation="ASIN";}
		|ACOS {operation="ACOS";}
		|ATAN {operation="ATAN";}) 
	expression_block
	{
		var title = document.createElement("title");
		title.setAttribute("name","OP");
		title.innerHTML = operation;

		var value = document.createElement("value");
		value.setAttribute("name","NUM");
		value.appendChild($expression_block.elt);

		$elt.appendChild(title);
		$elt.appendChild(value);
	}
	;

init_local_expr returns [var elt]
@init{
	$elt = document.createElement("block");
	$elt.setAttribute("type","local_declaration_expression");
	var mutation = document.createElement("mutation");
	var localName;
	var titleArr = [];
	var title;
	var count = 0;
	var valArr = [];
	var value;
}
	: INIT_LOCAL_VAR (LANGLE IDENTIFIER RANGLE LABEL_TO a=expression_block
		{
			localName = document.createElement("localname");
			localName.setAttribute("name",$IDENTIFIER.text);
			mutation.appendChild(localName);

			title = document.createElement("title");
			title.setAttribute("name","VAR" + count);
			title.innerHTML = $IDENTIFIER.text;
			titleArr.push(title);

			value = document.createElement("value");
			value.setAttribute("name", "DECL"+count);
			value.appendChild($a.elt);
			valArr.push(value);
			count++;
		})+
	  {
	  	$elt.appendChild(mutation);
	  	titleArr.forEach(function(title){
	  		$elt.appendChild(title);
	  	});
	  	valArr.forEach(function(value){
	  		$elt.appendChild(value);
	  	});
	  }
	  IN b=expression_block
	  {
	  	var returnVal = document.createElement("value");
	  	returnVal.setAttribute("name","RETURN");
	  	returnVal.appendChild($b.elt);
	  	$elt.appendChild(returnVal);
	  }
	;

variable_ref_expr returns [var elt]
@init{
	$elt = document.createElement("block");
	$elt.setAttribute("type","lexical_variable_get");

	var variable = "";
}

	: (GET)? (GLOBAL {variable += "global ";})? IDENTIFIER  //the space after global is very important
	{
		variable += $IDENTIFIER.text;
		var title = document.createElement("title");
		title.setAttribute("name","VAR");
		title.innerHTML = variable;

		$elt.appendChild(title);
	}
	;

color_expr returns [var elt]
@init{
	$elt = document.createElement("block");
	var title = document.createElement("title");
	title.setAttribute("name","COLOR");

	var type = "color_";
}
	: COLOR ( (BLACK {title.innerHTML="#000000"; type += $BLACK.text;}
		       | BLUE {title.innerHTML="#0000ff"; type += $BLUE.text;}
		       | WHITE {title.innerHTML="#ffffff"; type += $WHITE.text;}
		       | MAGENTA {title.innerHTML="#ff00ff"; type += $MAGENTA.text;}
		       | RED {title.innerHTML="#ff0000"; type += $RED.text;}
		       | LIGHT_GRAY {title.innerHTML="#cccccc"; type += $LIGHT_GRAY.text;}
		       | PINK {title.innerHTML="#ffafaf"; type += $PINK.text;}
		       | GRAY {title.innerHTML="#888888"; type += $GRAY.text;}
		       | ORANGE {title.innerHTML="#ffc800"; type += $ORANGE.text;}
		       | DARK_GRAY {title.innerHTML="#444444"; type += $DARK_GRAY.text;}
		       | YELLOW {title.innerHTML="#ffff00"; type += $YELLOW.text;}
		       | GREEN {title.innerHTML="#00ff00"; type += $GREEN.text;}
		       | CYAN {title.innerHTML="#00ffff"; type += $CYAN.text;}
		      )
	        {
	        	$elt.setAttribute("type",type);
	        	$elt.appendChild(title);
	        }
	    | HEX //custom_color
	      {
	      	title.innerHTML = $HEX.text;
		      $elt.setAttribute("type","color_black"); //because there's no other default color type
		      $elt.appendChild(title);
		    }
		  )
	| MAKE_COLOR expression_block
	{
		$elt.setAttribute("type","color_make_color");
		$elt.setAttribute("inline","false");
		var value = document.createElement("value");
		value.setAttribute("name","COLORLIST");
		value.appendChild($expression_block.elt);
		$elt.appendChild(value);
	}
	;

list_expr returns [var elt]
@init{
	$elt = document.createElement("block");
	$elt.setAttribute("type","lists_create_with");

	var mutation = document.createElement("mutation");
	var item_count = 0;

	var val_block_arr = [];
	var val_block;
}
	: (LIST | MAKE_LIST) 
	  (options {greedy=true;}: expression_block 
	      {
	      	item_count++; 
	      	val_block = document.createElement("value");
	      	val_block.setAttribute("name", ("ADD" + (item_count-1)));
	      	val_block.appendChild($expression_block.elt);
	      	val_block_arr.push(val_block);
	      } 
	  )*
	{
		mutation.setAttribute("items",item_count);
		$elt.appendChild(mutation);
		val_block_arr.forEach(function (block) {
			$elt.appendChild(block);
		});
	}
	;

	 /*(options {k=2;}: COMMA b=expression_block
	      {
	      	item_count++;
	      	val_block = document.createElement("block");
	      	val_block.setAttribute("name", "ADD" + (item_count-1));
	      	val_block.appendChild($b.elt);
	      	val_block_arr.add(val_block);
	      }
	  )?*/ 


component_expr returns [var elt]
@init{
	$elt = document.createElement("block");
	var mutation = document.createElement("mutation");
	var isComponentSetGet = false;
	var isGeneric = false;
	var value;
}
	: COMPONENT component=IDENTIFIER {
		$elt.setAttribute("type","component_component_block");
		var componentName = $component.text;
		var componentType;
		if(!this.isValidComponentName(componentName)){
			throw new TAILException("Invalid Component Name: " + componentName);
		} else{
			componentType = Blockly.Component.instanceNameToTypeName(componentName);
		}

		mutation.setAttribute("component_type",componentType);
		mutation.setAttribute("instance_name", componentName);
		$elt.appendChild(mutation);

		var title = document.createElement("title");
		title.setAttribute("name","COMPONENT_SELECTOR");
		title.innerHTML = componentName;
		$elt.appendChild(title);
	}

	| component=IDENTIFIER DOT property=IDENTIFIER {isComponentSetGet = true;} (OF_COMPONENT expression_block {isGeneric = true;})?
	{
		var componentName = $component.text;
		var propName = $property.text;

		//figure out component type based on whether this is a generic component block or not
		var componentType;
		if(isGeneric){
			$elt.setAttribute("inline","false"); //an extra thing to put in the DOM only in the case where isGeneric
			value = document.createElement("value");
			value.setAttribute("name","COMPONENT");
			value.appendChild($expression_block.elt);

			if(!Blockly.ComponentTypes.haveType(componentName)){
				throw new TAILException("Invalid Generic Component Name: " + componentName);
			} else{
				componentType = componentName;
			}
		} else{
			if(!this.isValidComponentName(componentName)){
				throw new TAILException("Invalid Component Name: " + componentName);
			} else{
				componentType = Blockly.Component.instanceNameToTypeName(componentName);
			}
		}
		mutation.setAttribute("component_type",componentType);

		if(!isGeneric){
			mutation.setAttribute("instance_name",componentName);

			var compSelectorTitle = document.createElement("title");
			compSelectorTitle.setAttribute("name","COMPONENT_SELECTOR");
			compSelectorTitle.innerHTML = componentName;
			$elt.appendChild(compSelectorTitle);
		}
		if(isComponentSetGet){
			$elt.setAttribute("type","component_set_get");
			mutation.setAttribute("set_or_get","get");
			if(!this.isValidComponentFieldName("properties",componentType,propName)){
				throw new TAILException("Invalid Component Property Name: " + propName);
			}else{
				mutation.setAttribute("property_name",propName);
				var title = document.createElement("title");
				title.setAttribute("name","PROP");
				title.innerHTML = propName;
				$elt.appendChild(title);
			}
				mutation.setAttribute("is_generic",isGeneric);
		}else{
			$elt.setAttribute("type","component_component_block");
		}

		$elt.insertBefore(mutation, $elt.firstElementChild);
		if(isGeneric){
			$elt.appendChild(value);
		}
	}
	;

tail_expr returns [var elt] //DOES THIS WORK??
@init{
	$elt = document.createElement("block");
	$elt.setAttribute("type","code_write_tail_exp");
	
	var title = document.createElement("title");
	title.setAttribute("name","CODE");
}
	: TAIL_EXP expression_block 
	{
		title.innerHTML = $text.substring($TAIL_EXP.text.length,$text.length).trim();
		$elt.appendChild(title);
	}
	;

atom returns [var elt]
@init{
	$elt = document.createElement("block");

	var title = document.createElement("title");
}
	: NUMBER {
		$elt.setAttribute("type","math_number");

		title.setAttribute("name","NUM");
		title.innerHTML = $NUMBER.text;
		$elt.appendChild(title);
	}
	| STRING {
		$elt.setAttribute("type","text");

		title.setAttribute("name","TEXT");
		var text = $STRING.text;
		title.innerHTML = text.substring(1,text.length-1);
		$elt.appendChild(title);
	}
	| TRUE {
		$elt.setAttribute("type","logic_boolean");

		title.setAttribute("name","BOOL");
		title.innerHTML = "TRUE";
		$elt.appendChild(title);
	}
	| FALSE {
		$elt.setAttribute("type","logic_boolean");

		title.setAttribute("name","BOOL");
		title.innerHTML = "FALSE";
		$elt.appendChild(title);
	}
	;

dotted_name
	: IDENTIFIER '.' IDENTIFIER;


/*--------------------------------------------------------
* LEXER RULES
*---------------------------------------------------------*/

fragment
ALPHA : ('a' .. 'z' | 'A' .. 'Z');

fragment
DIGIT : ('0' .. '9');

fragment
ALPHA_NUM
	: ALPHA | DIGIT
	;

fragment
ESC
	: '\\' .
	;

NUMBER : (DIGIT* DOT DIGIT+ | DIGIT+ (DOT)?);

//TODO: CHECK AI2 rules for Identifiers
IDENTIFIER : (ALPHA | '_')
	           (ALPHA | '_' | DIGIT)*; //identifiers cannot start with numbers

LABEL : (ALPHA | '_')+ ':';

KEYWORD : (ALPHA | '_')* ':';

STRING 
	: ('\'' (ESC | ~('\\' | '\n' | '\''))* '\'')
	| ('"' (ESC | ~('\\' | '\n' | '"'))* '"')
	;

HEX
	: '#' ALPHA_NUM ALPHA_NUM ALPHA_NUM ALPHA_NUM ALPHA_NUM ALPHA_NUM
	;

WS  :   ( ' '
        | '\t'
        | '\r'
        | '\n'
        ) {$channel=HIDDEN;}
    ;
