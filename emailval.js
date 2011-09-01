function codeEvalExecute(line)
{
    // Conforms to the RFC standard, but is much more liberal than most validators (could be reduced further)
    var patt=/^[\w|\!#\$%&'\*\+\-\/\=\?\^_`\{\|\}~]+([\w|\!#\$%&'\*\+\-\/\=\?\^_`\{\|\}~\.][^\.]|[^\.][\w|\!#\$%&'\*\+\-\/\=\?\^_`\{\|\}~\.])*[\w|\!#\$%&'\*\+\-\/\=\?\^_`\{\|\}~]+@((([a-zA-Z0-9]+([\-][a-zA-Z0-9]+|[a-zA-Z0-9]*))+\.)+)([a-zA-Z]{2,6})$/;
    
    return patt.test(line).toString().toLowerCase();
}
