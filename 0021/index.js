/**
 *Created by Jiraiya on 2018-11-19 22:58:12
 */

const through2 = require('through2');
const csv2 = require('csv2');
const fs = require('fs');

// fs.createReadStream('./test/enter.txt')
//   .pipe(through2(function (chunk, enc, callback) {
//     for (var i = 0; i < chunk.length; i++)
//       if (chunk[i] == 97)
//         chunk[i] = 122 // swap 'a' for 'z'
 
//     this.push(chunk)
 
//     callback()
//    }))
//   .pipe(fs.createWriteStream('./test/out.txt'))
//   .on('finish', () => {
//       console.log('完事')
//   })

// let all = [];
// fs.createReadStream('./test/enter.csv')
//   .pipe(csv2())
//   .pipe(through2.obj(function (chunk, enc, callback) {
//   // .pipe(through2({ objectMode: true }, function (chunk, enc, callback) {
//     this.push({
//         No : chunk[0], 
//         activity : chunk[1], 
//         time : chunk[2],
//         money: chunk[3]
//     })
//     callback('', 'wut', 'ddd')
//   }))
//   .on('data', (data)=>{
//       all.push(data)
//   })
//   .on('end', ()=>{
//       fs.writeFile('./test/a.js', JSON.stringify(all), ()=>{
//         console.log('写入完成')
//       })
//   })

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