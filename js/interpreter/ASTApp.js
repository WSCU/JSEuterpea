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
    funct= fn.eval(e);
    if (!funct.isFunct()) {
        //TODO errors
    }
    else {
        t = new Thunk(e, arg);
        return funct.apply(t);
    }
};
