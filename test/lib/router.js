const Router = require('koa-router');
const router = new Router();

router.get('/', async(ctx, next)=>{
    ctx.response.body='helloworld'
})

router.get('/about', async(ctx, next)=>{
    ctx.response.body=a;
})

module.exports = router;
