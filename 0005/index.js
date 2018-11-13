const arrFlatten = require('arr-flatten');
const stack_deepFlatten = require('./stack_deepFlatten');

let a = [1,  [2, 3], [4, [5, [6]]]];
console.log(arrFlatten(a));//[1, 2, 3, 4, 5, 6]
console.log(stack_deepFlatten(a));//[1, 2, 3, 4, 5, 6]

