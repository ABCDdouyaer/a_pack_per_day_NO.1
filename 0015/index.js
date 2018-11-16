const gradient = require('gradient-string');


console.log(gradient('cyan', 'pink')('Hello world!'));

let a = 'so beautiful!'
let b = gradient('red', 'green');
console.log(b(a));

let c = gradient(['yellow', 'orange']);
console.log(c(a));

console.log(gradient.rainbow('It\'s a rainbow!'))

let arr = [
'   　｡*☆∴｡　｡∴☆*｡',
'    ｡★*ﾟﾟ*★∵★*ﾟﾟ*★｡',
'   ☆ﾟ　　 ﾟ☆ﾟ　　 ﾟ☆',
'   ★* ♡ I. ♡ *★  ',
'    ﾟ☆｡♥ LOVE. ♥ ｡ ☆ﾟ',
'    　*★｡♡F.C.F♡ ｡★*',
'    　 ∵☆｡　　｡☆∵',
'    　　ﾟ*★｡｡★*ﾟ',
'   　　 　ﾟ*☆  ', 
];
console.log(gradient('#fff', '#000').multiline(arr.join('\n')))


let colorPool = gradient([
    {color:'#fff', pos: 0.1},
    {color:'red', pos: 0.7},
    {color:'yellow', pos: 1}
]);
console.log(colorPool.multiline(arr.join('\n')));


const redToGreen = gradient('red', 'green');
const str = '■'.repeat(48);
console.log(redToGreen(str)); 
console.log(redToGreen(str, {interpolation: 'hsv'}));
console.log(redToGreen(str, {interpolation: 'hsv', hsvSpin: 'long'}));