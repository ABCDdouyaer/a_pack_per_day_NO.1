#### csv2

> 采用流模式读取.csv文件，每次读取一行数据

#### through2

> 对node流的二次封装，更加易于使用

##### 普通用法 through2([ options, ] [ transformFunction ] [, flushFunction ])

- options：{objectMode: true} 等同于through2.obj

- transformFunction(chunk, encode, callback)

- flushFunction 可以使2号或者3号参数 每次流传完可以和transformFunction一样做一些数据处理

```
//将文件中的a全部替换为z输出到out.txt
const through2 = require('through2');
const fs = require('fs');

fs.createReadStream('./test/enter.txt')
  .pipe(through2(function (chunk, enc, callback) {
    for (var i = 0; i < chunk.length; i++)
      if (chunk[i] == 97)
        chunk[i] = 122 // swap 'a' for 'z'
 
    this.push(chunk)
 
    callback()
   }))
  .pipe(fs.createWriteStream('./test/out.txt'))
  .on('finish', () => {
      console.log('完事')
  })
```

##### through2.obj

```
const through2 = require('through2');
const csv2 = require('csv2');
const fs = require('fs');

let all = [];
fs.createReadStream('./test/enter.csv')
  .pipe(csv2())
  .pipe(through2.obj(function (chunk, enc, callback) {
    this.push({
        No : chunk[0], 
        activity : chunk[1], 
        time : chunk[2],
        money: chunk[3]
    })
    callback()
  }))
  .on('data', (data)=>{
      all.push(data)
  })
  .on('end', ()=>{
      fs.writeFile('./test/a.js', JSON.stringify(all), ()=>{
        console.log('写入完成')
      })
  })
```

##### through2.ctor对于需要相同处理过程的数据可以采用该方法创建一个构造函数

```
let Fc = through2.ctor(function(chunk, enc, callback){
   console.log(chunk)
    for(var i=0;i<chunk.length;i++){
      if(chunk[i]<=97){
        chunk[i] = 98;
      }
    }
    console.log(chunk);
    this.push(chunk);
    callback();
})

fs.createReadStream('./test/enter.txt')
  .pipe(Fc())
  .pipe(fs.createWriteStream('./test/out1.txt'))
  .on('finish', () => {
      console.log('完事')
  })
```
