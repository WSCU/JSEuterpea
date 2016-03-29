/*
    These are Values that hold Primative Functions
    For now Primative Functions are going to be things like add and subtract
 */
var ValFunP = function(n, fn) {
    if (fn === undefined) {
        copy = n;
        this.n = copy.n;
        this.fn = copy.fn;
        this.args = [];
        for (val in copy.args) {
            if (val.isVal()) {
                args.push(val);
            }
        }
    }
    else {
        this.n = n;
        this.fn = fn;
        this.args = [];
    }
}

ValFunP.prototype.apply = function (t) {
    temp = new ValFunP(this);
    temp.args.push(t);
    if (temp.args.size() == n) {
        return temp.fn.call(temp.args);
    }
    return temp;
}