// $ANTLR 3.3 Nov 30, 2010 12:50:56 TAIL.g 2014-08-20 20:51:09

var TAILParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){

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

    }).call(this);

    TAILParser.superclass.constructor.call(this, input, state);

    this.dfa1 = new TAILParser.DFA1(this);
    this.dfa15 = new TAILParser.DFA15(this);
    this.dfa20 = new TAILParser.DFA20(this);

         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(TAILParser, {
    EOF: -1,
    T__93: 93,
    T__94: 94,
    T__95: 95,
    LSQUARE: 4,
    RSQUARE: 5,
    LCURLY: 6,
    RCURLY: 7,
    LPAREN: 8,
    RPAREN: 9,
    LANGLE: 10,
    RANGLE: 11,
    DOT: 12,
    COMMA: 13,
    TRUE: 14,
    FALSE: 15,
    WHEN: 16,
    IF: 17,
    THEN: 18,
    ELSE: 19,
    ELSE_IF: 20,
    FOR_EACH: 21,
    DO: 22,
    RESULT: 23,
    TO: 24,
    LABEL_TO: 25,
    CALL: 26,
    INIT_GLOBAL_VAR: 27,
    INIT_LOCAL_VAR: 28,
    GET: 29,
    SET: 30,
    GLOBAL: 31,
    IN: 32,
    NOT: 33,
    AND: 34,
    OR: 35,
    LEQ: 36,
    GEQ: 37,
    LOGIC_EQ: 38,
    LOGIC_NOT_EQ: 39,
    EQ: 40,
    NOT_EQ: 41,
    ADD: 42,
    SUBTRACT: 43,
    MULTIPLY: 44,
    DIVIDE: 45,
    POWER: 46,
    SQRT: 47,
    ABS: 48,
    LOG: 49,
    E_EXP: 50,
    ROUND: 51,
    CEILING: 52,
    FLOOR: 53,
    SIN: 54,
    COS: 55,
    TAN: 56,
    ASIN: 57,
    ACOS: 58,
    ATAN: 59,
    COLOR: 60,
    MAKE_COLOR: 61,
    BLACK: 62,
    BLUE: 63,
    WHITE: 64,
    MAGENTA: 65,
    RED: 66,
    LIGHT_GRAY: 67,
    PINK: 68,
    GRAY: 69,
    ORANGE: 70,
    DARK_GRAY: 71,
    YELLOW: 72,
    GREEN: 73,
    CYAN: 74,
    MAKE_LIST: 75,
    LIST: 76,
    OF_COMPONENT: 77,
    FOR_COMPONENT: 78,
    COMPONENT: 79,
    TAIL_EXP: 80,
    TAIL_STMT: 81,
    IDENTIFIER: 82,
    LABEL: 83,
    HEX: 84,
    NUMBER: 85,
    STRING: 86,
    ALPHA: 87,
    DIGIT: 88,
    ALPHA_NUM: 89,
    ESC: 90,
    KEYWORD: 91,
    WS: 92
});

(function(){
// public class variables
var EOF= -1,
    T__93= 93,
    T__94= 94,
    T__95= 95,
    LSQUARE= 4,
    RSQUARE= 5,
    LCURLY= 6,
    RCURLY= 7,
    LPAREN= 8,
    RPAREN= 9,
    LANGLE= 10,
    RANGLE= 11,
    DOT= 12,
    COMMA= 13,
    TRUE= 14,
    FALSE= 15,
    WHEN= 16,
    IF= 17,
    THEN= 18,
    ELSE= 19,
    ELSE_IF= 20,
    FOR_EACH= 21,
    DO= 22,
    RESULT= 23,
    TO= 24,
    LABEL_TO= 25,
    CALL= 26,
    INIT_GLOBAL_VAR= 27,
    INIT_LOCAL_VAR= 28,
    GET= 29,
    SET= 30,
    GLOBAL= 31,
    IN= 32,
    NOT= 33,
    AND= 34,
    OR= 35,
    LEQ= 36,
    GEQ= 37,
    LOGIC_EQ= 38,
    LOGIC_NOT_EQ= 39,
    EQ= 40,
    NOT_EQ= 41,
    ADD= 42,
    SUBTRACT= 43,
    MULTIPLY= 44,
    DIVIDE= 45,
    POWER= 46,
    SQRT= 47,
    ABS= 48,
    LOG= 49,
    E_EXP= 50,
    ROUND= 51,
    CEILING= 52,
    FLOOR= 53,
    SIN= 54,
    COS= 55,
    TAN= 56,
    ASIN= 57,
    ACOS= 58,
    ATAN= 59,
    COLOR= 60,
    MAKE_COLOR= 61,
    BLACK= 62,
    BLUE= 63,
    WHITE= 64,
    MAGENTA= 65,
    RED= 66,
    LIGHT_GRAY= 67,
    PINK= 68,
    GRAY= 69,
    ORANGE= 70,
    DARK_GRAY= 71,
    YELLOW= 72,
    GREEN= 73,
    CYAN= 74,
    MAKE_LIST= 75,
    LIST= 76,
    OF_COMPONENT= 77,
    FOR_COMPONENT= 78,
    COMPONENT= 79,
    TAIL_EXP= 80,
    TAIL_STMT= 81,
    IDENTIFIER= 82,
    LABEL= 83,
    HEX= 84,
    NUMBER= 85,
    STRING= 86,
    ALPHA= 87,
    DIGIT= 88,
    ALPHA_NUM= 89,
    ESC= 90,
    KEYWORD= 91,
    WS= 92;

// public instance methods/vars
org.antlr.lang.extend(TAILParser, org.antlr.runtime.Parser, {
        

    getTokenNames: function() { return TAILParser.tokenNames; },
    getGrammarFileName: function() { return "TAIL.g"; }
});
org.antlr.lang.augmentObject(TAILParser.prototype, {


    // TAIL.g:196:1: top_level_block returns [var elt] : LPAREN top_level RPAREN ;
    // $ANTLR start "top_level_block"
    top_level_block: function() {
        var elt = null;

         var top_level1 = null;

        try {
            // TAIL.g:197:2: ( LPAREN top_level RPAREN )
            // TAIL.g:197:4: LPAREN top_level RPAREN
            this.match(this.input,LPAREN,TAILParser.FOLLOW_LPAREN_in_top_level_block727); if (this.state.failed) return elt;
            this.pushFollow(TAILParser.FOLLOW_top_level_in_top_level_block729);
            top_level1=this.top_level();

            this.state._fsp--;
            if (this.state.failed) return elt;
            this.match(this.input,RPAREN,TAILParser.FOLLOW_RPAREN_in_top_level_block731); if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {
              elt = top_level1;
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:200:1: top_level returns [var elt] : ( global_var_decl | procedure_decl | function_decl | event_handler );
    // $ANTLR start "top_level"
    top_level: function() {
        var elt = null;

         var global_var_decl2 = null;
         var procedure_decl3 = null;
         var function_decl4 = null;
         var event_handler5 = null;

        try {
            // TAIL.g:201:2: ( global_var_decl | procedure_decl | function_decl | event_handler )
            var alt1=4;
            alt1 = this.dfa1.predict(this.input);
            switch (alt1) {
                case 1 :
                    // TAIL.g:201:4: global_var_decl
                    this.pushFollow(TAILParser.FOLLOW_global_var_decl_in_top_level748);
                    global_var_decl2=this.global_var_decl();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = global_var_decl2;
                    }


                    break;
                case 2 :
                    // TAIL.g:202:4: procedure_decl
                    this.pushFollow(TAILParser.FOLLOW_procedure_decl_in_top_level755);
                    procedure_decl3=this.procedure_decl();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = procedure_decl3;
                    }


                    break;
                case 3 :
                    // TAIL.g:203:4: function_decl
                    this.pushFollow(TAILParser.FOLLOW_function_decl_in_top_level762);
                    function_decl4=this.function_decl();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = function_decl4;
                    }


                    break;
                case 4 :
                    // TAIL.g:204:4: event_handler
                    this.pushFollow(TAILParser.FOLLOW_event_handler_in_top_level769);
                    event_handler5=this.event_handler();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = event_handler5;
                    }


                    break;

            }
        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:207:1: global_var_decl returns [var elt] : INIT_GLOBAL_VAR LANGLE IDENTIFIER RANGLE LABEL_TO expression_block ;
    // $ANTLR start "global_var_decl"
    global_var_decl: function() {
        var elt = null;

        var IDENTIFIER6 = null;
         var expression_block7 = null;


        	elt = document.createElement("block");
        	elt.setAttribute("type","global_declaration");
        	elt.setAttribute("inline","false");

        	var title = document.createElement("title");
        	title.setAttribute("name","NAME");
        	var value = document.createElement("value");
        	value.setAttribute("name","VALUE");

        try {
            // TAIL.g:218:2: ( INIT_GLOBAL_VAR LANGLE IDENTIFIER RANGLE LABEL_TO expression_block )
            // TAIL.g:218:4: INIT_GLOBAL_VAR LANGLE IDENTIFIER RANGLE LABEL_TO expression_block
            this.match(this.input,INIT_GLOBAL_VAR,TAILParser.FOLLOW_INIT_GLOBAL_VAR_in_global_var_decl790); if (this.state.failed) return elt;
            this.match(this.input,LANGLE,TAILParser.FOLLOW_LANGLE_in_global_var_decl792); if (this.state.failed) return elt;
            IDENTIFIER6=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_global_var_decl794); if (this.state.failed) return elt;
            this.match(this.input,RANGLE,TAILParser.FOLLOW_RANGLE_in_global_var_decl796); if (this.state.failed) return elt;
            this.match(this.input,LABEL_TO,TAILParser.FOLLOW_LABEL_TO_in_global_var_decl798); if (this.state.failed) return elt;
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_global_var_decl800);
            expression_block7=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              		title.innerHTML = (IDENTIFIER6?IDENTIFIER6.getText():null);
              		value.appendChild(expression_block7);
              		elt.appendChild(title);
              		elt.appendChild(value);
              	
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:227:1: procedure_decl returns [var elt] : TO LANGLE proc_name= IDENTIFIER RANGLE ( LANGLE arg_name= IDENTIFIER RANGLE )* DO suite ;
    // $ANTLR start "procedure_decl"
    procedure_decl: function() {
        var elt = null;

        var proc_name = null;
        var arg_name = null;
         var suite8 = null;


        	elt = document.createElement("block");
        	elt.setAttribute("type","procedures_defnoreturn");

        	var hasMutations = false;
        	var mutation = document.createElement("mutation");
        	var argsCount = 0;

        	var name = document.createElement("title");
        	name.setAttribute("name","NAME");

        	var var_title_arr = [];

        try {
            // TAIL.g:241:2: ( TO LANGLE proc_name= IDENTIFIER RANGLE ( LANGLE arg_name= IDENTIFIER RANGLE )* DO suite )
            // TAIL.g:241:4: TO LANGLE proc_name= IDENTIFIER RANGLE ( LANGLE arg_name= IDENTIFIER RANGLE )* DO suite
            this.match(this.input,TO,TAILParser.FOLLOW_TO_in_procedure_decl822); if (this.state.failed) return elt;
            this.match(this.input,LANGLE,TAILParser.FOLLOW_LANGLE_in_procedure_decl824); if (this.state.failed) return elt;
            proc_name=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_procedure_decl828); if (this.state.failed) return elt;
            this.match(this.input,RANGLE,TAILParser.FOLLOW_RANGLE_in_procedure_decl830); if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {
              name.innerHTML = (proc_name?proc_name.getText():null);
            }
            // TAIL.g:242:3: ( LANGLE arg_name= IDENTIFIER RANGLE )*
            loop2:
            do {
                var alt2=2;
                var LA2_0 = this.input.LA(1);

                if ( (LA2_0==LANGLE) ) {
                    alt2=1;
                }


                switch (alt2) {
                case 1 :
                    // TAIL.g:242:4: LANGLE arg_name= IDENTIFIER RANGLE
                    this.match(this.input,LANGLE,TAILParser.FOLLOW_LANGLE_in_procedure_decl837); if (this.state.failed) return elt;
                    arg_name=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_procedure_decl841); if (this.state.failed) return elt;
                    this.match(this.input,RANGLE,TAILParser.FOLLOW_RANGLE_in_procedure_decl843); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {

                      	 	  hasMutations = true;
                      	 	  var arg = document.createElement("arg");
                      	 	  arg.setAttribute("name",(arg_name?arg_name.getText():null));
                      	 	  mutation.appendChild(arg);
                      	 	  var var_title = document.createElement("title");
                      	 	  var_title.setAttribute("name","VAR"+argsCount);
                      	 	  var_title.innerHTML = (arg_name?arg_name.getText():null);
                      	 	  var_title_arr.push(var_title);
                      	 	  argsCount++;
                      	 	
                    }


                    break;

                default :
                    break loop2;
                }
            } while (true);

            this.match(this.input,DO,TAILParser.FOLLOW_DO_in_procedure_decl851); if (this.state.failed) return elt;
            this.pushFollow(TAILParser.FOLLOW_suite_in_procedure_decl853);
            suite8=this.suite();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              	 	if(hasMutations){
              	 		elt.appendChild(mutation);
              	 	}
              	 	elt.appendChild(name);
              	 	for(var i=0; i<var_title_arr.length; i++){
              	 		elt.appendChild(var_title_arr[i]);
              	 	}
              	 	var seq = suite8;
              	 	seq.setAttribute("name","STACK");
              	 	elt.appendChild(seq);
              	 
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:267:1: function_decl returns [var elt] : TO LANGLE func_name= IDENTIFIER RANGLE ( LANGLE arg_name= IDENTIFIER RANGLE )* RESULT expression_block ;
    // $ANTLR start "function_decl"
    function_decl: function() {
        var elt = null;

        var func_name = null;
        var arg_name = null;
         var expression_block9 = null;


        	elt = document.createElement("block");
        	elt.setAttribute("type","procedures_defreturn");

        	var hasMutations = false;
        	var mutation = document.createElement("mutation");
        	var argsCount = 0;

        	var name = document.createElement("title");
        	name.setAttribute("name","NAME");

        	var var_title_arr = [];

        	var value = document.createElement("value");
        	value.setAttribute("name","RETURN");

        try {
            // TAIL.g:284:2: ( TO LANGLE func_name= IDENTIFIER RANGLE ( LANGLE arg_name= IDENTIFIER RANGLE )* RESULT expression_block )
            // TAIL.g:284:4: TO LANGLE func_name= IDENTIFIER RANGLE ( LANGLE arg_name= IDENTIFIER RANGLE )* RESULT expression_block
            this.match(this.input,TO,TAILParser.FOLLOW_TO_in_function_decl874); if (this.state.failed) return elt;
            this.match(this.input,LANGLE,TAILParser.FOLLOW_LANGLE_in_function_decl876); if (this.state.failed) return elt;
            func_name=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_function_decl880); if (this.state.failed) return elt;
            this.match(this.input,RANGLE,TAILParser.FOLLOW_RANGLE_in_function_decl882); if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {
              name.innerHTML = (func_name?func_name.getText():null);
            }
            // TAIL.g:285:3: ( LANGLE arg_name= IDENTIFIER RANGLE )*
            loop3:
            do {
                var alt3=2;
                var LA3_0 = this.input.LA(1);

                if ( (LA3_0==LANGLE) ) {
                    alt3=1;
                }


                switch (alt3) {
                case 1 :
                    // TAIL.g:285:4: LANGLE arg_name= IDENTIFIER RANGLE
                    this.match(this.input,LANGLE,TAILParser.FOLLOW_LANGLE_in_function_decl889); if (this.state.failed) return elt;
                    arg_name=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_function_decl893); if (this.state.failed) return elt;
                    this.match(this.input,RANGLE,TAILParser.FOLLOW_RANGLE_in_function_decl895); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {

                      	 	  hasMutations = true;
                      	 	  var arg = document.createElement("arg");
                      	 	  arg.setAttribute("name",(arg_name?arg_name.getText():null));
                      	 	  mutation.appendChild(arg);
                      	 	  var var_title = document.createElement("title");
                      	 	  var_title.setAttribute("name","VAR"+argsCount);
                      	 	  var_title.innerHTML = (arg_name?arg_name.getText():null);
                      	 	  var_title_arr.push(var_title);
                      	 	  argsCount++;
                      	 	
                    }


                    break;

                default :
                    break loop3;
                }
            } while (true);

            this.match(this.input,RESULT,TAILParser.FOLLOW_RESULT_in_function_decl903); if (this.state.failed) return elt;
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_function_decl905);
            expression_block9=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              	 	if(hasMutations){
              	 		elt.appendChild(mutation);
              	 	}
              	 	elt.appendChild(name);
              	 	for(var i=0; i<var_title_arr.length; i++){
              	 		elt.appendChild(var_title_arr[i]);
              	 	}
              	 	value.appendChild(expression_block9);
              	 	elt.appendChild(value);
              	 
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:309:1: event_handler returns [var elt] : WHEN component= IDENTIFIER DOT event= IDENTIFIER ( LANGLE arg= IDENTIFIER RANGLE )* DO suite ;
    // $ANTLR start "event_handler"
    event_handler: function() {
        var elt = null;

        var component = null;
        var event = null;
        var arg = null;
         var suite10 = null;


        	elt = document.createElement("block");
        	elt.setAttribute("type","component_event");
        	var mutation = document.createElement("mutation");
        	//mutation.setAttribute("component_type",)
        	//mutation attributes will be set inside the body of the rule
        	//dotted names allow spaces...which we don't want allowed...
        	var title = document.createElement("title");
        	title.setAttribute("name","COMPONENT_SELECTOR");

        try {
            // TAIL.g:320:2: ( WHEN component= IDENTIFIER DOT event= IDENTIFIER ( LANGLE arg= IDENTIFIER RANGLE )* DO suite )
            // TAIL.g:320:4: WHEN component= IDENTIFIER DOT event= IDENTIFIER ( LANGLE arg= IDENTIFIER RANGLE )* DO suite
            this.match(this.input,WHEN,TAILParser.FOLLOW_WHEN_in_event_handler926); if (this.state.failed) return elt;
            component=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_event_handler930); if (this.state.failed) return elt;
            this.match(this.input,DOT,TAILParser.FOLLOW_DOT_in_event_handler932); if (this.state.failed) return elt;
            event=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_event_handler936); if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              		var componentName = (component?component.getText():null);
              		var eventName = (event?event.getText():null);
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
            // TAIL.g:344:3: ( LANGLE arg= IDENTIFIER RANGLE )*
            loop4:
            do {
                var alt4=2;
                var LA4_0 = this.input.LA(1);

                if ( (LA4_0==LANGLE) ) {
                    alt4=1;
                }


                switch (alt4) {
                case 1 :
                    // TAIL.g:344:4: LANGLE arg= IDENTIFIER RANGLE
                    this.match(this.input,LANGLE,TAILParser.FOLLOW_LANGLE_in_event_handler944); if (this.state.failed) return elt;
                    arg=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_event_handler948); if (this.state.failed) return elt;
                    this.match(this.input,RANGLE,TAILParser.FOLLOW_RANGLE_in_event_handler950); if (this.state.failed) return elt;


                    break;

                default :
                    break loop4;
                }
            } while (true);

            this.match(this.input,DO,TAILParser.FOLLOW_DO_in_event_handler958); if (this.state.failed) return elt;
            this.pushFollow(TAILParser.FOLLOW_suite_in_event_handler960);
            suite10=this.suite();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              	  	var statements = suite10;
              	  	statements.setAttribute("name","DO");

              	  	elt.appendChild(mutation);
              	  	elt.appendChild(title);
              	  	elt.appendChild(statements);
              	  
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:356:1: expression_start returns [var xml] : expression_block ;
    // $ANTLR start "expression_start"
    expression_start: function() {
        var xml = null;

         var expression_block11 = null;


        	xml = document.createElement("block");

        try {
            // TAIL.g:360:2: ( expression_block )
            // TAIL.g:360:4: expression_block
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_expression_start984);
            expression_block11=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return xml;
            if ( this.state.backtracking===0 ) {
              xml.appendChild(expression_block11);
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return xml;
    },


    // TAIL.g:363:1: expression_block returns [var elt] : LCURLY expression RCURLY ;
    // $ANTLR start "expression_block"
    expression_block: function() {
        var elt = null;

         var expression12 = null;

        try {
            // TAIL.g:364:2: ( LCURLY expression RCURLY )
            // TAIL.g:364:4: LCURLY expression RCURLY
            this.match(this.input,LCURLY,TAILParser.FOLLOW_LCURLY_in_expression_block1001); if (this.state.failed) return elt;
            this.pushFollow(TAILParser.FOLLOW_expression_in_expression_block1003);
            expression12=this.expression();

            this.state._fsp--;
            if (this.state.failed) return elt;
            this.match(this.input,RCURLY,TAILParser.FOLLOW_RCURLY_in_expression_block1005); if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {
              elt = expression12;
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:367:1: suite returns [var elt] : ( statement_block )* ;
    // $ANTLR start "suite"
    suite: function() {
        var elt = null;

         var statement_block13 = null;


        	elt = document.createElement("statement"); //TODO figure out what goes here???!!!??
        	//the name attribute of the set of statements will be set by whatever is calling this rule.
        	var count = 0;
        	var prevStatementBlock;
        	var currentStatementBlock;
        	var stmt_arr = [];

        try {
            // TAIL.g:376:2: ( ( statement_block )* )
            // TAIL.g:376:4: ( statement_block )*
            // TAIL.g:376:4: ( statement_block )*
            loop5:
            do {
                var alt5=2;
                var LA5_0 = this.input.LA(1);

                if ( (LA5_0==LSQUARE) ) {
                    alt5=1;
                }


                switch (alt5) {
                case 1 :
                    // TAIL.g:376:5: statement_block
                    this.pushFollow(TAILParser.FOLLOW_statement_block_in_suite1027);
                    statement_block13=this.statement_block();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {

                      		  if (count === 0){ // this is the very first statement
                      		  	prevStatementBlock = statement_block13;
                      		  	elt.appendChild(prevStatementBlock);
                      		  }else{ //all of the rest of the statement blocks
                      		  	var next = document.createElement("next");
                      		  	var currentStmt = statement_block13;
                      		  	next.appendChild(currentStmt);
                      		  	prevStatementBlock.appendChild(next);
                      		  	prevStatementBlock = currentStmt;
                      		  }
                      		  count++;
                      		
                    }


                    break;

                default :
                    break loop5;
                }
            } while (true);




        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:424:1: statement_block returns [var elt] : LSQUARE statement RSQUARE ;
    // $ANTLR start "statement_block"
    statement_block: function() {
        var elt = null;

         var statement14 = null;

        try {
            // TAIL.g:425:2: ( LSQUARE statement RSQUARE )
            // TAIL.g:425:4: LSQUARE statement RSQUARE
            this.match(this.input,LSQUARE,TAILParser.FOLLOW_LSQUARE_in_statement_block1113); if (this.state.failed) return elt;
            this.pushFollow(TAILParser.FOLLOW_statement_in_statement_block1115);
            statement14=this.statement();

            this.state._fsp--;
            if (this.state.failed) return elt;
            this.match(this.input,RSQUARE,TAILParser.FOLLOW_RSQUARE_in_statement_block1117); if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {
              elt = statement14;
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:429:1: statement returns [var elt] : ( if_stmt | variable_set_stmt | component_stmt | tail_stmt );
    // $ANTLR start "statement"
    statement: function() {
        var elt = null;

         var if_stmt15 = null;
         var variable_set_stmt16 = null;
         var component_stmt17 = null;
         var tail_stmt18 = null;

        try {
            // TAIL.g:430:2: ( if_stmt | variable_set_stmt | component_stmt | tail_stmt )
            var alt6=4;
            switch ( this.input.LA(1) ) {
            case IF:
                alt6=1;
                break;
            case SET:
                var LA6_2 = this.input.LA(2);

                if ( (LA6_2==IDENTIFIER) ) {
                    var LA6_5 = this.input.LA(3);

                    if ( (LA6_5==DOT) ) {
                        alt6=3;
                    }
                    else if ( (LA6_5==LABEL_TO) ) {
                        alt6=2;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 6, 5, this.input);

                        throw nvae;
                    }
                }
                else if ( (LA6_2==GLOBAL) ) {
                    alt6=2;
                }
                else {
                    if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                    var nvae =
                        new org.antlr.runtime.NoViableAltException("", 6, 2, this.input);

                    throw nvae;
                }
                break;
            case CALL:
                alt6=3;
                break;
            case TAIL_STMT:
                alt6=4;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 6, 0, this.input);

                throw nvae;
            }

            switch (alt6) {
                case 1 :
                    // TAIL.g:430:4: if_stmt
                    this.pushFollow(TAILParser.FOLLOW_if_stmt_in_statement1135);
                    if_stmt15=this.if_stmt();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = if_stmt15;
                    }


                    break;
                case 2 :
                    // TAIL.g:431:4: variable_set_stmt
                    this.pushFollow(TAILParser.FOLLOW_variable_set_stmt_in_statement1142);
                    variable_set_stmt16=this.variable_set_stmt();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = variable_set_stmt16;
                    }


                    break;
                case 3 :
                    // TAIL.g:432:4: component_stmt
                    this.pushFollow(TAILParser.FOLLOW_component_stmt_in_statement1149);
                    component_stmt17=this.component_stmt();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = component_stmt17;
                    }


                    break;
                case 4 :
                    // TAIL.g:433:4: tail_stmt
                    this.pushFollow(TAILParser.FOLLOW_tail_stmt_in_statement1156);
                    tail_stmt18=this.tail_stmt();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = (tail_stmt18!==null?tail_stmt18.elt:null);
                    }


                    break;

            }
        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:436:1: if_stmt returns [var elt] : IF e1= expression_block THEN a= suite ( ( ELSE_IF e2= expression_block THEN b= suite )* ( ELSE c= suite )? )? ;
    // $ANTLR start "if_stmt"
    if_stmt: function() {
        var elt = null;

         var e1 = null;
         var a = null;
         var e2 = null;
         var b = null;
         var c = null;


        	elt = document.createElement("block");
        	elt.setAttribute("inline","false");
        	elt.setAttribute("type","controls_if");

        	var mutation = document.createElement("mutation");
        	var mutations = false;
        	var else_if_count = 0;
        	var else_count = 0;

        try {
            // TAIL.g:447:2: ( IF e1= expression_block THEN a= suite ( ( ELSE_IF e2= expression_block THEN b= suite )* ( ELSE c= suite )? )? )
            // TAIL.g:447:4: IF e1= expression_block THEN a= suite ( ( ELSE_IF e2= expression_block THEN b= suite )* ( ELSE c= suite )? )?
            this.match(this.input,IF,TAILParser.FOLLOW_IF_in_if_stmt1177); if (this.state.failed) return elt;
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_if_stmt1181);
            e1=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              		var val = document.createElement("value");
              		val.setAttribute("name","IF0");
              		val.appendChild(e1);
              		elt.appendChild(val);
              	
            }
            this.match(this.input,THEN,TAILParser.FOLLOW_THEN_in_if_stmt1187); if (this.state.failed) return elt;
            this.pushFollow(TAILParser.FOLLOW_suite_in_if_stmt1191);
            a=this.suite();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              		var then_stmts = a;
              		then_stmts.setAttribute("name", "DO0");
              		//then_stmts.appendChild(a);
              		elt.appendChild(then_stmts);
              	
            }
            // TAIL.g:459:2: ( ( ELSE_IF e2= expression_block THEN b= suite )* ( ELSE c= suite )? )?
            var alt9=2;
            switch ( this.input.LA(1) ) {
                case ELSE:
                case ELSE_IF:
                    alt9=1;
                    break;
                case RSQUARE:
                    var LA9_2 = this.input.LA(2);

                    if ( (this.synpred13_TAIL()) ) {
                        alt9=1;
                    }
                    break;
                case EOF:
                    var LA9_3 = this.input.LA(2);

                    if ( (this.synpred13_TAIL()) ) {
                        alt9=1;
                    }
                    break;
            }

            switch (alt9) {
                case 1 :
                    // TAIL.g:459:3: ( ELSE_IF e2= expression_block THEN b= suite )* ( ELSE c= suite )?
                    // TAIL.g:459:3: ( ELSE_IF e2= expression_block THEN b= suite )*
                    loop7:
                    do {
                        var alt7=2;
                        var LA7_0 = this.input.LA(1);

                        if ( (LA7_0==ELSE_IF) ) {
                            alt7=1;
                        }


                        switch (alt7) {
                        case 1 :
                            // TAIL.g:459:4: ELSE_IF e2= expression_block THEN b= suite
                            this.match(this.input,ELSE_IF,TAILParser.FOLLOW_ELSE_IF_in_if_stmt1198); if (this.state.failed) return elt;
                            if ( this.state.backtracking===0 ) {
                              mutations = true; else_if_count++;
                            }
                            this.pushFollow(TAILParser.FOLLOW_expression_block_in_if_stmt1204);
                            e2=this.expression_block();

                            this.state._fsp--;
                            if (this.state.failed) return elt;
                            if ( this.state.backtracking===0 ) {

                              		var value = document.createElement("value");
                              		value.setAttribute("name","IF"+else_if_count);
                              		value.appendChild(e2);
                              		elt.appendChild(value);
                              	
                            }
                            this.match(this.input,THEN,TAILParser.FOLLOW_THEN_in_if_stmt1207); if (this.state.failed) return elt;
                            this.pushFollow(TAILParser.FOLLOW_suite_in_if_stmt1211);
                            b=this.suite();

                            this.state._fsp--;
                            if (this.state.failed) return elt;
                            if ( this.state.backtracking===0 ) {

                              		var else_if_stmts = b;
                              		else_if_stmts.setAttribute("name","DO"+else_if_count);
                              		// else_if_stmts.appendChild(b);
                              		elt.appendChild(else_if_stmts);
                              	
                            }


                            break;

                        default :
                            break loop7;
                        }
                    } while (true);

                    // TAIL.g:469:6: ( ELSE c= suite )?
                    var alt8=2;
                    var LA8_0 = this.input.LA(1);

                    if ( (LA8_0==ELSE) ) {
                        alt8=1;
                    }
                    switch (alt8) {
                        case 1 :
                            // TAIL.g:469:7: ELSE c= suite
                            this.match(this.input,ELSE,TAILParser.FOLLOW_ELSE_in_if_stmt1218); if (this.state.failed) return elt;
                            this.pushFollow(TAILParser.FOLLOW_suite_in_if_stmt1222);
                            c=this.suite();

                            this.state._fsp--;
                            if (this.state.failed) return elt;
                            if ( this.state.backtracking===0 ) {

                              		mutations = true;
                              		else_count++;

                              		var else_stmts = c;
                              		else_stmts.setAttribute("name","ELSE");
                              		// else_stmts.appendChild(c);
                              		elt.appendChild(else_stmts);
                              	
                            }


                            break;

                    }



                    break;

            }

            if ( this.state.backtracking===0 ) {

              		if(mutations){
              			if (else_if_count !== 0){
              				mutation.setAttribute("elseif",else_if_count);
              			}
              			if (else_count !== 0){
              				mutation.setAttribute("else",else_count);
              			}
              			elt.insertBefore(mutation, elt.firstElementChild);
              		}
              	
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:491:1: variable_set_stmt returns [var elt] : SET ( GLOBAL )? IDENTIFIER LABEL_TO expression_block ;
    // $ANTLR start "variable_set_stmt"
    variable_set_stmt: function() {
        var elt = null;

        var IDENTIFIER19 = null;
         var expression_block20 = null;


        	elt = document.createElement("block");
        	elt.setAttribute("type","lexical_variable_set");
        	elt.setAttribute("inline","false");

        	var title = document.createElement("title");
        	title.setAttribute("name","VAR");

        	var var_name = "";

        	var value = document.createElement("value");
        	value.setAttribute("name","VALUE");

        try {
            // TAIL.g:505:2: ( SET ( GLOBAL )? IDENTIFIER LABEL_TO expression_block )
            // TAIL.g:505:4: SET ( GLOBAL )? IDENTIFIER LABEL_TO expression_block
            this.match(this.input,SET,TAILParser.FOLLOW_SET_in_variable_set_stmt1250); if (this.state.failed) return elt;
            // TAIL.g:505:8: ( GLOBAL )?
            var alt10=2;
            var LA10_0 = this.input.LA(1);

            if ( (LA10_0==GLOBAL) ) {
                alt10=1;
            }
            switch (alt10) {
                case 1 :
                    // TAIL.g:505:9: GLOBAL
                    this.match(this.input,GLOBAL,TAILParser.FOLLOW_GLOBAL_in_variable_set_stmt1253); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      var_name += "global ";
                    }


                    break;

            }

            IDENTIFIER19=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_variable_set_stmt1259); if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {
              var_name += (IDENTIFIER19?IDENTIFIER19.getText():null);
            }
            this.match(this.input,LABEL_TO,TAILParser.FOLLOW_LABEL_TO_in_variable_set_stmt1263); if (this.state.failed) return elt;
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_variable_set_stmt1265);
            expression_block20=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              		title.innerHTML = var_name;
              		elt.appendChild(title);

              		value.appendChild(expression_block20);
              		elt.appendChild(value);
              	
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:514:1: component_stmt returns [var elt] : ( SET component= IDENTIFIER DOT property= IDENTIFIER ( OF_COMPONENT of_comp= expression_block )? LABEL_TO to= expression_block | CALL component= IDENTIFIER DOT method= IDENTIFIER ( FOR_COMPONENT for_comp= expression_block )? ( LABEL arg= expression_block )* );
    // $ANTLR start "component_stmt"
    component_stmt: function() {
        var elt = null;

        var component = null;
        var property = null;
        var method = null;
         var of_comp = null;
         var to = null;
         var for_comp = null;
         var arg = null;


        	elt = document.createElement("block");
        	elt.setAttribute("inline","false");
        	var mutation = document.createElement("mutation");
        	var isGeneric = false;

        try {
            // TAIL.g:521:2: ( SET component= IDENTIFIER DOT property= IDENTIFIER ( OF_COMPONENT of_comp= expression_block )? LABEL_TO to= expression_block | CALL component= IDENTIFIER DOT method= IDENTIFIER ( FOR_COMPONENT for_comp= expression_block )? ( LABEL arg= expression_block )* )
            var alt14=2;
            var LA14_0 = this.input.LA(1);

            if ( (LA14_0==SET) ) {
                alt14=1;
            }
            else if ( (LA14_0==CALL) ) {
                alt14=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 14, 0, this.input);

                throw nvae;
            }
            switch (alt14) {
                case 1 :
                    // TAIL.g:521:4: SET component= IDENTIFIER DOT property= IDENTIFIER ( OF_COMPONENT of_comp= expression_block )? LABEL_TO to= expression_block
                    this.match(this.input,SET,TAILParser.FOLLOW_SET_in_component_stmt1286); if (this.state.failed) return elt;
                    component=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_component_stmt1290); if (this.state.failed) return elt;
                    this.match(this.input,DOT,TAILParser.FOLLOW_DOT_in_component_stmt1292); if (this.state.failed) return elt;
                    property=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_component_stmt1296); if (this.state.failed) return elt;
                    // TAIL.g:521:53: ( OF_COMPONENT of_comp= expression_block )?
                    var alt11=2;
                    var LA11_0 = this.input.LA(1);

                    if ( (LA11_0==OF_COMPONENT) ) {
                        alt11=1;
                    }
                    switch (alt11) {
                        case 1 :
                            // TAIL.g:521:54: OF_COMPONENT of_comp= expression_block
                            this.match(this.input,OF_COMPONENT,TAILParser.FOLLOW_OF_COMPONENT_in_component_stmt1299); if (this.state.failed) return elt;
                            this.pushFollow(TAILParser.FOLLOW_expression_block_in_component_stmt1303);
                            of_comp=this.expression_block();

                            this.state._fsp--;
                            if (this.state.failed) return elt;
                            if ( this.state.backtracking===0 ) {
                              isGeneric = true;
                            }


                            break;

                    }

                    this.match(this.input,LABEL_TO,TAILParser.FOLLOW_LABEL_TO_in_component_stmt1309); if (this.state.failed) return elt;
                    this.pushFollow(TAILParser.FOLLOW_expression_block_in_component_stmt1313);
                    to=this.expression_block();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {

                      		
                      		elt.setAttribute("type","component_set_get");
                      		mutation.setAttribute("set_or_get", "set");

                      		var componentName = (component?component.getText():null);
                      		var propName = (property?property.getText():null);

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
                      				elt.appendChild(title);
                      			}
                      			var title = document.createElement("title");
                      			title.setAttribute("name","PROP");
                      			title.innerHTML = propName;
                      			elt.appendChild(title);

                      			if(isGeneric){
                      				var componentVal = document.createElement("value");
                      				componentVal.setAttribute("name","COMPONENT");
                      				componentVal.appendChild(of_comp);
                      				elt.appendChild(componentVal);
                      			}

                      			var value = document.createElement("value");
                      			value.setAttribute("name","VALUE");
                      			value.appendChild(to);
                      			elt.appendChild(value);
                      		}
                      		elt.insertBefore(mutation, elt.firstElementChild);
                      	
                    }


                    break;
                case 2 :
                    // TAIL.g:577:4: CALL component= IDENTIFIER DOT method= IDENTIFIER ( FOR_COMPONENT for_comp= expression_block )? ( LABEL arg= expression_block )*
                    if ( this.state.backtracking===0 ) {
                      var valArr = []; var argCount=0;
                    }
                    this.match(this.input,CALL,TAILParser.FOLLOW_CALL_in_component_stmt1323); if (this.state.failed) return elt;
                    component=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_component_stmt1327); if (this.state.failed) return elt;
                    this.match(this.input,DOT,TAILParser.FOLLOW_DOT_in_component_stmt1329); if (this.state.failed) return elt;
                    method=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_component_stmt1333); if (this.state.failed) return elt;
                    // TAIL.g:579:2: ( FOR_COMPONENT for_comp= expression_block )?
                    var alt12=2;
                    var LA12_0 = this.input.LA(1);

                    if ( (LA12_0==FOR_COMPONENT) ) {
                        alt12=1;
                    }
                    switch (alt12) {
                        case 1 :
                            // TAIL.g:579:3: FOR_COMPONENT for_comp= expression_block
                            this.match(this.input,FOR_COMPONENT,TAILParser.FOLLOW_FOR_COMPONENT_in_component_stmt1338); if (this.state.failed) return elt;
                            this.pushFollow(TAILParser.FOLLOW_expression_block_in_component_stmt1342);
                            for_comp=this.expression_block();

                            this.state._fsp--;
                            if (this.state.failed) return elt;
                            if ( this.state.backtracking===0 ) {
                              isGeneric=true;
                            }


                            break;

                    }

                    // TAIL.g:580:2: ( LABEL arg= expression_block )*
                    loop13:
                    do {
                        var alt13=2;
                        var LA13_0 = this.input.LA(1);

                        if ( (LA13_0==LABEL) ) {
                            alt13=1;
                        }


                        switch (alt13) {
                        case 1 :
                            // TAIL.g:580:3: LABEL arg= expression_block
                            this.match(this.input,LABEL,TAILParser.FOLLOW_LABEL_in_component_stmt1351); if (this.state.failed) return elt;
                            this.pushFollow(TAILParser.FOLLOW_expression_block_in_component_stmt1355);
                            arg=this.expression_block();

                            this.state._fsp--;
                            if (this.state.failed) return elt;
                            if ( this.state.backtracking===0 ) {

                              		var val = document.createElement("value"); 
                              		val.setAttribute("name","ARG"+argCount);
                              		val.appendChild(arg);
                              		valArr.push(val);
                              	
                            }


                            break;

                        default :
                            break loop13;
                        }
                    } while (true);

                    if ( this.state.backtracking===0 ) {

                      		elt.setAttribute("type","component_method");
                      		
                      		var componentName = (component?component.getText():null);
                      		var methodName = (method?method.getText():null);

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
                      				elt.appendChild(mutation);

                      				var title = document.createElement("title");
                      				title.setAttribute("name","COMPONENT_SELECTOR");
                      				title.innerHTML = componentName;
                      				elt.appendChild(title);
                      			} else{
                      				elt.appendChild(mutation);
                      				var value = document.createElement("value");
                      				value.setAttribute("name","COMPONENT");
                      				value.appendChild(for_comp);
                      				elt.appendChild(value);
                      			}
                      		}
                      		for (var i = 0; i<valArr.length; i++){
                      				elt.appendChild(valArr[i]);
                      		}	
                      	
                    }


                    break;

            }
        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },

    // inline static return class
    tail_stmt_return: (function() {
        TAILParser.tail_stmt_return = function(){};
        org.antlr.lang.extend(TAILParser.tail_stmt_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
        });
        return;
    })(),

    // TAIL.g:634:1: tail_stmt returns [var elt] : TAIL_STMT statement_block ;
    // $ANTLR start "tail_stmt"
    tail_stmt: function() {
        var retval = new TAILParser.tail_stmt_return();
        retval.start = this.input.LT(1);

        var TAIL_STMT21 = null;


        	console.log("In the TAIL STMT Rule...");
        	retval.elt = document.createElement("block");
        	retval.elt.setAttribute("type","code_write_tail_stmt");
        	
        	var title = document.createElement("title");
        	title.setAttribute("name","CODE");

        try {
            // TAIL.g:643:2: ( TAIL_STMT statement_block )
            // TAIL.g:643:4: TAIL_STMT statement_block
            TAIL_STMT21=this.match(this.input,TAIL_STMT,TAILParser.FOLLOW_TAIL_STMT_in_tail_stmt1380); if (this.state.failed) return retval;
            this.pushFollow(TAILParser.FOLLOW_statement_block_in_tail_stmt1382);
            this.statement_block();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {

              		title.innerHTML = this.input.toString(retval.start,this.input.LT(-1)).substring((TAIL_STMT21?TAIL_STMT21.getText():null).length,this.input.toString(retval.start,this.input.LT(-1)).length).trim();
              		retval.elt.appendChild(title);
              	
            }



            retval.stop = this.input.LT(-1);

        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return retval;
    },


    // TAIL.g:650:1: expression returns [var elt] : ( if_expr | logic_expr | not_expr | compare_eq_expr | compare_math_eq_expr | compare_math_expr | math_expr | init_local_expr | component_expr | variable_ref_expr | color_expr | list_expr | tail_expr | atom );
    // $ANTLR start "expression"
    expression: function() {
        var elt = null;

         var if_expr22 = null;
         var logic_expr23 = null;
         var not_expr24 = null;
         var compare_eq_expr25 = null;
         var compare_math_eq_expr26 = null;
         var compare_math_expr27 = null;
         var math_expr28 = null;
         var init_local_expr29 = null;
         var component_expr30 = null;
         var variable_ref_expr31 = null;
         var color_expr32 = null;
         var list_expr33 = null;
         var tail_expr34 = null;
         var atom35 = null;

        try {
            // TAIL.g:651:2: ( if_expr | logic_expr | not_expr | compare_eq_expr | compare_math_eq_expr | compare_math_expr | math_expr | init_local_expr | component_expr | variable_ref_expr | color_expr | list_expr | tail_expr | atom )
            var alt15=14;
            alt15 = this.dfa15.predict(this.input);
            switch (alt15) {
                case 1 :
                    // TAIL.g:651:4: if_expr
                    this.pushFollow(TAILParser.FOLLOW_if_expr_in_expression1401);
                    if_expr22=this.if_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = if_expr22;
                    }


                    break;
                case 2 :
                    // TAIL.g:653:4: logic_expr
                    this.pushFollow(TAILParser.FOLLOW_logic_expr_in_expression1410);
                    logic_expr23=this.logic_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = logic_expr23;
                    }


                    break;
                case 3 :
                    // TAIL.g:654:4: not_expr
                    this.pushFollow(TAILParser.FOLLOW_not_expr_in_expression1417);
                    not_expr24=this.not_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = not_expr24;
                    }


                    break;
                case 4 :
                    // TAIL.g:655:4: compare_eq_expr
                    this.pushFollow(TAILParser.FOLLOW_compare_eq_expr_in_expression1424);
                    compare_eq_expr25=this.compare_eq_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = compare_eq_expr25;
                    }


                    break;
                case 5 :
                    // TAIL.g:656:4: compare_math_eq_expr
                    this.pushFollow(TAILParser.FOLLOW_compare_math_eq_expr_in_expression1431);
                    compare_math_eq_expr26=this.compare_math_eq_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = compare_math_eq_expr26;
                    }


                    break;
                case 6 :
                    // TAIL.g:657:4: compare_math_expr
                    this.pushFollow(TAILParser.FOLLOW_compare_math_expr_in_expression1438);
                    compare_math_expr27=this.compare_math_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = compare_math_expr27;
                    }


                    break;
                case 7 :
                    // TAIL.g:658:4: math_expr
                    this.pushFollow(TAILParser.FOLLOW_math_expr_in_expression1445);
                    math_expr28=this.math_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = math_expr28;
                    }


                    break;
                case 8 :
                    // TAIL.g:659:4: init_local_expr
                    this.pushFollow(TAILParser.FOLLOW_init_local_expr_in_expression1452);
                    init_local_expr29=this.init_local_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = init_local_expr29;
                    }


                    break;
                case 9 :
                    // TAIL.g:660:4: component_expr
                    this.pushFollow(TAILParser.FOLLOW_component_expr_in_expression1459);
                    component_expr30=this.component_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = component_expr30;
                    }


                    break;
                case 10 :
                    // TAIL.g:661:4: variable_ref_expr
                    this.pushFollow(TAILParser.FOLLOW_variable_ref_expr_in_expression1466);
                    variable_ref_expr31=this.variable_ref_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = variable_ref_expr31;
                    }


                    break;
                case 11 :
                    // TAIL.g:662:4: color_expr
                    this.pushFollow(TAILParser.FOLLOW_color_expr_in_expression1473);
                    color_expr32=this.color_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = color_expr32;
                    }


                    break;
                case 12 :
                    // TAIL.g:663:4: list_expr
                    this.pushFollow(TAILParser.FOLLOW_list_expr_in_expression1480);
                    list_expr33=this.list_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = list_expr33;
                    }


                    break;
                case 13 :
                    // TAIL.g:664:4: tail_expr
                    this.pushFollow(TAILParser.FOLLOW_tail_expr_in_expression1487);
                    tail_expr34=this.tail_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = (tail_expr34!==null?tail_expr34.elt:null);
                    }


                    break;
                case 14 :
                    // TAIL.g:665:4: atom
                    this.pushFollow(TAILParser.FOLLOW_atom_in_expression1494);
                    atom35=this.atom();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = atom35;
                    }


                    break;

            }
        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:676:1: if_expr returns [var elt] : IF a= expression_block THEN b= expression_block ELSE c= expression_block ;
    // $ANTLR start "if_expr"
    if_expr: function() {
        var elt = null;

         var a = null;
         var b = null;
         var c = null;


        	elt = document.createElement("block");
        	elt.setAttribute("type","controls_choose");
        	elt.setAttribute("inline","false");

        try {
            // TAIL.g:684:2: ( IF a= expression_block THEN b= expression_block ELSE c= expression_block )
            // TAIL.g:684:4: IF a= expression_block THEN b= expression_block ELSE c= expression_block
            this.match(this.input,IF,TAILParser.FOLLOW_IF_in_if_expr1526); if (this.state.failed) return elt;
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_if_expr1530);
            a=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            this.match(this.input,THEN,TAILParser.FOLLOW_THEN_in_if_expr1532); if (this.state.failed) return elt;
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_if_expr1536);
            b=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            this.match(this.input,ELSE,TAILParser.FOLLOW_ELSE_in_if_expr1538); if (this.state.failed) return elt;
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_if_expr1542);
            c=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              		var testVal = document.createElement("value");
              		testVal.setAttribute("name","TEST");
              		testVal.appendChild(a);

              		var thenVal = document.createElement("value");
              		thenVal.setAttribute("name","THENRETURN");
              		thenVal.appendChild(b);

              		var elseVal = document.createElement("value");
              		elseVal.setAttribute("name","ELSERETURN");
              		elseVal.appendChild(c);

              		elt.appendChild(testVal);
              		elt.appendChild(thenVal);
              		elt.appendChild(elseVal);
              	
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:717:1: logic_expr returns [var elt] : a= expression_block ( AND | OR ) b= expression_block ;
    // $ANTLR start "logic_expr"
    logic_expr: function() {
        var elt = null;

         var a = null;
         var b = null;


        	elt = document.createElement("block");

        	elt.setAttribute("type","logic_operation");
        	elt.setAttribute("inline","true");

        	var operation = "";

        try {
            // TAIL.g:726:2: (a= expression_block ( AND | OR ) b= expression_block )
            // TAIL.g:726:4: a= expression_block ( AND | OR ) b= expression_block
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_logic_expr1581);
            a=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            // TAIL.g:727:4: ( AND | OR )
            var alt16=2;
            var LA16_0 = this.input.LA(1);

            if ( (LA16_0==AND) ) {
                alt16=1;
            }
            else if ( (LA16_0==OR) ) {
                alt16=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 16, 0, this.input);

                throw nvae;
            }
            switch (alt16) {
                case 1 :
                    // TAIL.g:727:5: AND
                    this.match(this.input,AND,TAILParser.FOLLOW_AND_in_logic_expr1587); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation="AND";
                    }


                    break;
                case 2 :
                    // TAIL.g:727:29: OR
                    this.match(this.input,OR,TAILParser.FOLLOW_OR_in_logic_expr1592); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation="OR";
                    }


                    break;

            }

            this.pushFollow(TAILParser.FOLLOW_expression_block_in_logic_expr1604);
            b=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              	  	var title = document.createElement("title");
              	  	title.setAttribute("name","OP");
              	  	title.innerHTML = operation;

              	  	var valA = document.createElement("value");
              	  	valA.setAttribute("name","A");
              	  	valA.appendChild(a);

              	  	var valB = document.createElement("value");
              	  	valB.setAttribute("name","B");
              	  	valB.appendChild(b);

              	  	elt.appendChild(title);
              	  	elt.appendChild(valA);
              	  	elt.appendChild(valB);
              	  
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:748:1: not_expr returns [var elt] : NOT expression_block ;
    // $ANTLR start "not_expr"
    not_expr: function() {
        var elt = null;

         var expression_block36 = null;


        	elt = document.createElement("block");

        	elt.setAttribute("type","logic_negate");
        	elt.setAttribute("inline","false");

        try {
            // TAIL.g:755:2: ( NOT expression_block )
            // TAIL.g:755:4: NOT expression_block
            this.match(this.input,NOT,TAILParser.FOLLOW_NOT_in_not_expr1630); if (this.state.failed) return elt;
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_not_expr1632);
            expression_block36=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              		var value = document.createElement("value");
              		value.setAttribute("name","BOOL");
              		value.appendChild(expression_block36);

              		elt.appendChild(value);
              	
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:765:1: compare_eq_expr returns [var elt] : a= expression_block ( LOGIC_EQ | LOGIC_NOT_EQ ) b= expression_block ;
    // $ANTLR start "compare_eq_expr"
    compare_eq_expr: function() {
        var elt = null;

         var a = null;
         var b = null;


        	elt = document.createElement("block");

        	elt.setAttribute("type","logic_compare");
        	elt.setAttribute("inline","true");

        	var operation = "";

        try {
            // TAIL.g:774:2: (a= expression_block ( LOGIC_EQ | LOGIC_NOT_EQ ) b= expression_block )
            // TAIL.g:774:4: a= expression_block ( LOGIC_EQ | LOGIC_NOT_EQ ) b= expression_block
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_compare_eq_expr1656);
            a=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            // TAIL.g:774:23: ( LOGIC_EQ | LOGIC_NOT_EQ )
            var alt17=2;
            var LA17_0 = this.input.LA(1);

            if ( (LA17_0==LOGIC_EQ) ) {
                alt17=1;
            }
            else if ( (LA17_0==LOGIC_NOT_EQ) ) {
                alt17=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 17, 0, this.input);

                throw nvae;
            }
            switch (alt17) {
                case 1 :
                    // TAIL.g:774:24: LOGIC_EQ
                    this.match(this.input,LOGIC_EQ,TAILParser.FOLLOW_LOGIC_EQ_in_compare_eq_expr1659); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation = "EQ";
                    }


                    break;
                case 2 :
                    // TAIL.g:774:55: LOGIC_NOT_EQ
                    this.match(this.input,LOGIC_NOT_EQ,TAILParser.FOLLOW_LOGIC_NOT_EQ_in_compare_eq_expr1665); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation = "NEQ";
                    }


                    break;

            }

            this.pushFollow(TAILParser.FOLLOW_expression_block_in_compare_eq_expr1672);
            b=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              		var title = document.createElement("title");
              	  title.setAttribute("name","OP");
              	  title.innerHTML = operation;

              	  var valA = document.createElement("value");
              	  valA.setAttribute("name","A");
              	  valA.appendChild(a);

              	  var valB = document.createElement("value");
              	  valB.setAttribute("name","B");
              	  valB.appendChild(b);

              	  elt.appendChild(title);
              	  elt.appendChild(valA);
              	  elt.appendChild(valB);
              	
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:794:1: compare_math_eq_expr returns [var elt] : a= expression_block ( EQ | NOT_EQ ) b= expression_block ;
    // $ANTLR start "compare_math_eq_expr"
    compare_math_eq_expr: function() {
        var elt = null;

         var a = null;
         var b = null;


        	elt = document.createElement("block");

        	elt.setAttribute("type","math_compare"); 
        	//this is the only difference between this rule and the rule above
        	elt.setAttribute("inline","true");

        	var operation = "";

        try {
            // TAIL.g:804:2: (a= expression_block ( EQ | NOT_EQ ) b= expression_block )
            // TAIL.g:804:4: a= expression_block ( EQ | NOT_EQ ) b= expression_block
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_compare_math_eq_expr1697);
            a=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            // TAIL.g:804:23: ( EQ | NOT_EQ )
            var alt18=2;
            var LA18_0 = this.input.LA(1);

            if ( (LA18_0==EQ) ) {
                alt18=1;
            }
            else if ( (LA18_0==NOT_EQ) ) {
                alt18=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 18, 0, this.input);

                throw nvae;
            }
            switch (alt18) {
                case 1 :
                    // TAIL.g:804:24: EQ
                    this.match(this.input,EQ,TAILParser.FOLLOW_EQ_in_compare_math_eq_expr1700); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation = "EQ";
                    }


                    break;
                case 2 :
                    // TAIL.g:804:49: NOT_EQ
                    this.match(this.input,NOT_EQ,TAILParser.FOLLOW_NOT_EQ_in_compare_math_eq_expr1706); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation = "NEQ";
                    }


                    break;

            }

            this.pushFollow(TAILParser.FOLLOW_expression_block_in_compare_math_eq_expr1713);
            b=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              		var title = document.createElement("title");
              	  title.setAttribute("name","OP");
              	  title.innerHTML = operation;

              	  var valA = document.createElement("value");
              	  valA.setAttribute("name","A");
              	  valA.appendChild(a);

              	  var valB = document.createElement("value");
              	  valB.setAttribute("name","B");
              	  valB.appendChild(b);

              	  elt.appendChild(title);
              	  elt.appendChild(valA);
              	  elt.appendChild(valB);
              	
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:824:1: compare_math_expr returns [var elt] : a= expression_block ( LANGLE | RANGLE | LEQ | GEQ ) b= expression_block ;
    // $ANTLR start "compare_math_expr"
    compare_math_expr: function() {
        var elt = null;

         var a = null;
         var b = null;


        	elt = document.createElement("block");

        	elt.setAttribute("type","math_compare");
        	elt.setAttribute("inline","true");

        	var operation = "";

        try {
            // TAIL.g:833:2: (a= expression_block ( LANGLE | RANGLE | LEQ | GEQ ) b= expression_block )
            // TAIL.g:833:4: a= expression_block ( LANGLE | RANGLE | LEQ | GEQ ) b= expression_block
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_compare_math_expr1737);
            a=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            // TAIL.g:833:23: ( LANGLE | RANGLE | LEQ | GEQ )
            var alt19=4;
            switch ( this.input.LA(1) ) {
            case LANGLE:
                alt19=1;
                break;
            case RANGLE:
                alt19=2;
                break;
            case LEQ:
                alt19=3;
                break;
            case GEQ:
                alt19=4;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 19, 0, this.input);

                throw nvae;
            }

            switch (alt19) {
                case 1 :
                    // TAIL.g:833:24: LANGLE
                    this.match(this.input,LANGLE,TAILParser.FOLLOW_LANGLE_in_compare_math_expr1740); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation = "LT";
                    }


                    break;
                case 2 :
                    // TAIL.g:833:52: RANGLE
                    this.match(this.input,RANGLE,TAILParser.FOLLOW_RANGLE_in_compare_math_expr1745); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation = "GT";
                    }


                    break;
                case 3 :
                    // TAIL.g:833:80: LEQ
                    this.match(this.input,LEQ,TAILParser.FOLLOW_LEQ_in_compare_math_expr1750); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation = "LTE";
                    }


                    break;
                case 4 :
                    // TAIL.g:833:106: GEQ
                    this.match(this.input,GEQ,TAILParser.FOLLOW_GEQ_in_compare_math_expr1755); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation = "GTE";
                    }


                    break;

            }

            this.pushFollow(TAILParser.FOLLOW_expression_block_in_compare_math_expr1762);
            b=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              		var title = document.createElement("title");
              	  title.setAttribute("name","OP");
              	  title.innerHTML = operation;

              	  var valA = document.createElement("value");
              	  valA.setAttribute("name","A");
              	  valA.appendChild(a);

              	  var valB = document.createElement("value");
              	  valB.setAttribute("name","B");
              	  valB.appendChild(b);

              	  elt.appendChild(title);
              	  elt.appendChild(valA);
              	  elt.appendChild(valB);		
              	
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:854:1: math_expr returns [var elt] : ( mutable_arith_expr | non_mutable_arith_expr | special_math_expr | unary_math_expr | math_trig_expr );
    // $ANTLR start "math_expr"
    math_expr: function() {
        var elt = null;

         var mutable_arith_expr37 = null;
         var non_mutable_arith_expr38 = null;
         var special_math_expr39 = null;
         var unary_math_expr40 = null;
         var math_trig_expr41 = null;

        try {
            // TAIL.g:855:2: ( mutable_arith_expr | non_mutable_arith_expr | special_math_expr | unary_math_expr | math_trig_expr )
            var alt20=5;
            alt20 = this.dfa20.predict(this.input);
            switch (alt20) {
                case 1 :
                    // TAIL.g:855:4: mutable_arith_expr
                    this.pushFollow(TAILParser.FOLLOW_mutable_arith_expr_in_math_expr1783);
                    mutable_arith_expr37=this.mutable_arith_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = mutable_arith_expr37;
                    }


                    break;
                case 2 :
                    // TAIL.g:857:4: non_mutable_arith_expr
                    this.pushFollow(TAILParser.FOLLOW_non_mutable_arith_expr_in_math_expr1792);
                    non_mutable_arith_expr38=this.non_mutable_arith_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = non_mutable_arith_expr38;
                    }


                    break;
                case 3 :
                    // TAIL.g:858:4: special_math_expr
                    this.pushFollow(TAILParser.FOLLOW_special_math_expr_in_math_expr1799);
                    special_math_expr39=this.special_math_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = special_math_expr39;
                    }


                    break;
                case 4 :
                    // TAIL.g:860:4: unary_math_expr
                    this.pushFollow(TAILParser.FOLLOW_unary_math_expr_in_math_expr1809);
                    unary_math_expr40=this.unary_math_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = unary_math_expr40;
                    }


                    break;
                case 5 :
                    // TAIL.g:861:4: math_trig_expr
                    this.pushFollow(TAILParser.FOLLOW_math_trig_expr_in_math_expr1816);
                    math_trig_expr41=this.math_trig_expr();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      elt = math_trig_expr41;
                    }


                    break;

            }
        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:864:1: mutable_arith_expr returns [var elt] : a= expression_block ( ( ADD b= expression_block )+ | ( MULTIPLY c= expression_block )+ ) ;
    // $ANTLR start "mutable_arith_expr"
    mutable_arith_expr: function() {
        var elt = null;

         var a = null;
         var b = null;
         var c = null;


        	elt = document.createElement("block");
        	//type will get a value inside the rule
        	elt.setAttribute("inline","true");

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

        try {
            // TAIL.g:884:2: (a= expression_block ( ( ADD b= expression_block )+ | ( MULTIPLY c= expression_block )+ ) )
            // TAIL.g:884:4: a= expression_block ( ( ADD b= expression_block )+ | ( MULTIPLY c= expression_block )+ )
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_mutable_arith_expr1839);
            a=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              		  // value = document.createElement("value");
              		  // value.setAttribute("name", "NUM" + itemCount);
              		  // value.appendChild(a);
              		  // valArr.push(value);
              		  // itemCount++;
              		  addValue(a);
              	  
            }
            // TAIL.g:893:4: ( ( ADD b= expression_block )+ | ( MULTIPLY c= expression_block )+ )
            var alt23=2;
            var LA23_0 = this.input.LA(1);

            if ( (LA23_0==ADD) ) {
                alt23=1;
            }
            else if ( (LA23_0==MULTIPLY) ) {
                alt23=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 23, 0, this.input);

                throw nvae;
            }
            switch (alt23) {
                case 1 :
                    // TAIL.g:893:6: ( ADD b= expression_block )+
                    // TAIL.g:893:6: ( ADD b= expression_block )+
                    var cnt21=0;
                    loop21:
                    do {
                        var alt21=2;
                        var LA21_0 = this.input.LA(1);

                        if ( (LA21_0==ADD) ) {
                            alt21=1;
                        }


                        switch (alt21) {
                        case 1 :
                            // TAIL.g:893:7: ADD b= expression_block
                            this.match(this.input,ADD,TAILParser.FOLLOW_ADD_in_mutable_arith_expr1852); if (this.state.failed) return elt;
                            this.pushFollow(TAILParser.FOLLOW_expression_block_in_mutable_arith_expr1856);
                            b=this.expression_block();

                            this.state._fsp--;
                            if (this.state.failed) return elt;
                            if ( this.state.backtracking===0 ) {

                              	  			// value = document.createElement("value");
                              	  			// value.setAttribute("name", "NUM" + itemCount);
                              	  			// value.appendChild(b);
                              	  			// valArr.push(value);
                              	  			// itemCount++;
                              	  			addValue(b);
                              	  		
                            }


                            break;

                        default :
                            if ( cnt21 >= 1 ) {
                                break loop21;
                            }
                            if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                                var eee = new org.antlr.runtime.EarlyExitException(21, this.input);
                                throw eee;
                        }
                        cnt21++;
                    } while (true);

                    if ( this.state.backtracking===0 ) {
                      elt.setAttribute("type","math_add");
                    }


                    break;
                case 2 :
                    // TAIL.g:904:6: ( MULTIPLY c= expression_block )+
                    // TAIL.g:904:6: ( MULTIPLY c= expression_block )+
                    var cnt22=0;
                    loop22:
                    do {
                        var alt22=2;
                        var LA22_0 = this.input.LA(1);

                        if ( (LA22_0==MULTIPLY) ) {
                            alt22=1;
                        }


                        switch (alt22) {
                        case 1 :
                            // TAIL.g:904:7: MULTIPLY c= expression_block
                            this.match(this.input,MULTIPLY,TAILParser.FOLLOW_MULTIPLY_in_mutable_arith_expr1885); if (this.state.failed) return elt;
                            this.pushFollow(TAILParser.FOLLOW_expression_block_in_mutable_arith_expr1889);
                            c=this.expression_block();

                            this.state._fsp--;
                            if (this.state.failed) return elt;
                            if ( this.state.backtracking===0 ) {

                              	      	// value = document.createElement("value");
                              	      	// value.setAttribute("name", "NUM" + itemCount);
                              	      	// value.appendChild(c);
                              	      	// valArr.push(value);
                              	      	// itemCount++;
                              	      	addValue(c);
                              	      
                            }


                            break;

                        default :
                            if ( cnt22 >= 1 ) {
                                break loop22;
                            }
                            if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                                var eee = new org.antlr.runtime.EarlyExitException(22, this.input);
                                throw eee;
                        }
                        cnt22++;
                    } while (true);

                    if ( this.state.backtracking===0 ) {
                      elt.setAttribute("type","math_multiply");
                    }


                    break;

            }

            if ( this.state.backtracking===0 ) {

              	  	mutation.setAttribute("items",itemCount);
              	  	elt.appendChild(mutation);

              	  	for (var i = 0; i<valArr.length; i++){
              	  		elt.appendChild(valArr[i]);
              	  	}
              	  
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:926:1: non_mutable_arith_expr returns [var elt] : a= expression_block ( SUBTRACT | DIVIDE | POWER ) b= expression_block ;
    // $ANTLR start "non_mutable_arith_expr"
    non_mutable_arith_expr: function() {
        var elt = null;

         var a = null;
         var b = null;


        	elt = document.createElement("block");
        	//type will get a value inside the rule
        	elt.setAttribute("inline","true");

        try {
            // TAIL.g:932:2: (a= expression_block ( SUBTRACT | DIVIDE | POWER ) b= expression_block )
            // TAIL.g:932:4: a= expression_block ( SUBTRACT | DIVIDE | POWER ) b= expression_block
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_non_mutable_arith_expr1945);
            a=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            // TAIL.g:933:2: ( SUBTRACT | DIVIDE | POWER )
            var alt24=3;
            switch ( this.input.LA(1) ) {
            case SUBTRACT:
                alt24=1;
                break;
            case DIVIDE:
                alt24=2;
                break;
            case POWER:
                alt24=3;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 24, 0, this.input);

                throw nvae;
            }

            switch (alt24) {
                case 1 :
                    // TAIL.g:934:3: SUBTRACT
                    this.match(this.input,SUBTRACT,TAILParser.FOLLOW_SUBTRACT_in_non_mutable_arith_expr1953); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {

                      			elt.setAttribute("type","math_subtract");
                      		
                    }


                    break;
                case 2 :
                    // TAIL.g:937:5: DIVIDE
                    this.match(this.input,DIVIDE,TAILParser.FOLLOW_DIVIDE_in_non_mutable_arith_expr1962); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {

                      			elt.setAttribute("type","math_division");
                      		
                    }


                    break;
                case 3 :
                    // TAIL.g:940:5: POWER
                    this.match(this.input,POWER,TAILParser.FOLLOW_POWER_in_non_mutable_arith_expr1971); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {

                      			elt.setAttribute("type","math_power");
                      		
                    }


                    break;

            }

            this.pushFollow(TAILParser.FOLLOW_expression_block_in_non_mutable_arith_expr1982);
            b=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              		var valA = document.createElement("value");
              	  valA.setAttribute("name","A");
              	  valA.appendChild(a);

              	  var valB = document.createElement("value");
              	  valB.setAttribute("name","B");
              	  valB.appendChild(b);

              	  elt.appendChild(valA);
              	  elt.appendChild(valB);
              	
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:958:1: special_math_expr returns [var elt] : ( 'modulo_of' | 'remainder_of' | 'quotient_of' ) a= expression_block DIVIDE b= expression_block ;
    // $ANTLR start "special_math_expr"
    special_math_expr: function() {
        var elt = null;

         var a = null;
         var b = null;


        	elt = document.createElement("block");
        	elt.setAttribute("type","math_divide");
        	elt.setAttribute("inline","true");

        	var operation = "";

        try {
            // TAIL.g:966:2: ( ( 'modulo_of' | 'remainder_of' | 'quotient_of' ) a= expression_block DIVIDE b= expression_block )
            // TAIL.g:966:3: ( 'modulo_of' | 'remainder_of' | 'quotient_of' ) a= expression_block DIVIDE b= expression_block
            // TAIL.g:966:3: ( 'modulo_of' | 'remainder_of' | 'quotient_of' )
            var alt25=3;
            switch ( this.input.LA(1) ) {
            case 93:
                alt25=1;
                break;
            case 94:
                alt25=2;
                break;
            case 95:
                alt25=3;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 25, 0, this.input);

                throw nvae;
            }

            switch (alt25) {
                case 1 :
                    // TAIL.g:966:4: 'modulo_of'
                    this.match(this.input,93,TAILParser.FOLLOW_93_in_special_math_expr2003); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation="MODULO";
                    }


                    break;
                case 2 :
                    // TAIL.g:967:5: 'remainder_of'
                    this.match(this.input,94,TAILParser.FOLLOW_94_in_special_math_expr2011); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation="REMAINDER";
                    }


                    break;
                case 3 :
                    // TAIL.g:968:5: 'quotient_of'
                    this.match(this.input,95,TAILParser.FOLLOW_95_in_special_math_expr2019); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation="QUOTIENT";
                    }


                    break;

            }

            this.pushFollow(TAILParser.FOLLOW_expression_block_in_special_math_expr2028);
            a=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            this.match(this.input,DIVIDE,TAILParser.FOLLOW_DIVIDE_in_special_math_expr2030); if (this.state.failed) return elt;
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_special_math_expr2034);
            b=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              		var title = document.createElement("title");
              		title.setAttribute("name","OP");
              		title.innerHTML = operation;

              		var dividend = document.createElement("value");
              		dividend.setAttribute("name","DIVIDEND");
              		dividend.appendChild(a);

              		var divisor = document.createElement("value");
              		divisor.setAttribute("name","DIVISOR");
              		divisor.appendChild(b); 

              		elt.appendChild(title);
              		elt.appendChild(dividend);
              		elt.appendChild(divisor);
              	
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:989:1: unary_math_expr returns [var elt] : op= ( SQRT | ABS | SUBTRACT | LOG | E_EXP | ROUND | CEILING | FLOOR ) expression_block ;
    // $ANTLR start "unary_math_expr"
    unary_math_expr: function() {
        var elt = null;

        var op = null;
         var expression_block42 = null;


        	elt = document.createElement("block");
        	elt.setAttribute("type","math_single");
        	elt.setAttribute("inline","false");

        	var operation = "";


        try {
            // TAIL.g:998:2: (op= ( SQRT | ABS | SUBTRACT | LOG | E_EXP | ROUND | CEILING | FLOOR ) expression_block )
            // TAIL.g:998:4: op= ( SQRT | ABS | SUBTRACT | LOG | E_EXP | ROUND | CEILING | FLOOR ) expression_block
            // TAIL.g:998:7: ( SQRT | ABS | SUBTRACT | LOG | E_EXP | ROUND | CEILING | FLOOR )
            var alt26=8;
            switch ( this.input.LA(1) ) {
            case SQRT:
                alt26=1;
                break;
            case ABS:
                alt26=2;
                break;
            case SUBTRACT:
                alt26=3;
                break;
            case LOG:
                alt26=4;
                break;
            case E_EXP:
                alt26=5;
                break;
            case ROUND:
                alt26=6;
                break;
            case CEILING:
                alt26=7;
                break;
            case FLOOR:
                alt26=8;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 26, 0, this.input);

                throw nvae;
            }

            switch (alt26) {
                case 1 :
                    // TAIL.g:998:8: SQRT
                    this.match(this.input,SQRT,TAILParser.FOLLOW_SQRT_in_unary_math_expr2059); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation = "ROOT";
                    }


                    break;
                case 2 :
                    // TAIL.g:999:5: ABS
                    this.match(this.input,ABS,TAILParser.FOLLOW_ABS_in_unary_math_expr2067); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation = "ABS";
                    }


                    break;
                case 3 :
                    // TAIL.g:1000:5: SUBTRACT
                    this.match(this.input,SUBTRACT,TAILParser.FOLLOW_SUBTRACT_in_unary_math_expr2075); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation = "NEG";
                    }


                    break;
                case 4 :
                    // TAIL.g:1001:5: LOG
                    this.match(this.input,LOG,TAILParser.FOLLOW_LOG_in_unary_math_expr2083); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation = "LN";
                    }


                    break;
                case 5 :
                    // TAIL.g:1002:5: E_EXP
                    this.match(this.input,E_EXP,TAILParser.FOLLOW_E_EXP_in_unary_math_expr2091); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation = "EXP";
                    }


                    break;
                case 6 :
                    // TAIL.g:1003:5: ROUND
                    this.match(this.input,ROUND,TAILParser.FOLLOW_ROUND_in_unary_math_expr2099); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation = "ROUND";
                    }


                    break;
                case 7 :
                    // TAIL.g:1004:5: CEILING
                    this.match(this.input,CEILING,TAILParser.FOLLOW_CEILING_in_unary_math_expr2107); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation = "CEILING";
                    }


                    break;
                case 8 :
                    // TAIL.g:1005:5: FLOOR
                    this.match(this.input,FLOOR,TAILParser.FOLLOW_FLOOR_in_unary_math_expr2115); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation = "FLOOR";
                    }


                    break;

            }

            this.pushFollow(TAILParser.FOLLOW_expression_block_in_unary_math_expr2121);
            expression_block42=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              		var title = document.createElement("title");
              		title.setAttribute("name","OP");
              		title.innerHTML = operation;

              		var value = document.createElement("value");
              		value.setAttribute("name","NUM");
              		value.appendChild(expression_block42);

              		elt.appendChild(title);
              		elt.appendChild(value);
              	
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:1021:1: math_trig_expr returns [var elt] : ( SIN | COS | TAN | ASIN | ACOS | ATAN ) expression_block ;
    // $ANTLR start "math_trig_expr"
    math_trig_expr: function() {
        var elt = null;

         var expression_block43 = null;


        	elt = document.createElement("block");
        	elt.setAttribute("type","math_trig");
        	elt.setAttribute("inline","false");

        	var operation = "";

        try {
            // TAIL.g:1029:2: ( ( SIN | COS | TAN | ASIN | ACOS | ATAN ) expression_block )
            // TAIL.g:1029:4: ( SIN | COS | TAN | ASIN | ACOS | ATAN ) expression_block
            // TAIL.g:1029:4: ( SIN | COS | TAN | ASIN | ACOS | ATAN )
            var alt27=6;
            switch ( this.input.LA(1) ) {
            case SIN:
                alt27=1;
                break;
            case COS:
                alt27=2;
                break;
            case TAN:
                alt27=3;
                break;
            case ASIN:
                alt27=4;
                break;
            case ACOS:
                alt27=5;
                break;
            case ATAN:
                alt27=6;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 27, 0, this.input);

                throw nvae;
            }

            switch (alt27) {
                case 1 :
                    // TAIL.g:1029:5: SIN
                    this.match(this.input,SIN,TAILParser.FOLLOW_SIN_in_math_trig_expr2144); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation="SIN";
                    }


                    break;
                case 2 :
                    // TAIL.g:1030:4: COS
                    this.match(this.input,COS,TAILParser.FOLLOW_COS_in_math_trig_expr2151); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation="COS";
                    }


                    break;
                case 3 :
                    // TAIL.g:1031:4: TAN
                    this.match(this.input,TAN,TAILParser.FOLLOW_TAN_in_math_trig_expr2158); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation="TAN";
                    }


                    break;
                case 4 :
                    // TAIL.g:1032:4: ASIN
                    this.match(this.input,ASIN,TAILParser.FOLLOW_ASIN_in_math_trig_expr2165); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation="ASIN";
                    }


                    break;
                case 5 :
                    // TAIL.g:1033:4: ACOS
                    this.match(this.input,ACOS,TAILParser.FOLLOW_ACOS_in_math_trig_expr2172); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation="ACOS";
                    }


                    break;
                case 6 :
                    // TAIL.g:1034:4: ATAN
                    this.match(this.input,ATAN,TAILParser.FOLLOW_ATAN_in_math_trig_expr2179); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      operation="ATAN";
                    }


                    break;

            }

            this.pushFollow(TAILParser.FOLLOW_expression_block_in_math_trig_expr2186);
            expression_block43=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              		var title = document.createElement("title");
              		title.setAttribute("name","OP");
              		title.innerHTML = operation;

              		var value = document.createElement("value");
              		value.setAttribute("name","NUM");
              		value.appendChild(expression_block43);

              		elt.appendChild(title);
              		elt.appendChild(value);
              	
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:1050:1: init_local_expr returns [var elt] : INIT_LOCAL_VAR ( LANGLE IDENTIFIER RANGLE LABEL_TO a= expression_block )+ IN b= expression_block ;
    // $ANTLR start "init_local_expr"
    init_local_expr: function() {
        var elt = null;

        var IDENTIFIER44 = null;
         var a = null;
         var b = null;


        	elt = document.createElement("block");
        	elt.setAttribute("type","local_declaration_expression");
        	var mutation = document.createElement("mutation");
        	var localName;
        	var titleArr = [];
        	var title;
        	var count = 0;
        	var valArr = [];
        	var value;

        try {
            // TAIL.g:1062:2: ( INIT_LOCAL_VAR ( LANGLE IDENTIFIER RANGLE LABEL_TO a= expression_block )+ IN b= expression_block )
            // TAIL.g:1062:4: INIT_LOCAL_VAR ( LANGLE IDENTIFIER RANGLE LABEL_TO a= expression_block )+ IN b= expression_block
            this.match(this.input,INIT_LOCAL_VAR,TAILParser.FOLLOW_INIT_LOCAL_VAR_in_init_local_expr2208); if (this.state.failed) return elt;
            // TAIL.g:1062:19: ( LANGLE IDENTIFIER RANGLE LABEL_TO a= expression_block )+
            var cnt28=0;
            loop28:
            do {
                var alt28=2;
                var LA28_0 = this.input.LA(1);

                if ( (LA28_0==LANGLE) ) {
                    alt28=1;
                }


                switch (alt28) {
                case 1 :
                    // TAIL.g:1062:20: LANGLE IDENTIFIER RANGLE LABEL_TO a= expression_block
                    this.match(this.input,LANGLE,TAILParser.FOLLOW_LANGLE_in_init_local_expr2211); if (this.state.failed) return elt;
                    IDENTIFIER44=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_init_local_expr2213); if (this.state.failed) return elt;
                    this.match(this.input,RANGLE,TAILParser.FOLLOW_RANGLE_in_init_local_expr2215); if (this.state.failed) return elt;
                    this.match(this.input,LABEL_TO,TAILParser.FOLLOW_LABEL_TO_in_init_local_expr2217); if (this.state.failed) return elt;
                    this.pushFollow(TAILParser.FOLLOW_expression_block_in_init_local_expr2221);
                    a=this.expression_block();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {

                      			localName = document.createElement("localname");
                      			localName.setAttribute("name",(IDENTIFIER44?IDENTIFIER44.getText():null));
                      			mutation.appendChild(localName);

                      			title = document.createElement("title");
                      			title.setAttribute("name","VAR" + count);
                      			title.innerHTML = (IDENTIFIER44?IDENTIFIER44.getText():null);
                      			titleArr.push(title);

                      			value = document.createElement("value");
                      			value.setAttribute("name", "DECL"+count);
                      			value.appendChild(a);
                      			valArr.push(value);
                      			count++;
                      		
                    }


                    break;

                default :
                    if ( cnt28 >= 1 ) {
                        break loop28;
                    }
                    if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                        var eee = new org.antlr.runtime.EarlyExitException(28, this.input);
                        throw eee;
                }
                cnt28++;
            } while (true);

            if ( this.state.backtracking===0 ) {

              	  	elt.appendChild(mutation);
              	  	titleArr.forEach(function(title){
              	  		elt.appendChild(title);
              	  	});
              	  	valArr.forEach(function(value){
              	  		elt.appendChild(value);
              	  	});
              	  
            }
            this.match(this.input,IN,TAILParser.FOLLOW_IN_in_init_local_expr2237); if (this.state.failed) return elt;
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_init_local_expr2241);
            b=this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              	  	var returnVal = document.createElement("value");
              	  	returnVal.setAttribute("name","RETURN");
              	  	returnVal.appendChild(b);
              	  	elt.appendChild(returnVal);
              	  
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:1097:1: variable_ref_expr returns [var elt] : ( GET )? ( GLOBAL )? IDENTIFIER ;
    // $ANTLR start "variable_ref_expr"
    variable_ref_expr: function() {
        var elt = null;

        var IDENTIFIER45 = null;


        	elt = document.createElement("block");
        	elt.setAttribute("type","lexical_variable_get");

        	var variable = "";

        try {
            // TAIL.g:1105:2: ( ( GET )? ( GLOBAL )? IDENTIFIER )
            // TAIL.g:1105:4: ( GET )? ( GLOBAL )? IDENTIFIER
            // TAIL.g:1105:4: ( GET )?
            var alt29=2;
            var LA29_0 = this.input.LA(1);

            if ( (LA29_0==GET) ) {
                alt29=1;
            }
            switch (alt29) {
                case 1 :
                    // TAIL.g:1105:5: GET
                    this.match(this.input,GET,TAILParser.FOLLOW_GET_in_variable_ref_expr2267); if (this.state.failed) return elt;


                    break;

            }

            // TAIL.g:1105:11: ( GLOBAL )?
            var alt30=2;
            var LA30_0 = this.input.LA(1);

            if ( (LA30_0==GLOBAL) ) {
                alt30=1;
            }
            switch (alt30) {
                case 1 :
                    // TAIL.g:1105:12: GLOBAL
                    this.match(this.input,GLOBAL,TAILParser.FOLLOW_GLOBAL_in_variable_ref_expr2272); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      variable += "global ";
                    }


                    break;

            }

            IDENTIFIER45=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_variable_ref_expr2278); if (this.state.failed) return elt;
            if ( this.state.backtracking===0 ) {

              		variable += (IDENTIFIER45?IDENTIFIER45.getText():null);
              		var title = document.createElement("title");
              		title.setAttribute("name","VAR");
              		title.innerHTML = variable;

              		elt.appendChild(title);
              	
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:1116:1: color_expr returns [var elt] : ( COLOR ( ( BLACK | BLUE | WHITE | MAGENTA | RED | LIGHT_GRAY | PINK | GRAY | ORANGE | DARK_GRAY | YELLOW | GREEN | CYAN ) | HEX ) | MAKE_COLOR expression_block );
    // $ANTLR start "color_expr"
    color_expr: function() {
        var elt = null;

        var BLACK46 = null;
        var BLUE47 = null;
        var WHITE48 = null;
        var MAGENTA49 = null;
        var RED50 = null;
        var LIGHT_GRAY51 = null;
        var PINK52 = null;
        var GRAY53 = null;
        var ORANGE54 = null;
        var DARK_GRAY55 = null;
        var YELLOW56 = null;
        var GREEN57 = null;
        var CYAN58 = null;
        var HEX59 = null;
         var expression_block60 = null;


        	elt = document.createElement("block");
        	var title = document.createElement("title");
        	title.setAttribute("name","COLOR");

        	var type = "color_";

        try {
            // TAIL.g:1124:2: ( COLOR ( ( BLACK | BLUE | WHITE | MAGENTA | RED | LIGHT_GRAY | PINK | GRAY | ORANGE | DARK_GRAY | YELLOW | GREEN | CYAN ) | HEX ) | MAKE_COLOR expression_block )
            var alt33=2;
            var LA33_0 = this.input.LA(1);

            if ( (LA33_0==COLOR) ) {
                alt33=1;
            }
            else if ( (LA33_0==MAKE_COLOR) ) {
                alt33=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 33, 0, this.input);

                throw nvae;
            }
            switch (alt33) {
                case 1 :
                    // TAIL.g:1124:4: COLOR ( ( BLACK | BLUE | WHITE | MAGENTA | RED | LIGHT_GRAY | PINK | GRAY | ORANGE | DARK_GRAY | YELLOW | GREEN | CYAN ) | HEX )
                    this.match(this.input,COLOR,TAILParser.FOLLOW_COLOR_in_color_expr2302); if (this.state.failed) return elt;
                    // TAIL.g:1124:10: ( ( BLACK | BLUE | WHITE | MAGENTA | RED | LIGHT_GRAY | PINK | GRAY | ORANGE | DARK_GRAY | YELLOW | GREEN | CYAN ) | HEX )
                    var alt32=2;
                    var LA32_0 = this.input.LA(1);

                    if ( ((LA32_0>=BLACK && LA32_0<=CYAN)) ) {
                        alt32=1;
                    }
                    else if ( (LA32_0==HEX) ) {
                        alt32=2;
                    }
                    else {
                        if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 32, 0, this.input);

                        throw nvae;
                    }
                    switch (alt32) {
                        case 1 :
                            // TAIL.g:1124:12: ( BLACK | BLUE | WHITE | MAGENTA | RED | LIGHT_GRAY | PINK | GRAY | ORANGE | DARK_GRAY | YELLOW | GREEN | CYAN )
                            // TAIL.g:1124:12: ( BLACK | BLUE | WHITE | MAGENTA | RED | LIGHT_GRAY | PINK | GRAY | ORANGE | DARK_GRAY | YELLOW | GREEN | CYAN )
                            var alt31=13;
                            switch ( this.input.LA(1) ) {
                            case BLACK:
                                alt31=1;
                                break;
                            case BLUE:
                                alt31=2;
                                break;
                            case WHITE:
                                alt31=3;
                                break;
                            case MAGENTA:
                                alt31=4;
                                break;
                            case RED:
                                alt31=5;
                                break;
                            case LIGHT_GRAY:
                                alt31=6;
                                break;
                            case PINK:
                                alt31=7;
                                break;
                            case GRAY:
                                alt31=8;
                                break;
                            case ORANGE:
                                alt31=9;
                                break;
                            case DARK_GRAY:
                                alt31=10;
                                break;
                            case YELLOW:
                                alt31=11;
                                break;
                            case GREEN:
                                alt31=12;
                                break;
                            case CYAN:
                                alt31=13;
                                break;
                            default:
                                if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                                var nvae =
                                    new org.antlr.runtime.NoViableAltException("", 31, 0, this.input);

                                throw nvae;
                            }

                            switch (alt31) {
                                case 1 :
                                    // TAIL.g:1124:13: BLACK
                                    BLACK46=this.match(this.input,BLACK,TAILParser.FOLLOW_BLACK_in_color_expr2307); if (this.state.failed) return elt;
                                    if ( this.state.backtracking===0 ) {
                                      title.innerHTML="#000000"; type += (BLACK46?BLACK46.getText():null);
                                    }


                                    break;
                                case 2 :
                                    // TAIL.g:1125:12: BLUE
                                    BLUE47=this.match(this.input,BLUE,TAILParser.FOLLOW_BLUE_in_color_expr2322); if (this.state.failed) return elt;
                                    if ( this.state.backtracking===0 ) {
                                      title.innerHTML="#0000ff"; type += (BLUE47?BLUE47.getText():null);
                                    }


                                    break;
                                case 3 :
                                    // TAIL.g:1126:12: WHITE
                                    WHITE48=this.match(this.input,WHITE,TAILParser.FOLLOW_WHITE_in_color_expr2337); if (this.state.failed) return elt;
                                    if ( this.state.backtracking===0 ) {
                                      title.innerHTML="#ffffff"; type += (WHITE48?WHITE48.getText():null);
                                    }


                                    break;
                                case 4 :
                                    // TAIL.g:1127:12: MAGENTA
                                    MAGENTA49=this.match(this.input,MAGENTA,TAILParser.FOLLOW_MAGENTA_in_color_expr2352); if (this.state.failed) return elt;
                                    if ( this.state.backtracking===0 ) {
                                      title.innerHTML="#ff00ff"; type += (MAGENTA49?MAGENTA49.getText():null);
                                    }


                                    break;
                                case 5 :
                                    // TAIL.g:1128:12: RED
                                    RED50=this.match(this.input,RED,TAILParser.FOLLOW_RED_in_color_expr2367); if (this.state.failed) return elt;
                                    if ( this.state.backtracking===0 ) {
                                      title.innerHTML="#ff0000"; type += (RED50?RED50.getText():null);
                                    }


                                    break;
                                case 6 :
                                    // TAIL.g:1129:12: LIGHT_GRAY
                                    LIGHT_GRAY51=this.match(this.input,LIGHT_GRAY,TAILParser.FOLLOW_LIGHT_GRAY_in_color_expr2382); if (this.state.failed) return elt;
                                    if ( this.state.backtracking===0 ) {
                                      title.innerHTML="#cccccc"; type += (LIGHT_GRAY51?LIGHT_GRAY51.getText():null);
                                    }


                                    break;
                                case 7 :
                                    // TAIL.g:1130:12: PINK
                                    PINK52=this.match(this.input,PINK,TAILParser.FOLLOW_PINK_in_color_expr2397); if (this.state.failed) return elt;
                                    if ( this.state.backtracking===0 ) {
                                      title.innerHTML="#ffafaf"; type += (PINK52?PINK52.getText():null);
                                    }


                                    break;
                                case 8 :
                                    // TAIL.g:1131:12: GRAY
                                    GRAY53=this.match(this.input,GRAY,TAILParser.FOLLOW_GRAY_in_color_expr2412); if (this.state.failed) return elt;
                                    if ( this.state.backtracking===0 ) {
                                      title.innerHTML="#888888"; type += (GRAY53?GRAY53.getText():null);
                                    }


                                    break;
                                case 9 :
                                    // TAIL.g:1132:12: ORANGE
                                    ORANGE54=this.match(this.input,ORANGE,TAILParser.FOLLOW_ORANGE_in_color_expr2427); if (this.state.failed) return elt;
                                    if ( this.state.backtracking===0 ) {
                                      title.innerHTML="#ffc800"; type += (ORANGE54?ORANGE54.getText():null);
                                    }


                                    break;
                                case 10 :
                                    // TAIL.g:1133:12: DARK_GRAY
                                    DARK_GRAY55=this.match(this.input,DARK_GRAY,TAILParser.FOLLOW_DARK_GRAY_in_color_expr2442); if (this.state.failed) return elt;
                                    if ( this.state.backtracking===0 ) {
                                      title.innerHTML="#444444"; type += (DARK_GRAY55?DARK_GRAY55.getText():null);
                                    }


                                    break;
                                case 11 :
                                    // TAIL.g:1134:12: YELLOW
                                    YELLOW56=this.match(this.input,YELLOW,TAILParser.FOLLOW_YELLOW_in_color_expr2457); if (this.state.failed) return elt;
                                    if ( this.state.backtracking===0 ) {
                                      title.innerHTML="#ffff00"; type += (YELLOW56?YELLOW56.getText():null);
                                    }


                                    break;
                                case 12 :
                                    // TAIL.g:1135:12: GREEN
                                    GREEN57=this.match(this.input,GREEN,TAILParser.FOLLOW_GREEN_in_color_expr2472); if (this.state.failed) return elt;
                                    if ( this.state.backtracking===0 ) {
                                      title.innerHTML="#00ff00"; type += (GREEN57?GREEN57.getText():null);
                                    }


                                    break;
                                case 13 :
                                    // TAIL.g:1136:12: CYAN
                                    CYAN58=this.match(this.input,CYAN,TAILParser.FOLLOW_CYAN_in_color_expr2487); if (this.state.failed) return elt;
                                    if ( this.state.backtracking===0 ) {
                                      title.innerHTML="#00ffff"; type += (CYAN58?CYAN58.getText():null);
                                    }


                                    break;

                            }

                            if ( this.state.backtracking===0 ) {

                              	        	elt.setAttribute("type",type);
                              	        	elt.appendChild(title);
                              	        
                            }


                            break;
                        case 2 :
                            // TAIL.g:1142:8: HEX
                            HEX59=this.match(this.input,HEX,TAILParser.FOLLOW_HEX_in_color_expr2519); if (this.state.failed) return elt;
                            if ( this.state.backtracking===0 ) {

                              	      	title.innerHTML = (HEX59?HEX59.getText():null);
                              		      elt.setAttribute("type","color_black"); //because there's no other default color type
                              		      elt.appendChild(title);
                              		    
                            }


                            break;

                    }



                    break;
                case 2 :
                    // TAIL.g:1149:4: MAKE_COLOR expression_block
                    this.match(this.input,MAKE_COLOR,TAILParser.FOLLOW_MAKE_COLOR_in_color_expr2540); if (this.state.failed) return elt;
                    this.pushFollow(TAILParser.FOLLOW_expression_block_in_color_expr2542);
                    expression_block60=this.expression_block();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {

                      		elt.setAttribute("type","color_make_color");
                      		elt.setAttribute("inline","false");
                      		var value = document.createElement("value");
                      		value.setAttribute("name","COLORLIST");
                      		value.appendChild(expression_block60);
                      		elt.appendChild(value);
                      	
                    }


                    break;

            }
        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:1160:1: list_expr returns [var elt] : ( LIST | MAKE_LIST ) ( options {greedy=true; } : expression_block )* ;
    // $ANTLR start "list_expr"
    list_expr: function() {
        var elt = null;

         var expression_block61 = null;


        	elt = document.createElement("block");
        	elt.setAttribute("type","lists_create_with");

        	var mutation = document.createElement("mutation");
        	var item_count = 0;

        	var val_block_arr = [];
        	var val_block;

        try {
            // TAIL.g:1171:2: ( ( LIST | MAKE_LIST ) ( options {greedy=true; } : expression_block )* )
            // TAIL.g:1171:4: ( LIST | MAKE_LIST ) ( options {greedy=true; } : expression_block )*
            if ( (this.input.LA(1)>=MAKE_LIST && this.input.LA(1)<=LIST) ) {
                this.input.consume();
                this.state.errorRecovery=false;this.state.failed=false;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }

            // TAIL.g:1172:4: ( options {greedy=true; } : expression_block )*
            loop34:
            do {
                var alt34=2;
                var LA34_0 = this.input.LA(1);

                if ( (LA34_0==LCURLY) ) {
                    alt34=1;
                }


                switch (alt34) {
                case 1 :
                    // TAIL.g:1172:29: expression_block
                    this.pushFollow(TAILParser.FOLLOW_expression_block_in_list_expr2585);
                    expression_block61=this.expression_block();

                    this.state._fsp--;
                    if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {

                      	      	item_count++; 
                      	      	val_block = document.createElement("value");
                      	      	val_block.setAttribute("name", ("ADD" + (item_count-1)));
                      	      	val_block.appendChild(expression_block61);
                      	      	val_block_arr.push(val_block);
                      	      
                    }


                    break;

                default :
                    break loop34;
                }
            } while (true);

            if ( this.state.backtracking===0 ) {

              		mutation.setAttribute("items",item_count);
              		elt.appendChild(mutation);
              		val_block_arr.forEach(function (block) {
              			elt.appendChild(block);
              		});
              	
            }



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:1201:1: component_expr returns [var elt] : ( COMPONENT component= IDENTIFIER | component= IDENTIFIER DOT property= IDENTIFIER ( OF_COMPONENT expression_block )? );
    // $ANTLR start "component_expr"
    component_expr: function() {
        var elt = null;

        var component = null;
        var property = null;
         var expression_block62 = null;


        	elt = document.createElement("block");
        	var mutation = document.createElement("mutation");
        	var isComponentSetGet = false;
        	var isGeneric = false;
        	var value;

        try {
            // TAIL.g:1209:2: ( COMPONENT component= IDENTIFIER | component= IDENTIFIER DOT property= IDENTIFIER ( OF_COMPONENT expression_block )? )
            var alt36=2;
            var LA36_0 = this.input.LA(1);

            if ( (LA36_0==COMPONENT) ) {
                alt36=1;
            }
            else if ( (LA36_0==IDENTIFIER) ) {
                alt36=2;
            }
            else {
                if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 36, 0, this.input);

                throw nvae;
            }
            switch (alt36) {
                case 1 :
                    // TAIL.g:1209:4: COMPONENT component= IDENTIFIER
                    this.match(this.input,COMPONENT,TAILParser.FOLLOW_COMPONENT_in_component_expr2631); if (this.state.failed) return elt;
                    component=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_component_expr2635); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {

                      		elt.setAttribute("type","component_component_block");
                      		var componentName = (component?component.getText():null);
                      		var componentType;
                      		if(!this.isValidComponentName(componentName)){
                      			throw new TAILException("Invalid Component Name: " + componentName);
                      		} else{
                      			componentType = Blockly.Component.instanceNameToTypeName(componentName);
                      		}

                      		mutation.setAttribute("component_type",componentType);
                      		mutation.setAttribute("instance_name", componentName);
                      		elt.appendChild(mutation);

                      		var title = document.createElement("title");
                      		title.setAttribute("name","COMPONENT_SELECTOR");
                      		title.innerHTML = componentName;
                      		elt.appendChild(title);
                      	
                    }


                    break;
                case 2 :
                    // TAIL.g:1229:4: component= IDENTIFIER DOT property= IDENTIFIER ( OF_COMPONENT expression_block )?
                    component=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_component_expr2645); if (this.state.failed) return elt;
                    this.match(this.input,DOT,TAILParser.FOLLOW_DOT_in_component_expr2647); if (this.state.failed) return elt;
                    property=this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_component_expr2651); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {
                      isComponentSetGet = true;
                    }
                    // TAIL.g:1229:77: ( OF_COMPONENT expression_block )?
                    var alt35=2;
                    var LA35_0 = this.input.LA(1);

                    if ( (LA35_0==OF_COMPONENT) ) {
                        alt35=1;
                    }
                    switch (alt35) {
                        case 1 :
                            // TAIL.g:1229:78: OF_COMPONENT expression_block
                            this.match(this.input,OF_COMPONENT,TAILParser.FOLLOW_OF_COMPONENT_in_component_expr2656); if (this.state.failed) return elt;
                            this.pushFollow(TAILParser.FOLLOW_expression_block_in_component_expr2658);
                            expression_block62=this.expression_block();

                            this.state._fsp--;
                            if (this.state.failed) return elt;
                            if ( this.state.backtracking===0 ) {
                              isGeneric = true;
                            }


                            break;

                    }

                    if ( this.state.backtracking===0 ) {

                      		var componentName = (component?component.getText():null);
                      		var propName = (property?property.getText():null);

                      		//figure out component type based on whether this is a generic component block or not
                      		var componentType;
                      		if(isGeneric){
                      			elt.setAttribute("inline","false"); //an extra thing to put in the DOM only in the case where isGeneric
                      			value = document.createElement("value");
                      			value.setAttribute("name","COMPONENT");
                      			value.appendChild(expression_block62);

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
                      			elt.appendChild(compSelectorTitle);
                      		}
                      		if(isComponentSetGet){
                      			elt.setAttribute("type","component_set_get");
                      			mutation.setAttribute("set_or_get","get");
                      			if(!this.isValidComponentFieldName("properties",componentType,propName)){
                      				throw new TAILException("Invalid Component Property Name: " + propName);
                      			}else{
                      				mutation.setAttribute("property_name",propName);
                      				var title = document.createElement("title");
                      				title.setAttribute("name","PROP");
                      				title.innerHTML = propName;
                      				elt.appendChild(title);
                      			}
                      				mutation.setAttribute("is_generic",isGeneric);
                      		}else{
                      			elt.setAttribute("type","component_component_block");
                      		}

                      		elt.insertBefore(mutation, elt.firstElementChild);
                      		if(isGeneric){
                      			elt.appendChild(value);
                      		}
                      	
                    }


                    break;

            }
        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },

    // inline static return class
    tail_expr_return: (function() {
        TAILParser.tail_expr_return = function(){};
        org.antlr.lang.extend(TAILParser.tail_expr_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
        });
        return;
    })(),

    // TAIL.g:1288:1: tail_expr returns [var elt] : TAIL_EXP expression_block ;
    // $ANTLR start "tail_expr"
    tail_expr: function() {
        var retval = new TAILParser.tail_expr_return();
        retval.start = this.input.LT(1);

        var TAIL_EXP63 = null;


        	retval.elt = document.createElement("block");
        	retval.elt.setAttribute("type","code_write_tail_exp");
        	
        	var title = document.createElement("title");
        	title.setAttribute("name","CODE");

        try {
            // TAIL.g:1296:2: ( TAIL_EXP expression_block )
            // TAIL.g:1296:4: TAIL_EXP expression_block
            TAIL_EXP63=this.match(this.input,TAIL_EXP,TAILParser.FOLLOW_TAIL_EXP_in_tail_expr2685); if (this.state.failed) return retval;
            this.pushFollow(TAILParser.FOLLOW_expression_block_in_tail_expr2687);
            this.expression_block();

            this.state._fsp--;
            if (this.state.failed) return retval;
            if ( this.state.backtracking===0 ) {

              		title.innerHTML = this.input.toString(retval.start,this.input.LT(-1)).substring((TAIL_EXP63?TAIL_EXP63.getText():null).length,this.input.toString(retval.start,this.input.LT(-1)).length).trim();
              		retval.elt.appendChild(title);
              	
            }



            retval.stop = this.input.LT(-1);

        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return retval;
    },


    // TAIL.g:1303:1: atom returns [var elt] : ( NUMBER | STRING | TRUE | FALSE );
    // $ANTLR start "atom"
    atom: function() {
        var elt = null;

        var NUMBER64 = null;
        var STRING65 = null;


        	elt = document.createElement("block");

        	var title = document.createElement("title");

        try {
            // TAIL.g:1309:2: ( NUMBER | STRING | TRUE | FALSE )
            var alt37=4;
            switch ( this.input.LA(1) ) {
            case NUMBER:
                alt37=1;
                break;
            case STRING:
                alt37=2;
                break;
            case TRUE:
                alt37=3;
                break;
            case FALSE:
                alt37=4;
                break;
            default:
                if (this.state.backtracking>0) {this.state.failed=true; return elt;}
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 37, 0, this.input);

                throw nvae;
            }

            switch (alt37) {
                case 1 :
                    // TAIL.g:1309:4: NUMBER
                    NUMBER64=this.match(this.input,NUMBER,TAILParser.FOLLOW_NUMBER_in_atom2710); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {

                      		elt.setAttribute("type","math_number");

                      		title.setAttribute("name","NUM");
                      		title.innerHTML = (NUMBER64?NUMBER64.getText():null);
                      		elt.appendChild(title);
                      	
                    }


                    break;
                case 2 :
                    // TAIL.g:1316:4: STRING
                    STRING65=this.match(this.input,STRING,TAILParser.FOLLOW_STRING_in_atom2717); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {

                      		elt.setAttribute("type","text");

                      		title.setAttribute("name","TEXT");
                      		var text = (STRING65?STRING65.getText():null);
                      		title.innerHTML = text.substring(1,text.length-1);
                      		elt.appendChild(title);
                      	
                    }


                    break;
                case 3 :
                    // TAIL.g:1324:4: TRUE
                    this.match(this.input,TRUE,TAILParser.FOLLOW_TRUE_in_atom2724); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {

                      		elt.setAttribute("type","logic_boolean");

                      		title.setAttribute("name","BOOL");
                      		title.innerHTML = "TRUE";
                      		elt.appendChild(title);
                      	
                    }


                    break;
                case 4 :
                    // TAIL.g:1331:4: FALSE
                    this.match(this.input,FALSE,TAILParser.FOLLOW_FALSE_in_atom2731); if (this.state.failed) return elt;
                    if ( this.state.backtracking===0 ) {

                      		elt.setAttribute("type","logic_boolean");

                      		title.setAttribute("name","BOOL");
                      		title.innerHTML = "FALSE";
                      		elt.appendChild(title);
                      	
                    }


                    break;

            }
        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return elt;
    },


    // TAIL.g:1340:1: dotted_name : IDENTIFIER '.' IDENTIFIER ;
    // $ANTLR start "dotted_name"
    dotted_name: function() {
        try {
            // TAIL.g:1341:2: ( IDENTIFIER '.' IDENTIFIER )
            // TAIL.g:1341:4: IDENTIFIER '.' IDENTIFIER
            this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_dotted_name2744); if (this.state.failed) return ;
            this.match(this.input,DOT,TAILParser.FOLLOW_DOT_in_dotted_name2746); if (this.state.failed) return ;
            this.match(this.input,IDENTIFIER,TAILParser.FOLLOW_IDENTIFIER_in_dotted_name2748); if (this.state.failed) return ;



        }

        	catch (re){
        		throw re;
        	}
        finally {
        }
        return ;
    },

    // $ANTLR start "synpred13_TAIL"
    synpred13_TAIL_fragment: function() {
        // TAIL.g:459:3: ( ( ELSE_IF e2= expression_block THEN b= suite )* ( ELSE c= suite )? )
        // TAIL.g:459:3: ( ELSE_IF e2= expression_block THEN b= suite )* ( ELSE c= suite )?
        // TAIL.g:459:3: ( ELSE_IF e2= expression_block THEN b= suite )*
        loop38:
        do {
            var alt38=2;
            var LA38_0 = this.input.LA(1);

            if ( (LA38_0==ELSE_IF) ) {
                alt38=1;
            }


            switch (alt38) {
            case 1 :
                // TAIL.g:459:4: ELSE_IF e2= expression_block THEN b= suite
                this.match(this.input,ELSE_IF,TAILParser.FOLLOW_ELSE_IF_in_synpred13_TAIL1198); if (this.state.failed) return ;
                this.pushFollow(TAILParser.FOLLOW_expression_block_in_synpred13_TAIL1204);
                e2=this.expression_block();

                this.state._fsp--;
                if (this.state.failed) return ;
                this.match(this.input,THEN,TAILParser.FOLLOW_THEN_in_synpred13_TAIL1207); if (this.state.failed) return ;
                this.pushFollow(TAILParser.FOLLOW_suite_in_synpred13_TAIL1211);
                b=this.suite();

                this.state._fsp--;
                if (this.state.failed) return ;


                break;

            default :
                break loop38;
            }
        } while (true);

        // TAIL.g:469:6: ( ELSE c= suite )?
        var alt39=2;
        var LA39_0 = this.input.LA(1);

        if ( (LA39_0==ELSE) ) {
            alt39=1;
        }
        switch (alt39) {
            case 1 :
                // TAIL.g:469:7: ELSE c= suite
                this.match(this.input,ELSE,TAILParser.FOLLOW_ELSE_in_synpred13_TAIL1218); if (this.state.failed) return ;
                this.pushFollow(TAILParser.FOLLOW_suite_in_synpred13_TAIL1222);
                c=this.suite();

                this.state._fsp--;
                if (this.state.failed) return ;


                break;

        }



    },
    // $ANTLR end "synpred13_TAIL",

    // $ANTLR start "synpred20_TAIL"
    synpred20_TAIL_fragment: function() {
        // TAIL.g:653:4: ( logic_expr )
        // TAIL.g:653:4: logic_expr
        this.pushFollow(TAILParser.FOLLOW_logic_expr_in_synpred20_TAIL1410);
        this.logic_expr();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred20_TAIL",

    // $ANTLR start "synpred22_TAIL"
    synpred22_TAIL_fragment: function() {
        // TAIL.g:655:4: ( compare_eq_expr )
        // TAIL.g:655:4: compare_eq_expr
        this.pushFollow(TAILParser.FOLLOW_compare_eq_expr_in_synpred22_TAIL1424);
        this.compare_eq_expr();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred22_TAIL",

    // $ANTLR start "synpred23_TAIL"
    synpred23_TAIL_fragment: function() {
        // TAIL.g:656:4: ( compare_math_eq_expr )
        // TAIL.g:656:4: compare_math_eq_expr
        this.pushFollow(TAILParser.FOLLOW_compare_math_eq_expr_in_synpred23_TAIL1431);
        this.compare_math_eq_expr();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred23_TAIL",

    // $ANTLR start "synpred24_TAIL"
    synpred24_TAIL_fragment: function() {
        // TAIL.g:657:4: ( compare_math_expr )
        // TAIL.g:657:4: compare_math_expr
        this.pushFollow(TAILParser.FOLLOW_compare_math_expr_in_synpred24_TAIL1438);
        this.compare_math_expr();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred24_TAIL",

    // $ANTLR start "synpred25_TAIL"
    synpred25_TAIL_fragment: function() {
        // TAIL.g:658:4: ( math_expr )
        // TAIL.g:658:4: math_expr
        this.pushFollow(TAILParser.FOLLOW_math_expr_in_synpred25_TAIL1445);
        this.math_expr();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred25_TAIL",

    // $ANTLR start "synpred27_TAIL"
    synpred27_TAIL_fragment: function() {
        // TAIL.g:660:4: ( component_expr )
        // TAIL.g:660:4: component_expr
        this.pushFollow(TAILParser.FOLLOW_component_expr_in_synpred27_TAIL1459);
        this.component_expr();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred27_TAIL",

    // $ANTLR start "synpred28_TAIL"
    synpred28_TAIL_fragment: function() {
        // TAIL.g:661:4: ( variable_ref_expr )
        // TAIL.g:661:4: variable_ref_expr
        this.pushFollow(TAILParser.FOLLOW_variable_ref_expr_in_synpred28_TAIL1466);
        this.variable_ref_expr();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred28_TAIL",

    // $ANTLR start "synpred38_TAIL"
    synpred38_TAIL_fragment: function() {
        // TAIL.g:855:4: ( mutable_arith_expr )
        // TAIL.g:855:4: mutable_arith_expr
        this.pushFollow(TAILParser.FOLLOW_mutable_arith_expr_in_synpred38_TAIL1783);
        this.mutable_arith_expr();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred38_TAIL",

    // $ANTLR start "synpred39_TAIL"
    synpred39_TAIL_fragment: function() {
        // TAIL.g:857:4: ( non_mutable_arith_expr )
        // TAIL.g:857:4: non_mutable_arith_expr
        this.pushFollow(TAILParser.FOLLOW_non_mutable_arith_expr_in_synpred39_TAIL1792);
        this.non_mutable_arith_expr();

        this.state._fsp--;
        if (this.state.failed) return ;


    },
    // $ANTLR end "synpred39_TAIL"

    // Delegated rules



    synpred23_TAIL: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred23_TAIL_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred28_TAIL: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred28_TAIL_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred13_TAIL: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred13_TAIL_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred38_TAIL: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred38_TAIL_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred25_TAIL: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred25_TAIL_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred20_TAIL: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred20_TAIL_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred39_TAIL: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred39_TAIL_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred27_TAIL: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred27_TAIL_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred24_TAIL: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred24_TAIL_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    },
    synpred22_TAIL: function() {
        this.state.backtracking++;
        var start = this.input.mark();
        try {
            this.synpred22_TAIL_fragment(); // can never throw exception
        } catch (re) {
            alert("impossible: "+re.toString());
        }
        var success = !this.state.failed;
        this.input.rewind(start);
        this.state.backtracking--;
        this.state.failed=false;
        return success;
    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(TAILParser, {
    DFA1_eotS:
        "\u000c\uffff",
    DFA1_eofS:
        "\u000c\uffff",
    DFA1_minS:
        "\u0001\u0010\u0001\uffff\u0001\u000a\u0001\uffff\u0001\u0052\u0001"+
    "\u000b\u0001\u000a\u0001\u0052\u0002\uffff\u0001\u000b\u0001\u000a",
    DFA1_maxS:
        "\u0001\u001b\u0001\uffff\u0001\u000a\u0001\uffff\u0001\u0052\u0001"+
    "\u000b\u0001\u0017\u0001\u0052\u0002\uffff\u0001\u000b\u0001\u0017",
    DFA1_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\uffff\u0001\u0004\u0004\uffff\u0001"+
    "\u0002\u0001\u0003\u0002\uffff",
    DFA1_specialS:
        "\u000c\uffff}>",
    DFA1_transitionS: [
            "\u0001\u0003\u0007\uffff\u0001\u0002\u0002\uffff\u0001\u0001",
            "",
            "\u0001\u0004",
            "",
            "\u0001\u0005",
            "\u0001\u0006",
            "\u0001\u0007\u000b\uffff\u0001\u0008\u0001\u0009",
            "\u0001\u000a",
            "",
            "",
            "\u0001\u000b",
            "\u0001\u0007\u000b\uffff\u0001\u0008\u0001\u0009"
    ]
});

org.antlr.lang.augmentObject(TAILParser, {
    DFA1_eot:
        org.antlr.runtime.DFA.unpackEncodedString(TAILParser.DFA1_eotS),
    DFA1_eof:
        org.antlr.runtime.DFA.unpackEncodedString(TAILParser.DFA1_eofS),
    DFA1_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TAILParser.DFA1_minS),
    DFA1_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TAILParser.DFA1_maxS),
    DFA1_accept:
        org.antlr.runtime.DFA.unpackEncodedString(TAILParser.DFA1_acceptS),
    DFA1_special:
        org.antlr.runtime.DFA.unpackEncodedString(TAILParser.DFA1_specialS),
    DFA1_transition: (function() {
        var a = [],
            i,
            numStates = TAILParser.DFA1_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(TAILParser.DFA1_transitionS[i]));
        }
        return a;
    })()
});

TAILParser.DFA1 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 1;
    this.eot = TAILParser.DFA1_eot;
    this.eof = TAILParser.DFA1_eof;
    this.min = TAILParser.DFA1_min;
    this.max = TAILParser.DFA1_max;
    this.accept = TAILParser.DFA1_accept;
    this.special = TAILParser.DFA1_special;
    this.transition = TAILParser.DFA1_transition;
};

org.antlr.lang.extend(TAILParser.DFA1, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "200:1: top_level returns [var elt] : ( global_var_decl | procedure_decl | function_decl | event_handler );";
    },
    dummy: null
});
org.antlr.lang.augmentObject(TAILParser, {
    DFA15_eotS:
        "\u0026\uffff",
    DFA15_eofS:
        "\u0026\uffff",
    DFA15_minS:
        "\u0001\u0006\u0001\uffff\u0001\u0000\u0014\uffff\u0001\u0000\u000e"+
    "\uffff",
    DFA15_maxS:
        "\u0001\u005f\u0001\uffff\u0001\u0000\u0014\uffff\u0001\u0000\u000e"+
    "\uffff",
    DFA15_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\uffff\u0001\u0003\u0001\u0007\u0010"+
    "\uffff\u0001\u0008\u0001\u0009\u0001\uffff\u0001\u000a\u0001\uffff\u0001"+
    "\u000b\u0001\uffff\u0001\u000c\u0001\u000d\u0001\u000e\u0003\uffff\u0001"+
    "\u0002\u0001\u0004\u0001\u0005\u0001\u0006",
    DFA15_specialS:
        "\u0002\uffff\u0001\u0000\u0014\uffff\u0001\u0001\u000e\uffff}>",
    DFA15_transitionS: [
            "\u0001\u0002\u0007\uffff\u0002\u001e\u0001\uffff\u0001\u0001"+
            "\u000a\uffff\u0001\u0015\u0001\u0018\u0001\uffff\u0001\u0018"+
            "\u0001\uffff\u0001\u0003\u0009\uffff\u0001\u0004\u0003\uffff"+
            "\u000d\u0004\u0002\u001a\u000d\uffff\u0002\u001c\u0002\uffff"+
            "\u0001\u0016\u0001\u001d\u0001\uffff\u0001\u0017\u0002\uffff"+
            "\u0002\u001e\u0006\uffff\u0003\u0004",
            "",
            "\u0001\uffff",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\uffff",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(TAILParser, {
    DFA15_eot:
        org.antlr.runtime.DFA.unpackEncodedString(TAILParser.DFA15_eotS),
    DFA15_eof:
        org.antlr.runtime.DFA.unpackEncodedString(TAILParser.DFA15_eofS),
    DFA15_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TAILParser.DFA15_minS),
    DFA15_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TAILParser.DFA15_maxS),
    DFA15_accept:
        org.antlr.runtime.DFA.unpackEncodedString(TAILParser.DFA15_acceptS),
    DFA15_special:
        org.antlr.runtime.DFA.unpackEncodedString(TAILParser.DFA15_specialS),
    DFA15_transition: (function() {
        var a = [],
            i,
            numStates = TAILParser.DFA15_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(TAILParser.DFA15_transitionS[i]));
        }
        return a;
    })()
});

TAILParser.DFA15 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 15;
    this.eot = TAILParser.DFA15_eot;
    this.eof = TAILParser.DFA15_eof;
    this.min = TAILParser.DFA15_min;
    this.max = TAILParser.DFA15_max;
    this.accept = TAILParser.DFA15_accept;
    this.special = TAILParser.DFA15_special;
    this.transition = TAILParser.DFA15_transition;
};

org.antlr.lang.extend(TAILParser.DFA15, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "650:1: expression returns [var elt] : ( if_expr | logic_expr | not_expr | compare_eq_expr | compare_math_eq_expr | compare_math_expr | math_expr | init_local_expr | component_expr | variable_ref_expr | color_expr | list_expr | tail_expr | atom );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA15_2 = input.LA(1);

                             
                            var index15_2 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred20_TAIL()) ) {s = 34;}

                            else if ( (this.synpred22_TAIL()) ) {s = 35;}

                            else if ( (this.synpred23_TAIL()) ) {s = 36;}

                            else if ( (this.synpred24_TAIL()) ) {s = 37;}

                            else if ( (this.synpred25_TAIL()) ) {s = 4;}

                             
                            input.seek(index15_2);
                            if ( s>=0 ) return s;
                            break;
                        case 1 : 
                            var LA15_23 = input.LA(1);

                             
                            var index15_23 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred27_TAIL()) ) {s = 22;}

                            else if ( (this.synpred28_TAIL()) ) {s = 24;}

                             
                            input.seek(index15_23);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 15, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
org.antlr.lang.augmentObject(TAILParser, {
    DFA20_eotS:
        "\u0015\uffff",
    DFA20_eofS:
        "\u0015\uffff",
    DFA20_minS:
        "\u0001\u0006\u0001\u0000\u0013\uffff",
    DFA20_maxS:
        "\u0001\u005f\u0001\u0000\u0013\uffff",
    DFA20_acceptS:
        "\u0002\uffff\u0001\u0003\u0002\uffff\u0001\u0004\u0007\uffff\u0001"+
    "\u0005\u0005\uffff\u0001\u0001\u0001\u0002",
    DFA20_specialS:
        "\u0001\uffff\u0001\u0000\u0013\uffff}>",
    DFA20_transitionS: [
            "\u0001\u0001\u0024\uffff\u0001\u0005\u0003\uffff\u0007\u0005"+
            "\u0006\u000d\u0021\uffff\u0003\u0002",
            "\u0001\uffff",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(TAILParser, {
    DFA20_eot:
        org.antlr.runtime.DFA.unpackEncodedString(TAILParser.DFA20_eotS),
    DFA20_eof:
        org.antlr.runtime.DFA.unpackEncodedString(TAILParser.DFA20_eofS),
    DFA20_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TAILParser.DFA20_minS),
    DFA20_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TAILParser.DFA20_maxS),
    DFA20_accept:
        org.antlr.runtime.DFA.unpackEncodedString(TAILParser.DFA20_acceptS),
    DFA20_special:
        org.antlr.runtime.DFA.unpackEncodedString(TAILParser.DFA20_specialS),
    DFA20_transition: (function() {
        var a = [],
            i,
            numStates = TAILParser.DFA20_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(TAILParser.DFA20_transitionS[i]));
        }
        return a;
    })()
});

TAILParser.DFA20 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 20;
    this.eot = TAILParser.DFA20_eot;
    this.eof = TAILParser.DFA20_eof;
    this.min = TAILParser.DFA20_min;
    this.max = TAILParser.DFA20_max;
    this.accept = TAILParser.DFA20_accept;
    this.special = TAILParser.DFA20_special;
    this.transition = TAILParser.DFA20_transition;
};

org.antlr.lang.extend(TAILParser.DFA20, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "854:1: math_expr returns [var elt] : ( mutable_arith_expr | non_mutable_arith_expr | special_math_expr | unary_math_expr | math_trig_expr );";
    },
    specialStateTransition: function(s, input) {
        var _s = s;
        /* bind to recognizer so semantic predicates can be evaluated */
        var retval = (function(s, input) {
            switch ( s ) {
                        case 0 : 
                            var LA20_1 = input.LA(1);

                             
                            var index20_1 = input.index();
                            input.rewind();
                            s = -1;
                            if ( (this.synpred38_TAIL()) ) {s = 19;}

                            else if ( (this.synpred39_TAIL()) ) {s = 20;}

                             
                            input.seek(index20_1);
                            if ( s>=0 ) return s;
                            break;
            }
        }).call(this.recognizer, s, input);
        if (!org.antlr.lang.isUndefined(retval)) {
            return retval;
        }
        if (this.recognizer.state.backtracking>0) {this.recognizer.state.failed=true; return -1;}
        var nvae =
            new org.antlr.runtime.NoViableAltException(this.getDescription(), 20, _s, input);
        this.error(nvae);
        throw nvae;
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(TAILParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "LSQUARE", "RSQUARE", "LCURLY", "RCURLY", "LPAREN", "RPAREN", "LANGLE", "RANGLE", "DOT", "COMMA", "TRUE", "FALSE", "WHEN", "IF", "THEN", "ELSE", "ELSE_IF", "FOR_EACH", "DO", "RESULT", "TO", "LABEL_TO", "CALL", "INIT_GLOBAL_VAR", "INIT_LOCAL_VAR", "GET", "SET", "GLOBAL", "IN", "NOT", "AND", "OR", "LEQ", "GEQ", "LOGIC_EQ", "LOGIC_NOT_EQ", "EQ", "NOT_EQ", "ADD", "SUBTRACT", "MULTIPLY", "DIVIDE", "POWER", "SQRT", "ABS", "LOG", "E_EXP", "ROUND", "CEILING", "FLOOR", "SIN", "COS", "TAN", "ASIN", "ACOS", "ATAN", "COLOR", "MAKE_COLOR", "BLACK", "BLUE", "WHITE", "MAGENTA", "RED", "LIGHT_GRAY", "PINK", "GRAY", "ORANGE", "DARK_GRAY", "YELLOW", "GREEN", "CYAN", "MAKE_LIST", "LIST", "OF_COMPONENT", "FOR_COMPONENT", "COMPONENT", "TAIL_EXP", "TAIL_STMT", "IDENTIFIER", "LABEL", "HEX", "NUMBER", "STRING", "ALPHA", "DIGIT", "ALPHA_NUM", "ESC", "KEYWORD", "WS", "'modulo_of'", "'remainder_of'", "'quotient_of'"],
    FOLLOW_LPAREN_in_top_level_block727: new org.antlr.runtime.BitSet([0x09010000, 0x00000000]),
    FOLLOW_top_level_in_top_level_block729: new org.antlr.runtime.BitSet([0x00000200, 0x00000000]),
    FOLLOW_RPAREN_in_top_level_block731: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_global_var_decl_in_top_level748: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_procedure_decl_in_top_level755: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_function_decl_in_top_level762: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_event_handler_in_top_level769: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_INIT_GLOBAL_VAR_in_global_var_decl790: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_LANGLE_in_global_var_decl792: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_global_var_decl794: new org.antlr.runtime.BitSet([0x00000800, 0x00000000]),
    FOLLOW_RANGLE_in_global_var_decl796: new org.antlr.runtime.BitSet([0x02000000, 0x00000000]),
    FOLLOW_LABEL_TO_in_global_var_decl798: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_global_var_decl800: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_TO_in_procedure_decl822: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_LANGLE_in_procedure_decl824: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_procedure_decl828: new org.antlr.runtime.BitSet([0x00000800, 0x00000000]),
    FOLLOW_RANGLE_in_procedure_decl830: new org.antlr.runtime.BitSet([0x00400400, 0x00000000]),
    FOLLOW_LANGLE_in_procedure_decl837: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_procedure_decl841: new org.antlr.runtime.BitSet([0x00000800, 0x00000000]),
    FOLLOW_RANGLE_in_procedure_decl843: new org.antlr.runtime.BitSet([0x00400400, 0x00000000]),
    FOLLOW_DO_in_procedure_decl851: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_suite_in_procedure_decl853: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_TO_in_function_decl874: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_LANGLE_in_function_decl876: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_function_decl880: new org.antlr.runtime.BitSet([0x00000800, 0x00000000]),
    FOLLOW_RANGLE_in_function_decl882: new org.antlr.runtime.BitSet([0x00800400, 0x00000000]),
    FOLLOW_LANGLE_in_function_decl889: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_function_decl893: new org.antlr.runtime.BitSet([0x00000800, 0x00000000]),
    FOLLOW_RANGLE_in_function_decl895: new org.antlr.runtime.BitSet([0x00800400, 0x00000000]),
    FOLLOW_RESULT_in_function_decl903: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_function_decl905: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_WHEN_in_event_handler926: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_event_handler930: new org.antlr.runtime.BitSet([0x00001000, 0x00000000]),
    FOLLOW_DOT_in_event_handler932: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_event_handler936: new org.antlr.runtime.BitSet([0x00400400, 0x00000000]),
    FOLLOW_LANGLE_in_event_handler944: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_event_handler948: new org.antlr.runtime.BitSet([0x00000800, 0x00000000]),
    FOLLOW_RANGLE_in_event_handler950: new org.antlr.runtime.BitSet([0x00400400, 0x00000000]),
    FOLLOW_DO_in_event_handler958: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_suite_in_event_handler960: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_block_in_expression_start984: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LCURLY_in_expression_block1001: new org.antlr.runtime.BitSet([0xB002C040, 0x3FFF8802,0xE0659800, 0x00000000]),
    FOLLOW_expression_in_expression_block1003: new org.antlr.runtime.BitSet([0x00000080, 0x00000000]),
    FOLLOW_RCURLY_in_expression_block1005: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_statement_block_in_suite1027: new org.antlr.runtime.BitSet([0x00000012, 0x00000000]),
    FOLLOW_LSQUARE_in_statement_block1113: new org.antlr.runtime.BitSet([0x44020000, 0x00000000,0x00020000, 0x00000000]),
    FOLLOW_statement_in_statement_block1115: new org.antlr.runtime.BitSet([0x00000020, 0x00000000]),
    FOLLOW_RSQUARE_in_statement_block1117: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_if_stmt_in_statement1135: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_variable_set_stmt_in_statement1142: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_component_stmt_in_statement1149: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_tail_stmt_in_statement1156: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IF_in_if_stmt1177: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_if_stmt1181: new org.antlr.runtime.BitSet([0x00040000, 0x00000000]),
    FOLLOW_THEN_in_if_stmt1187: new org.antlr.runtime.BitSet([0x00180010, 0x00000000]),
    FOLLOW_suite_in_if_stmt1191: new org.antlr.runtime.BitSet([0x00180002, 0x00000000]),
    FOLLOW_ELSE_IF_in_if_stmt1198: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_if_stmt1204: new org.antlr.runtime.BitSet([0x00040000, 0x00000000]),
    FOLLOW_THEN_in_if_stmt1207: new org.antlr.runtime.BitSet([0x00180010, 0x00000000]),
    FOLLOW_suite_in_if_stmt1211: new org.antlr.runtime.BitSet([0x00180002, 0x00000000]),
    FOLLOW_ELSE_in_if_stmt1218: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_suite_in_if_stmt1222: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_SET_in_variable_set_stmt1250: new org.antlr.runtime.BitSet([0x80000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_GLOBAL_in_variable_set_stmt1253: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_variable_set_stmt1259: new org.antlr.runtime.BitSet([0x02000000, 0x00000000]),
    FOLLOW_LABEL_TO_in_variable_set_stmt1263: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_variable_set_stmt1265: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_SET_in_component_stmt1286: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_component_stmt1290: new org.antlr.runtime.BitSet([0x00001000, 0x00000000]),
    FOLLOW_DOT_in_component_stmt1292: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_component_stmt1296: new org.antlr.runtime.BitSet([0x02000000, 0x00000000,0x00002000, 0x00000000]),
    FOLLOW_OF_COMPONENT_in_component_stmt1299: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_component_stmt1303: new org.antlr.runtime.BitSet([0x02000000, 0x00000000]),
    FOLLOW_LABEL_TO_in_component_stmt1309: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_component_stmt1313: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_CALL_in_component_stmt1323: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_component_stmt1327: new org.antlr.runtime.BitSet([0x00001000, 0x00000000]),
    FOLLOW_DOT_in_component_stmt1329: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_component_stmt1333: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00084000, 0x00000000]),
    FOLLOW_FOR_COMPONENT_in_component_stmt1338: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_component_stmt1342: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00080000, 0x00000000]),
    FOLLOW_LABEL_in_component_stmt1351: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_component_stmt1355: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00080000, 0x00000000]),
    FOLLOW_TAIL_STMT_in_tail_stmt1380: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_statement_block_in_tail_stmt1382: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_if_expr_in_expression1401: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_logic_expr_in_expression1410: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_not_expr_in_expression1417: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_compare_eq_expr_in_expression1424: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_compare_math_eq_expr_in_expression1431: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_compare_math_expr_in_expression1438: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_math_expr_in_expression1445: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_init_local_expr_in_expression1452: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_component_expr_in_expression1459: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_variable_ref_expr_in_expression1466: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_color_expr_in_expression1473: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_list_expr_in_expression1480: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_tail_expr_in_expression1487: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_atom_in_expression1494: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IF_in_if_expr1526: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_if_expr1530: new org.antlr.runtime.BitSet([0x00040000, 0x00000000]),
    FOLLOW_THEN_in_if_expr1532: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_if_expr1536: new org.antlr.runtime.BitSet([0x00080000, 0x00000000]),
    FOLLOW_ELSE_in_if_expr1538: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_if_expr1542: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_block_in_logic_expr1581: new org.antlr.runtime.BitSet([0x00000000, 0x0000000C]),
    FOLLOW_AND_in_logic_expr1587: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_OR_in_logic_expr1592: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_logic_expr1604: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_NOT_in_not_expr1630: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_not_expr1632: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_block_in_compare_eq_expr1656: new org.antlr.runtime.BitSet([0x00000000, 0x000000C0]),
    FOLLOW_LOGIC_EQ_in_compare_eq_expr1659: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_LOGIC_NOT_EQ_in_compare_eq_expr1665: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_compare_eq_expr1672: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_block_in_compare_math_eq_expr1697: new org.antlr.runtime.BitSet([0x00000000, 0x00000300]),
    FOLLOW_EQ_in_compare_math_eq_expr1700: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_NOT_EQ_in_compare_math_eq_expr1706: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_compare_math_eq_expr1713: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_block_in_compare_math_expr1737: new org.antlr.runtime.BitSet([0x00000C00, 0x00000030]),
    FOLLOW_LANGLE_in_compare_math_expr1740: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_RANGLE_in_compare_math_expr1745: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_LEQ_in_compare_math_expr1750: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_GEQ_in_compare_math_expr1755: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_compare_math_expr1762: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_mutable_arith_expr_in_math_expr1783: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_non_mutable_arith_expr_in_math_expr1792: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_special_math_expr_in_math_expr1799: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_unary_math_expr_in_math_expr1809: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_math_trig_expr_in_math_expr1816: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_expression_block_in_mutable_arith_expr1839: new org.antlr.runtime.BitSet([0x00000000, 0x00001400]),
    FOLLOW_ADD_in_mutable_arith_expr1852: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_mutable_arith_expr1856: new org.antlr.runtime.BitSet([0x00000002, 0x00000400]),
    FOLLOW_MULTIPLY_in_mutable_arith_expr1885: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_mutable_arith_expr1889: new org.antlr.runtime.BitSet([0x00000002, 0x00001000]),
    FOLLOW_expression_block_in_non_mutable_arith_expr1945: new org.antlr.runtime.BitSet([0x00000000, 0x00006800]),
    FOLLOW_SUBTRACT_in_non_mutable_arith_expr1953: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_DIVIDE_in_non_mutable_arith_expr1962: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_POWER_in_non_mutable_arith_expr1971: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_non_mutable_arith_expr1982: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_93_in_special_math_expr2003: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_94_in_special_math_expr2011: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_95_in_special_math_expr2019: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_special_math_expr2028: new org.antlr.runtime.BitSet([0x00000000, 0x00002000]),
    FOLLOW_DIVIDE_in_special_math_expr2030: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_special_math_expr2034: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_SQRT_in_unary_math_expr2059: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_ABS_in_unary_math_expr2067: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_SUBTRACT_in_unary_math_expr2075: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_LOG_in_unary_math_expr2083: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_E_EXP_in_unary_math_expr2091: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_ROUND_in_unary_math_expr2099: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_CEILING_in_unary_math_expr2107: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_FLOOR_in_unary_math_expr2115: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_unary_math_expr2121: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_SIN_in_math_trig_expr2144: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_COS_in_math_trig_expr2151: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_TAN_in_math_trig_expr2158: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_ASIN_in_math_trig_expr2165: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_ACOS_in_math_trig_expr2172: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_ATAN_in_math_trig_expr2179: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_math_trig_expr2186: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_INIT_LOCAL_VAR_in_init_local_expr2208: new org.antlr.runtime.BitSet([0x00000400, 0x00000000]),
    FOLLOW_LANGLE_in_init_local_expr2211: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_init_local_expr2213: new org.antlr.runtime.BitSet([0x00000800, 0x00000000]),
    FOLLOW_RANGLE_in_init_local_expr2215: new org.antlr.runtime.BitSet([0x02000000, 0x00000000]),
    FOLLOW_LABEL_TO_in_init_local_expr2217: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_init_local_expr2221: new org.antlr.runtime.BitSet([0x00000400, 0x00000001]),
    FOLLOW_IN_in_init_local_expr2237: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_init_local_expr2241: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_GET_in_variable_ref_expr2267: new org.antlr.runtime.BitSet([0x80000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_GLOBAL_in_variable_ref_expr2272: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_variable_ref_expr2278: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_COLOR_in_color_expr2302: new org.antlr.runtime.BitSet([0x00000000, 0xC0000000,0x001007FF, 0x00000000]),
    FOLLOW_BLACK_in_color_expr2307: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_BLUE_in_color_expr2322: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_WHITE_in_color_expr2337: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_MAGENTA_in_color_expr2352: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_RED_in_color_expr2367: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LIGHT_GRAY_in_color_expr2382: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_PINK_in_color_expr2397: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_GRAY_in_color_expr2412: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ORANGE_in_color_expr2427: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_DARK_GRAY_in_color_expr2442: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_YELLOW_in_color_expr2457: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_GREEN_in_color_expr2472: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_CYAN_in_color_expr2487: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_HEX_in_color_expr2519: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_MAKE_COLOR_in_color_expr2540: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_color_expr2542: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_list_expr2564: new org.antlr.runtime.BitSet([0x00000042, 0x00000000]),
    FOLLOW_expression_block_in_list_expr2585: new org.antlr.runtime.BitSet([0x00000042, 0x00000000]),
    FOLLOW_COMPONENT_in_component_expr2631: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_component_expr2635: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_component_expr2645: new org.antlr.runtime.BitSet([0x00001000, 0x00000000]),
    FOLLOW_DOT_in_component_expr2647: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_component_expr2651: new org.antlr.runtime.BitSet([0x00000002, 0x00000000,0x00002000, 0x00000000]),
    FOLLOW_OF_COMPONENT_in_component_expr2656: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_component_expr2658: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_TAIL_EXP_in_tail_expr2685: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_tail_expr2687: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_NUMBER_in_atom2710: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STRING_in_atom2717: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_TRUE_in_atom2724: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_FALSE_in_atom2731: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_IDENTIFIER_in_dotted_name2744: new org.antlr.runtime.BitSet([0x00001000, 0x00000000]),
    FOLLOW_DOT_in_dotted_name2746: new org.antlr.runtime.BitSet([0x00000000, 0x00000000,0x00040000, 0x00000000]),
    FOLLOW_IDENTIFIER_in_dotted_name2748: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ELSE_IF_in_synpred13_TAIL1198: new org.antlr.runtime.BitSet([0x00000040, 0x00000000]),
    FOLLOW_expression_block_in_synpred13_TAIL1204: new org.antlr.runtime.BitSet([0x00040000, 0x00000000]),
    FOLLOW_THEN_in_synpred13_TAIL1207: new org.antlr.runtime.BitSet([0x00180010, 0x00000000]),
    FOLLOW_suite_in_synpred13_TAIL1211: new org.antlr.runtime.BitSet([0x00180002, 0x00000000]),
    FOLLOW_ELSE_in_synpred13_TAIL1218: new org.antlr.runtime.BitSet([0x00000010, 0x00000000]),
    FOLLOW_suite_in_synpred13_TAIL1222: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_logic_expr_in_synpred20_TAIL1410: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_compare_eq_expr_in_synpred22_TAIL1424: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_compare_math_eq_expr_in_synpred23_TAIL1431: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_compare_math_expr_in_synpred24_TAIL1438: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_math_expr_in_synpred25_TAIL1445: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_component_expr_in_synpred27_TAIL1459: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_variable_ref_expr_in_synpred28_TAIL1466: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_mutable_arith_expr_in_synpred38_TAIL1783: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_non_mutable_arith_expr_in_synpred39_TAIL1792: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();