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
	var pres = 2;
	while(pres > 0) {
		for(var i=0; i<tokenStream.length; i++) {
			if(tokenStream[i].type == "Symbol" && tokenStream[i].pres == pres) {

			} else { continue; }
			pres--;
		}
	}
}
