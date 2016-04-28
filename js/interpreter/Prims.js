/**
 * The should be the class for Primative Functions
 */
//Seq and Par 
var seq = function(firstMus, secondMus) {
    var firstv = firstMus.asMusic();
    var secondV = secondMus.asMusic();
    var ret = Seq(firstv, secondV);
    return createMusValue(ret);
};
var par = function(firstMus, secondMus){
	var firstV = firstMus.asMusic();
	var secondV = secondMus.asMusic();
	var ret = Par(firstV, secondV);
	return createMusValue(ret);
};

//Instrument modifiers
var pianoF = function(mus) {
	var musV = mus.asMusic();
	var pMus = pMus.modInst("acoustic_grand_piano");
	return createMusValue(pMus);
};
var marimbaF = function(mus) {
	var musV = mus.asMusic();
	var pMus = pMus.modInst("marimba");
	return createMusValue(pMus);
};
var violinF = function(mus) {
	var musV = mus.asMusic();
	var pMus = pMus.modInst("violin");
	return createMusValue(pMus);
};

//Duration modifiers
var halfF = function(mus){
	var musV = mus.asMusic();
	var pMus = pMus.modDur(.5);
	return createMusValue(pMus);
};
var quarterF = function(mus){
	var musV = mus.asMusic();
	var pMus = pMus.modDur(.25);
	return createMusValue(pMus);
};
var eighthF = function(mus){
	var musV = mus.asMusic();
	var pMus = pMus.modDur(.125);
	return createMusValue(pMus);
};
var sixteenthF = function(mus){
	var musV = mus.asMusic();
	var pMus = pMus.modDur(.0625);
	return createMusValue(pMus);
};

//Pitch modifiers
var pitchUpF = function(mus){
	var musV = mus.asMusic();
	var pMus = pMus.modPitch(2);
	return createMusValue(pMus);
};
var pitchDownF = function(mus){
	var musV = mus.asMusic();
	var pMus = pMus.modPitch(.5);
	return createMusValue(pMus);
};

//Dynamics modifiers
var dynPF = function(mus){
	var musV = mus.asMusic();
	var pMus = pMus.newVel(25);
	return createMusValue(pMus);
};
var dynMpF = function(mus){
	var musV = mus.asMusic();
	var pMus = pMus.newVel(50);
	return createMusValue(pMus);
};
var dynMfF = function(mus){
	var musV = mus.asMusic();
	var pMus = pMus.newVel(75);
	return createMusValue(pMus);
};
var dynFF = function(mus){
	var musV = mus.asMusic();
	var pMus = pMus.newVel(100);
	return createMusValue(pMus);
};
var dynFfF = function(mus){
	var musV = mus.asMusic();
	var pMus = pMus.newVel(125);
	return createMusValue(pMus);
};
var dynUpF = function(mus){
	var musV = mus.asMusic();
	var pMus = pMus.modVel(2);
	return createMusValue(pMus);
};
var dynDownF = function(mus){
	var musV = mus.asMusic();
	var pMus = pMus.modVel(.5);
	return createMusValue(pMus);
};

//These are here for arithmetic testing
var plusF = function (x, y) {
    var xv = x.asNum();
    var yv = y.asNum();
    return createNumValue(xv + yv);
};

var minusF = function (x, y) {
    var xv = x.asNum();
    var yv = y.asNum();
    return createNumValue(xv - yv);
};

var multF = function (x, y) {
    var xv = x.asNum();
    var yv = y.asNum();
    return createNumValue(xv * yv);
};

var divF = function (x, y) {
    var xv = x.asNum();
    var yv = y.asNum();
    return createNumValue(xv / yv);
};