function f(...a){
    console.log(f.caller)
    console.log(arguments.callee.length)
}
f(1,2,3);
function f1(){
    function f2(){
        f(1)
    }
    f2()
};
f1();