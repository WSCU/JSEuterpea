/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** File: HowToInheritInJavascript.js
** ----------------
** This file has working code that shows you how to inherit in Javascript
** Just include it in the main HTML page to see how this works
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function Base ( ) {
  this.color = "blue";
}

function Sub ( ) {

}
Sub.prototype = new Base( );
Sub.prototype.showColor = function ( ) {
 console.log( this.color );
}

Sub.prototype.print = function(aString) {
	console.log(aString);
}

var instance = new Sub ( );
instance.showColor( ); //"blue"
instance.print("This is a string");

var instance2 = new Sub();
instance2.print("this is instance 2");