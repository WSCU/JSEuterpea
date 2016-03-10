// FILE COMMENT
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** File: Tree.js
** ----------------
** This is the base object for a tree
** Instantiate all other tree's from this prototype
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
** CONSTRUCTOR::Tree(Token left,Token right)
** ----------------
** For all new to Javascript - use this constructor like this:
** var tree = new Tree(token1,token2);
** Call a method like this:
** tree.getRight();
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function Tree(head,left,right) {
	this.head = head;
	this.left = left;
	this.right = right;
}
