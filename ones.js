function codeEvalExecute(line)
{
    var num = parseInt(line,10);
    var bitstring = num.toString(2);
    var patt = /1/g;
    
    return bitstring.match(patt).length;
}

console.log(codeEvalExecute("10"));