/**
 *Created by Jiraiya on 2018-12-27 18:28:26
 */

const babel = require('babel-core');
const path = require('path');
const fs = require('fs-extra');




babel.transformFile('./code.js', {comments: false}, (err, result) => {
    fs.writeFile('./result.js', result.map, 'utf-8').then(()=>{
        console.log('已将代码转换写入result.js')
    }).catch(err => {
        throw new Error(err);
    })
})