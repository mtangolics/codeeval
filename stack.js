Array.prototype._pop = Array.prototype.pop;
Array.prototype.pop = function() {
    var tmp = this._pop();
    this._pop();
    return tmp;
};

    
function codeEvalExecute(line)
{
    var output = "";
    var numbers = line.split(" ");
    var stack = [];
    
    for(var i = 0; i < numbers.length; i++)
    {
        if(numbers[i]) {
            stack.push(numbers[i]);
        }
    }
    for(var j = 0; j < numbers.length; j++)
    {
        var num = stack.pop();
        if(num) {
            output += output ? " " + num : num;
        }
    }
    return output;
}
