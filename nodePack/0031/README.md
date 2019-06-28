### assert(node内置模块)

> 断言测试

#### assert(value, [message]) 检测value是否为真值，不是真值抛出错误，错误信息为message

```
const assert = require('assert');
let a = null;
assert(a, 'a的值必须为true')
```

```
AssertionError [ERR_ASSERTION]: a的值必须为true
```

#### assert.deepEqual(actual, expected, [message]) 检测两个值是否相等,不相等抛出错误message

```
assert.deepEqual({a: 1}, {a: '1'}, '判断两个值是否严格相等');//ok

const obj1 = {a: { b: 1}};
const obj2 = {a: { b: 2}};
const obj3 = {a: { b: 1}};
const obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj1);
// OK

assert.deepEqual(obj1, obj2);
// AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }

assert.deepEqual(obj1, obj3);
// OK

assert.deepEqual(obj1, obj4);
// AssertionError: { a: { b: 1 } } deepEqual {}
```

#### assert.deepStrictEqual(actual, expected, [message]) 检测两个值是否严格相等,不相等抛出错误message

```

const obj1 = {a: { b: 1}};
const obj2 = {a: { b: 2}};
const obj3 = {a: { b: 1}};
const obj4 = Object.create(obj1);

assert.deepStrictEqual(obj1, obj1);
// OK

assert.deepStrictEqual(obj1, obj2);
/**
AssertionError [ERR_ASSERTION]: Input A expected to strictly deep-equal input B:
+ expected - actual

  {
    a: {
-     b: 1
+     b: 2
    }
  }
 */

assert.deepStrictEqual(obj1, obj3);
// OK

assert.deepStrictEqual(obj1, obj4);
/**
AssertionError [ERR_ASSERTION]: Input A expected to strictly deep-equal input B:
+ expected - actual

- {
-   a: {
-     b: 1
-   }
- }
+ {}
 */
```

#### 如果 assert = require('assert').strict; assert.deepEqual等同于assert.deepStrictEqual

#### 比较运算的详细说明

- 原始值运用 SameValue比较法进行比较，使用 Object.is() 函数。
- 对象的类型标签应该相同。
- 对象的原型使用全等运算符比较。
- 只比较可枚举的自身属性。
- Error 的名称与信息也会比较，即使不是可枚举的属性。
- 可枚举的自身 Symbol 属性也会比较。
- 对象封装器会同时比较对象与解封装后的值。
- Object 属性的比较是无序的。
- Map 键名与 Set 子项的比较是无序的。
- 当两边的值不相同或遇到循环引用时，递归会停止。
- WeakMap 与 WeakSet 的比较不依赖于它们的值。

```
const assert = require('assert').strict;

// 失败，因为 1 !== '1'。
assert.deepStrictEqual({ a: 1 }, { a: '1' });
// AssertionError: Input A expected to strictly deep-equal input B:
// + expected - actual
//   {
// -   a: 1
// +   a: '1'
//   }

// 以下对象没有自身属性。
const date = new Date();
const object = {};
const fakeDate = {};
Object.setPrototypeOf(fakeDate, Date.prototype);

// 原型不同：
assert.deepStrictEqual(object, fakeDate);
// AssertionError: Input A expected to strictly deep-equal input B:
// + expected - actual
// - {}
// + Date {}

// 类型标签不同：
assert.deepStrictEqual(date, fakeDate);
// AssertionError: Input A expected to strictly deep-equal input B:
// + expected - actual
// - 2018-04-26T00:49:08.604Z
// + Date {}

assert.deepStrictEqual(NaN, NaN);
// 通过，因为使用的是 SameValue 比较法。

// 解封装后的数值不同：
assert.deepStrictEqual(new Number(1), new Number(2));
// AssertionError: Input A expected to strictly deep-equal input B:
// + expected - actual
// - [Number: 1]
// + [Number: 2]

assert.deepStrictEqual(new String('foo'), Object('foo'));
// 通过，因为对象与解封装后的字符串都完全相同。

assert.deepStrictEqual(-0, -0);
// 通过。

// SameValue 比较法中 0 与 -0 不同：
assert.deepStrictEqual(0, -0);
// AssertionError: Input A expected to strictly deep-equal input B:
// + expected - actual
// - 0
// + -0

const symbol1 = Symbol();
const symbol2 = Symbol();
assert.deepStrictEqual({ [symbol1]: 1 }, { [symbol1]: 1 });
// 通过，因为两边对象的 symbol 相同。
assert.deepStrictEqual({ [symbol1]: 1 }, { [symbol2]: 1 });
// AssertionError [ERR_ASSERTION]: Input objects not identical:
// {
//   [Symbol()]: 1
// }

const weakMap1 = new WeakMap();
const weakMap2 = new WeakMap([[{}, {}]]);
const weakMap3 = new WeakMap();
weakMap3.unequal = true;

assert.deepStrictEqual(weakMap1, weakMap2);
// 通过。

// 失败，因为 weakMap3 有一个 weakMap1 没有的属性：
assert.deepStrictEqual(weakMap1, weakMap3);
// AssertionError: Input A expected to strictly deep-equal input B:
// + expected - actual
//   WeakMap {
// -   [items unknown]
// +   [items unknown],
// +   unequal: true
//   }
```

#### assert.doesNotReject(asyncFn, [error], [message])等待 asyncFn 的 Promise，如果 asyncFn 是函数，则立即调用并等待返回的 Promise 完成，然后检查 Promise 是否被 reject。如果 asyncFn 是函数且同步地抛出错误，则 assert.doesNotReject() 会返回被 reject 的 Promise 并带上错误对象。 如果 asyncFn 函数没有返回 Promise，则 assert.doesNotReject() 会返回被 reject 的 Promise 并带上 ERR_INVALID_RETURN_VALUE 错误。 以上两种情况都会跳过错误处理函数。assert.doesNotReject() 并不常用，因为很少需要捕获一个被 reject 的 Promise 然后再次 reject。

```
const assert = require('assert');

const err = new TypeError('错误信息');

(async ()=>{
    await assert.doesNotReject(
        async ()=>{
            throw err;
        }, 
        (a)=>{ 
            console.log('----------');
            console.log(a);//TypeError: 错误信息
            console.log('----------');
        },
        '抛出了错误')
})();
```

####assert.doesNotThrow(fn[, error][, message]) 断言 fn 函数不会抛出错误。

```
const assert = require('assert');

const err = new TypeError('错误信息');

assert.doesNotThrow(
        ()=>{
            throw err;
        }, 
        (a)=>{ 
           return true;
        },
        '抛出了错误')

//AssertionError [ERR_ASSERTION]: Got unwanted exception: 抛出了错误
//Actual message: "错误信息"
```

#### assert.fail([message])抛出AssertionError，并带上提供的错误信息或默认的错误信息。 如果 message 参数是 Error 的实例，则会抛出它而不是 AssertionError。

```

assert.fail();
// 抛出 AssertionError [ERR_ASSERTION]: Failed

assert.fail('失败');
// 抛出 AssertionError [ERR_ASSERTION]: 失败

assert.fail(new TypeError('失败'));
// 抛出 TypeError: 失败
```

#### assert.ifError(value)如果 value 不为 undefined 或 null，则抛出 value。 主要用于测试回调函数的 error 参数。 堆栈踪迹会包含传入 ifError() 的错误的所有帧，包括潜在的 ifError() 自身新增的帧。

```
assert.ifError(null);//ok
assert.ifError(undefined);//ok
assert.ifError(1);
//AssertionError [ERR_ASSERTION]: ifError got unwanted exception: 1
```

#### assert.notDeepStrictEqual(actual, expected[, message])测试 actual 参数与 expected 参数是否不深度全等。 与 assert.deepStrictEqual() 相反。

```
const assert = require('assert').strict;

assert.notDeepStrictEqual({ a: 1 }, { a: '1' });
// 测试通过。
```

#### assert.notStrictEqual(actual, expected[, message])测试 actual 参数与 expected 参数是否不全等

#### assert.ok(value[, message])测试 value 是否为真值。 相当于 assert.equal(!!value, true, message)。

#### assert.rejects(asyncFn[, error][, message])等待 asyncFn 的 Promise，如果 asyncFn 是函数，则立即调用并等待返回的 Promise 完成，然后检查 Promise 是否被 reject。如果 asyncFn 是函数且同步地抛出错误，则 assert.rejects() 会返回被 reject 的 Promise 并带上错误对象。 如果 asyncFn 函数没有返回 Promise，则 assert.rejects() 会返回被 reject 的 Promise 并带上 ERR_INVALID_RETURN_VALUE 错误。 以上两种情况都会跳过错误处理函数。与 assert.throws() 的区别在于需要异步地等待完成。error 可以是 Class、RegExp、校验函数、每个属性都会被测试的对象、或每个属性（包括不可枚举的 message 和 name 属性）都会被测试的错误实例。如果指定了 message，则当 asyncFn 没被 reject 时，message 参数会作为 AssertionError 的错误信息。

#### assert.strictEqual(actual, expected[, message])

```
const assert = require('assert').strict;

assert.strictEqual(1, 2);
// 抛出 AssertionError [ERR_ASSERTION]: Input A expected to strictly equal input B:
// + expected - actual
// - 1
// + 2

assert.strictEqual(1, 1);
// 测试通过。

assert.strictEqual(1, '1');
// 抛出 AssertionError [ERR_ASSERTION]: Input A expected to strictly equal input B:
// + expected - actual
// - 1
// + '1'
```

#### assert.throws(fn[, error][, message])断言 fn 函数会抛出错误。error 可以是 Class、RegExp、校验函数、每个属性都会被测试是否深度全等的校验对象、或每个属性（包括不可枚举的 message 和 name 属性）都会被测试是否深度全等的错误实例。 当使用对象时，可以使用正则表达式来校验字符串属性。 详见下面的例子。如果指定了 message 参数，则当 fn 函数不抛出错误时，message 参数会作为 AssertionError 的错误信息。

```
const assert = require('assert');

assert.throws(
    ()=>{ throw new Error('错误信息') },
     /^Error: 错误信息$/,
    '我是错误的'
)//Ok

assert.throws(
    ()=>{  },
    {},
    '我是错误的'
)
//AssertionError [ERR_ASSERTION]: Missing expected exception: 我是错误的
```
