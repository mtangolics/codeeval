function codeEvalExecute(line) 
{ 
    var parm = line.split("");
    var total = 0;
    if(parm.length > 1) {
        for(var i = 0; i < parm.length; i++)
        {
            total += parseInt(parm[i]);
        }
    }
    return total;
}
