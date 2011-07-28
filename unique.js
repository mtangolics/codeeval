function codeEvalExecute(line)
{
    var data = new Object();
    var input = line.split(",");
    var output = "";
    
    for(x in input)
    {
        if(!data[input[x]])
        {
            data[input[x]] = true;
            output += input[x] + ",";
        }
    }
    return output.substring(0,output.length-1);
}
