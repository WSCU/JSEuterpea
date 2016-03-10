/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** File: environment.js
** ----------------
** This file contains all the environment syntax	
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
// special 	-> 	( | ) | , | ; | [ | ] | `| { | } -- Token = "Special"
var special = new Array();
special.push("(");
special.push(")");
special.push(",");
special.push(";");
special.push("[");
special.push("]");
special.push("`");
special.push("{");
special.push("}");

//ascSymbol 	-> 	! | # | $ | % | & | * | + | . | / | < | = | > | ? | @  | \ | ^ | | | - | ~ -- Token == "Symbol"
var symbol = new Array();
symbol.push("!");
symbol.push("#");
symbol.push("$");
symbol.push("%");
symbol.push("&");
symbol.push("*");
symbol.push("+");
symbol.push(".");
symbol.push("/");
symbol.push("<");
symbol.push("=");
symbol.push(">");
symbol.push("?");
symbol.push("@");
symbol.push("\\"); // Forward slash is an escape character
symbol.push("^");
symbol.push("|");
symbol.push("-");
symbol.push("~");


