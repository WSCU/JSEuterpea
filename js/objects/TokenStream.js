//package music;
//
///**
// * The Functional Music project
// * @author Western State College, CIS412 class
// */
//import java.util.ArrayList;
//import static music.TokenType.*;
//
///**
// * Creates an array list of tokens that will be used in the lexer and allows each 
// * individual token to be looked at and assessed.
// */
//public class TokenStream {
//
//    /**
//     * An array list of each individual token
//     */
//    public ArrayList<Token> tokens = new ArrayList<Token>();
//    private int location = 0;
//    private boolean semicolonSent = false;
//
//        /**
//         * Creates a tokenStream
//         */
//    public TokenStream() {
//    }
//
//        /**
//         * Takes a token as an argument and adds into the tokenStream
//         * @param token Requires a valid token to be passed into the array list
//         */
//    public void addToken(Token token) {
//        tokens.add(token);
//    }
//
//    public Token findToken(String s)
//    {
//        for(Token i : this.tokens)
//        {
//            if(i.body.equals(s))return i;
//        }
//    return null;
//    }
//
//public void addTokenafter(Token first,Token second )
//    {
//        int i = this.tokens.indexOf(first);
//        if (i!=-1)this.tokens.add(i+1, second);
//        else throw new RuntimeException();
//    }
//
//    /**
//     * Creates a new token one step past the current location
//     * @return returns a token with the location.
//     */
//    public Token next() {
//        while (tokens.get(location).isType(whiteToken)) {
//            location++;
//        }
//        if (tokens.get(location).isType(TokenType.eofToken)) {
//            return Token.eof;
//        }
//        if (tokens.get(location).place.getCol() == 0 && !semicolonSent) {
//            semicolonSent = true;
//            return Token.semicolon;
//        }
//        semicolonSent = false;
//        Token t = tokens.get(location);
//        location++;
//        return t;
//    }
//
//    /**
//     * Looks ahead to see what the next token is
//     * @return returns the location of the token
//     */
//    public Token peek() {
//        // removed addloc.
//        while (tokens.get(location).isType(whiteToken)) {
//            location++;
//        }
//        if (tokens.get(location).sameToken(Token.eof)) {
//            return Token.eof;
//        }
//        if (tokens.get(location).place.getCol() == 0 && !semicolonSent) {
//            semicolonSent = true;
//            return Token.semicolon;
//        }
//        return tokens.get(location);
//    }
//
//    /**
//     * Looks backward to see what the lest token was
//     * @return returns the location of the token
//     */
//    public Token peekBack() {
//        // removed addloc.
//        while (tokens.get(location - 1).isType(whiteToken)) {
//            location--;
//        }
//        if (tokens.get(location - 1).sameToken(Token.eof)) {
//            return Token.eof;
//        }
//        if (tokens.get(location - 1).place.getCol() == 0 && !semicolonSent) {
//            semicolonSent = true;
//            return Token.semicolon;
//        }
//        return tokens.get(location - 1);
//    }
//
//    /**
//     * Used in testing the tokenStream
//     */
//    public boolean isTokenStream(TokenStream expected) {
//        int loc = 0;
//        for (Token t : expected.tokens) {
//            System.out.println(t);
//            System.out.println(tokens.get(loc));
//            if (!t.sameToken(tokens.get(loc))) {
//                return false;
//        }
//    loc++;
//    }
//return true;
//    }
//
//@Override
//public String toString() {
//        String s = "";
//        for (Token t : tokens) {
//            s = s + ',' + t.body;
//        }
//    return s;
//    }
//    }
