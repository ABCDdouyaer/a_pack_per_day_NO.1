#### gradient-string

> 用于在终端打印出好看的渐变文字

- 普通用法

```
console.log(gradient('cyan', 'pink')('Hello world!'));

let a = 'so beautiful!'
let b = gradient('red', 'green');
console.log(b(a));

let c = gradient(['yellow', 'orange']);
console.log(c(a));

```

- 色值写法可以是各种形式

```
let coolGradient = gradient([
  tinycolor('#FFBB65'),       // tinycolor object
  {r: 0, g: 255, b: 0},       // RGB object
  {h: 240, s: 1, v: 1, a: 1}, // HSVa object
  'rgb(120, 120, 0)',         // RGB CSS string
  'gold'                      // named color
]);
```

- rainbaw 彩虹色🌈

```
console.log(gradient.rainbow('It\'s a rainbow!'))
```

- multiline 输出文字量大，可以保证文字垂直对齐
  
```
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
```

- 可以设置从左到右的渐变百分比

```
let colorPool = gradient([
    {color:'#fff', pos: 0.1},
    {color:'red', pos: 0.7},
    {color:'yellow', pos: 1}
]);
console.log(colorPool.multiline(arr.join('\n')));
```

- 设置渐变方式

```
const redToGreen = gradient('red', 'green');
const str = '■'.repeat(48);
console.log(redToGreen(str)); 
console.log(redToGreen(str, {interpolation: 'hsv'}));
console.log(redToGreen(str, {interpolation: 'hsv', hsvSpin: 'long'}));
```

