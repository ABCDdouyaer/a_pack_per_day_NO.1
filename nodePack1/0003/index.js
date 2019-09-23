const arrayFirst = require('array-first');
const kindOf = require('kind-of');
const slice = require('array-slice');
let a = [1, 2, 3, 4];
console.log(arrayFirst(a));//1
console.log(arrayFirst(a, 2));//[1, 2]

console.log(kindOf(1));//number
console.log(kindOf(null));//null

console.log(slice(a, 1, 3));//[2, 3]

let b = 10;//1010
let c = 5;//101
console.log(b&c);//0
console.log(b|c);//15
console.log(c<<3);//40
console.log(-c<<3);//-40
console.log(c>>3);//0
console.log(c>>1);//2
console.log(-c>>1);//-3
console.log(c>>>1);//2

/**
 *  b     0000 0000 0000 0000 0000 0000 0000 1010     10
 *  c     0000 0000 0000 0000 0000 0000 0000 0101      5
 *        =======================================
 * b&c    0000 0000 0000 0000 0000 0000 0000 0000      0
 * b|c    0000 0000 0000 0000 0000 0000 0000 1111     15
 * 
 * 
 *        0000 0000 0000 0000 0000 0000 0000 0101      5
 * c<<5   0000 0000 0000 0000 0000 0000 0010 1000     40
 * c>>3   0000 0000 0000 0000 0000 0000 0000 0000      0
 * c>>1   0000 0000 0000 0000 0000 0000 0000 0010      2
 * -c     1111 1111 1111 1111 1111 1111 1111 1011
 * -c>>1  1111 1111 1111 1111 1111 1111 1111 1101
 *       -0000 0000 0000 0000 0000 0000 0000 0011
 */   
