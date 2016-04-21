/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
* File: utility.js
** ----------------
** This file contains what would be "static" utility functions
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
		if(symbol[i].symbol == value) {return true;}
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

function checkComment(body) {
	return body.length >= 2 && body.substring(0,2) == "--";
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** cleanWhiteSpace(TokenStream tokenStream)
** ----------------
** Cleans redundant white space types into one whitespace from the TokenStream
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function cleanWhiteSpace(TokenStream) {
	var retTokenStream = [];
	for(var i=0; i<TokenStream.length - 1; i++) {
		var t1 = TokenStream[i];
		var t2 = TokenStream[i+1];
		if(t1.type == "White Space" && t2.type == "White Space") {
			var body = t1.body + t2.body;
			var newToken = new Token(body,t1.column,t1.row,"White Space");
			retTokenStream.push(newToken);
		} else {
			retTokenStream.push(t1);
		}
		if(i == TokenStream.length - 2) {
			retTokenStream.push(t2);
		}
	}
	return retTokenStream;
}

function getPres(tokenBody) {
	for(var i=0; i<symbol.length; i++) {
		if(tokenBody == symbol[i].symbol) {
			return symbol[i].pres;
		}
	}
	return undefined;
}

function getAssoc(tokenBody) {
	for(var i=0; i<symbol.length; i++) {
		if(tokenBody == symbol[i].symbol) {
			return symbol[i].assoc;
		}
	}
	return undefined;
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 ** getArrRange(start, end, array)
 ** ----------------
 ** start = the start index you want
  * end = end index you want
   * array = the array
 **  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function getArrRange(start,end,array) {
	var ret = [];
	if(array && end < array.length) {
		for (var i = start; i <= end; i++) {
			ret.push(array[i]);
		}
		return ret;
	} else {
		console.log("getArrRange went out of bounds!");
	}
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


