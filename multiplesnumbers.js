function findMultiple(x,n,t)
{
    x = parseInt(x);
    n = parseInt(n);
    t = parseInt(t);
    if(t >= x) {
        return t;
    }
    else {
        return findMultiple(x,n,t+n);
    }
}

function codeEvalExecute(line) 
{ 
    var parm = line.split(",");
    if(parm.length > 1) {
        return findMultiple(parm[0],parm[1],parm[1]);
    }
}