#### through2-map

> 对于through2包的transformFunction参数封装为map函数形式

- {wantStrings: true}输出的chunk为字符串形式而不是buffer
  
- 默认objectModal为true


```
const map = require('through2-map');
const fs = require('fs');

let trucate = map({wantStrings: true}, (chunk)=>{
    console.log(chunk);
    let a = chunk.replace(/[，：]/g, '🌞')
    return a;
})

fs.createReadStream('./test/1.txt')
  .pipe(trucate)
  .pipe(fs.createWriteStream('./test/2.txt'))
```

- map.ctor([options,] fn)与through2.ctor类似

- map.objCtor([options,] fn)与through2.ctor({objectMode: true}, transformFunction)类似


#### through2-filter

> 对于through2包的transformFunction参数封装为filter函数形式,API与through2-map一样

#### stream-spigot 

> 可读流生成器，用于测试和转换一些惰性函数为简单的可读流，或者创建可读流