function codeEvalExecute(line)
{
    var input = line.split(";");
    var list1 = input[0].split(",");
    var list2 = input[1].split(",");
    
    var output = new Array();
    
    for(var i = 0; i < list1.length; i++)
    {
        for(var j = 0; j < list2.length; j++)
        {
            if(list1[i] == list2[j])
            {
                output.push(list1[i]);
            }
        }
    }
    return output.join(",");
}

console.log(codeEvalExecute("1,2,3,4;4,5,6"));