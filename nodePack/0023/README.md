#### concat-stream

> 类似于一个流的收集器，将读取的流全部存储于该容器

```用法```：pipe(concat((e)=>{}))

```返回```：形参为一个函数，该函数的参数为容器里的存储的buffer

```
const concat = require('concat-stream');
const fs = require('fs');

fs.createReadStream('./img/640593_0.gif').pipe(concat((buffer)=>{
    fs.writeFile('./1.gif', buffer, (err)=>{
        if(err){console.log(err)};
    });
    fs.writeFile('./1.txt', buffer.toString('base64'), (err)=>{
        if(err){console.log(err)};
    })
}))
```

- 用write方法写入数组和Uint8Arrays

```
var write = concat(function(data) {
    console.log(data)
})
write.write([1,2,3])
write.write([4,5,6])
write.end()
```

```
var write = concat(function(data) {})
var a = new Uint8Array(3)
a[0] = 97; a[1] = 98; a[2] = 99
write.write(a)
write.write('!')
write.end(Buffer.from('!!1'))
```

