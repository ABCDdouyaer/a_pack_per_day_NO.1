/**
 *Created by Jiraiya on 2019-4-11 11:17:39
 */

const sharp = require('sharp')
const fs = require('fs')

//将文件裁剪成300 * 300并输出

/*
sharp('./1.jpg')
    .resize(300, 300)
    .toFile('output1.jpg', function(err){
        console.log(err)
    })
**/


//可以采用流模式作为管道进行裁剪

/*
let transformer = sharp().resize(100, 100).on('info', function(info){
    console.log(info)
})
let readStream = fs.createReadStream('./1.jpg')
let writeStream = fs.createWriteStream('./output2.jpg')
readStream.pipe(transformer).pipe(writeStream);
**/


//创建一张图片

/*
sharp({
    create: {
      width: 100,
      height: 100,
      channels: 4,
      background: { r: 255, g: 0, b: 0, alpha: 0.5 }
    }
  })
  .png()
  .toBuffer()
  .then( res => {
      fs.writeFileSync('./output3.png', res)
  } );
**/



//可以对读取的图片实例克隆

const pipeline = sharp('./1.jpg')
pipeline.clone().resize(100,100).pipe(fs.createWriteStream('output4.png'))
pipeline.clone().extract({left:100, top:100, width:100, height:100}).pipe(fs.createWriteStream('output5.png'))