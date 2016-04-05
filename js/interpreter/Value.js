/*
    This is the Interface for all Value Types
 */
var Value = function () {};
Value.prototype.isVal = function () {
    return true;
};

Value.prototype.isNum = function () {
    return false;
};
Value.prototype.isFunc = function () {
    return false;
};

/*
    ValNums are Values that hard holding a known Value.
    These could be things like Intergers, Strings, or Booleans
 */
var ValNum = function(n) {
    this.n = n;
};
ValNum.prototype = Object.create(Value.prototype);
ValNum.prototype.constructor = ValNum;

ValNum.prototype.isNum = function () {
    return true;
};

/*
    These are Values that hold Primative Functions
    For now Primative Functions are going to be things like add and subtract
 */
var ValFunP = function(n, fn) {
    if (n.isFunc()) {
        copy = n;
        this.n = copy.n;
        this.fn = copy.fn;
        this.args = fn;
    }
    else {
        this.n = n;
        this.fn = fn;
        this.args = [];
    }
};
ValFunP.prototype = Object.create(Value.prototype);
ValFunP.prototype.constructor = ValFunP;

ValFunP.isFunc = function() {
    return true;
};

ValFunP.prototype.apply = function (t) {
    var tempArgs = this.args.concat(t);
    if (tempArgs.size() == this.n) {
        return this.fn.apply(temp.args);
    }
    return new ValFunP(this, tempArgs);
};
