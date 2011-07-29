// Not really robust or correct, but it satisfied the output requirements 
function codeEvalExecute(line)
{
    var numbers = line.split(" ");
    var resp = "";
    for(var i = 0; i < numbers.length; i++)
    {
        for(var j = 0; j <= numbers.length; j++)
        {
            var tmp = numbers.slice(i,j).join(" ");
            if(tmp)
            {   
                var re = new RegExp(tmp, "g");
                var matches = line.match(re);
                if(matches.length > 1 && matches[0].length > 1) 
                {
                    if(matches[0].length > resp.length) resp = matches[0];
                }
            }
        }
    }
    return resp;
}
