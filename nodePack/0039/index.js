/**
 *Created by Jiraiya on 2019-3-19 15:47:40
 */

const semver = require('semver');

//判断该版本是否满足条件版本
let bool1 = semver.satisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3') // true
let bool2 = semver.satisfies('5.0.1', '>=6.0.0')// false
console.log(bool1, bool2);


//解析版本号
semver.valid('1.2.3') // '1.2.3'
semver.valid('a.b.c') // null