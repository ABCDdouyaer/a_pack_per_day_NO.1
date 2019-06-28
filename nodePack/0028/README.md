#### cache-content-type(koa2源码依赖)

> http响应头部工具包， 基于mime-types包，对结果进行了缓存

```
const getType = require('cache-content-type');

const contentType = getType('html');

console.log(contentType);//text/html; charset=utf-8

```


#### mime-types

##### mime.lookup(path)

```
mime.lookup('json')             // 'application/json'
mime.lookup('.md')              // 'text/markdown'
mime.lookup('file.html')        // 'text/html'
mime.lookup('folder/file.js')   // 'application/javascript'
mime.lookup('folder/.htaccess') // false
 
mime.lookup('cats') // false
```

##### mime.contentType(type) 获取完成的头部

```
mime.contentType('markdown')  // 'text/x-markdown; charset=utf-8'
mime.contentType('file.json') // 'application/json; charset=utf-8'
 
// from a full path
mime.contentType(path.extname('/path/to/file.json')) // 'application/json; charset=utf-8'
```

##### mime.extension(type) 获取类型的默认扩展名

```
mime.extension('application/octet-stream') // 'bin'
```

##### mime.charset(type) 获取默认字符编码

```
mime.charset('text/markdown') // 'UTF-8'
```



