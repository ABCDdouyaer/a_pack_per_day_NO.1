#### striptags

> 剥去字符串中的html标签，和php里面的strip_tags函数一样

- 普通用法

```用法```：striptags(html, allowed_tags, tag_replacement)

```返回```：string


```
const striptags = require('striptags');

var html =
    '<a href="https://example.com">' +
        'lorem ipsum <strong>dolor</strong> <em>sit</em> amet' +
    '</a>';
 
var a = striptags(html);// 'lorem ipsum dolor sit amet'
var b = striptags(html, '<strong>');//'lorem ipsum <strong>dolor</strong> sit amet'
var c = striptags(html, ['a']);//<a href="https://example.com">lorem ipsum dolor sit amet</a>
var d = striptags(html, [], '\n');
/** 
 * lorem ipsum
 * dolor
 * sit
 * amet
 */
var e = striptags(html, ['em']);// lorem ipsum dolor <em>sit</em> amet
```

- 流模式[初始化一个流模式，传入html]


```用法```：striptags.init_streaming_mode(allowed_tags, tag_replacement)

```返回```：string

```
let stream_function = striptags.init_streaming_mode(['strong'], '$$');
console.log(stream_function(html));
//$$lorem ipsum <strong>dolor</strong> $$sit$$ amet$$
```


