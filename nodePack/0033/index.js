/**
 *Created by Jiraiya on 2019-2-20 18:32:51
 */

const urllib = require('urllib');

// urllib.request({
//   host:'api.weixin.qq.com',
//   path:'/sns/oauth2/access_token',
//   port:443,
//   protocol: 'https:'
// }, {
//   method: 'GET',
//   data: {
//     appid:'wx8b1ea0d6bf972e6b',
//     secret:"b097b8298173fff299dca950d41a0054",
//     code:'011VvsRc1fpgvx0HEDNc1P1HRc1VvsRV',
//     grant_type:'authorization_code'
//   }
// }).then(res=>{
//   console.log(res.data.toString())
// });
const finalUrl = { 
    host: '127.0.0.1',
    port: 8080,
    path: '/' } 
const args = { dataType: 'json',
method: 'get',
data: {},
headers: { Accept: 'application/json;charset=utf-8' } }
urllib.request(finalUrl, args).then((out) => {
    console.log(`调用后端服务情况：
    返回结果：${JSON.stringify(out, '', 4)}`);
    return out.data
}).catch((err) => {
    if(err.name && err.name === 'ResponseTimeoutError'){
        console.log('xxxx')
    }
    console.log('-------------------')
    console.log(err)
    console.log('-------------------')
});