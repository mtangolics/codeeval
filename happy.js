var iter = 0;
function codeEvalExecute(line)
{
    iter = 0;
    happy(line);
}

function happy(num)
{
    num += "";
    var sum = 0;
    for(var i = 0; i < num.length; i++)
    {
        var digit = parseInt(num.charAt(i));
        sum += digit*digit;
    }
    iter++;
    if(sum == 1)
    {
        return 1;
    }
    else if(iter < 20)
    {
        return happy(sum);
    }
    else
    {
        return 0;
    }
}