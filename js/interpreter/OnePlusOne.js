var plus = new Thunk(Prims.plus, null);
var environment = new Env('+',plus);

var plusNod = new ASTVar(new Token('+',1,0,"Name"));
var one1 = new ASTNum(new Token(1,0,0,"Integer"));
var one2 = new ASTNum(new Token(1,2,0,"Integer"));
var app1 = new ASTApp(plusNod, one1);
var app2 = new ASTApp(app1, one2);

Console.log(app2.eval(e));
