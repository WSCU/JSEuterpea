/* Types of AST
   Constants
   Variables
   Applications (AST applied to AST) (Tree)
   Lambda Abstraction (Variable bound by lambda and AST)
   Assignment (variable to AST)
*/
var AST = function() {}
AST.prototype.isAST = function() {
	return true;
}
AST.prototype.isConst = function() {
	return false;
}
AST.prototype.isVar = function() {
	return false;
}
AST.prototype.isApp = function() {
	return false;
}
AST.prototype.eval = function(e) {
	console.log("Not Implemented");
}

var Constant = function(body) {
	if (body.type == "Integer"){
		this.body = body;
	}
}
Constant.prototype = Object.create(AST.prototype);
Constant.prototype.constructor = Constant;
Constant.prototype.isConst = function() {
	return true;
}
Constant.prototype.eval = function(e) {
	return body.body;
}

var Variable = function(body) {
	if (body[0].type == "Letter") {
		for (var i = 1; i < body.length; i++) (
		var badVar = false;
			if (!(body[i].type == "Letter" || body[i].type == "Number")) {
				badVar = true;
			}
		}
		if (!badVar) {
			this.body = body;
		}
	}
Variable.prototype = Object.create(AST.prototype);
Variable.prototype.constructor = Variable;
Variable.prototype.isVar = function() {
	return true;
}
Variable.prototype.eval = function(e) {
	//TODO
}

var Application = function(fn, arg) {
	if (fn.isAST() && arg.isAST()) {
		this.fn = fn;
		this.arg = arg;
	}
}
Application.prototype = Object.create(AST.prototype);
Application.prototype.constructor = Application;
Application.prototype.isApp = function() {
	return true;
}
Application.prototype.eval = function(e) {
	//TODO
}

//TODO lambda abstraction and assignment