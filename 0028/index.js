/**
 *Created by Jiraiya on 2018-12-6 14:02:30
 */

const getType = require('cache-content-type');
const mime = require('mime-types');

const contentType = getType('html');

console.log(contentType);//text/html; charset=utf-8


let type1 = mime.lookup('html');
console.log(type1);//text/html

let type2 = mime.contentType('html');
console.log(type2);//text/html; charset=utf-8

