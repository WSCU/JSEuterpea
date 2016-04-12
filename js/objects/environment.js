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

var period = {symbol:".",pres:9,assoc:"r"};
symbol.push(period);

var carrot = {symbol:"^",pres:8,assoc:"r"};
symbol.push(carrot);

var doubleCarrot = {symbol:"^^",pres:8,assoc:"r"};
symbol.push(doubleCarrot);

var doubleStar = {symbol:"**",pres:8,assoc:"r"};
symbol.push(doubleStar);

var star = {symbol:"*",pres:7,assoc:"l"};
symbol.push(star);

var slash = {symbol:"/",pres:7,assoc:"l"};
symbol.push(slash);

var plus = {symbol:"+",pres:6,assoc:"l"};
symbol.push(plus);

var minus = {symbol:"-",pres:6,assoc:"l"};
symbol.push(minus);

var colon = {symbol:":",pres:5,assoc:"r"};
symbol.push(colon);

var doubleEquals = {symbol:"==",pres:4,assoc:"n"};
symbol.push(doubleEquals);

var divEqual = {symbol:"/=",pres:4,assoc:"n"};
symbol.push(divEqual);

var lessThan = {symbol:"<",pres:4,assoc:"n"};
symbol.push(lessThan);

var lessThanEqual = {symbol:"<=",pres:4,assoc:"n"};
symbol.push(lessThanEqual);

var greatEqual = {symbol:">=",pres:4,assoc:"n"};
symbol.push(greatEqual);

var greater = {symbol:">",pres:4,assoc:"n"};
symbol.push(greater);

var andAnd = {symbol:"&&",pres:3,assoc:"r"};
symbol.push(andAnd);

var orOr = {symbol:"||",pres:2,assoc:"r"};
symbol.push(orOr);

var greatGreat = {symbol:">>",pres:1,assoc:"l"};
symbol.push(greatGreat);

var greatGreatEqual = {symbol:">>=",pres:1,assoc:"l"};
symbol.push(greatGreatEqual);

var equalLessLess = {symbol:"=<<",pres:1,assoc:"r"};
symbol.push(equalLessLess);

var money = {symbol:"$",pres:0,assoc:"r"};
symbol.push(money);

var moneyExclam = {symbol:"$!",pres:0,assoc:"r"};
symbol.push(moneyExclam);