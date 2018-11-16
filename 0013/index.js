const toCapitalCase = require('to-capital-case');
const toConstantCase = require('to-constant-case');
const toDotCase = require('to-dot-case');

let a = 'nice,to]meet/you';
let b = toCapitalCase(a);
let c = toConstantCase(a);
let d = toDotCase(a);
console.log(b);//Nice To Meet You
console.log(c);//NICE_TO_MEET_YOU
console.log(d);//nice.to.meet.you