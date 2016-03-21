// FILE COMMENT
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** File: PrattParser
** ----------------
** This is the PrattParser.
** We have to split this into something the program can understand.
** Start with 3 + 2 * 1
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

var t1 = new Tree(null,null); // Create an empty tree
function PrattParser(tokenStream) {
	for(var i=0; i<tokenStream.length - 2; i++) {
		var t1 = tokenStream[i];
		if(t1.type == "Symbol") {
			var tree = new Tree(t1,tokenStream[i-1],tokenStream[i+1]);
		}
	}
}
