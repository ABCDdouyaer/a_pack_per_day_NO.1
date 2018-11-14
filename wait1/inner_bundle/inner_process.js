module.exports = function(){
    setTimeout(function () {
        console.log('third');
    }, 0);
    
    process.nextTick(function () {
        console.log('second');
    });
    
    console.log('first');
}