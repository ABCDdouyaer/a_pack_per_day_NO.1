const Koa = require('koa2');
const app = new Koa();

app.use(async(ctx, next)=>{
    await delay(5000)
    await next();
    ctx.body = 2

})
app.listen(8080)


async function delay(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(1)
        }, ms);
    })
}