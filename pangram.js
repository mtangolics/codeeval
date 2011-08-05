function codeEvalExecute(line)
{
    var re = /[a-z]/;
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var used = {};
    var output = "";
    for(var i = 0; i < line.length; i++)
    {
        var chr = line.charAt(i).toLowerCase();
        if(re.test(chr))
        {
            used[chr] = true;
        }
    }
    for(var j = 0; j < alpha.length; j++)
    {
        if(!used[alpha.charAt(j)])
        {
            output += alpha.charAt(j);
        }
    }
    return output === "" ? "NULL" : output;
}

console.log(codeEvalExecute("A quick brown fox jumps over the lazy dog"));