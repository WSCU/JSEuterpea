/**
 * The should be the class for Primative Functions
 */
var plusF = function (x, y) {
    var xv = x.asNum();
    var yv = y.asNum();
    return createNumValue(xv+yv);
};