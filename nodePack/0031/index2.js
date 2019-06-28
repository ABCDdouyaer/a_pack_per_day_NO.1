const assert = require('assert');

// const err = new TypeError('错误信息');

// assert.doesNotThrow(
//         ()=>{
//             throw err;
//         }, 
//         (a)=>{ 
//            return true;
//         },
//         '抛出了错误')

//AssertionError [ERR_ASSERTION]: Got unwanted exception: 抛出了错误
//Actual message: "错误信息"


assert.ifError(null);//ok
assert.ifError(undefined);//ok
assert.ifError(1);
//AssertionError [ERR_ASSERTION]: ifError got unwanted exception: 1