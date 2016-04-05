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

Thunk.prototype.asNum = new function () {
    if (this.evaluated && this.v.isNum()) {
        return this.v;
    }
    if (this.evaluated && !this.v.isNum()) {
        //Error
    }
    this.v = this.prog.eval(this.e);
    if (this.v == null) {
        //Error
    }
    this.evaluated = true;
    if (this.v.isNum()) {
        return this.v;
    }
    else {
        //error
    }
};

Thunk.prototype.asFunc = new function() {
    if (this.evaluated && this.v.isFunc()) {
        return this.v;
    }
    if (this.evaluated && !this.v.isFunc()) {
        //error
    }
    this.v = this.prog.eval(this.e);
    if (this.v == null) {
        //error
    }
    this.evaluated = true;
    if (this.v.isFunc()) {
        return this.v;
    }
    else {
        //error
    }
};
