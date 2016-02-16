/* *****************************************************************************
** File: Token.js
** ----------------
** A Token is an object that has a Symbol, Body, Place, and Type
*********************************************************************************/
function Token(symbol,body,place,type,tokValue) { // Constructor
	if(typeof tokValue == 'undefined') {
		this.tokValue = null;
	}
    // Instance Variables
    this.symbol = symbol;
    this.body = body;
    this.place = place;
    this.tokType = tokType;
    this.tokValue = tokValue;
    this.unary = false;

    // Methods
    this.addValue = function(tokenValue) {
        this.tokValue = tokenValue;
    }

}



