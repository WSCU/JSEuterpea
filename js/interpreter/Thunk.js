/**
 * Thunks hold an AST and an Enviornment for the AST to Evaluate with
 * The Thunk also keeps track of if it has been evaluated or not
 * When it does get Evaluated the AST gets evaluated and turned into a Value.
 * The Thunk then also knows that it has been Evaluated and will then return the Vaule
 * instead of trying to Evaluate its self again.
 */
var Thunk = new function (e, prog) {
    if (prog === undefined) {
        this.v = e;
        this.evaluated = true;
    }
    else {
        this.e = e;
        this.prog = prog;
        this.evaluated = false;
    }
}

Thunk.prototype.force = function () {
    if (evaluated) {
        return v;
    }
    this.v = prog.eval(e);
    if (v == null) {
        Console.log("Error in Thunk Eval");
    }
    evaluated = true;
    return v;
}