const arrDiff =  require('arr-diff');
const newArrDiff = require('./new_arrDiff');
var a = [1, 2, 3, 4, 8];
var b = [1, 3, 4, 5, 6];
var c = [1, 4, 8];
console.log(arrDiff(a, b, c));
console.log(newArrDiff(a, b, c))