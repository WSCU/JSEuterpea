/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 ** File: token.js
 ** ----------------
 ** Contains the code which tokenizes an array of Strings
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** Token(int row, int column, String body, String type,int pres,String assoc)
** ----------------
** Basic constructor for the Token
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function Token(body,column,row,type,pres,assoc) {
	this.body = body;
	this.column = column;
	this.row = row;
	this.type = type;
	this.pres = pres;
	this.assoc = assoc;
}

/*
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * tokenize(String [] strArr)
 * Determines what type of token
 * is in the strArr * Returns an associative array with the type associated
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
function tokenize(lineArr) {
	tokenStream = []; // empty array
	for ( var i = 0; i < lineArr.length; i++) { // loop through the rows
		var line = lineArr[i][1];
		var length = line.length;
		var p;
		var c;
		var foundToken = false;
		for ( var j = 0; j < length; j++) { // loop through the columns;
			p = j;
			c = line.charAt(j);
			if (isInt(c)) { // IsInteger
				while (isInt(c)) {
					if (p == line.length) {
						break;
					}
					p++;
					c = line.charAt(p);
				} // close while
				var body = parseInt(line.substring(j, p));
				var newToken = new Token(body,j,i,"Integer");
				tokenStream.push(newToken);
				j = p;
				c = line.charAt(p);
				foundToken = true;
			} else if (isSpecial(c)) { // Every special is its own token
				var tokenBody = line.substring(j, p);
				var newToken = new Token(tokenBody, j,i, "Special");
				j = p;
				c = line.charAt(p);
				tokenStream.push(newToken);
				foundToken = true;
			} else if (isSymbol(c)) {
				while (isSymbol(c)) {
					if (p == line.length) {
						break;
					}
					p++;
					c = line.charAt(p);
				}
				var tokenBody = line.substring(j, p);
				var isComment = checkComment(tokenBody);
				if(isComment) {	// comment code
					tokenBody = line.substring(j,line.length);
					var commentToken = new Token(tokenBody,j,i,"White Space");
					tokenStream.push(commentToken);
					j = line.length;
					p = line.length;
				} else {
					var newToken = new Token(tokenBody, j,i, "Symbol",getPres(tokenBody),getAssoc(tokenBody));
					tokenStream.push(newToken); // Symbol Token
				}
				j = p;
				c = line.charAt(p);
				foundToken = true;

			} else if (isLetter(c)) {
				var count = 0;
				while (isLetter(c) || (count >= 1 && isInt(c))) {
					count++;
					if (p == line.length) {
						break;
					}
					p++;
					c = line.charAt(p);
				}
				var tokenBody = line.substring(j, p);
				var newToken = new Token(tokenBody, j,i, "Name");
				tokenStream.push(newToken);
				j = p;
				c = line.charAt(p);
				foundToken = true;
			} else if (isWhiteSpace(c)) {
				while (isWhiteSpace(c)) {
					if (p == line.length) {
						break;
					}
					p++;
					c = line.charAt(p);
				}
				var tokenBody = line.substring(j, p);
				var newToken = new Token(tokenBody, j,i, "White Space");
				tokenStream.push(newToken);
				j = p;
				c = line.charAt(p);
				foundToken = true;
			}
			if (foundToken) {
				j--;
			}
		} // j loop
	} // i 
	if(tokenStream.length > 0) {
		return cleanWhiteSpace(tokenStream);
	}
	return false;
}
