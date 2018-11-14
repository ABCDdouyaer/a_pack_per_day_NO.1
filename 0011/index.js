const pad = require('pad');
var a = 'abcd';
var b = pad(a, 5, '$');// abcd$
var c = pad(5, a, '$');// $abcd
var d = pad(5, a, {char: 'x'})// xabcd
var e = pad(5, a, {color: true, char: 'm'});
var f = pad(3, a, {strip: true});//bcd
console.log(b, c, d, e, f)