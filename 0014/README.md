#### to-pascal-case

> 将用其他符号分开的字符串转换为驼峰形式

```用法```：toPascalCase(str)

```返回```：string

```
var toPascalCase = require('to-pascal-case');

toPascalCase('space case');  // "SpaceCase"
toPascalCase('snake_case');  // "SnakeCase"
toPascalCase('dot.case');    // "DotCase"
toPascalCase('weird[case');  // "WeirdCase"
```

#### to-sentence-case

> 字符串转换为首字母大写的语句

```用法```：toSentenceCase(str)

```返回```：string

```
var sentence = require('to-sentence-case'); 

sentence('the catcher in the rye'); 
// "The catcher in the rye"

```

#### to-snake-case

> 其他符号分割的字符串以_分割

```用法```：toSnakeCase(str)

```返回```：string

```
var snake = require('to-snake-case');

snake('camelCase');  // "camel_case"
snake('space case'); // "snake_case"
snake('dot.case');   // "dot_case"
snake('weird[case'); // "weird_case"
```