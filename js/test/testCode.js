/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** File: testCode.js
** ----------------
** This file is used for testing purposes.
** It is included in the index.html page.
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
console.log("running testCode.js");
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