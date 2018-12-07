/**
 *Created by Jiraiya on 2018-12-7 17:54:14
 */

const mixin = require('merge-descriptors');

// let a = {};
// Object.defineProperty(a, 'name', {
//     value:1,
//     configurable: true, 
//     enumerable: true, 
//     writable: true, 
// })
// console.log(a);//{name: 1}

// let b = {};
// let c = mixin(b, a);
// console.log(c);//{name: 1}
// c.name = 2;
// console.log(c, a);//{name: 2} {name: 1}


let d = {sex: 'woman', job: 'IT'};
Object.defineProperties(d, {
    sex: {
        get(){
            return 'man'
        }
    }
})

let e = {sex: '123'};
let f = mixin(e, d, false);
console.log(f.sex);//123
