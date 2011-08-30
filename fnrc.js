function codeEvalExecute(line)
{
    var used = "";
    for(var i = 0; i < line.length; i++)
    {
        var chr = line.charAt(i);
        var remainder = line.substring(i+1,line.length);
       // console.log(remainder);
        if(used.indexOf(chr) == -1 && remainder.indexOf(chr) == -1)
        {
            return chr;
        }
        used += chr;
    }
    return "";
}
