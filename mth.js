function codeEvalExecute(line)
{
    var elements = line.split(" ");
    var index = parseInt(elements.splice(elements.length-1,1),10);
    var ret = "";
    
    if(elements.length - index > -1)
    {
        ret = elements[elements.length-index];
    }
    return ret;
}

console.log(codeEvalExecute("a b c d 4"));