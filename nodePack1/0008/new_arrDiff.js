module.exports = function(arr){
    var result = [], twoArr = [], j = 0;
    if(!Array.isArray(arr)){
        throw new Error('arguments[0] must is a array');
    }
    if(arguments.length <= 1){return arr};
    for(var i=1; i<arguments.length; i++){
        if(Array.isArray(arguments[i])){twoArr = twoArr.concat(arguments[i])}
    }
    while(j < arr.length){
       if(!twoArr.includes(arr[j])){
           result.push(arr[j])
       };
       j++;
    }
    return result;
}