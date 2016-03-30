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
