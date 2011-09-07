function codeEvalExecute(line)
{
    var parm = line.split(";");
    if(parm.length === 2)
    {
        var numArray = parm[0].split(",");
        var sum = parseInt(parm[1],10);
        var ret = "";
        for(var i=0; i < numArray.length; i++)
        {
            for(var j=0; j < numArray.length; j++)
            {
                var n1 = parseInt(numArray[i],10);
                var n2 = parseInt(numArray[j],10);
                var nstr = n1 + "," + n2;
                if(n1 + n2 === sum && n1 < n2 && ret.indexOf(nstr) == -1)
                {
                    ret += ret ? ";" + nstr : nstr;
                }
            }
        }
        return ret ? ret : "NULL";
    }
}