/*
 * Creates a basic env which contains the basic functions in Prims.
 */

//Comment out down to other comment if you want to test with math function
// var funcSeq = new createFunPValue(2, seq);
// var seqThunk = new Thunk(funcSeq);
// var env1 = new Env("+", seqThunk);
//
// var funcPar = new createFunPValue(2, par);
// var parThunk = new Thunk(funcPar);
// var env2 = new Env("*", parThunk, env1);

//Comment out these in addition to commenting out above to use math functions
var funPlus = new createFunPValue(2, plusF);
var plusThunk = new Thunk(funPlus);
var env_1 = new Env("+", plusThunk);

var funMinus = new createFunPValue(2, minusF);
var minusThunk = new Thunk(funMinus);
var env0 = new Env("-", minusThunk, env_1);

var funMult = new createFunPValue(2, multF);
var multThunk = new Thunk(funMult);
var env1 = new Env("*", multThunk, env0);

var funDiv = new createFunPValue(2, divF);
var divThunk = new Thunk(funDiv);
var env2 = new Env("/", divThunk, env1);

var c3 = new Note("acoustic_grand_piano", 36, 100, 1);
var c3v = new createMusValue(c3);
var c3t = new Thunk(c3v);
var env3 = new Env("c3", c3t, env2);

var d3 = new Note("acoustic_grand_piano", 38, 100, 1);
var d3v = new createMusValue(d3);
var d3t = new Thunk(d3v);
var env4 = new Env("d3", d3t, env3);

var e3 = new Note("acoustic_grand_piano", 40, 100, 1);
var e3v = new createMusValue(e3);
var e3t = new Thunk(e3v);
var env5 = new Env("e3", e3t, env4);

var f3 = new Note("acoustic_grand_piano", 41, 100, 1);
var f3v = new createMusValue(f3);
var f3t = new Thunk(f3v);
var env6 = new Env("f3", f3t, env5);

var g3 = new Note("acoustic_grand_piano", 43, 100, 1);
var g3v = new createMusValue(g3);
var g3t = new Thunk(g3v);
var env7 = new Env("g3", g3t, env6);

var a4 = new Note("acoustic_grand_piano", 45, 100, 1);
var a4v = new createMusValue(a4);
var a4t = new Thunk(a4v);
var env8 = new Env("a4", a4t, env7);

var b4 = new Note("acoustic_grand_piano", 47, 100, 1);
var b4v = new createMusValue(b4);
var b4t = new Thunk(b4v);
var env9 = new Env("b4", b4t, env8);

var c4 = new Note("acoustic_grand_piano", 48, 100, 1);
var c4v = new createMusValue(c4);
var c4t = new Thunk(c4v);
var env10 = new Env("c4", c4t, env9);

var funcInstPiano = new createFunPValue(1, pianoF);
var instPianoThunk = new Thunk(funcInstPiano);
var env11 = new Env("piano", instPianoThunk, env10);

var funcInstMarimba = new createFunPValue(1, marimbaF);
var instMarimbaThunk = new Thunk(funcInstMarimba);
var env12 = new Env("marimba", instMarimbaThunk, env11);

var funcInstViolin = new createFunPValue(1, violinF);
var instViolinThunk = new Thunk(funcInstViolin);
var env13 = new Env("violin", instViolinThunk, env12);

var funcHalf = new createFunPValue(1, halfF);
var halfV = new Thunk(funcHalf);
var env14 = new Env("h", halfV, env13);

var funcQuarter = new createFunPValue(1, quarterF);
var quarterV = new Thunk(funcQuarter);
var env15 = new Env("q", quarterV, env14);

var funcEighth = new createFunPValue(1, eighthF);
var eighthV = new Thunk(funcEighth);
var env16 = new Env("e", eighthV, env15);

var funcSixteenth = new createFunPValue(1, sixteenthF);
var sixteenthV = new Thunk(funcSixteenth);
var env17 = new Env("s", sixteenthV, env16);

var funcPitchUp = new createFunPValue(1, pitchUpF);
var pitchUpV = new Thunk(funcPitchUp);
var env18 = new Env("pUp", pitchUpV, env17);

var funcPitchDown = new createFunPValue(1, pitchDownF);
var pitchDownV = new Thunk(funcPitchDown);
var env19 = new Env("pDown", pitchDownV, env18);

var funcDynP = new createFunPValue(1, dynPF);
var dynPV = new Thunk(funcDynP);
var env20 = new Env("dynP", dynPV, env19);

var funcDynMp = new createFunPValue(1, dynMpF);
var dynMpV = new Thunk(funcDynMp);
var env21 = new Env("dynMp", dynMpV, env20);

var funcDynMf = new createFunPValue(1, dynMfF);
var dynMfV = new Thunk(funcDynMf);
var env22 = new Env("dynMf", dynMfV, env21);

var funcDynF = new createFunPValue(1, dynFF);
var dynFV = new Thunk(funcDynF);
var env23 = new Env("dynF", dynFV, env22);

var funcDynFf = new createFunPValue(1, dynFfF);
var dynFfV = new Thunk(funcDynFf);
var env24 = new Env("dynFf", dynFfV, env23);

var funcDynUp = new createFunPValue(1, dynUpF);
var dynUpV = new Thunk(funcDynUp);
var env25 = new Env("dynUp", dynUpV, env24);

var funcDynDown = new createFunPValue(1, dynDownF);
var dynDownV = new Thunk(funcDynDown);
var envP = new Env("dynDown", dynDownV, env25);