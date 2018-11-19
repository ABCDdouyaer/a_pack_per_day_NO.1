/**
 *Created by Jiraiya on 2018-11-19 18:06:46
 */

const mem = require('mem');
const got = require('got');
const delay = require('delay');

let i = 0, j = 0, k = 0, l = 0;

let a = () => i++;
let mem_a = mem(a);

mem_a();
console.log(i);//1
mem_a();
console.log(i);//1
mem_a(10);
console.log(i);//2
mem_a();
console.log(i);//2
mem_a(11);
console.log(i);//3

// let b = async () => j++;
// let mem_b = mem(b);

// (async ()=> {
//   await mem_b();
//   console.log(j);//1
//   await mem_b();
//   console.log(j);//1
//   await mem_b(10);
//   console.log(j);//2
// })();



 
// const memGot = mem(got, {maxAge: 1000});
 
// (async () => {
//     await memGot('sindresorhus.com');
 
//     // This call is cached
//     await memGot('sindresorhus.com');
 
//     await delay(2000);
 
//     // This call is not cached as the cache has expired
//     await memGot('sindresorhus.com');
// })();

let c = (a, b) => k++;
let mem_c = mem(c);
mem_c(1, 2);
console.log(k);//1
mem_c(1, 3);
console.log(k);//2
mem_c(1, 3);
console.log(k);//2

let d = (a, b) => l++;
let mem_d = mem(d, {cacheKey: x => JSON.stringify(x)});
mem_d(1, 2);
console.log(l);//1
mem_d(1, 3);
console.log(l);//1
mem_d(2, 3);
console.log(l);//2