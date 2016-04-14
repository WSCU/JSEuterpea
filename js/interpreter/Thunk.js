/**
 * Thunks hold an AST and an Enviornment for the AST to Evaluate with
 * The Thunk also keeps track of if it has been evaluated or not
 * When it does get Evaluated the AST gets evaluated and turned into a Value.
 * The Thunk then also knows that it has been Evaluated and will then return the Vaule
 * instead of trying to Evaluate its self again.
 */
var Thunk = function (prog, e) {
    if (!e) {
        this.v = prog;
        this.evaluated = true;
    }
    else {
        this.e = e;
        this.prog = prog;
        this.evaluated = false;
    }

    this.eval = function () {
        if (this.evaluated) {
            return this.v;
        }
        this.v = this.prog.eval(this.e);
        this.evaluated = true;
        return this.v;
    };

    this.asNum = function () {
        this.eval();
        return this.v.val;
    };

    this.asFunc = function () {
        this.eval();
        return this.v;
    };
};
