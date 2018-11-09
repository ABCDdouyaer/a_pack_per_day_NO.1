const is_sorted = require('is-sorted');


let a = [1, 2, 3, 4];
console.log(is_sorted(a));//true
console.log(is_sorted(a.reverse()));//false
console.log(is_sorted(a.reverse(), function(a, b){return a-b}));//true

let b = ['a', 'b', 'c'];
console.log(is_sorted(b));//true
