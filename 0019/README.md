#### mem

> 用于通过缓存具有相同输入的调用结果来加速连续函数调用的优化

##### 普通用法 (支持基于promise的异步函数调用)

```
const mem = require('mem');

let i = 0;
let a = () => i++;

let mem_a = mem(a);

mem_a();
console.log(i);//1
mem_a();
console.log(i);//1
mem_a(10);
console.log(i);//2
mem_a();
console.log(i);//2
mem_a(11);
console.log(i);//3
```

```
let b = async () => j++;
let mem_b = mem(b);

(async ()=> {
  await mem_b();
  console.log(j);//1
  await mem_b();
  console.log(j);//1
  await mem_b(10);
  console.log(j);//2
})();
```

##### 第二参数用法

```用法```：mem(Function, options|object)

- maxAge：设置缓存时长，默认infinity

```
const mem = require('mem');
const got = require('got');
const delay = require('delay');
 
const memGot = mem(got, {maxAge: 1000});
 
(async () => {
    await memGot('sindresorhus.com');
 
    // This call is cached
    await memGot('sindresorhus.com');
 
    await delay(2000);
 
    // This call is not cached as the cache has expired
    await memGot('sindresorhus.com');
})();
```

- cacheKey：默认所有参数相同才启用缓存数据，但你也可以设置只缓存第一个参数（也就是只要第一个参数相同，就采用缓存值）

```
let c = (a, b) => k++;
let mem_c = mem(c);
mem_c(1, 2);
console.log(k);//1
mem_c(1, 3);
console.log(k);//2
mem_c(1, 3);
console.log(k);//2

let d = (a, b) => l++;
let mem_d = mem(d, {cacheKey: x => JSON.stringify(x)});
mem_d(1, 2);
console.log(l);//1
mem_d(1, 3);
console.log(l);//1
mem_d(2, 3);
console.log(l);//2
```

- cache：设置缓存方式，默认new Map(),例如.has(key), .get(key), .set(key, value), .delete(key), and optionally .clear(). You could for example use a WeakMap instead or quick-lru for a LRU cache.

- cachePromiseRejection：缓存promise的reject的返回，默认为false

- mem.clear(fn)：清除某个函数的缓存数据