plus = new Thunk(Prims.plus, null);
environment = new Env('+',plus);

plusNod = new ASTVar(new Token('+',1,0,"Name");
one1 = new ASTNum(new Token(1,0,0,"Integer");
one2 = new ASTNum(new Token(1,2,0,"Integer");
app1 = new ASTApp(plusNod, one1);
app2 = new ASTApp(app1, one2);

Console.log(app2.eval(e));
