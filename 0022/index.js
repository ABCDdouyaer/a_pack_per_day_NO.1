/**
 *Created by Jiraiya on 2018-11-20 14:02:19
 */

const map = require('through2-map');
const filter = require('through2-filter');
const fs = require('fs');

const spigot = require('stream-spigot');

// let trucate = map({wantStrings: true}, (chunk, index)=>{
//     console.log(index);
//     console.log(chunk);
//     let a = chunk.replace(/[，：]/g, '🌞')
//     return a;
// })

// fs.createReadStream('./test/1.txt')
//   .pipe(trucate)
//   .pipe(fs.createWriteStream('./test/2.txt'))
//   .on('data',(data)=>{
//       console.log(data);
//   })
//   .on('end',()=>{
//       console.log('完事');
//   })


// spigot.array(["ABCDEFG"]).pipe(process.stdout);
// spigot.array(['AC', 'DF', 'GG']).pipe(process.stdout);


var count = 0
function gen() {
  if (count++ < 5) {
    return {val: count}
  }
}
 
spigot.sync({objectMode: true}, gen).pipe(process.stdout)