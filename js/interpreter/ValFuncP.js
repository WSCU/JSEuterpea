/*
    These are Values that hold Primative Functions
    For now Primative Functions are going to be things like add and subtract
 */
var ValFunP = function(n, strict, fn) {
    if (!fn) {
        copy = n;
        this.n = copy.n;
        this.fn = copy.fn;
        this.strict = copy.strict;
        this.args = strict;
    }
    else {
        this.n = n;
        this.strict = strict;
        this.fn = fn;
        this.args = [];
    }
};
ValFunP.prototype = Object.create(Value.prototype);
ValFunP.prototype.constructor = ValFunP;

ValFunP.isFunc = function() {
    return true;
}

ValFunP.prototype.apply = function (t) {
    tempArgs = args.concat(t);
    if (tempArgs.size() == n) {
        return temp.fn.apply(temp.args);
    }
    return new ValFunP(this, tempArgs);
};
