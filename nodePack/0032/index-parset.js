/**
 *Created by Jiraiya on 2018-12-27 18:28:26
 */

const babel = require('babel-core');
const path = require('path');
const fs = require('fs-extra');


// fs.readFile('./code.js', 'utf-8').then( data => {
//     const result = babel.transform(data);
//     fs.writeFile('./result.js', JSON.stringify(result), 'utf-8').then(()=>{
//         console.log('已将代码转换写入result.js')
//     }).catch(err => {
//         throw new Error(err);
//     })
// }).catch(err => {
//     throw new Error(err);
// })


babel.transformFile('./code.js', {comments: false}, (err, result) => {
    fs.writeFile('./result.js', result.code, 'utf-8').then(()=>{
        console.log('已将代码转换写入result.js')
    }).catch(err => {
        throw new Error(err);
    })
})