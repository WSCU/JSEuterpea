/**
 * Thunks hold an AST and an Enviornment for the AST to Evaluate with
 * The Thunk also keeps track of if it has been evaluated or not
 * When it does get Evaluated the AST gets evaluated and turned into a Value.
 * The Thunk then also knows that it has been Evaluated and will then return the Vaule
 * instead of trying to Evaluate its self again.
 */
var Thunk = new function (prog, e) {
    if (!e) {
        this.v = prog;
        this.evaluated = true;
    }
    else {
        this.e = e;
        this.prog = prog;
        this.evaluated = false;
    }
};

Thunk.prototype.asNum = function () {
    if (evaluated && v.isNum()) {
        return v;
    }
    if (evaluated && !v.isNum()) {
        //Error
    }
    this.v = prog.eval(e);
    if (v == null) {
        //Error
    }
    evaluated = true;
    if (v.isNum()) {
        return v;
    }
    else {
        //error
    }
}

Thunk.prototype.asFunc = function() {
    if (evaluated && v.isFunc()) {
        return v;
    }
    if (evaluated && !v.isFunc()) {
        //error
    }
    this.v = prog.eval(e);
    if (v == null) {
        //error
    }
    evaluated = true;
    if (v.isFunc()) {
        return v;
    }
    else {
        //error
    }
}
