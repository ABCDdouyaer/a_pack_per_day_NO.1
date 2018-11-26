const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');
const router = require('./lib/router');


global.a=1;
app.use(bodyParser());
app.use(router.routes());
app.listen(8080,()=>{
    console.log('server is running at 8080')
})