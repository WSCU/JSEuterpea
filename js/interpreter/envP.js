/*
 * Creates a basic env which contains the basic Math functions in Prims.
 */
var funPlus = new createFunPValue(2, plusF);
var plusThunk = new Thunk(funPlus);
var env1 = new Env("+", plusThunk);

var funMinus = new createFunPValue(2, minusF);
var minusThunk = new Thunk(funMinus);
var env2 = new Env("-", minusThunk, env1);

var funMult = new createFunPValue(2, multF);
var multThunk = new Thunk(funMult);
var env3 = new Env("*", multThunk, env2);

var funDiv = new createFunPValue(2, divF);
var divThunk = new Thunk(funDiv);
var envP = new Env("/", divThunk, env3);