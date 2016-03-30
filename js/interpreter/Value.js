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
