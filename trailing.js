function codeEvalExecute(line)
{
    if(line) 
    {
        var parm = line.split(",");
        var trailing = parm[0].substring(parm[0].length-parm[1].length,parm[0].length);
        
        return trailing === parm[1] ? "1" : "0";
    }
}

console.log(codeEvalExecute("Hello World,World"));