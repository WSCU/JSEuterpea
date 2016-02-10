var tokenArr = []; // Create an array to store the tokens

function tokenize(tokenString) {
	while(tokenString) {
		// alert(tokenString);
		if(tokenString.indexOf(" ") != -1) {
			var white = tokenString.indexOf(" "); // Find the index of first white space
			tokenArr.push(tokenString.substring(0,white));
			tokenString = tokenString.substring(white,tokenString.length);
			tokenString = $.trim(tokenString);
		} else {
			tokenArr.push(tokenString);
			return tokenArr;
		}
	}
}
