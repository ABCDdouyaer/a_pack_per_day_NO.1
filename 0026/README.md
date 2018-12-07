#### delegates (koa2源码依赖)

> 委托机制，用于对象属性代理

##### Delegate(proto, prop)创建一个代理实例，使用proto对象下的prop对象作为被代理者

##### method(name) 接受一个方法，进行方法代理

将request上的方法直接代理到ctx上

```
const delegate = require('delegates');

var ctx = {};

ctx.request = {
  fn: function(i){return i}
};

delegate(ctx, 'request')
    .method('fn');

console.log(ctx.fn(1))
```
##### getter(name) 属性的获取被代理

```
var ctx = {
    request:{
        url: 'localhost:8080'
    }
};

delegate(ctx, 'request')
     .getter('url')


console.log(ctx.url);//localhost:8080
```

##### setter(name) 属性的赋值代理

```
var ctx = {
    request:{}
}

delegate(ctx, 'request')
    .setter('other')

ctx.other = '1';

console.log(ctx.request.other)//1
```

##### access(name) 赋值和获取值得双向代理

```
var ctx = {
    request: {}
}

delegate(ctx, 'request')
   .access('method')

ctx.method = 'POST';
console.log(ctx.request.method);//'POST'

ctx.request.method = 'GET';

console.log(ctx.method);//'GET'
```

##### fluent(name) 被代理者中该属性有值就返回该值,没有的话可以通过函数调用设置，返回ctx对象
```
var ctx = {
    request:{
        a : 1
    }
}

delegate(ctx, 'request')
    .fluent('a')

console.log(ctx.a())//1
console.log(ctx.a(2))//{ request: { a: 2 }, a: [Function] }
console.log(ctx.a())//2
```