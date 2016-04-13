var baseAST = createAst();

//var token = new Token(23,4,0,"Integer",0,0);
//var astConst = createAstConst(token);
//console.log(baseAST);
//console.log(astConst);
//console.log(astConst.token);
//console.log(astConst.eval(null));


//var val = new createNumValue(12);
//var thunk = new Thunk(val);
//var env = new Env("x",thunk);
//console.log(thunk);
//console.log(env);

var funPVal = new createFunPValue(2, plusF);
var plusThunk = new Thunk(funPVal);
var env = new Env("+", plusThunk);
console.log(env);

var plusNod = createAstVar(new Token('+',1,0,"Name",0,0));
var one1Nod = createAstConst(new Token(1,0,0,"Integer",0,0));
var one2Nod = createAstConst(new Token(1,2,0,"Integer",0,0));
console.log(plusNod);
console.log(one1Nod);
