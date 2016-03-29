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
}
ASTLambda.prototype = Object.create(AST.prototype);
ASTLambda.prototype.constructor = ASTLambda;

ASTLambda.prototype.isLambda = function () {
    return true;
}
ASTLambda.prototype.eval = function (e) {
    //TODO
}