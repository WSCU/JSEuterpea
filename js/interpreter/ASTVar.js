/*
    ASTVar
    This is used to hold the name of a Thunk in Enviornments
    When it is eval is called it finds the first occurence of the name
    in the Enviornment and returns the Thunk assosiated with it.
 */
var ASTVar = function (body) {
    if (body.type == "Name") {
        this.body = body;
    }
    else {
        Console.log("Error on Line: " + body.row +
            " || Can not have a Variable that is not a Name");
    }
}
ASTVar.prototype = Object.create(AST.prototype);
ASTVar.prototype.constructor = ASTConst;

ASTVar.prototype.isVar = function() {
    return true;
}
ASTVar.prototype.eval = function (e) {
    return e.eval(body.body);
}