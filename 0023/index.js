/**
 *Created by Jiraiya on 2018-11-20 15:40:49
 */

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

var write = concat(function(data) {
    console.log(data)
})
write.write([1,2,3])
write.write([4,5,6])
write.end()