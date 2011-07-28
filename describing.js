function codeEvalExecute(line)
{
    for(var i = 0; i < line.length; i++)
    {
        var digit = line.charAt(i);
        var re = new RegExp(i,"g");
        var matches = line.match(re);
        if(matches)
        {
            if(matches.length != digit)
            {
                return 0;
            }
        }
        else
        {
            if(digit != 0)
            {
                return 0;
            }
        }
        
    }
    return 1;
}

console.log(codeEvalExecute("1210"));