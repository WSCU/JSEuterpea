/*
    ASTConst
    This is the simplest AST
    The represent numbers and currently only work with Integers
    Constructor should be passed a Token
 */
var ASTConst = function(body) {
    if (body.type == "Integer") {
        this.body = body;
    }
    else {
        Console.log("Error on Line: " + body.row + "|| Value is Not an Integer");
    }
}
ASTConst.prototype = Object.create(AST.prototype);
ASTConst.prototype.constructor = ASTConst;

ASTConst.prototype.isConst = function() {
    return true;
}
ASTConst.prototype.eval = function(e) {
    return body.body;
}