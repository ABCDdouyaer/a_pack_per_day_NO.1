#### to-camel-case

> 将被其他符号分割的字符串转换为驼峰形式的字符串

```用法```：toCamelCase(str)

```返回```：string

#### to-no-case

> 将被其他符号分割的字符串统一由空格分开并全部转为小写

```用法```：toNoCase(str)

```返回```：string

```注意```:带空格的字符串会被他直接转为小写，所以直接用to-sapce-case比较靠谱

#### to-space-case

> 将被其他符号分割的字符串统一由空格分开并去除字符串两边的空格【在to-no-case基础上做了进一步过滤】

```用法```：toSpaceCase(str)

```返回```：string