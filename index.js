//receives a function and call it
function receivesAFunction(callback){
    callback();
}

// returns a function
function returnsANamedFunction(name){
    
    function name(){}
    return name;
}

//return an anonymous function
function returnsAnAnonymousFunction(){
    return function(){}
}