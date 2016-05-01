// FILE COMMENT
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** File: PrattParser
** ----------------
** This is the PrattParser.
** We have to split this into something the program can understand.
** Start with 3 + 2 * 1
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

function PrattParser(tokenStream) {
	if(tokenStream.length == 1) {
		var curToken = tokenStream[0];
		switch(curToken.type) {
			case "Integer":
				return createAstConst(curToken)
				break;
			case ("Name" || "Symbol"):
				return createAstVar(curToken);
				break;
		}
	}
	var ret = []; // an array of AST
	var minPres = 9; // highest pres
	var minPresIdx;
	for(var i=0; i<tokenStream.length; i++) { // loop through all pres's
		var curToken = tokenStream[i];
		if(curToken.pres < minPres) {
			minPres = curToken.pres;
			minPresIdx = i;
		}
	} // i loop
	var tsL = getArrRange(0,minPresIdx - 1, tokenStream);
	var tsR = getArrRange(minPresIdx + 1, tokenStream.length - 1, tokenStream);
	var astL = PrattParser(tsL);
	var astR = PrattParser(tsR);
	var operator = createAstVar(tokenStream[minPresIdx]);
	return createAstApp(operator,astL,astR);
}

function prePrattParser(tokenStream) {
	var name;
	var body;
	var retAst;
	var defArr = [];
	for(var i=0; i<tokenStream.length; i++) {
		if(tokenStream[i].body == "=") {
			if(tokenStream[i-1].type == "Whitespace") {
				name = tokenStream[i-2];
			} else {
				name = tokenStream[i-1];
			}
			var idx;
			for(var j=i+1; j<tokenStream.length; j++) {
				if(tokenStream[j].type == "Newline") {
					if(tokenStream[j+1]) {
						if(tokenStream[j+1].type != "Whitespace") {
							idx = j;
						}
					} else if(!tokenStream[j+1]) {
						idx = j;
					}
				}
			} // j loop 
			body = getArrRange(i+1 ,idx-1,tokenStream);
			retAst = PrattParser(body);
			defArr.push(createAstDef(name,retAst));
		}
	} // i loop
	createDefs(defArr);
}