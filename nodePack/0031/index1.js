const assert = require('assert');

const err = new TypeError('错误信息');

(async ()=>{
    await assert.doesNotReject(
        async ()=>{
            throw err;
        }, 
        (a)=>{ 
            console.log('----------');
            console.log(a);//TypeError: 错误信息
            console.log('----------');
        },
        '抛出了错误')
})();

