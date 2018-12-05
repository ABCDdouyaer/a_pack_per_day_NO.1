### events

> 事件触发器

#### 大多数 Node.js 核心 API 构建于惯用的异步事件驱动架构，其中某些类型的对象（又称触发器，Emitter）会触发命名事件来调用函数（又称监听器，Listener）。所有能触发事件的对象都是 EventEmitter 类的实例。 这些对象有一个 eventEmitter.on() 函数，用于将一个或多个函数绑定到命名事件上。 事件的命名通常是驼峰式的字符串。当 EventEmitter 对象触发一个事件时，所有绑定在该事件上的函数都会被同步地调用

```基本用法:```实例化一个监听器，注册监听事件‘event’,当通过emit触发‘event’时候，会调用回调函数

```
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();
myEmitter.on('event', ()=>{
    console.log('触发事件')
});

myEmitter.emit('event');
```

#### eventEmitter.emit() 方法可以传任意数量的参数到监听器函数。 当监听器函数被调用时，this 关键词会被指向监听器所绑定的 EventEmitter 实例。

```
myEmitter.on('event1', function(a ,b){
    console.log(a, b, this)//1 2 MyEmitter{}
});

myEmitter.emit('event1', 1, 2);
```
也可以使用 ES6 的箭头函数作为监听器。但 this 关键词不会指向 EventEmitter 实例：

```
myEmitter.on('event', (a, b) => {
  console.log(a, b, this);
  // 打印: a b {}
});
myEmitter.emit('event', 'a', 'b');
```

#### 使用 eventEmitter.once() 可以注册最多可调用一次的监听器。 当事件被触发时，监听器会被注销，然后再调用。

```
let m = 0;
myEmitter.once('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// 打印: 1
myEmitter.emit('event');
// 不触发
```

#### 当 EventEmitter 实例出错时，应该触发 'error' 事件。如果没有为 'error' 事件注册监听器，则当 'error' 事件触发时，会抛出错误、打印堆栈跟踪、并退出 Node.js 进程

```
myEmitter.emit('error', new Error('错误信息'));
// 抛出错误
```

作为最佳实践，应该始终为 'error' 事件注册监听器。

```
myEmitter.on('error', (err) => {
  console.error('错误信息');
});
myEmitter.emit('error', new Error('错误信息'));
// 打印: 错误信息
```

#### EventEmitter 类由 events 模块定义：

```
const EventEmitter = require('events');
```

当新增监听器时，会触发 'newListener' 事件；当移除已存在的监听器时，则触发 'removeListener' 事件。

```newListener```的参数分别为增加的监听事件和该事件的句柄函数

```
myEmitter.once('newListener', (event, listener)=>{
    console.log(event, listener)// 'event1' fn
});

function fn(){
    console.log(1)
}
myEmitter.on('event1', fn)
```

在添加监听器之前触发 'newListener' 事件有一个副作用： 如果在回调中注册同名事件的监听器，则该监听器会被插入到正被添加的监听器前面。

```
const myEmitter = new MyEmitter();
// 只处理一次，避免无限循环。
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // 在前面插入一个新的监听器。
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.emit('event');
// 打印:
//   B
//   A
```

```removeListener```的参数分别为移除的监听事件和该事件的句柄函数

#### EventEmitter.defaultMaxListeners默认情况下，每个事件可以注册最多 10 个监听器。 可以使用 ```emitter.setMaxListeners(n)``` 方法改变单个 ```EventEmitter``` 实例的限制。 可以使用 ```EventEmitter.defaultMaxListeners``` 属性改变所有 ```EventEmitter``` 实例的默认值。设置 ```EventEmitter.defaultMaxListeners``` 要谨慎，因为会影响所有 ```EventEmitter``` 实例，包括之前创建的。 因而，优先使用 ```emitter.setMaxListeners(n)``` 而不是 ````EventEmitter.defaultMaxListeners```。限制不是硬性的。 ```EventEmitter``` 实例可以添加超过限制的监听器，但会向 ```stderr``` 输出跟踪警告，表明检测到可能的内存泄漏。 对于单个 ```EventEmitter``` 实例，可以使用 ```emitter.getMaxListeners()``` 和 ```emitter.setMaxListeners()``` 暂时地消除警告

```
console.log(myEmitter.getMaxListeners())//10
myEmitter.setMaxListeners(11);
function fn(){
    console.log(1)//11个1
}
for(var i=0;i<11;i++){
    myEmitter.on('event1', fn)
}

myEmitter.emit('event1')
```

#### emitter.addListener(eventName, listener), emitter.on(eventName, listener)的别名

#### emitter.emit(eventName[, ...args])按照监听器注册的顺序，同步地调用每个注册到名为 eventName 的事件的监听器，并传入提供的参数。如果事件有监听器，则返回 true，否则返回 false。

#### emitter.eventNames() 返回已注册监听器的事件名数组。 数组中的值为字符串或 `Symbol。

```
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// 打印: [ 'foo', 'bar', Symbol(symbol) ]
```

#### emitter.getMaxListeners()返回 EventEmitter 当前的监听器最大限制数的值

#### emitter.listenerCount(eventName)返回正在监听的名为 eventName 的事件的监听器的数量。

#### emitter.listeners(eventName)返回名为 eventName 的事件的监听器数组的副本。

```
let fn1 = ()=>{}, fn2 = ()=>{};
myEmitter.on('foo', fn1);
myEmitter.on('foo', fn2);
console.log(myEmitter.listeners('foo'));
//[ [Function: fn1], [Function: fn2] ]
```

#### emitter.off(eventName, listener), emitter.removeListener() 的别名。

#### emitter.prependListener(eventName, listener)添加 listener 函数到名为 eventName 的事件的监听器数组的开头。 不会检查 listener 是否已被添加。 多次调用并传入相同的 eventName 和 listener 会导致 listener 被添加多次。


#### emitter.prependOnceListener(eventName, listener)添加单次监听器 listener 到名为 eventName 的事件的监听器数组的开头。 当 eventName 事件下次触发时，监听器会先被移除，然后再调用。


#### emitter.removeAllListeners([eventName])移除全部监听器或指定的 eventName 事件的监听器。

#### emitter.removeListener(eventName, listener)从名为 eventName 的事件的监听器数组中移除指定的 listener。


```
let fn1 = ()=>{console.log(1)}, fn2 = ()=>{console.log(2)};//2
myEmitter.on('foo', fn1);
myEmitter.on('foo', fn2);
console.log(myEmitter.listeners('foo'));
//[ [Function: fn1], [Function: fn2] ]

myEmitter.off('foo', fn1);
myEmitter.emit('foo');
```

#### emitter.setMaxListeners(n)默认情况下，如果为特定事件添加了超过 10 个监听器，则 EventEmitter 会打印一个警告。 这有助于发现内存泄露。 但是，并不是所有的事件都要限制 10 个监听器。 emitter.setMaxListeners() 方法可以为指定的 EventEmitter 实例修改限制。 值设为 Infinity（或 0）表示不限制监听器的数量。

#### emitter.rawListeners(eventName)返回 eventName 事件的监听器数组的拷贝，包括封装的监听器（例如由 .once() 创建的）。

```
const emitter = new EventEmitter();
emitter.once('log', () => console.log('只记录一次'));

// 返回一个数组，包含了一个封装了 `listener` 方法的监听器。
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// 打印 “只记录一次”，但不会解绑 `once` 事件。
logFnWrapper.listener();

// 打印 “只记录一次”，且移除监听器。
logFnWrapper();

emitter.on('log', () => console.log('持续地记录'));
// 返回一个数组，只包含 `.on()` 绑定的监听器。
const newListeners = emitter.rawListeners('log');

// 打印两次 “持续地记录”。
newListeners[0]();
emitter.emit('log');
```
