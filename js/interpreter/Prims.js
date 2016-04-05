/**
 * The should be the class for Primative Functions
*/
var plus = new function(x, y) {
	var xv = x.asNum();
	var yv = y.asNum();
	return ValNum(xv+yv);
};
