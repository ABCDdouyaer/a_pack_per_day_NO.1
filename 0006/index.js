const dedupe = require('dedupe');
var a = [1, 2, 2, 3, 4];
var b = dedupe(a);
console.log(b);//[1, 2, 3]

var aa = [{a: 2}, {a: 1}, {a: 1}, {a: 1}]
var bb = dedupe(aa)
console.log(bb)//[{a: 2}, {a: 1}]

var aaa = [{a: 2, b: 1}, {a: 1, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}]
var bbb = dedupe(aaa, value => value.a)
console.log(bbb)//[{a: 2, b: 1}, {a: 1,b: 2}]
var ccc =  dedupe(aaa, value => value.b);
console.log(ccc)//[ { a: 2, b: 1 }, { a: 1, b: 2 }, { a: 1, b: 3 }, { a: 1, b: 4 } ]
