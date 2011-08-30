var rootNode = new Node();
rootNode.left = new Node();
rootNode.right = new Node();
rootNode.parent = new Node();

insert(null,30);
insert(null,52);
insert(null,8);
insert(null,3);
insert(null,20);
insert(null,10);
insert(null,29);

function Node()
{
    this.left = null;
    this.right = null;
    this.parent = null;
    this.val = null;
}

function insert(cur, val, parent) {
    
    if(!cur) {
        cur = rootNode;
    } 
    if(!cur.val) {
        cur.val = val;
        cur.left = new Node();
        cur.right = new Node();
        if(parent) { 
            cur.parent = parent; 
            
        }
    } else
    {
        if(cur.val <= val) {
            insert(cur.right,val,cur);
        }
        else {
            insert(cur.left,val,cur);
        }
    }
}

function lca_search(cur, v1, v2)
{
    if(v1 < cur.val && v2 < cur.val)
    {
        return lca_search(cur.left, v1, v2);
    }
    else if(v1 > cur.val && v2 > cur.val)
    {
        return lca_search(cur.right, v1, v2);
    }
    else
    {
        return cur.val;
    }
}

function codeEvalExecute(line)
{
   var parm = line.split(" ");
   var ret = "";
   if(parm.length == 2) {
      ret = lca_search(rootNode, parm[0], parm[1]);
   }
   return ret;
}

codeEvalExecute("3 29");