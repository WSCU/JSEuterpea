/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 ** File: AST.js
 ** ----------------
 ** Contains all the object creation for AST
 **
 ** BASIC STRUCTURE OF AST
 Constant            = ASTConst
 Variable            = ASTVar
 Assignment          = ASTAssign (equals or definition)
 Application         = ASTApp (@)
 Lambda Abstraction  = ASTLambda

 !!! A NAME IS BOTH AN OPERATOR OR A REGUALR VARIABLE
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ** SUPERCLASS: AST
// ** ----------------
// ** Base AST in which all other ASTs are created from
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var ASTVar = {}; // create empty object for base
// Constructor
function createAst() {
    return Object.create(ASTVar, {
        // Methods
        getAstType: {
            value: function () {
                return "Base";
            },
        },
        eval: {
            value: function (env) {
                return;
            },
        },
    });
}
// /*+++++++++++++++++++++++++++++++++++++++++CLOSE BASE AST+++++++++++++++++++++++++++++++++++++++++++++*/


// /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ** SUBCLASS: ASTConst
// ** ----------------
// ** AST that represents constant
// ** Extends AST
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var astConstVar = createAst();
function createAstConst(token) {
    var ret = Object.create(astConstVar, {
        getAstType: {
            value: function () {
                return "Const";
            },
        },
        eval: {
            value: function (env) {
                return createNumValue(token.body);
            },
        },
    });
    ret.token = token;
    return ret;
}


//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ** CLASS: ASTVar
// ** ----------------
// ** This is used to hold the name of a Thunk in Enviornments
// ** When it is eval is called it finds the first occurence of the name
// ** in the Enviornment and returns the Thunk assosiated with it.
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var astVarVar = createAst();
function createAstVar(token) {
    var ret = Object.create(astVarVar, {
        getAstType: {
            value: function () {
                return "Var";
            },
        },
        eval: {
            value: function (env) {
                return env.eval(this.token);
            },
        },
    });
    ret.token = token;
    return ret;
}


// /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ** SUBCLASS: ASTApp
// ** ----------------
// ** The Represents an application of a function and one argument
// ** The idea of Currying is used here which is the idea that if
// ** that a function of two arguments can be represented as a function
// ** of one argument where that argument is a function which takes the secound argument
// ** Extends AST
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var astAppVar = createAst();
function createAstApp() {
    var ret = Object.create(astAppVar, {
        getAstType: {
            value: function () {
                return "App";
            },
        },
        eval: {
            value: function (env) {
                var func = ret.fn.eval(env);
                var t = new Thunk(ret.args, env);
                return func.apply(t);
            },
        },
    });
 
    if(arguments.length == 2) {
        ret.fn = arguments[0];
        ret.args = arguments[1];
    } else { // multiple arguments
        ret.args = arguments[arguments.length - 1];
        var tempArgs =[];
        for (var i = 0; i < arguments.length-1; i++) {
            tempArgs[i] = arguments[i];
        }
        ret.fn = createAstApp.apply(null, tempArgs);
    }
    return ret;
}


// /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ** SUBCLASS: ASTDef
// ** ----------------
// ** This creates nods which represent definition of a variable to an AST
// ** The token is the name that the AST will be referenced as.
// ** Extends AST
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var astDefVar = createAst();
function createAstDef(token, ast) {
    var ret = Object.create(astDefVar, {
        getAstType: {
            value: function () {
                return "Def";
            }
        },
        eval: {
            value: function (env) {
                envP = new Env(this.left, this.right, env);
                return;
            }
        }
    });
    ret.left = token.body;
    ret.right = new Thunk(ast,envP);
    return ret;
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 ** createDefs(definitions)
 ** ----------------
 ** This function takes an array of ASTDefs and adds all of them to the envP
 ** It then goes and back patches all the thunks in the envP so they all have can
 ** reference the same environment. This allows for mutual-recursion.
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function createDefs(definitions) {
    for (var i = 0; i < definitions.length; i++) {
        definitions[i].eval(envP);
    }
    var here = envP;
    while(here != null) {
        here.val.e = envP;
        here = here.parent;
    }
}