#### pretty-ms

> 将毫秒转换为容易读取的时间:1337000000 → 15d 11h 23m 20s

##### 普通用法

```用法```：prettyMs(milliseconds)

```返回```：string

##### 第二参数用法

```用法```：prettyMs(milliseconds, options|object)

```返回```：string

- secDecimalDigits：秒数后面保留的小数点位数，默认1

```
prettyMs(21312, {secDecimalDigits: 2});//21.32s
```

- msDecimalDigits：毫秒后面保留的小数点位数，默认0,与process.hrtime()结合使用

- keepDecimalsOnWholeSeconds：保证输出的秒数宽度不变，默认false

```
prettyMs(20000, {keepDecimalsOnWholeSeconds: true });
//20.0s
```

- compact：仅展示第一个单位的值，默认false

```
prettyMs(123232, {compact: true});//~2m
```

- unitCount：要展示的单位个数，compact为true会覆盖此选项，默认：infinity

```
prettyMs(12312312, {unitCount: 2})//~3h 25m
```

- verbose：使用全拼的单位，默认false

```
prettyMs(12312312, {verbose: true});
// 3 hours 25 minutes 12.3 seconds
```

- separateMs：最小单位为毫秒数，默认false

```
prettyMs(12312312, {separateMs: true});// 3h 25m 12s 312ms
```

- formatSubMs: 显示微秒和纳秒部分，默认false

```
prettyMs(12312312.12323, {formatSubMs: true});//3h 25m 12s 312ms 123µs 230ns
prettyMs(12312312.12323, {formatSubMs: true, verbose: true});
//3 3 hours 25 minutes 12 seconds 312 milliseconds 123 microseconds 230 nanoseconds
```
