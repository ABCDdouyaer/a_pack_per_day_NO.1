/**
 *Created by Jiraiya on 2018-12-5 18:42:18
 */

const delegate = require('delegates');

// var ctx = {};
// ctx.request = {
//   fn: function(i){return i}
// };

// delegate(ctx, 'request')
//     .method('fn');

// console.log(ctx.fn(1))



// var ctx = {
//     request:{
//         url: 'localhost:8080'
//     }
// };

// delegate(ctx, 'request')
//      .getter('url')


// console.log(ctx.url);//localhost:8080


// var ctx = {
//     request:{}
// }

// delegate(ctx, 'request')
//     .setter('other')

// ctx.other = '1';

// console.log(ctx.request.other)//1




// var ctx = {
//     request: {}
// }

// delegate(ctx, 'request')
//    .access('method')

// ctx.method = 'POST';
// console.log(ctx.request.method);//'POST'

// ctx.request.method = 'GET';

// console.log(ctx.method);//'GET'



var ctx = {
    request:{
        a : 1
    }
}

delegate(ctx, 'request')
    .fluent('a')

console.log(ctx.a())//1
console.log(ctx.a(2))//{ request: { a: 2 }, a: [Function] }
console.log(ctx.a())//2