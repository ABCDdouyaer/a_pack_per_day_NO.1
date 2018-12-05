/**
 *Created by Jiraiya on 2018-12-5 11:01:28
 */

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();



// myEmitter.on('event', ()=>{
//     console.log('触发事件')
// });

// myEmitter.emit('event');



// myEmitter.on('event1', function(a ,b){
//     console.log(a, b, this)//1 2 MyEmitter{}
// });

// myEmitter.emit('event1', 1, 2);



// let m = 0;
// myEmitter.once('event', () => {
//   console.log(++m);
// });
// myEmitter.emit('event');
// // 打印: 1
// myEmitter.emit('event');
// // 不触发


// myEmitter.on('error', (err) => {
//     console.error('错误信息');
//   });
// myEmitter.emit('error', new Error('错误信息'));
// // 打印: 错误信息


// myEmitter.once('newListener', (event, listener)=>{
//     console.log(event, listener)// 'event1' fn
// });

// function fn(){
//     console.log(1)
// }
// myEmitter.on('event1', fn)

// myEmitter.once('removeListener', (event, listener)=>{
//     console.log(event, listener);
// })




// console.log(myEmitter.getMaxListeners())//10
// myEmitter.setMaxListeners(11);
// function fn(){
//     console.log(1)//11个1
// }
// for(var i=0;i<11;i++){
//     myEmitter.on('event1', fn)
// }

// myEmitter.emit('event1')



// myEmitter.on('foo', () => {});
// myEmitter.on('bar', () => {});

// const sym = Symbol('symbol');
// myEmitter.on(sym, () => {});

// console.log(myEmitter.eventNames());
// // 打印: [ 'foo', 'bar', Symbol(symbol) ]



let fn1 = ()=>{console.log(1)}, fn2 = ()=>{console.log(2)};//2
myEmitter.on('foo', fn1);
myEmitter.on('foo', fn2);
console.log(myEmitter.listeners('foo'));
//[ [Function: fn1], [Function: fn2] ]

myEmitter.off('foo', fn1);
myEmitter.emit('foo');
