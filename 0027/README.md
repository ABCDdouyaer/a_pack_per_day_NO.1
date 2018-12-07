#### statuses (koa2源码依赖)

> http状态码工具包

##### var code = status(Integer || String) 返回对应的状态码

```
status(403) // => 403
status('403') // => 403
status('forbidden') // => 403
status('Forbidden') // => 403
status(306) // throws, as it's not supported by node.js
```

##### status.STATUS_CODES 返回所有状态码构成的对象{'code':'desc'}

```
console.log(status.STATUS_CODES)
```

##### status.codes返回状态码构成的数组[code]

```
console.log(status.codes)
```

##### var msg = status[code] 获取改状态吗的描述

```
status['not found'] // => 404
status['Not Found'] // => 404
```

##### status.redirect[code] 判断状态码是不是重定向 返回boolean

```
status.empty[200] // => undefined
status.empty[204] // => true
status.empty[304] // => true
```

##### status.empty[code] 203，204，304返回true 不需要返回任何实体内容

##### status.retry[code] 502,503,504 返回true








