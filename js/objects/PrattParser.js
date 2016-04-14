// FILE COMMENT
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** File: PrattParser
** ----------------
** This is the PrattParser.
** We have to split this into something the program can understand.
** Start with 3 + 2 * 1
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

function PrattParser(tokenStream) {
	var ret = []; // an array of AST
	var maxPres = 0; // highest pres
	var maxPresIdx;
	for(var i=0; i<tokenStream.length; i++) { // loop through all pres's
		var curToken = tokenStream[i];
		// var curAst;
		if(curToken.pres > maxPres) {
			maxPres = curToken.pres;
			maxPresIdx = i;
		}
		// switch(curToken.type) {
		// 	case "Integer":
		// 		curAst = createAstConst(curToken)
		// 		break;
		// 	case ("Name" || "Symbol"):
		// 		curAst = createAstVar(curToken);
		// 		break;
		// }
		// ret.push(curAst);
		// pres--;
	}
	return ret;
}

function convertInfix(tokenStream) {
	
}
