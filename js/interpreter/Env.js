/**
 * Enviornments or Env are sort of like a Link List and a Hast Table combined
 * They have the Link list data structure each part of the list has its own name
 * The name is used during evaluation to check if this part of the list is what we are looking for.
 */
var Env = new function (name, val, parent) {
    this.name = name;
    this.val = val;
    if (!parent) {
        this.parent = null;
    }
    else {
        this.parent = parent;
    }
};
//s should be a ASTVar
Env.prototype.eval = new function (s) {
    if (s == this.name) {
        return this.val.eval();
    }
    if (this.parent == null) {
        return null;
    }
    return this.parent.eval(s);
};
