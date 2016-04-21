/*
 * Creates a basic env which contains the basic Math functions in Prims.
 */
var funcSeq = new createFunPValue(2, seq);
var seqThunk = new Thunk(funcSeq);
var env1 = new Env("+", seqThunk);

// var c1 = new Note("",)
// var c1v = new createMusVar(c1);
// var c1t = new Thunk((c1v));
// var envP = new Env("c1", c1t, env4);