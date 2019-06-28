/**
 *Created by Jiraiya on 2019-3-18 11:27:54
 */

const rf = require('rimraf');
const fs = require('fs');
const path = require('path');
// fs.mkdirSync('text');
setTimeout(() => {
    rf('./text', function(err){
        console.log(err)
    })
}, 2000);

console.log(path.relative('../', process.cwd()))