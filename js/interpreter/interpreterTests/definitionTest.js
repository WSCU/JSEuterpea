/**
 * Created by Brendan on 4/27/2016.
 */
console.log("Definition Test");

var xNod = new Token('x', 0,0,"Name",0,0);

var plusNod = createAstVar(new Token('+', 1, 0, "Name", 0, 0));
// console.log(plusNod);
// console.log(plusNod.eval(env));

var one1Nod = createAstConst(new Token(1, 0, 0, "Integer", 0, 0));
// console.log(one1Nod);
// console.log(one1Nod.eval(env));

var one2Nod = createAstConst(new Token(1, 2, 0, "Integer", 0, 0));

var app1 = new createAstApp(plusNod, one1Nod);
// console.log(app1);
// console.log(app1.eval(env));

var app2 = new createAstApp(app1, one2Nod);

// console.log(xNod);
// console.log(app2);

var def = new createAstDef(xNod,app2);

var defs = [];
defs.push(def);

console.log(def);

createDefs(defs);

console.log(def);

console.log(envP.eval(xNod));