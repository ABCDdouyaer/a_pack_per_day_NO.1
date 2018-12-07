#### merge-descriptors (express源码依赖)

> 一个对象的属性继承另一个对象的属性及其属性描述符

```用法```：mixin(继承者， 被继承者, 是否继承者有该属性的时候继承【默认true不继承】)

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

当第三个参数为false时候，原对象又该属性则没有继承被继承者的属性和属性描述符

```
let d = {sex: 'woman', job: 'IT'};
Object.defineProperties(d, {
    sex: {
        get(){
            return 'man'
        }
    }
})

let e = {sex: '123'};
let f = mixin(e, d, false);
console.log(f.sex);//123
```