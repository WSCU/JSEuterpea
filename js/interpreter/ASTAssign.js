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
