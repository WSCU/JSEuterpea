/*
    AST
    Abstract Syntax Tree
    These represent Programs
    Constant            = ASTConst
    Variable            = ASTVar
    Assignment          = ASTAssign
    Application         = ASTApp
    Lambda Abstraction  = ASTLambda
 */
var AST = function () {};

AST.prototype.isAST = function () {
    return true;
};
AST.prototype.isConst = function () {
    return false;
};
AST.protoype.isVar = function () {
    return false;
};
AST.prototype.isAssign = function() {
    return false;
};
AST.prototype.isApp = function() {
    return false;
};
AST.prototype.isLambda = function() {
    return false;
};

//e should be an Enviornment
AST.prototype.eval = function(e) {
    console.log("Not Implemented");
};
