/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** File: utility.js
** ----------------
** This file contains utility functions
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** isInt(String value)
** ----------------
** This function takes a string returns true if it is an integer
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function isInt(value) {
	  var c = value.charCodeAt(0);
	  return c >= 48 && c <= 57;
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** isBuiltInFunc(String value)
** ----------------
** This function takes a string and returns true if it is a keyword
** This function needs to access the environment
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function isBuiltInFunc(char) {
	if(isEnv(char)) {
		console.log(char + " is a built in function");
	}
}

function isSpecial(value) {
	for(var i=0; i<special.length; i++) {
		if(special[i] == value) {return true;}
	}
	return false;
}

function isSymbol(value) {
	for(var i=0; i<symbol.length; i++) {
		if(symbol[i] == value) {return true;}
	}
	return false;
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** isLetter(String value)
** ----------------
** Returns true if first char in value is a letter
** _ is an alpha
** A-Z a-z _
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function isLetter(value) {
	 var c = value.charCodeAt(0);
	  return (c >= 65 && c <= 90) || (c >= 97 && c <= 122) || (c == 95);
}

function isWhiteSpace(value) {
	var c = value.charCodeAt(0);
	  return c == 32;
}
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** getLineBreaks(String text)
** ----------------
** This function returns the number of line breaks in a string
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function getLineBreaks(text) {
	return (text.match(/\n/g)||[]).length;
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** splitByLine(String text)
** ----------------
** This functions takes a string and splits it into an array split by line breaks
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function splitByLine(text) {
	var split = text.splitWithIndex("\n");
	var ret = []; // return array
	for(var i=0; i<split.length; i++) {
		ret.push(split[i]);
	}
	return ret;
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** encapsulate(String text)
** ----------------
** 
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function encapsulate(body,i,j,type) {
	var Token = {};
	Token.line = i;
	Token.col = j;
	Token.body = body;
	Token.type = type;
	return Token;
}

function checkComment(body) {
	return body.length >= 2 && body.substring(0,2) == "--";
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** string.splitWithIndex
** ----------------
** This functions is a string function
** called differently than other functions: string.splitWithIndex("thing you want to split by");
** It returns an array that has the index and a value associated with what you split by
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
String.prototype.splitWithIndex=function(delim){
	 var ret=[];
	 var splits=this.split(delim);
	 var index=0;
	 for(var i=0;i<splits.length;i++){
	  ret.push([index,splits[i]]);
	  index+=splits[i].length+delim.length;
	  }
	 return ret;
}
