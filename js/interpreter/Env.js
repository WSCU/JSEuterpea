/**
 * Environments or Env are sort of like a Link List and a Hash Table combined
 * They have the Link list data structure each part of the list has its own name
 * The name is used during evaluation to check if this part of the list is what we are looking for.
 */
function Env(name, val, parent) {
    this.name = name;
    this.val = val;
    if (!parent) {
        this.parent = null;
    }
    else {
        this.parent = parent;
    }

    this.eval = function (s) {
        if (this.name == s.body) {
            return this.val.eval();
        }
        if (this.parent == null) {
            return null;
        }
        return this.parent.eval(s);
    };
};
//s should be a ASTVar

