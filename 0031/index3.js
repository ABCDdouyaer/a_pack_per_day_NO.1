const assert = require('assert');

assert.throws(
    ()=>{ throw new Error('错误信息') },
     /^Error: 错误信息$/,
    '我是错误的'
)//Ok

assert.throws(
    ()=>{  },
    {},
    '我是错误的'
)
//AssertionError [ERR_ASSERTION]: Missing expected exception: 我是错误的