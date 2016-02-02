package music;

/**
 * The Functional Music project
 * @author Western State College, CIS412 class
 */
import static music.TokenType.*;

/**
 * A Token is an object that has a Symbol, Body, Place, and Type
 */
var Token {

    //EOF Token static
    var eof = new Token(null, "End of File", new Place(), eofToken);
    var semicolon = new Token(Symbol.semicolon, ";", new Place(), semiToken);
    var symbol;
    var body;
    var place;
    var type;
    var unary = false;  // used in the parser to mark unary -
    var tokVal;

        /**
         * Creates a new token and sets the symbol, body, place and type
         * @param symbol The content of the toke if its not whitespace of a comment
         * @param body is used if there is white space or a comment
         * @param place The place of the token
         * @param type The type of the token
         */
    function Token(Symbol symbol, String body, Place place, TokenType type) {
        this.symbol = symbol;
        this.body = body;
        this.place = place;
        this.type = type;
        this.tokVal=null;
    }

    function Token(Symbol symbol, String body, Place place, TokenType type, Value tv) {
        this.symbol = symbol;
        this.body = body;
        this.place = place;
        this.type = type;
        this.tokVal = tv;

    }

    function Token(Token e) {
        this.symbol = e.symbol;
        this.body = e.body;
        this.place = e.place;
        this.type = e.type;
    }

    function addValue(Value tv)
    {
        this.tokVal=tv;
    }

    

    /**
     * 
     * @return returns a string with the information of the body
     */
    function toString() {
        return body;
    }

    //JUnit testing use
    /**
     * Checks to see if the two tokens being compared are the same
     * @param t the token that is being compared
     * @return returns true if the are the same, false otherwise
     */
    function sameToken(Token t) {
        //System.out.println(place.getCol() + " == " + t.place.getCol());
        return body.equals(t.body) &&
                place.getCol() == t.place.getCol() &&
                place.getFile().equals(t.place.getFile()) &&
                place.getLine() == t.place.getLine() &&
                type == t.type;
        // Assume that the symbols are OK - these should only be tested for
        // var / op / punctuation
    }

    function sameToken(Symbol s) {
        return symbol == s;
    }

    /**
     * Checks to see if the token is a number
     * @return Returns true if token is a number, false otherwise
     */
    function isNumber() {
        return type == numberToken;
    }

    /**
     * Checks to see if the token is a varable
     * @return returns true if the token is a varable, false otherwise
     */
    function isVar() {
        return type == varToken;
    }

    /**
     * checks to see if the symbols is punctuation
     * @param p The symbol that is being checked 
     * @return returns true if the symbol is punctuation, false otherwise
     */
    function isPunct(Symbol p) {
        return p == symbol;
    }

    /**
     * checks to see if it is the same token type as what you are looking for
     * @param ty the token type you are comparing to
     * @return returns true if token types match. false otherwise
     */
    function isType(TokenType ty) {
        return type == ty;
    }

    function isOp() {
        return isType(TokenType.opToken);
    }

    function isError() {
        return isType(TokenType.errorToken);
    }


    function isMusic() {
        String AtoG = "abcdefg";
        String numbers = "123456789";
        if(body.equals("r"))return true;
        if(body.equals("empty"))return true;
        if (body.length() == 2) {
            char first = body.charAt(0);
            char second = body.charAt(1);
            return AtoG.indexOf(first) != -1 && numbers.indexOf(second) != -1;
        }
        if (body.length() == 3) {
            char first = body.charAt(0);
            char num = body.charAt(1);
            char sorf = body.charAt(2);
            return AtoG.indexOf(first) != -1 && numbers.indexOf(num) != -1 && (sorf=='s'||sorf=='f');
        }
        return false;
    }
}


