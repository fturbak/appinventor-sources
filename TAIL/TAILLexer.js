// $ANTLR 3.3 Nov 30, 2010 12:50:56 TAIL.g 2014-08-20 20:51:10

var TAILLexer = function(input, state) {
// alternate constructor @todo
// public TAILLexer(CharStream input)
// public TAILLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){

        	var errors = [];
          TAILLexer.prototype.emitErrorMessage = function(error) {
          	    //var hdr = getErrorHeader(e);
                //var msg = getErrorMessage(e, tokenNames);
                errors.push(error);
            }
          TAILLexer.prototype.getErrors = function() {
                return errors;
            }

    }).call(this);

    this.dfa6 = new TAILLexer.DFA6(this);
    this.dfa13 = new TAILLexer.DFA13(this);
    TAILLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(TAILLexer, {
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
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(TAILLexer, org.antlr.runtime.Lexer, {
    EOF : -1,
    T__93 : 93,
    T__94 : 94,
    T__95 : 95,
    LSQUARE : 4,
    RSQUARE : 5,
    LCURLY : 6,
    RCURLY : 7,
    LPAREN : 8,
    RPAREN : 9,
    LANGLE : 10,
    RANGLE : 11,
    DOT : 12,
    COMMA : 13,
    TRUE : 14,
    FALSE : 15,
    WHEN : 16,
    IF : 17,
    THEN : 18,
    ELSE : 19,
    ELSE_IF : 20,
    FOR_EACH : 21,
    DO : 22,
    RESULT : 23,
    TO : 24,
    LABEL_TO : 25,
    CALL : 26,
    INIT_GLOBAL_VAR : 27,
    INIT_LOCAL_VAR : 28,
    GET : 29,
    SET : 30,
    GLOBAL : 31,
    IN : 32,
    NOT : 33,
    AND : 34,
    OR : 35,
    LEQ : 36,
    GEQ : 37,
    LOGIC_EQ : 38,
    LOGIC_NOT_EQ : 39,
    EQ : 40,
    NOT_EQ : 41,
    ADD : 42,
    SUBTRACT : 43,
    MULTIPLY : 44,
    DIVIDE : 45,
    POWER : 46,
    SQRT : 47,
    ABS : 48,
    LOG : 49,
    E_EXP : 50,
    ROUND : 51,
    CEILING : 52,
    FLOOR : 53,
    SIN : 54,
    COS : 55,
    TAN : 56,
    ASIN : 57,
    ACOS : 58,
    ATAN : 59,
    COLOR : 60,
    MAKE_COLOR : 61,
    BLACK : 62,
    BLUE : 63,
    WHITE : 64,
    MAGENTA : 65,
    RED : 66,
    LIGHT_GRAY : 67,
    PINK : 68,
    GRAY : 69,
    ORANGE : 70,
    DARK_GRAY : 71,
    YELLOW : 72,
    GREEN : 73,
    CYAN : 74,
    MAKE_LIST : 75,
    LIST : 76,
    OF_COMPONENT : 77,
    FOR_COMPONENT : 78,
    COMPONENT : 79,
    TAIL_EXP : 80,
    TAIL_STMT : 81,
    IDENTIFIER : 82,
    LABEL : 83,
    HEX : 84,
    NUMBER : 85,
    STRING : 86,
    ALPHA : 87,
    DIGIT : 88,
    ALPHA_NUM : 89,
    ESC : 90,
    KEYWORD : 91,
    WS : 92,
    getGrammarFileName: function() { return "TAIL.g"; }
});
org.antlr.lang.augmentObject(TAILLexer.prototype, {
    // $ANTLR start LSQUARE
    mLSQUARE: function()  {
        try {
            var _type = this.LSQUARE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:19:9: ( '[' )
            // TAIL.g:19:11: '['
            this.match('['); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LSQUARE",

    // $ANTLR start RSQUARE
    mRSQUARE: function()  {
        try {
            var _type = this.RSQUARE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:20:9: ( ']' )
            // TAIL.g:20:11: ']'
            this.match(']'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RSQUARE",

    // $ANTLR start LCURLY
    mLCURLY: function()  {
        try {
            var _type = this.LCURLY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:21:8: ( '{' )
            // TAIL.g:21:10: '{'
            this.match('{'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LCURLY",

    // $ANTLR start RCURLY
    mRCURLY: function()  {
        try {
            var _type = this.RCURLY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:22:8: ( '}' )
            // TAIL.g:22:10: '}'
            this.match('}'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RCURLY",

    // $ANTLR start LPAREN
    mLPAREN: function()  {
        try {
            var _type = this.LPAREN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:23:8: ( '(' )
            // TAIL.g:23:10: '('
            this.match('('); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LPAREN",

    // $ANTLR start RPAREN
    mRPAREN: function()  {
        try {
            var _type = this.RPAREN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:24:8: ( ')' )
            // TAIL.g:24:10: ')'
            this.match(')'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RPAREN",

    // $ANTLR start LANGLE
    mLANGLE: function()  {
        try {
            var _type = this.LANGLE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:25:8: ( '<' )
            // TAIL.g:25:10: '<'
            this.match('<'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LANGLE",

    // $ANTLR start RANGLE
    mRANGLE: function()  {
        try {
            var _type = this.RANGLE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:26:8: ( '>' )
            // TAIL.g:26:10: '>'
            this.match('>'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RANGLE",

    // $ANTLR start DOT
    mDOT: function()  {
        try {
            var _type = this.DOT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:27:5: ( '.' )
            // TAIL.g:27:7: '.'
            this.match('.'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DOT",

    // $ANTLR start COMMA
    mCOMMA: function()  {
        try {
            var _type = this.COMMA;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:28:7: ( ',' )
            // TAIL.g:28:9: ','
            this.match(','); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMA",

    // $ANTLR start TRUE
    mTRUE: function()  {
        try {
            var _type = this.TRUE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:29:6: ( 'true' )
            // TAIL.g:29:8: 'true'
            this.match("true"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "TRUE",

    // $ANTLR start FALSE
    mFALSE: function()  {
        try {
            var _type = this.FALSE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:30:7: ( 'false' )
            // TAIL.g:30:9: 'false'
            this.match("false"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FALSE",

    // $ANTLR start WHEN
    mWHEN: function()  {
        try {
            var _type = this.WHEN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:31:6: ( 'when' )
            // TAIL.g:31:8: 'when'
            this.match("when"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WHEN",

    // $ANTLR start IF
    mIF: function()  {
        try {
            var _type = this.IF;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:32:4: ( 'if' )
            // TAIL.g:32:6: 'if'
            this.match("if"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IF",

    // $ANTLR start THEN
    mTHEN: function()  {
        try {
            var _type = this.THEN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:33:6: ( 'then:' )
            // TAIL.g:33:8: 'then:'
            this.match("then:"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "THEN",

    // $ANTLR start ELSE
    mELSE: function()  {
        try {
            var _type = this.ELSE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:34:6: ( 'else:' )
            // TAIL.g:34:8: 'else:'
            this.match("else:"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ELSE",

    // $ANTLR start ELSE_IF
    mELSE_IF: function()  {
        try {
            var _type = this.ELSE_IF;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:35:9: ( 'else_if:' )
            // TAIL.g:35:11: 'else_if:'
            this.match("else_if:"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ELSE_IF",

    // $ANTLR start FOR_EACH
    mFOR_EACH: function()  {
        try {
            var _type = this.FOR_EACH;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:36:10: ( 'for_each' )
            // TAIL.g:36:12: 'for_each'
            this.match("for_each"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FOR_EACH",

    // $ANTLR start DO
    mDO: function()  {
        try {
            var _type = this.DO;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:37:4: ( 'do:' )
            // TAIL.g:37:6: 'do:'
            this.match("do:"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DO",

    // $ANTLR start RESULT
    mRESULT: function()  {
        try {
            var _type = this.RESULT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:38:8: ( 'result:' )
            // TAIL.g:38:10: 'result:'
            this.match("result:"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RESULT",

    // $ANTLR start TO
    mTO: function()  {
        try {
            var _type = this.TO;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:39:4: ( 'to' )
            // TAIL.g:39:6: 'to'
            this.match("to"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "TO",

    // $ANTLR start LABEL_TO
    mLABEL_TO: function()  {
        try {
            var _type = this.LABEL_TO;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:40:10: ( 'to:' )
            // TAIL.g:40:12: 'to:'
            this.match("to:"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LABEL_TO",

    // $ANTLR start CALL
    mCALL: function()  {
        try {
            var _type = this.CALL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:41:6: ( 'call' )
            // TAIL.g:41:8: 'call'
            this.match("call"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CALL",

    // $ANTLR start INIT_GLOBAL_VAR
    mINIT_GLOBAL_VAR: function()  {
        try {
            var _type = this.INIT_GLOBAL_VAR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:42:17: ( 'initialize_global' )
            // TAIL.g:42:19: 'initialize_global'
            this.match("initialize_global"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INIT_GLOBAL_VAR",

    // $ANTLR start INIT_LOCAL_VAR
    mINIT_LOCAL_VAR: function()  {
        try {
            var _type = this.INIT_LOCAL_VAR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:43:16: ( 'initialize_local' )
            // TAIL.g:43:18: 'initialize_local'
            this.match("initialize_local"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INIT_LOCAL_VAR",

    // $ANTLR start GET
    mGET: function()  {
        try {
            var _type = this.GET;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:44:5: ( 'get' )
            // TAIL.g:44:7: 'get'
            this.match("get"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "GET",

    // $ANTLR start SET
    mSET: function()  {
        try {
            var _type = this.SET;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:45:5: ( 'set' )
            // TAIL.g:45:7: 'set'
            this.match("set"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SET",

    // $ANTLR start GLOBAL
    mGLOBAL: function()  {
        try {
            var _type = this.GLOBAL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:46:8: ( 'global' )
            // TAIL.g:46:10: 'global'
            this.match("global"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "GLOBAL",

    // $ANTLR start IN
    mIN: function()  {
        try {
            var _type = this.IN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:47:4: ( 'in:' )
            // TAIL.g:47:6: 'in:'
            this.match("in:"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IN",

    // $ANTLR start NOT
    mNOT: function()  {
        try {
            var _type = this.NOT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:48:5: ( 'not' )
            // TAIL.g:48:7: 'not'
            this.match("not"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NOT",

    // $ANTLR start AND
    mAND: function()  {
        try {
            var _type = this.AND;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:49:5: ( 'and' )
            // TAIL.g:49:7: 'and'
            this.match("and"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "AND",

    // $ANTLR start OR
    mOR: function()  {
        try {
            var _type = this.OR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:50:4: ( 'or' )
            // TAIL.g:50:6: 'or'
            this.match("or"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "OR",

    // $ANTLR start LEQ
    mLEQ: function()  {
        try {
            var _type = this.LEQ;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:51:5: ( '<=' )
            // TAIL.g:51:7: '<='
            this.match("<="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LEQ",

    // $ANTLR start GEQ
    mGEQ: function()  {
        try {
            var _type = this.GEQ;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:52:5: ( '>=' )
            // TAIL.g:52:7: '>='
            this.match(">="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "GEQ",

    // $ANTLR start LOGIC_EQ
    mLOGIC_EQ: function()  {
        try {
            var _type = this.LOGIC_EQ;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:53:10: ( 'equals' )
            // TAIL.g:53:12: 'equals'
            this.match("equals"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LOGIC_EQ",

    // $ANTLR start LOGIC_NOT_EQ
    mLOGIC_NOT_EQ: function()  {
        try {
            var _type = this.LOGIC_NOT_EQ;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:54:14: ( 'not_equals' )
            // TAIL.g:54:16: 'not_equals'
            this.match("not_equals"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LOGIC_NOT_EQ",

    // $ANTLR start EQ
    mEQ: function()  {
        try {
            var _type = this.EQ;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:55:4: ( '=' )
            // TAIL.g:55:6: '='
            this.match('='); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EQ",

    // $ANTLR start NOT_EQ
    mNOT_EQ: function()  {
        try {
            var _type = this.NOT_EQ;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:56:8: ( '!=' )
            // TAIL.g:56:10: '!='
            this.match("!="); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NOT_EQ",

    // $ANTLR start ADD
    mADD: function()  {
        try {
            var _type = this.ADD;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:57:5: ( '+' )
            // TAIL.g:57:7: '+'
            this.match('+'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ADD",

    // $ANTLR start SUBTRACT
    mSUBTRACT: function()  {
        try {
            var _type = this.SUBTRACT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:58:10: ( '-' )
            // TAIL.g:58:12: '-'
            this.match('-'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SUBTRACT",

    // $ANTLR start MULTIPLY
    mMULTIPLY: function()  {
        try {
            var _type = this.MULTIPLY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:59:10: ( '*' )
            // TAIL.g:59:12: '*'
            this.match('*'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MULTIPLY",

    // $ANTLR start DIVIDE
    mDIVIDE: function()  {
        try {
            var _type = this.DIVIDE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:60:8: ( '/' )
            // TAIL.g:60:10: '/'
            this.match('/'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DIVIDE",

    // $ANTLR start POWER
    mPOWER: function()  {
        try {
            var _type = this.POWER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:61:7: ( '^' )
            // TAIL.g:61:9: '^'
            this.match('^'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "POWER",

    // $ANTLR start SQRT
    mSQRT: function()  {
        try {
            var _type = this.SQRT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:62:6: ( 'sqrt' )
            // TAIL.g:62:8: 'sqrt'
            this.match("sqrt"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SQRT",

    // $ANTLR start ABS
    mABS: function()  {
        try {
            var _type = this.ABS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:63:5: ( 'abs' )
            // TAIL.g:63:7: 'abs'
            this.match("abs"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ABS",

    // $ANTLR start LOG
    mLOG: function()  {
        try {
            var _type = this.LOG;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:64:5: ( 'log' )
            // TAIL.g:64:7: 'log'
            this.match("log"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LOG",

    // $ANTLR start E_EXP
    mE_EXP: function()  {
        try {
            var _type = this.E_EXP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:65:7: ( 'e^' )
            // TAIL.g:65:9: 'e^'
            this.match("e^"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "E_EXP",

    // $ANTLR start ROUND
    mROUND: function()  {
        try {
            var _type = this.ROUND;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:66:7: ( 'round' )
            // TAIL.g:66:9: 'round'
            this.match("round"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ROUND",

    // $ANTLR start CEILING
    mCEILING: function()  {
        try {
            var _type = this.CEILING;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:67:9: ( 'ceiling' )
            // TAIL.g:67:11: 'ceiling'
            this.match("ceiling"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CEILING",

    // $ANTLR start FLOOR
    mFLOOR: function()  {
        try {
            var _type = this.FLOOR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:68:7: ( 'floor' )
            // TAIL.g:68:9: 'floor'
            this.match("floor"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FLOOR",

    // $ANTLR start SIN
    mSIN: function()  {
        try {
            var _type = this.SIN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:69:5: ( 'sin' )
            // TAIL.g:69:7: 'sin'
            this.match("sin"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "SIN",

    // $ANTLR start COS
    mCOS: function()  {
        try {
            var _type = this.COS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:70:5: ( 'cos' )
            // TAIL.g:70:7: 'cos'
            this.match("cos"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COS",

    // $ANTLR start TAN
    mTAN: function()  {
        try {
            var _type = this.TAN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:71:5: ( 'tan' )
            // TAIL.g:71:7: 'tan'
            this.match("tan"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "TAN",

    // $ANTLR start ASIN
    mASIN: function()  {
        try {
            var _type = this.ASIN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:72:6: ( 'asin' )
            // TAIL.g:72:8: 'asin'
            this.match("asin"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ASIN",

    // $ANTLR start ACOS
    mACOS: function()  {
        try {
            var _type = this.ACOS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:73:6: ( 'acos' )
            // TAIL.g:73:8: 'acos'
            this.match("acos"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ACOS",

    // $ANTLR start ATAN
    mATAN: function()  {
        try {
            var _type = this.ATAN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:74:6: ( 'atan' )
            // TAIL.g:74:8: 'atan'
            this.match("atan"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ATAN",

    // $ANTLR start COLOR
    mCOLOR: function()  {
        try {
            var _type = this.COLOR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:75:7: ( 'color' )
            // TAIL.g:75:9: 'color'
            this.match("color"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COLOR",

    // $ANTLR start MAKE_COLOR
    mMAKE_COLOR: function()  {
        try {
            var _type = this.MAKE_COLOR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:76:12: ( 'make_color' )
            // TAIL.g:76:14: 'make_color'
            this.match("make_color"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MAKE_COLOR",

    // $ANTLR start BLACK
    mBLACK: function()  {
        try {
            var _type = this.BLACK;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:77:7: ( 'black' )
            // TAIL.g:77:9: 'black'
            this.match("black"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BLACK",

    // $ANTLR start BLUE
    mBLUE: function()  {
        try {
            var _type = this.BLUE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:78:6: ( 'blue' )
            // TAIL.g:78:8: 'blue'
            this.match("blue"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "BLUE",

    // $ANTLR start WHITE
    mWHITE: function()  {
        try {
            var _type = this.WHITE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:79:7: ( 'white' )
            // TAIL.g:79:9: 'white'
            this.match("white"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WHITE",

    // $ANTLR start MAGENTA
    mMAGENTA: function()  {
        try {
            var _type = this.MAGENTA;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:80:9: ( 'magenta' )
            // TAIL.g:80:11: 'magenta'
            this.match("magenta"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MAGENTA",

    // $ANTLR start RED
    mRED: function()  {
        try {
            var _type = this.RED;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:81:5: ( 'red' )
            // TAIL.g:81:7: 'red'
            this.match("red"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "RED",

    // $ANTLR start LIGHT_GRAY
    mLIGHT_GRAY: function()  {
        try {
            var _type = this.LIGHT_GRAY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:82:12: ( 'light_gray' )
            // TAIL.g:82:14: 'light_gray'
            this.match("light_gray"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LIGHT_GRAY",

    // $ANTLR start PINK
    mPINK: function()  {
        try {
            var _type = this.PINK;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:83:6: ( 'pink' )
            // TAIL.g:83:8: 'pink'
            this.match("pink"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "PINK",

    // $ANTLR start GRAY
    mGRAY: function()  {
        try {
            var _type = this.GRAY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:84:6: ( 'gray' )
            // TAIL.g:84:8: 'gray'
            this.match("gray"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "GRAY",

    // $ANTLR start ORANGE
    mORANGE: function()  {
        try {
            var _type = this.ORANGE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:85:8: ( 'orange' )
            // TAIL.g:85:10: 'orange'
            this.match("orange"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ORANGE",

    // $ANTLR start DARK_GRAY
    mDARK_GRAY: function()  {
        try {
            var _type = this.DARK_GRAY;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:86:11: ( 'dark_gray' )
            // TAIL.g:86:13: 'dark_gray'
            this.match("dark_gray"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DARK_GRAY",

    // $ANTLR start YELLOW
    mYELLOW: function()  {
        try {
            var _type = this.YELLOW;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:87:8: ( 'yellow' )
            // TAIL.g:87:10: 'yellow'
            this.match("yellow"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "YELLOW",

    // $ANTLR start GREEN
    mGREEN: function()  {
        try {
            var _type = this.GREEN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:88:7: ( 'green' )
            // TAIL.g:88:9: 'green'
            this.match("green"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "GREEN",

    // $ANTLR start CYAN
    mCYAN: function()  {
        try {
            var _type = this.CYAN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:89:6: ( 'cyan' )
            // TAIL.g:89:8: 'cyan'
            this.match("cyan"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "CYAN",

    // $ANTLR start MAKE_LIST
    mMAKE_LIST: function()  {
        try {
            var _type = this.MAKE_LIST;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:90:11: ( 'make_a_list' )
            // TAIL.g:90:13: 'make_a_list'
            this.match("make_a_list"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "MAKE_LIST",

    // $ANTLR start LIST
    mLIST: function()  {
        try {
            var _type = this.LIST;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:91:6: ( 'list' )
            // TAIL.g:91:8: 'list'
            this.match("list"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LIST",

    // $ANTLR start OF_COMPONENT
    mOF_COMPONENT: function()  {
        try {
            var _type = this.OF_COMPONENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:92:14: ( 'of_component:' )
            // TAIL.g:92:16: 'of_component:'
            this.match("of_component:"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "OF_COMPONENT",

    // $ANTLR start FOR_COMPONENT
    mFOR_COMPONENT: function()  {
        try {
            var _type = this.FOR_COMPONENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:93:15: ( 'for_component:' )
            // TAIL.g:93:17: 'for_component:'
            this.match("for_component:"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FOR_COMPONENT",

    // $ANTLR start COMPONENT
    mCOMPONENT: function()  {
        try {
            var _type = this.COMPONENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:94:11: ( 'component' )
            // TAIL.g:94:13: 'component'
            this.match("component"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMPONENT",

    // $ANTLR start TAIL_EXP
    mTAIL_EXP: function()  {
        try {
            var _type = this.TAIL_EXP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:95:10: ( 'TAIL_exp' )
            // TAIL.g:95:12: 'TAIL_exp'
            this.match("TAIL_exp"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "TAIL_EXP",

    // $ANTLR start TAIL_STMT
    mTAIL_STMT: function()  {
        try {
            var _type = this.TAIL_STMT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:96:11: ( 'TAIL_stmt' )
            // TAIL.g:96:13: 'TAIL_stmt'
            this.match("TAIL_stmt"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "TAIL_STMT",

    // $ANTLR start T__93
    mT__93: function()  {
        try {
            var _type = this.T__93;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:97:7: ( 'modulo_of' )
            // TAIL.g:97:9: 'modulo_of'
            this.match("modulo_of"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__93",

    // $ANTLR start T__94
    mT__94: function()  {
        try {
            var _type = this.T__94;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:98:7: ( 'remainder_of' )
            // TAIL.g:98:9: 'remainder_of'
            this.match("remainder_of"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__94",

    // $ANTLR start T__95
    mT__95: function()  {
        try {
            var _type = this.T__95;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:99:7: ( 'quotient_of' )
            // TAIL.g:99:9: 'quotient_of'
            this.match("quotient_of"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "T__95",

    // $ANTLR start ALPHA
    mALPHA: function()  {
        try {
            // TAIL.g:1349:7: ( ( 'a' .. 'z' | 'A' .. 'Z' ) )
            // TAIL.g:1349:9: ( 'a' .. 'z' | 'A' .. 'Z' )
            if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "ALPHA",

    // $ANTLR start DIGIT
    mDIGIT: function()  {
        try {
            // TAIL.g:1352:7: ( ( '0' .. '9' ) )
            // TAIL.g:1352:9: ( '0' .. '9' )
            // TAIL.g:1352:9: ( '0' .. '9' )
            // TAIL.g:1352:10: '0' .. '9'
            this.matchRange('0','9'); 






        }
        finally {
        }
    },
    // $ANTLR end "DIGIT",

    // $ANTLR start ALPHA_NUM
    mALPHA_NUM: function()  {
        try {
            // TAIL.g:1356:2: ( ALPHA | DIGIT )
            var alt1=2;
            var LA1_0 = this.input.LA(1);

            if ( ((LA1_0>='A' && LA1_0<='Z')||(LA1_0>='a' && LA1_0<='z')) ) {
                alt1=1;
            }
            else if ( ((LA1_0>='0' && LA1_0<='9')) ) {
                alt1=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 1, 0, this.input);

                throw nvae;
            }
            switch (alt1) {
                case 1 :
                    // TAIL.g:1356:4: ALPHA
                    this.mALPHA(); 


                    break;
                case 2 :
                    // TAIL.g:1356:12: DIGIT
                    this.mDIGIT(); 


                    break;

            }
        }
        finally {
        }
    },
    // $ANTLR end "ALPHA_NUM",

    // $ANTLR start ESC
    mESC: function()  {
        try {
            // TAIL.g:1361:2: ( '\\\\' . )
            // TAIL.g:1361:4: '\\\\' .
            this.match('\\'); 
            this.matchAny(); 



        }
        finally {
        }
    },
    // $ANTLR end "ESC",

    // $ANTLR start NUMBER
    mNUMBER: function()  {
        try {
            var _type = this.NUMBER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:1364:8: ( ( ( DIGIT )* DOT ( DIGIT )+ | ( DIGIT )+ ( DOT )? ) )
            // TAIL.g:1364:10: ( ( DIGIT )* DOT ( DIGIT )+ | ( DIGIT )+ ( DOT )? )
            // TAIL.g:1364:10: ( ( DIGIT )* DOT ( DIGIT )+ | ( DIGIT )+ ( DOT )? )
            var alt6=2;
            alt6 = this.dfa6.predict(this.input);
            switch (alt6) {
                case 1 :
                    // TAIL.g:1364:11: ( DIGIT )* DOT ( DIGIT )+
                    // TAIL.g:1364:11: ( DIGIT )*
                    loop2:
                    do {
                        var alt2=2;
                        var LA2_0 = this.input.LA(1);

                        if ( ((LA2_0>='0' && LA2_0<='9')) ) {
                            alt2=1;
                        }


                        switch (alt2) {
                        case 1 :
                            // TAIL.g:1364:11: DIGIT
                            this.mDIGIT(); 


                            break;

                        default :
                            break loop2;
                        }
                    } while (true);

                    this.mDOT(); 
                    // TAIL.g:1364:22: ( DIGIT )+
                    var cnt3=0;
                    loop3:
                    do {
                        var alt3=2;
                        var LA3_0 = this.input.LA(1);

                        if ( ((LA3_0>='0' && LA3_0<='9')) ) {
                            alt3=1;
                        }


                        switch (alt3) {
                        case 1 :
                            // TAIL.g:1364:22: DIGIT
                            this.mDIGIT(); 


                            break;

                        default :
                            if ( cnt3 >= 1 ) {
                                break loop3;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(3, this.input);
                                throw eee;
                        }
                        cnt3++;
                    } while (true);



                    break;
                case 2 :
                    // TAIL.g:1364:31: ( DIGIT )+ ( DOT )?
                    // TAIL.g:1364:31: ( DIGIT )+
                    var cnt4=0;
                    loop4:
                    do {
                        var alt4=2;
                        var LA4_0 = this.input.LA(1);

                        if ( ((LA4_0>='0' && LA4_0<='9')) ) {
                            alt4=1;
                        }


                        switch (alt4) {
                        case 1 :
                            // TAIL.g:1364:31: DIGIT
                            this.mDIGIT(); 


                            break;

                        default :
                            if ( cnt4 >= 1 ) {
                                break loop4;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(4, this.input);
                                throw eee;
                        }
                        cnt4++;
                    } while (true);

                    // TAIL.g:1364:38: ( DOT )?
                    var alt5=2;
                    var LA5_0 = this.input.LA(1);

                    if ( (LA5_0=='.') ) {
                        alt5=1;
                    }
                    switch (alt5) {
                        case 1 :
                            // TAIL.g:1364:39: DOT
                            this.mDOT(); 


                            break;

                    }



                    break;

            }




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NUMBER",

    // $ANTLR start IDENTIFIER
    mIDENTIFIER: function()  {
        try {
            var _type = this.IDENTIFIER;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:1367:12: ( ( ALPHA | '_' ) ( ALPHA | '_' | DIGIT )* )
            // TAIL.g:1367:14: ( ALPHA | '_' ) ( ALPHA | '_' | DIGIT )*
            if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // TAIL.g:1368:13: ( ALPHA | '_' | DIGIT )*
            loop7:
            do {
                var alt7=4;
                switch ( this.input.LA(1) ) {
                case 'A':
                case 'B':
                case 'C':
                case 'D':
                case 'E':
                case 'F':
                case 'G':
                case 'H':
                case 'I':
                case 'J':
                case 'K':
                case 'L':
                case 'M':
                case 'N':
                case 'O':
                case 'P':
                case 'Q':
                case 'R':
                case 'S':
                case 'T':
                case 'U':
                case 'V':
                case 'W':
                case 'X':
                case 'Y':
                case 'Z':
                case 'a':
                case 'b':
                case 'c':
                case 'd':
                case 'e':
                case 'f':
                case 'g':
                case 'h':
                case 'i':
                case 'j':
                case 'k':
                case 'l':
                case 'm':
                case 'n':
                case 'o':
                case 'p':
                case 'q':
                case 'r':
                case 's':
                case 't':
                case 'u':
                case 'v':
                case 'w':
                case 'x':
                case 'y':
                case 'z':
                    alt7=1;
                    break;
                case '_':
                    alt7=2;
                    break;
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    alt7=3;
                    break;

                }

                switch (alt7) {
                case 1 :
                    // TAIL.g:1368:14: ALPHA
                    this.mALPHA(); 


                    break;
                case 2 :
                    // TAIL.g:1368:22: '_'
                    this.match('_'); 


                    break;
                case 3 :
                    // TAIL.g:1368:28: DIGIT
                    this.mDIGIT(); 


                    break;

                default :
                    break loop7;
                }
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "IDENTIFIER",

    // $ANTLR start LABEL
    mLABEL: function()  {
        try {
            var _type = this.LABEL;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:1370:7: ( ( ALPHA | '_' )+ ':' )
            // TAIL.g:1370:9: ( ALPHA | '_' )+ ':'
            // TAIL.g:1370:9: ( ALPHA | '_' )+
            var cnt8=0;
            loop8:
            do {
                var alt8=2;
                var LA8_0 = this.input.LA(1);

                if ( ((LA8_0>='A' && LA8_0<='Z')||LA8_0=='_'||(LA8_0>='a' && LA8_0<='z')) ) {
                    alt8=1;
                }


                switch (alt8) {
                case 1 :
                    // TAIL.g:
                    if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    if ( cnt8 >= 1 ) {
                        break loop8;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(8, this.input);
                        throw eee;
                }
                cnt8++;
            } while (true);

            this.match(':'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LABEL",

    // $ANTLR start KEYWORD
    mKEYWORD: function()  {
        try {
            var _type = this.KEYWORD;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:1372:9: ( ( ALPHA | '_' )* ':' )
            // TAIL.g:1372:11: ( ALPHA | '_' )* ':'
            // TAIL.g:1372:11: ( ALPHA | '_' )*
            loop9:
            do {
                var alt9=2;
                var LA9_0 = this.input.LA(1);

                if ( ((LA9_0>='A' && LA9_0<='Z')||LA9_0=='_'||(LA9_0>='a' && LA9_0<='z')) ) {
                    alt9=1;
                }


                switch (alt9) {
                case 1 :
                    // TAIL.g:
                    if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop9;
                }
            } while (true);

            this.match(':'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "KEYWORD",

    // $ANTLR start STRING
    mSTRING: function()  {
        try {
            var _type = this.STRING;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:1375:2: ( ( '\\'' ( ESC | ~ ( '\\\\' | '\\n' | '\\'' ) )* '\\'' ) | ( '\"' ( ESC | ~ ( '\\\\' | '\\n' | '\"' ) )* '\"' ) )
            var alt12=2;
            var LA12_0 = this.input.LA(1);

            if ( (LA12_0=='\'') ) {
                alt12=1;
            }
            else if ( (LA12_0=='\"') ) {
                alt12=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 12, 0, this.input);

                throw nvae;
            }
            switch (alt12) {
                case 1 :
                    // TAIL.g:1375:4: ( '\\'' ( ESC | ~ ( '\\\\' | '\\n' | '\\'' ) )* '\\'' )
                    // TAIL.g:1375:4: ( '\\'' ( ESC | ~ ( '\\\\' | '\\n' | '\\'' ) )* '\\'' )
                    // TAIL.g:1375:5: '\\'' ( ESC | ~ ( '\\\\' | '\\n' | '\\'' ) )* '\\''
                    this.match('\''); 
                    // TAIL.g:1375:10: ( ESC | ~ ( '\\\\' | '\\n' | '\\'' ) )*
                    loop10:
                    do {
                        var alt10=3;
                        var LA10_0 = this.input.LA(1);

                        if ( (LA10_0=='\\') ) {
                            alt10=1;
                        }
                        else if ( ((LA10_0>='\u0000' && LA10_0<='\t')||(LA10_0>='\u000B' && LA10_0<='&')||(LA10_0>='(' && LA10_0<='[')||(LA10_0>=']' && LA10_0<='\uFFFF')) ) {
                            alt10=2;
                        }


                        switch (alt10) {
                        case 1 :
                            // TAIL.g:1375:11: ESC
                            this.mESC(); 


                            break;
                        case 2 :
                            // TAIL.g:1375:17: ~ ( '\\\\' | '\\n' | '\\'' )
                            if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='&')||(this.input.LA(1)>='(' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            break loop10;
                        }
                    } while (true);

                    this.match('\''); 





                    break;
                case 2 :
                    // TAIL.g:1376:4: ( '\"' ( ESC | ~ ( '\\\\' | '\\n' | '\"' ) )* '\"' )
                    // TAIL.g:1376:4: ( '\"' ( ESC | ~ ( '\\\\' | '\\n' | '\"' ) )* '\"' )
                    // TAIL.g:1376:5: '\"' ( ESC | ~ ( '\\\\' | '\\n' | '\"' ) )* '\"'
                    this.match('\"'); 
                    // TAIL.g:1376:9: ( ESC | ~ ( '\\\\' | '\\n' | '\"' ) )*
                    loop11:
                    do {
                        var alt11=3;
                        var LA11_0 = this.input.LA(1);

                        if ( (LA11_0=='\\') ) {
                            alt11=1;
                        }
                        else if ( ((LA11_0>='\u0000' && LA11_0<='\t')||(LA11_0>='\u000B' && LA11_0<='!')||(LA11_0>='#' && LA11_0<='[')||(LA11_0>=']' && LA11_0<='\uFFFF')) ) {
                            alt11=2;
                        }


                        switch (alt11) {
                        case 1 :
                            // TAIL.g:1376:10: ESC
                            this.mESC(); 


                            break;
                        case 2 :
                            // TAIL.g:1376:16: ~ ( '\\\\' | '\\n' | '\"' )
                            if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            break loop11;
                        }
                    } while (true);

                    this.match('\"'); 





                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STRING",

    // $ANTLR start HEX
    mHEX: function()  {
        try {
            var _type = this.HEX;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:1380:2: ( '#' ALPHA_NUM ALPHA_NUM ALPHA_NUM ALPHA_NUM ALPHA_NUM ALPHA_NUM )
            // TAIL.g:1380:4: '#' ALPHA_NUM ALPHA_NUM ALPHA_NUM ALPHA_NUM ALPHA_NUM ALPHA_NUM
            this.match('#'); 
            this.mALPHA_NUM(); 
            this.mALPHA_NUM(); 
            this.mALPHA_NUM(); 
            this.mALPHA_NUM(); 
            this.mALPHA_NUM(); 
            this.mALPHA_NUM(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "HEX",

    // $ANTLR start WS
    mWS: function()  {
        try {
            var _type = this.WS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // TAIL.g:1383:5: ( ( ' ' | '\\t' | '\\r' | '\\n' ) )
            // TAIL.g:1383:9: ( ' ' | '\\t' | '\\r' | '\\n' )
            if ( (this.input.LA(1)>='\t' && this.input.LA(1)<='\n')||this.input.LA(1)=='\r'||this.input.LA(1)==' ' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WS",

    mTokens: function() {
        // TAIL.g:1:8: ( LSQUARE | RSQUARE | LCURLY | RCURLY | LPAREN | RPAREN | LANGLE | RANGLE | DOT | COMMA | TRUE | FALSE | WHEN | IF | THEN | ELSE | ELSE_IF | FOR_EACH | DO | RESULT | TO | LABEL_TO | CALL | INIT_GLOBAL_VAR | INIT_LOCAL_VAR | GET | SET | GLOBAL | IN | NOT | AND | OR | LEQ | GEQ | LOGIC_EQ | LOGIC_NOT_EQ | EQ | NOT_EQ | ADD | SUBTRACT | MULTIPLY | DIVIDE | POWER | SQRT | ABS | LOG | E_EXP | ROUND | CEILING | FLOOR | SIN | COS | TAN | ASIN | ACOS | ATAN | COLOR | MAKE_COLOR | BLACK | BLUE | WHITE | MAGENTA | RED | LIGHT_GRAY | PINK | GRAY | ORANGE | DARK_GRAY | YELLOW | GREEN | CYAN | MAKE_LIST | LIST | OF_COMPONENT | FOR_COMPONENT | COMPONENT | TAIL_EXP | TAIL_STMT | T__93 | T__94 | T__95 | NUMBER | IDENTIFIER | LABEL | KEYWORD | STRING | HEX | WS )
        var alt13=88;
        alt13 = this.dfa13.predict(this.input);
        switch (alt13) {
            case 1 :
                // TAIL.g:1:10: LSQUARE
                this.mLSQUARE(); 


                break;
            case 2 :
                // TAIL.g:1:18: RSQUARE
                this.mRSQUARE(); 


                break;
            case 3 :
                // TAIL.g:1:26: LCURLY
                this.mLCURLY(); 


                break;
            case 4 :
                // TAIL.g:1:33: RCURLY
                this.mRCURLY(); 


                break;
            case 5 :
                // TAIL.g:1:40: LPAREN
                this.mLPAREN(); 


                break;
            case 6 :
                // TAIL.g:1:47: RPAREN
                this.mRPAREN(); 


                break;
            case 7 :
                // TAIL.g:1:54: LANGLE
                this.mLANGLE(); 


                break;
            case 8 :
                // TAIL.g:1:61: RANGLE
                this.mRANGLE(); 


                break;
            case 9 :
                // TAIL.g:1:68: DOT
                this.mDOT(); 


                break;
            case 10 :
                // TAIL.g:1:72: COMMA
                this.mCOMMA(); 


                break;
            case 11 :
                // TAIL.g:1:78: TRUE
                this.mTRUE(); 


                break;
            case 12 :
                // TAIL.g:1:83: FALSE
                this.mFALSE(); 


                break;
            case 13 :
                // TAIL.g:1:89: WHEN
                this.mWHEN(); 


                break;
            case 14 :
                // TAIL.g:1:94: IF
                this.mIF(); 


                break;
            case 15 :
                // TAIL.g:1:97: THEN
                this.mTHEN(); 


                break;
            case 16 :
                // TAIL.g:1:102: ELSE
                this.mELSE(); 


                break;
            case 17 :
                // TAIL.g:1:107: ELSE_IF
                this.mELSE_IF(); 


                break;
            case 18 :
                // TAIL.g:1:115: FOR_EACH
                this.mFOR_EACH(); 


                break;
            case 19 :
                // TAIL.g:1:124: DO
                this.mDO(); 


                break;
            case 20 :
                // TAIL.g:1:127: RESULT
                this.mRESULT(); 


                break;
            case 21 :
                // TAIL.g:1:134: TO
                this.mTO(); 


                break;
            case 22 :
                // TAIL.g:1:137: LABEL_TO
                this.mLABEL_TO(); 


                break;
            case 23 :
                // TAIL.g:1:146: CALL
                this.mCALL(); 


                break;
            case 24 :
                // TAIL.g:1:151: INIT_GLOBAL_VAR
                this.mINIT_GLOBAL_VAR(); 


                break;
            case 25 :
                // TAIL.g:1:167: INIT_LOCAL_VAR
                this.mINIT_LOCAL_VAR(); 


                break;
            case 26 :
                // TAIL.g:1:182: GET
                this.mGET(); 


                break;
            case 27 :
                // TAIL.g:1:186: SET
                this.mSET(); 


                break;
            case 28 :
                // TAIL.g:1:190: GLOBAL
                this.mGLOBAL(); 


                break;
            case 29 :
                // TAIL.g:1:197: IN
                this.mIN(); 


                break;
            case 30 :
                // TAIL.g:1:200: NOT
                this.mNOT(); 


                break;
            case 31 :
                // TAIL.g:1:204: AND
                this.mAND(); 


                break;
            case 32 :
                // TAIL.g:1:208: OR
                this.mOR(); 


                break;
            case 33 :
                // TAIL.g:1:211: LEQ
                this.mLEQ(); 


                break;
            case 34 :
                // TAIL.g:1:215: GEQ
                this.mGEQ(); 


                break;
            case 35 :
                // TAIL.g:1:219: LOGIC_EQ
                this.mLOGIC_EQ(); 


                break;
            case 36 :
                // TAIL.g:1:228: LOGIC_NOT_EQ
                this.mLOGIC_NOT_EQ(); 


                break;
            case 37 :
                // TAIL.g:1:241: EQ
                this.mEQ(); 


                break;
            case 38 :
                // TAIL.g:1:244: NOT_EQ
                this.mNOT_EQ(); 


                break;
            case 39 :
                // TAIL.g:1:251: ADD
                this.mADD(); 


                break;
            case 40 :
                // TAIL.g:1:255: SUBTRACT
                this.mSUBTRACT(); 


                break;
            case 41 :
                // TAIL.g:1:264: MULTIPLY
                this.mMULTIPLY(); 


                break;
            case 42 :
                // TAIL.g:1:273: DIVIDE
                this.mDIVIDE(); 


                break;
            case 43 :
                // TAIL.g:1:280: POWER
                this.mPOWER(); 


                break;
            case 44 :
                // TAIL.g:1:286: SQRT
                this.mSQRT(); 


                break;
            case 45 :
                // TAIL.g:1:291: ABS
                this.mABS(); 


                break;
            case 46 :
                // TAIL.g:1:295: LOG
                this.mLOG(); 


                break;
            case 47 :
                // TAIL.g:1:299: E_EXP
                this.mE_EXP(); 


                break;
            case 48 :
                // TAIL.g:1:305: ROUND
                this.mROUND(); 


                break;
            case 49 :
                // TAIL.g:1:311: CEILING
                this.mCEILING(); 


                break;
            case 50 :
                // TAIL.g:1:319: FLOOR
                this.mFLOOR(); 


                break;
            case 51 :
                // TAIL.g:1:325: SIN
                this.mSIN(); 


                break;
            case 52 :
                // TAIL.g:1:329: COS
                this.mCOS(); 


                break;
            case 53 :
                // TAIL.g:1:333: TAN
                this.mTAN(); 


                break;
            case 54 :
                // TAIL.g:1:337: ASIN
                this.mASIN(); 


                break;
            case 55 :
                // TAIL.g:1:342: ACOS
                this.mACOS(); 


                break;
            case 56 :
                // TAIL.g:1:347: ATAN
                this.mATAN(); 


                break;
            case 57 :
                // TAIL.g:1:352: COLOR
                this.mCOLOR(); 


                break;
            case 58 :
                // TAIL.g:1:358: MAKE_COLOR
                this.mMAKE_COLOR(); 


                break;
            case 59 :
                // TAIL.g:1:369: BLACK
                this.mBLACK(); 


                break;
            case 60 :
                // TAIL.g:1:375: BLUE
                this.mBLUE(); 


                break;
            case 61 :
                // TAIL.g:1:380: WHITE
                this.mWHITE(); 


                break;
            case 62 :
                // TAIL.g:1:386: MAGENTA
                this.mMAGENTA(); 


                break;
            case 63 :
                // TAIL.g:1:394: RED
                this.mRED(); 


                break;
            case 64 :
                // TAIL.g:1:398: LIGHT_GRAY
                this.mLIGHT_GRAY(); 


                break;
            case 65 :
                // TAIL.g:1:409: PINK
                this.mPINK(); 


                break;
            case 66 :
                // TAIL.g:1:414: GRAY
                this.mGRAY(); 


                break;
            case 67 :
                // TAIL.g:1:419: ORANGE
                this.mORANGE(); 


                break;
            case 68 :
                // TAIL.g:1:426: DARK_GRAY
                this.mDARK_GRAY(); 


                break;
            case 69 :
                // TAIL.g:1:436: YELLOW
                this.mYELLOW(); 


                break;
            case 70 :
                // TAIL.g:1:443: GREEN
                this.mGREEN(); 


                break;
            case 71 :
                // TAIL.g:1:449: CYAN
                this.mCYAN(); 


                break;
            case 72 :
                // TAIL.g:1:454: MAKE_LIST
                this.mMAKE_LIST(); 


                break;
            case 73 :
                // TAIL.g:1:464: LIST
                this.mLIST(); 


                break;
            case 74 :
                // TAIL.g:1:469: OF_COMPONENT
                this.mOF_COMPONENT(); 


                break;
            case 75 :
                // TAIL.g:1:482: FOR_COMPONENT
                this.mFOR_COMPONENT(); 


                break;
            case 76 :
                // TAIL.g:1:496: COMPONENT
                this.mCOMPONENT(); 


                break;
            case 77 :
                // TAIL.g:1:506: TAIL_EXP
                this.mTAIL_EXP(); 


                break;
            case 78 :
                // TAIL.g:1:515: TAIL_STMT
                this.mTAIL_STMT(); 


                break;
            case 79 :
                // TAIL.g:1:525: T__93
                this.mT__93(); 


                break;
            case 80 :
                // TAIL.g:1:531: T__94
                this.mT__94(); 


                break;
            case 81 :
                // TAIL.g:1:537: T__95
                this.mT__95(); 


                break;
            case 82 :
                // TAIL.g:1:543: NUMBER
                this.mNUMBER(); 


                break;
            case 83 :
                // TAIL.g:1:550: IDENTIFIER
                this.mIDENTIFIER(); 


                break;
            case 84 :
                // TAIL.g:1:561: LABEL
                this.mLABEL(); 


                break;
            case 85 :
                // TAIL.g:1:567: KEYWORD
                this.mKEYWORD(); 


                break;
            case 86 :
                // TAIL.g:1:575: STRING
                this.mSTRING(); 


                break;
            case 87 :
                // TAIL.g:1:582: HEX
                this.mHEX(); 


                break;
            case 88 :
                // TAIL.g:1:586: WS
                this.mWS(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(TAILLexer, {
    DFA6_eotS:
        "\u0001\uffff\u0001\u0003\u0002\uffff\u0001\u0003",
    DFA6_eofS:
        "\u0005\uffff",
    DFA6_minS:
        "\u0002\u002e\u0002\uffff\u0001\u0030",
    DFA6_maxS:
        "\u0002\u0039\u0002\uffff\u0001\u0039",
    DFA6_acceptS:
        "\u0002\uffff\u0001\u0001\u0001\u0002\u0001\uffff",
    DFA6_specialS:
        "\u0005\uffff}>",
    DFA6_transitionS: [
            "\u0001\u0002\u0001\uffff\u000a\u0001",
            "\u0001\u0004\u0001\uffff\u000a\u0001",
            "",
            "",
            "\u000a\u0002"
    ]
});

org.antlr.lang.augmentObject(TAILLexer, {
    DFA6_eot:
        org.antlr.runtime.DFA.unpackEncodedString(TAILLexer.DFA6_eotS),
    DFA6_eof:
        org.antlr.runtime.DFA.unpackEncodedString(TAILLexer.DFA6_eofS),
    DFA6_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TAILLexer.DFA6_minS),
    DFA6_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TAILLexer.DFA6_maxS),
    DFA6_accept:
        org.antlr.runtime.DFA.unpackEncodedString(TAILLexer.DFA6_acceptS),
    DFA6_special:
        org.antlr.runtime.DFA.unpackEncodedString(TAILLexer.DFA6_specialS),
    DFA6_transition: (function() {
        var a = [],
            i,
            numStates = TAILLexer.DFA6_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(TAILLexer.DFA6_transitionS[i]));
        }
        return a;
    })()
});

TAILLexer.DFA6 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 6;
    this.eot = TAILLexer.DFA6_eot;
    this.eof = TAILLexer.DFA6_eof;
    this.min = TAILLexer.DFA6_min;
    this.max = TAILLexer.DFA6_max;
    this.accept = TAILLexer.DFA6_accept;
    this.special = TAILLexer.DFA6_special;
    this.transition = TAILLexer.DFA6_transition;
};

org.antlr.lang.extend(TAILLexer.DFA6, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1364:10: ( ( DIGIT )* DOT ( DIGIT )+ | ( DIGIT )+ ( DOT )? )";
    },
    dummy: null
});
org.antlr.lang.augmentObject(TAILLexer, {
    DFA13_eotS:
        "\u0007\uffff\u0001\u002d\u0001\u002f\u0001\u0030\u0001\uffff\u000d"+
    "\u0037\u0007\uffff\u0007\u0037\u0001\uffff\u0001\u0037\u0009\uffff\u0002"+
    "\u0037\u0001\u0064\u0003\u0037\u0002\uffff\u0004\u0037\u0001\u006c\u0003"+
    "\u0037\u0001\uffff\u0014\u0037\u0001\u008b\u000c\u0037\u0002\uffff\u0001"+
    "\u009c\u0001\uffff\u0005\u0037\u0001\uffff\u0001\u0037\u0001\uffff\u0002"+
    "\u0037\u0001\uffff\u0002\u0037\u0001\u00a9\u0004\u0037\u0001\u00ae\u0003"+
    "\u0037\u0001\u00b2\u0003\u0037\u0001\u00b6\u0001\u0037\u0001\u00b8\u0001"+
    "\u00ba\u0001\u00bb\u0001\u00bc\u0004\u0037\u0001\uffff\u0001\u0037\u0001"+
    "\u00c2\u000b\u0037\u0001\u00ce\u0001\u0037\u0002\uffff\u0003\u0037\u0001"+
    "\u00d4\u0002\u0037\u0001\uffff\u0002\u0037\u0001\uffff\u0002\u0037\u0001"+
    "\uffff\u0002\u0037\u0001\u00de\u0001\u0037\u0001\uffff\u0002\u0037\u0001"+
    "\u00e2\u0001\uffff\u0001\u0037\u0001\u00e4\u0001\u0037\u0001\uffff\u0001"+
    "\u00e6\u0001\uffff\u0001\u0037\u0003\uffff\u0001\u00e8\u0001\u00e9\u0001"+
    "\u00ea\u0002\u0037\u0001\uffff\u0001\u0037\u0001\u00ee\u0004\u0037\u0001"+
    "\u00f3\u0001\u00f4\u0003\u0037\u0002\uffff\u0001\u00f9\u0002\u0037\u0001"+
    "\u00fc\u0001\uffff\u0001\u00fd\u0001\u0037\u0001\uffff\u0005\u0037\u0001"+
    "\u0105\u0001\uffff\u0001\u0037\u0001\u0107\u0001\u0037\u0001\uffff\u0001"+
    "\u0037\u0001\uffff\u0001\u010a\u0001\uffff\u0001\u0037\u0003\uffff\u0003"+
    "\u0037\u0001\uffff\u0003\u0037\u0001\u0113\u0002\uffff\u0003\u0037\u0002"+
    "\uffff\u0002\u0037\u0002\uffff\u0001\u0037\u0001\uffff\u0001\u0037\u0001"+
    "\u011c\u0003\u0037\u0001\uffff\u0001\u0037\u0001\uffff\u0001\u0037\u0001"+
    "\u0122\u0001\uffff\u0001\u0037\u0001\u0124\u0006\u0037\u0001\uffff\u0001"+
    "\u012b\u0007\u0037\u0001\uffff\u0001\u0037\u0001\uffff\u0001\u0037\u0001"+
    "\u0136\u0001\u0037\u0001\uffff\u0001\u0037\u0001\uffff\u0004\u0037\u0001"+
    "\u013d\u0001\u0037\u0001\uffff\u0003\u0037\u0001\u0142\u0002\u0037\u0001"+
    "\uffff\u0001\u0037\u0001\uffff\u0001\u0037\u0001\uffff\u0006\u0037\u0001"+
    "\uffff\u0001\u0037\u0001\u014f\u0002\u0037\u0001\uffff\u0002\u0037\u0001"+
    "\uffff\u0001\u0154\u0001\u0037\u0001\u0156\u0005\u0037\u0001\u015c\u0001"+
    "\uffff\u0001\u015d\u0003\u0037\u0001\uffff\u0001\u0037\u0001\uffff\u0001"+
    "\u0162\u0001\u0037\u0001\u0164\u0001\u0165\u0001\u0037\u0002\uffff\u0004"+
    "\u0037\u0001\uffff\u0001\u0037\u0002\uffff\u0001\u016d\u0001\u016e\u0003"+
    "\u0037\u0001\u0172\u0001\u0037\u0002\uffff\u0003\u0037\u0003\uffff\u0002"+
    "\u0037\u0002\uffff\u0003\u0037\u0001\u017e\u0001\u017f\u0002\uffff",
    DFA13_eofS:
        "\u0180\uffff",
    DFA13_minS:
        "\u0001\u0009\u0006\uffff\u0002\u003d\u0001\u0030\u0001\uffff\u000d"+
    "\u003a\u0007\uffff\u0007\u003a\u0001\uffff\u0001\u003a\u0009\uffff\u0002"+
    "\u003a\u0001\u0030\u0003\u003a\u0002\uffff\u0004\u003a\u0001\u0030\u0003"+
    "\u003a\u0001\uffff\u0014\u003a\u0001\u0030\u000c\u003a\u0002\uffff\u0001"+
    "\u0030\u0001\uffff\u0005\u003a\u0001\uffff\u0001\u003a\u0001\uffff\u0002"+
    "\u003a\u0001\uffff\u0002\u003a\u0001\u0030\u0004\u003a\u0001\u0030\u0003"+
    "\u003a\u0001\u0030\u0003\u003a\u0001\u0030\u0001\u003a\u0004\u0030\u0004"+
    "\u003a\u0001\uffff\u0001\u003a\u0001\u0030\u000b\u003a\u0001\u0030\u0001"+
    "\u003a\u0002\uffff\u0003\u003a\u0001\u0030\u0002\u003a\u0001\uffff\u0002"+
    "\u003a\u0001\uffff\u0002\u003a\u0001\uffff\u0002\u003a\u0001\u0030\u0001"+
    "\u003a\u0001\uffff\u0002\u003a\u0001\u0030\u0001\uffff\u0001\u003a\u0001"+
    "\u0030\u0001\u003a\u0001\uffff\u0001\u0030\u0001\uffff\u0001\u003a\u0003"+
    "\uffff\u0003\u0030\u0002\u003a\u0001\uffff\u0001\u003a\u0001\u0030\u0004"+
    "\u003a\u0002\u0030\u0003\u003a\u0002\uffff\u0001\u0030\u0002\u003a\u0001"+
    "\u0030\u0001\uffff\u0001\u0030\u0001\u003a\u0001\uffff\u0005\u003a\u0001"+
    "\u0030\u0001\uffff\u0001\u003a\u0001\u0030\u0001\u003a\u0001\uffff\u0001"+
    "\u003a\u0001\uffff\u0001\u0030\u0001\uffff\u0001\u003a\u0003\uffff\u0003"+
    "\u003a\u0001\uffff\u0003\u003a\u0001\u0030\u0002\uffff\u0003\u003a\u0002"+
    "\uffff\u0002\u003a\u0002\uffff\u0001\u003a\u0001\uffff\u0001\u003a\u0001"+
    "\u0030\u0003\u003a\u0001\uffff\u0001\u003a\u0001\uffff\u0001\u003a\u0001"+
    "\u0030\u0001\uffff\u0001\u003a\u0001\u0030\u0006\u003a\u0001\uffff\u0001"+
    "\u0030\u0007\u003a\u0001\uffff\u0001\u003a\u0001\uffff\u0001\u003a\u0001"+
    "\u0030\u0001\u003a\u0001\uffff\u0001\u003a\u0001\uffff\u0004\u003a\u0001"+
    "\u0030\u0001\u003a\u0001\uffff\u0003\u003a\u0001\u0030\u0002\u003a\u0001"+
    "\uffff\u0001\u003a\u0001\uffff\u0001\u003a\u0001\uffff\u0006\u003a\u0001"+
    "\uffff\u0001\u003a\u0001\u0030\u0002\u003a\u0001\uffff\u0002\u003a\u0001"+
    "\uffff\u0001\u0030\u0001\u003a\u0001\u0030\u0005\u003a\u0001\u0030\u0001"+
    "\uffff\u0001\u0030\u0003\u003a\u0001\uffff\u0001\u003a\u0001\uffff\u0001"+
    "\u0030\u0001\u003a\u0002\u0030\u0001\u003a\u0002\uffff\u0004\u003a\u0001"+
    "\uffff\u0001\u003a\u0002\uffff\u0002\u0030\u0003\u003a\u0001\u0030\u0001"+
    "\u003a\u0002\uffff\u0003\u003a\u0003\uffff\u0002\u003a\u0002\uffff\u0003"+
    "\u003a\u0002\u0030\u0002\uffff",
    DFA13_maxS:
        "\u0001\u007d\u0006\uffff\u0002\u003d\u0001\u0039\u0001\uffff\u000d"+
    "\u007a\u0007\uffff\u0007\u007a\u0001\uffff\u0001\u007a\u0009\uffff\u0006"+
    "\u007a\u0002\uffff\u0008\u007a\u0001\uffff\u0021\u007a\u0002\uffff\u0001"+
    "\u007a\u0001\uffff\u0005\u007a\u0001\uffff\u0001\u007a\u0001\uffff\u0002"+
    "\u007a\u0001\uffff\u0019\u007a\u0001\uffff\u000f\u007a\u0002\uffff\u0006"+
    "\u007a\u0001\uffff\u0002\u007a\u0001\uffff\u0002\u007a\u0001\uffff\u0004"+
    "\u007a\u0001\uffff\u0003\u007a\u0001\uffff\u0003\u007a\u0001\uffff\u0001"+
    "\u007a\u0001\uffff\u0001\u007a\u0003\uffff\u0005\u007a\u0001\uffff\u000b"+
    "\u007a\u0002\uffff\u0004\u007a\u0001\uffff\u0002\u007a\u0001\uffff\u0006"+
    "\u007a\u0001\uffff\u0003\u007a\u0001\uffff\u0001\u007a\u0001\uffff\u0001"+
    "\u007a\u0001\uffff\u0001\u007a\u0003\uffff\u0003\u007a\u0001\uffff\u0004"+
    "\u007a\u0002\uffff\u0003\u007a\u0002\uffff\u0002\u007a\u0002\uffff\u0001"+
    "\u007a\u0001\uffff\u0005\u007a\u0001\uffff\u0001\u007a\u0001\uffff\u0002"+
    "\u007a\u0001\uffff\u0008\u007a\u0001\uffff\u0008\u007a\u0001\uffff\u0001"+
    "\u007a\u0001\uffff\u0003\u007a\u0001\uffff\u0001\u007a\u0001\uffff\u0006"+
    "\u007a\u0001\uffff\u0006\u007a\u0001\uffff\u0001\u007a\u0001\uffff\u0001"+
    "\u007a\u0001\uffff\u0006\u007a\u0001\uffff\u0004\u007a\u0001\uffff\u0002"+
    "\u007a\u0001\uffff\u0009\u007a\u0001\uffff\u0004\u007a\u0001\uffff\u0001"+
    "\u007a\u0001\uffff\u0005\u007a\u0002\uffff\u0004\u007a\u0001\uffff\u0001"+
    "\u007a\u0002\uffff\u0007\u007a\u0002\uffff\u0003\u007a\u0003\uffff\u0002"+
    "\u007a\u0002\uffff\u0005\u007a\u0002\uffff",
    DFA13_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\u0002\u0001\u0003\u0001\u0004\u0001"+
    "\u0005\u0001\u0006\u0003\uffff\u0001\u000a\u000d\uffff\u0001\u0025\u0001"+
    "\u0026\u0001\u0027\u0001\u0028\u0001\u0029\u0001\u002a\u0001\u002b\u0007"+
    "\uffff\u0001\u0052\u0001\uffff\u0001\u0055\u0001\u0056\u0001\u0057\u0001"+
    "\u0058\u0001\u0021\u0001\u0007\u0001\u0022\u0001\u0008\u0001\u0009\u0006"+
    "\uffff\u0001\u0053\u0001\u0054\u0008\uffff\u0001\u002f\u0021\uffff\u0001"+
    "\u0016\u0001\u0015\u0001\uffff\u0001\u0054\u0005\uffff\u0001\u000e\u0001"+
    "\uffff\u0001\u001d\u0002\uffff\u0001\u0013\u0019\uffff\u0001\u0020\u000f"+
    "\uffff\u0001\u0016\u0001\u0035\u0006\uffff\u0001\u001d\u0002\uffff\u0001"+
    "\u0013\u0002\uffff\u0001\u003f\u0004\uffff\u0001\u0034\u0003\uffff\u0001"+
    "\u001a\u0003\uffff\u0001\u001b\u0001\uffff\u0001\u0033\u0001\uffff\u0001"+
    "\u001e\u0001\u001f\u0001\u002d\u0005\uffff\u0001\u002e\u000b\uffff\u0001"+
    "\u000b\u0001\u000f\u0004\uffff\u0001\u000d\u0002\uffff\u0001\u0010\u0006"+
    "\uffff\u0001\u0017\u0003\uffff\u0001\u0047\u0001\uffff\u0001\u0042\u0001"+
    "\uffff\u0001\u002c\u0001\uffff\u0001\u0036\u0001\u0037\u0001\u0038\u0003"+
    "\uffff\u0001\u0049\u0004\uffff\u0001\u003c\u0001\u0041\u0003\uffff\u0001"+
    "\u000f\u0001\u000c\u0002\uffff\u0001\u0032\u0001\u003d\u0001\uffff\u0001"+
    "\u0010\u0005\uffff\u0001\u0030\u0001\uffff\u0001\u0039\u0002\uffff\u0001"+
    "\u0046\u0008\uffff\u0001\u003b\u0008\uffff\u0001\u0023\u0001\uffff\u0001"+
    "\u0014\u0003\uffff\u0001\u001c\u0001\uffff\u0001\u0043\u0006\uffff\u0001"+
    "\u0045\u0006\uffff\u0001\u0011\u0001\uffff\u0001\u0014\u0001\uffff\u0001"+
    "\u0031\u0006\uffff\u0001\u003e\u0004\uffff\u0001\u0012\u0002\uffff\u0001"+
    "\u0011\u0009\uffff\u0001\u004d\u0004\uffff\u0001\u0044\u0001\uffff\u0001"+
    "\u004c\u0005\uffff\u0001\u004f\u0001\u004e\u0004\uffff\u0001\u0024\u0001"+
    "\uffff\u0001\u0040\u0001\u003a\u0007\uffff\u0001\u0048\u0001\u0051\u0003"+
    "\uffff\u0001\u0050\u0001\u004a\u0001\u004b\u0002\uffff\u0001\u004a\u0001"+
    "\u004b\u0005\uffff\u0001\u0019\u0001\u0018",
    DFA13_specialS:
        "\u0180\uffff}>",
    DFA13_transitionS: [
            "\u0002\u002b\u0002\uffff\u0001\u002b\u0012\uffff\u0001\u002b"+
            "\u0001\u0019\u0001\u0029\u0001\u002a\u0003\uffff\u0001\u0029"+
            "\u0001\u0005\u0001\u0006\u0001\u001c\u0001\u001a\u0001\u000a"+
            "\u0001\u001b\u0001\u0009\u0001\u001d\u000a\u0026\u0001\u0028"+
            "\u0001\uffff\u0001\u0007\u0001\u0018\u0001\u0008\u0002\uffff"+
            "\u0013\u0027\u0001\u0024\u0006\u0027\u0001\u0001\u0001\uffff"+
            "\u0001\u0002\u0001\u001e\u0001\u0027\u0001\uffff\u0001\u0016"+
            "\u0001\u0021\u0001\u0012\u0001\u0010\u0001\u000f\u0001\u000c"+
            "\u0001\u0013\u0001\u0027\u0001\u000e\u0002\u0027\u0001\u001f"+
            "\u0001\u0020\u0001\u0015\u0001\u0017\u0001\u0022\u0001\u0025"+
            "\u0001\u0011\u0001\u0014\u0001\u000b\u0002\u0027\u0001\u000d"+
            "\u0001\u0027\u0001\u0023\u0001\u0027\u0001\u0003\u0001\uffff"+
            "\u0001\u0004",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u002c",
            "\u0001\u002e",
            "\u000a\u0026",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u0034\u0006\u0035\u0001\u0032\u0006\u0035"+
            "\u0001\u0033\u0002\u0035\u0001\u0031\u0008\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u0039\u000a\u0035\u0001\u003b\u0002\u0035"+
            "\u0001\u003a\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0007\u0035\u0001\u003c\u0012\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0005\u0035\u0001\u003d\u0007\u0035\u0001\u003e"+
            "\u000c\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0003\uffff\u0001\u0041"+
            "\u0001\u0036\u0001\uffff\u000b\u0035\u0001\u003f\u0004\u0035"+
            "\u0001\u0040\u0009\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u0043\u000d\u0035\u0001\u0042\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u0044\u0009\u0035\u0001\u0045"+
            "\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u0046\u0003\u0035\u0001\u0047\u0009\u0035"+
            "\u0001\u0048\u0009\u0035\u0001\u0049\u0001\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u004a\u0006\u0035\u0001\u004b"+
            "\u0005\u0035\u0001\u004c\u0008\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u004d\u0003\u0035\u0001\u004f"+
            "\u0007\u0035\u0001\u004e\u0009\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u0050\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u0035\u0001\u0052\u0001\u0054\u000a\u0035"+
            "\u0001\u0051\u0004\u0035\u0001\u0053\u0001\u0055\u0006\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0005\u0035\u0001\u0057\u000b\u0035\u0001\u0056"+
            "\u0008\u0035",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0008\u0035\u0001\u0059\u0005\u0035\u0001\u0058"+
            "\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u005a\u000d\u0035\u0001\u005b\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u005c\u000e\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0008\u0035\u0001\u005d\u0011\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u005e\u0015\u0035",
            "\u0001\u0038\u0006\uffff\u0001\u005f\u0019\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0014\u0035\u0001\u0060\u0005\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u001a\u0035",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0014\u0035\u0001\u0061\u0005\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u0062\u0015\u0035",
            "\u000a\u0037\u0001\u0063\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u0065\u000c\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u001a\u0035",
            "",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u0067\u000e\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0011\u0035\u0001\u0068\u0008\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u0069\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u006a\u0003\u0035\u0001\u006b"+
            "\u0011\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u006e\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0008\u0035\u0001\u006d\u0011\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0012\u0035\u0001\u006f\u0007\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0014\u0035\u0001\u0070\u0005\u0035",
            "",
            "\u0001\u0071\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0011\u0035\u0001\u0072\u0008\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0003\u0035\u0001\u0074\u0008\u0035\u0001\u0075"+
            "\u0005\u0035\u0001\u0073\u0007\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0014\u0035\u0001\u0076\u0005\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u0077\u000e\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0008\u0035\u0001\u0078\u0011\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u007a\u0001\u007b\u0005\u0035"+
            "\u0001\u0079\u0007\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u007c\u0019\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u007d\u0006\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u007e\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u007f\u0003\u0035\u0001\u0080\u0015\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u0081\u0006\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0011\u0035\u0001\u0082\u0008\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u0083\u000c\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u0084\u0006\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0003\u0035\u0001\u0085\u0016\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0012\u0035\u0001\u0086\u0007\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0008\u0035\u0001\u0087\u0011\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u0088\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u0089\u0019\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u0001\u008a\u0019\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u008c"+
            "\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0006\u0035\u0001\u008d\u0013\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0006\u0035\u0001\u008e\u000b\u0035\u0001\u008f"+
            "\u0007\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0006\u0035\u0001\u0091\u0003\u0035\u0001\u0090"+
            "\u000f\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0003\u0035\u0001\u0092\u0016\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u0093\u0013\u0035\u0001\u0094\u0005\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u0095\u000c\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u0096\u000e\u0035",
            "\u0001\u0038\u0006\uffff\u0008\u0035\u0001\u0097\u0011\u0035"+
            "\u0004\uffff\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u0098\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u0099\u0015\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u009a\u000c\u0035",
            "",
            "",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0012\u0035\u0001\u009d\u0007\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u009e"+
            "\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u009f\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u00a0\u000c\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u00a1\u0006\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u00a2\u0006\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u00a4\u0015\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u00a5\u0019\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000a\u0035\u0001\u00a7\u000f\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0014\u0035\u0001\u00a8\u0005\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u00aa\u0019\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u00ab\u000c\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u00ac\u000e\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u00ad\u000e\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u00af\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000f\u0035\u0001\u00b0\u000a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u00b1\u000c\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u0035\u0001\u00b3\u0018\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0018\u0035\u0001\u00b4\u0001\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u00b5\u0015\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u00b7\u0006\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u00b9\u0001\uffff\u001a\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u00bd\u000c\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0012\u0035\u0001\u00be\u0007\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u00bf\u000c\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u00c0\u000c\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0002\u0035\u0001\u00c1\u0017\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0007\u0035\u0001\u00c3\u0012\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u00c4\u0006\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u00c5\u0015\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u00c6\u0015\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0014\u0035\u0001\u00c7\u0005\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0002\u0035\u0001\u00c8\u0017\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u00c9\u0015\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000a\u0035\u0001\u00ca\u000f\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u00cb\u000e\u0035",
            "\u0001\u0038\u0006\uffff\u000b\u0035\u0001\u00cc\u000e\u0035"+
            "\u0004\uffff\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u00cd\u0006\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u00cf\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u001a\u0035",
            "",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u00d0\u0015\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0002\u0035\u0001\u00d2\u0001\u0035\u0001\u00d1"+
            "\u0015\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0011\u0035\u0001\u00d3\u0008\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u00d5\u0015\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0008\u0035\u0001\u00d6\u0011\u0035",
            "",
            "\u0001\u00d7\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u00d8"+
            "\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u00d9\u000e\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u00da"+
            "\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u00db\u000e\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0008\u0035\u0001\u00dc\u0011\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0003\u0035\u0001\u00dd\u0016\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0008\u0035\u0001\u00df\u0011\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0011\u0035\u0001\u00e0\u0008\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u00e1\u000b\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u00e3\u0019\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u00e5\u000c\u0035",
            "",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u00e7\u0015\u0035",
            "",
            "",
            "",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0006\u0035\u0001\u00eb\u0013\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u00ec\u000b\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u00ed\u0006\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u00ef"+
            "\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u00f0\u000c\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u00f1\u000e\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000a\u0035\u0001\u00f2\u000f\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u00f5\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u00f6"+
            "\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0008\u0035\u0001\u00f7\u0011\u0035",
            "",
            "",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u00fa\u0019\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u00fb\u000b\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u00fe\u0019\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0008\u0035\u0001\u0100\u0011\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0012\u0035\u0001\u0101\u0007\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0006\u0035\u0001\u0102\u0013\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u0103\u0006\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u0104\u000c\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u0106\u000c\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u0108\u000c\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u0109\u000e\u0035",
            "",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0010\u0035\u0001\u010b\u0009\u0035",
            "",
            "",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u010c\u0015\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000c\u0035\u0001\u010d\u000d\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u010e"+
            "\u0001\uffff\u001a\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u0110\u0001\u0035\u0001\u010f\u0017\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u0111\u0006\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u0112\u000b\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0016\u0035\u0001\u0114\u0003\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u0115\u000d\u0035\u0001\u0116"+
            "\u0007\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u0117\u0015\u0035",
            "",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0002\u0035\u0001\u0118\u0017\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000c\u0035\u0001\u0119\u000d\u0035",
            "",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u011a\u000e\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0005\u0035\u0001\u011b\u0014\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0011\u0035\u0001\u011d\u0008\u0035",
            "\u0001\u011e\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0003\u0035\u0001\u011f\u0016\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0006\u0035\u0001\u0120\u0013\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u0121\u0015\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0014\u0035\u0001\u0123\u0005\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000f\u0035\u0001\u0125\u000a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0006\u0035\u0001\u0126\u0013\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u0127\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0128"+
            "\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u0129\u0019\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u012a"+
            "\u0001\uffff\u001a\u0035",
            "",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0017\u0035\u0001\u012c\u0002\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u012d\u0006\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u012e\u000c\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0007\u0035\u0001\u012f\u0012\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000f\u0035\u0001\u0130\u000a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0008\u0035\u0001\u0131\u0011\u0035",
            "\u0001\u0132\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u001a\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u0133\u0019\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u0135\u0015\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u0137\u000c\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u0138\u0019\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u0139\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0011\u0035\u0001\u013a\u0008\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u013b\u000e\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u013c\u000e\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u013e\u000b\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000f\u0035\u0001\u013f\u000a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000c\u0035\u0001\u0140\u000d\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u0141\u0006\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u0143\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0019\u0035\u0001\u0144",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0018\u0035\u0001\u0146\u0001\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0011\u0035\u0001\u0147\u0008\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u0148\u0006\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u0149\u000e\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u014a\u000c\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u014b\u0019\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u014c\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0008\u0035\u0001\u014d\u0011\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0005\u0035\u0001\u014e\u0014\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u0150\u0006\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0151"+
            "\u0001\uffff\u001a\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u0152\u000c\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u0153\u0015\u0035",
            "",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0155"+
            "\u0001\uffff\u001a\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0012\u0035\u0001\u0157\u0007\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u0158\u0015\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0018\u0035\u0001\u0159\u0001\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0011\u0035\u0001\u015a\u0008\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0012\u0035\u0001\u015b\u0007\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u015e\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0004\u0035\u0001\u015f\u0015\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0160"+
            "\u0001\uffff\u001a\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u0161\u000b\u0035",
            "",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u0163\u000c\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u0166\u0006\u0035",
            "",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0005\u0035\u0001\u0167\u0014\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000d\u0035\u0001\u0168\u000c\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0006\u0035\u0001\u0169\u0004\u0035\u0001\u016a"+
            "\u000e\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0005\u0035\u0001\u016b\u0014\u0035",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u016c\u0006\u0035",
            "",
            "",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0013\u0035\u0001\u016f\u0006\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u0170\u000e\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u0171\u000b\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u0001\u0173\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u001a\u0035",
            "",
            "",
            "\u0001\u0174\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u001a\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000e\u0035\u0001\u0175\u000b\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0002\u0035\u0001\u0176\u0017\u0035",
            "",
            "",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u0035\u0001\u0179\u0018\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u017a\u0019\u0035",
            "",
            "",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u0001\u017b\u0019\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u017c\u000e\u0035",
            "\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff\u0001\u0036"+
            "\u0001\uffff\u000b\u0035\u0001\u017d\u000e\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "\u000a\u0037\u0001\u0038\u0006\uffff\u001a\u0035\u0004\uffff"+
            "\u0001\u0036\u0001\uffff\u001a\u0035",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(TAILLexer, {
    DFA13_eot:
        org.antlr.runtime.DFA.unpackEncodedString(TAILLexer.DFA13_eotS),
    DFA13_eof:
        org.antlr.runtime.DFA.unpackEncodedString(TAILLexer.DFA13_eofS),
    DFA13_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TAILLexer.DFA13_minS),
    DFA13_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(TAILLexer.DFA13_maxS),
    DFA13_accept:
        org.antlr.runtime.DFA.unpackEncodedString(TAILLexer.DFA13_acceptS),
    DFA13_special:
        org.antlr.runtime.DFA.unpackEncodedString(TAILLexer.DFA13_specialS),
    DFA13_transition: (function() {
        var a = [],
            i,
            numStates = TAILLexer.DFA13_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(TAILLexer.DFA13_transitionS[i]));
        }
        return a;
    })()
});

TAILLexer.DFA13 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 13;
    this.eot = TAILLexer.DFA13_eot;
    this.eof = TAILLexer.DFA13_eof;
    this.min = TAILLexer.DFA13_min;
    this.max = TAILLexer.DFA13_max;
    this.accept = TAILLexer.DFA13_accept;
    this.special = TAILLexer.DFA13_special;
    this.transition = TAILLexer.DFA13_transition;
};

org.antlr.lang.extend(TAILLexer.DFA13, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( LSQUARE | RSQUARE | LCURLY | RCURLY | LPAREN | RPAREN | LANGLE | RANGLE | DOT | COMMA | TRUE | FALSE | WHEN | IF | THEN | ELSE | ELSE_IF | FOR_EACH | DO | RESULT | TO | LABEL_TO | CALL | INIT_GLOBAL_VAR | INIT_LOCAL_VAR | GET | SET | GLOBAL | IN | NOT | AND | OR | LEQ | GEQ | LOGIC_EQ | LOGIC_NOT_EQ | EQ | NOT_EQ | ADD | SUBTRACT | MULTIPLY | DIVIDE | POWER | SQRT | ABS | LOG | E_EXP | ROUND | CEILING | FLOOR | SIN | COS | TAN | ASIN | ACOS | ATAN | COLOR | MAKE_COLOR | BLACK | BLUE | WHITE | MAGENTA | RED | LIGHT_GRAY | PINK | GRAY | ORANGE | DARK_GRAY | YELLOW | GREEN | CYAN | MAKE_LIST | LIST | OF_COMPONENT | FOR_COMPONENT | COMPONENT | TAIL_EXP | TAIL_STMT | T__93 | T__94 | T__95 | NUMBER | IDENTIFIER | LABEL | KEYWORD | STRING | HEX | WS );";
    },
    dummy: null
});
 
})();