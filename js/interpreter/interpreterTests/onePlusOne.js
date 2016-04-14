// var baseAST = createAst();

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
// console.log(env);

var plusNod = createAstVar(new Token('+',1,0,"Name",0,0));
// console.log(plusNod);
// console.log(plusNod.eval(env));

var one1Nod = createAstConst(new Token(1,0,0,"Integer",0,0));
// console.log(one1Nod.eval(env));
// console.log(one1Nod);

var one2Nod = createAstConst(new Token(1,2,0,"Integer",0,0));

var app1 = new createAstApp(plusNod, one1Nod);
// console.log(app1);
// console.log(app1.eval(env));
// var app1Arg = app1.eval(env).args[0];
// console.log(app1Arg.asNum());

var app2 = new createAstApp(app1, one2Nod);
console.log(app2.eval(env));