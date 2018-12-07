#### merge-descriptors (express源码依赖)

> 一个对象的属性继承另一个对象的属性描述符

```用法```：mixin(继承者， 被继承者)

```返回```：继承后的新的对象

```
const mixin = require('merge-descriptors');

let a = {};
Object.defineProperty(a, 'name', {
    value:1,
    configurable: true, 
    enumerable: true, 
    writable: true, 
})
console.log(a);//{name: 1}

let b = {};
let c = mixin(b, a);
console.log(c);//{name: 1}
c.name = 2;
console.log(c, a);//{name: 2} {name: 1}
```


