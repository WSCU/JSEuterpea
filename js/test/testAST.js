var baseAST = createAst();

var token = new Token(23,4,0,"Integer",0,0);
var astConst = createAstConst(token);
console.log(baseAST);
console.log(astConst);
console.log(astConst.token);
console.log(astConst.eval(null));


var val = new createNumValue(12);
var thunk = new Thunk(val);
var env = new Env("x",thunk)
console.log(thunk);
console.log(env);