// FILE COMMENT
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** File: PrattParser
** ----------------
** This is the PrattParser.
** We have to split this into something the program can understand.
** Start with 3 + 2 * 1
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 ** PrattParser(tokenStream)
 ** ----------------
 ** This is the lowest level of the PrattParser and takes a token stream that has
 ** already been through PreParse()
 ** This function finds the lowest president token in the stream and groups the
 ** left and right side of that token and recursively Parses it.
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function PrattParser(tokenStream) {
	if(nonWhiteSpace(tokenStream) == 1) {
		var curToken = findNonWhite(tokenStream);
		if (!(curToken instanceof Token)) {
			return curToken;
		}
		switch(curToken.type) {
			case "Integer":
				return createAstConst(curToken)
				break;
			case ("Name" || "Symbol"):
				return createAstVar(curToken);
				break;
		}
	}
	var minPres = 9; // highest pres
	var minPresIdx;
	for(var i=0; i<tokenStream.length; i++) { // loop through all pres's
		var curToken = tokenStream[i];
		if (curToken.type != "White Space" && curToken.type != "Newline") {
			if (curToken.pres < minPres) {
				minPres = curToken.pres;
				minPresIdx = i;
			}
		}
	} // i loop
	var tsL = getArrRange(0,minPresIdx - 1, tokenStream);
	var tsR = getArrRange(minPresIdx + 1, tokenStream.length - 1, tokenStream);
	var astL = PrattParser(tsL);
	var astR = PrattParser(tsR);
	var operator = createAstVar(tokenStream[minPresIdx]);
	return createAstApp(operator,astL,astR);
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 ** nonWhiteSpace(tokenStream)
 ** ----------------
 ** This functions returns the number of non white space characters in a stream.
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function nonWhiteSpace(tokenStream) {
	var nonWS = 0;
	for (var i = 0; i < tokenStream.length; i++) {
		var curToken = tokenStream[i];
		if (curToken.type != "White Space" && curToken.type != "Newline") {
			nonWS++;
		}
	}
	return nonWS;
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 ** findNonWhite(tokenStream)
 ** ----------------
 ** This functions returns the first occurrence of a token in the given stream
 ** that is not a white space character.
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function findNonWhite(tokenStream) {
	for(var i = 0; i < tokenStream.length; i++) {
		if (tokenStream[i].type != "White Space" && tokenStream[i].type != "Newline") {
			return tokenStream[i];
		}
	}
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 ** preParse(tokenStream)
 ** ----------------
 ** This functions takes a tokenStream and puts ASTs into the token stream where
 ** ever there is a function call (i.e. f x where f is a predefined function)
 ** and where ever there is a open parentheses it will recursively Parse the inside
 ** until it reaches a closing parentheses.
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function preParse(tokenStream) {
    var ret = [];
    var operator = false;
    for (var i = 0; i < tokenStream.length; i++) {
        var curToken = tokenStream[i];
        if (curToken.type != "White Space") {
            if (curToken.body == "(") {
                var endP = -1;
                for (var j = i; j < tokenStream.length; j++) {
                    if (tokenStream[j].body == ")") {
                        endP = j;
                        break;
                    }
                }
                if (endP == -1) {
                    console.log("Error Missing closing )");
                }
                else {
                    ret.push(PrattParser(preParse(getArrRange(i + 1, endP - 1, tokenStream))));
                    i = j;
                }
            }
            else if (!operator) {
                if (!isOperand(curToken)) {
                    console.log("Death");
                    console.log(curToken);
                }
                else {
                    ret.push(curToken);
                }
                operator = true;
            }
            else if (operator) {
                if (curToken.body == "-" && tokenStream[i - 1] && !isOperand(tokenStream[i - 1])) {
                    ret.push(new Token(-curToken.body, curToken.column, curToken.row,
                        curToken.type, curToken.pres, curToken.assoc))
                }
                else if (isOperand(curToken)) {
                    var fn = PrattParser([ret.pop()]);
                    var arg = PrattParser([curToken]);
                    ret.push(createAstApp(fn, arg));
                }
                else {
                    ret.push(curToken);
                }
                operator = false;
            }
        }
    }
    return ret;
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 ** isOperand(token)
 ** ----------------
 ** This function takes a token and determines if it is to be treated as an
 ** operand(true) or operator(false)
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function isOperand(token) {
    if (token.type == "Name" || token.type == "Integer") {
        return true;
    }
    else {
        return false;
    }
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 ** prePrattParser(tokenStream)
 ** ----------------
 ** This function takes a TokenStream and breaks it into a list of ASTDefs
 ** that is representative of each statement contained in the tokenStream.
 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function prePrattParser(tokenStream) {
	var name;
	var body;
	var retAst;
	var defArr = [];
	for(var i=0; i<tokenStream.length; i++) {
		if(tokenStream[i].body == "=") {
			if(tokenStream[i-1].type == "White Space") {
				name = tokenStream[i-2];
			} else {
				name = tokenStream[i-1];
			}
			var idx;
			for(var j=i+1; j<tokenStream.length; j++) {
				if(tokenStream[j].type == "Newline") {
					if(tokenStream[j+1]) {
						if(tokenStream[j+1].type != "White Space") {
							idx = j;
                            break;
						}
					} else if(!tokenStream[j+1]) {
						idx = j;
                        break;
					}
				}
			} // j loop 
			body = getArrRange(i+1 ,idx-1,tokenStream);
			retAst = PrattParser(preParse(body));
			defArr.push(createAstDef(name,retAst));
		}
	} // i loop
	createDefs(defArr);
}