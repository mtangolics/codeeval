function codeEvalExecute(line)
{
    var args = line.split(";");
    var len = args[0];
    var numbers = args[1].split(",");
    numbers.sort();
    var buffer = [];
    for(var i = 0; i < numbers.length; i++)
    {
        if(buffer[numbers[i]]) {
            return numbers[i];
        }
        else
        {
            buffer[numbers[i]] = true;
        }
    }
}
