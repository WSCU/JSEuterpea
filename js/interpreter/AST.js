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
    Lambda Abstraction  = 

!!! A NAME IS BOTH AN OPERATOR OR A REGUALR VARIABLE
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** factoryAst(curToken, tokenStream)
** ----------------
** Factory function
** 
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function factoryAst(curToken, tokenStream) {
    switch(curToken.type) {
        case "Integer":
            return createAstConst();
            break;
        case "Name":
            return new ASTVar();
            break;
        default: 
             console.log("Error: Improper type. Check AST.js");
    }
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** CLASS: AST
** ----------------
** Base AST in which all other ASTs are created from
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var ASTVar = {}; // create empty object for base

// Constructor
function createAst() {
    return Object.create(ASTVar, {

        // Methods
         getAstType: {
            value: function() {
            return "BaseAst";
            }
        }

    });
}
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** CLASS: ASTConst
** ----------------
** AST that represents constant
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
 var astConstVar = createAst();
 function createAstConst() {
    return Object.create(astConstVar, {
        // Methods
         getAstType: {
            value: function() {
                return "Const";
            }
        }
    });
 }
/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** CLASS: ASTVar
** ----------------
** This is used to hold the name of a Thunk in Enviornments
** When it is eval is called it finds the first occurence of the name
** in the Enviornment and returns the Thunk assosiated with it.
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var ASTVar = function (body) {
    if (body.type == "Name") {
        this.body = body;
    }
    else {
        Console.log("Error on Line: " + body.row +
            " || Can not have a Variable that is not a Name");
    }
};
ASTVar.prototype = Object.create(AST.prototype);
ASTVar.prototype.constructor = ASTConst;

ASTVar.prototype.isVar = function() {
    return true;
};
ASTVar.prototype.eval = function (e) {
    return e.eval(this.body.body);
};

/*
    ASTAssign
    Assign takes a Token which is the name and an AST
    This should put the AST into an Enviornment with the body of the
    token as the Token name.
 */
var ASTAssign = function (body) {
    //TODO
};
ASTAssign.prototype = Object.create(AST.prototype);
ASTAssign.prototype.constructor = ASTAssign;

ASTAssign.prototype.isAssign = function () {
    return true;
};
ASTAssign.prototype.eval = function (e) {
    //TODO
};

/*
    ASTApp
    This is for application of functions
    It takes to ASTs the function and what the function is being applied to
 */
var ASTApp = function(fn, arg) {
    if (fn.isAST() && arg.isAST()) {
        this.fn = fn;
        this.arg = arg;
    }
    else {
        //TODO
        //Error Messages
    }
};
ASTApp.prototype = Object.create(AST.prototype);
ASTApp.prototype.constructor = ASTApp;

ASTApp.prototype.isApp = function() {
    return true;
};
ASTApp.prototype.eval = function(e) {
    funct = this.fn.eval(e);
    if (!funct.isFunct()) {
        //TODO errors
    }
    else {
        t = new Thunk(e, this.arg);
        return funct.apply(t);
    }
};

/*
    ASTLambda
    Takes 2 ASTs a Variable and another AST
    The first AST is the Variable that is bound by the Lambda
    And the second can be anything
 */
var ASTLambda = function(Lvar, body) {
    if (Lvar.isVar() && body.isAST()) {
        this.Lvar = Lvar;
        this.body = body;
    }
    else {
        //TODO
        //error message
    }
};
ASTLambda.prototype = Object.create(AST.prototype);
ASTLambda.prototype.constructor = ASTLambda;

ASTLambda.prototype.isLambda = function () {
    return true;
};
ASTLambda.prototype.eval = function (e) {
    //TODO
};
