function codeEvalExecute(line) 
{
    var output = "";
    for(var i = 1; i <= 12; i++)
    {
        for(var j = 1; j <= 12; j++)
        {
            var num = ""+i*j;
            output += pad(num.length) + num;
        }
        output += "\n";
    }
    return output;
}

function pad(n)
{
    var str = "";
    for(var i = 0; i < 4-n; i++)
    {
        str += " ";
    }
    return str;
}