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
var plus = {symbol:"+",pres:1};
var minus = {symbol:"-",pres:1};
var mult = {symbol:"*",pres:2};
var div = {symbol:"/",pres:2};
symbol.push(plus);
symbol.push(minus);
symbol.push(mult);
symbol.push(div);
// symbol.push("!");
// symbol.push("#");
// symbol.push("$");
// symbol.push("%");
// symbol.push("&");
// symbol.push(".");
// symbol.push("<");
// symbol.push("=");
// symbol.push(">");
// symbol.push("?");
// symbol.push("@");
// symbol.push("\\"); // Forward slash is an escape character
// symbol.push("^");
// symbol.push("|");
// symbol.push("~");


