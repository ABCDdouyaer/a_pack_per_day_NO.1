const camel = require('to-camel-case');
const toNoCase = require('to-no-case');
const toSpaceCase = require('to-space-case');

var a = 'hello]world.how-are/you';

var b = camel(a);// helloWorldHowAreYou
var c = toNoCase(a)// hello world how are you
var d = toSpaceCase(a)// hello world how are you
console.log(b, c, d)