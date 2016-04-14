/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** File: test.js
** ----------------
** This file is used for general
** It is included in the index.html page.
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
console.log("running test.js");

// var input = "1 + 2";
// var tokenStream = tokenize(input);

var constTok = new Token(1,0,0,"Integer",0,0);
var constAst1 = createAstConst(constTok);

var constToke = new Token(2,0,0,"Integer",0,0);
var constAst2 = createAstConst(constToke);

var token = new Token("+",0,0,"Name",0,0);
var varAst = createAstVar(token);

var appAST = createAstApp(varAst,constAst1,constAst2);
console.log(appAST);

console.log(appAST.eval(envP));