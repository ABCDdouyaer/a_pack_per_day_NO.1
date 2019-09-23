/**
 *Created by Jiraiya on 2018-11-19 14:41:53
 */

const prettyMs = require('pretty-ms');

let a = prettyMs(12323424);// 3h 25m 23.4s

let b = prettyMs(21312, {secDecimalDigits: 2});//21.32s

let c = prettyMs(21312.123, {msDecimalDigits: 1});

let d = prettyMs(1232120000, {keepDecimalsOnWholeSeconds: true });//20.0s

let e = prettyMs(123232, {compact: true});//~2m

let f = prettyMs(12312312, {unitCount: 2})//~3h 25m

let g = prettyMs(12312312, {verbose: true});// 3 hours 25 minutes 12.3 seconds

let h = prettyMs(12312312, {separateMs: true});// 3h 25m 12s 312ms

let i = prettyMs(12312312.12323, {formatSubMs: true});//3h 25m 12s 312ms 123µs 230ns

let j = prettyMs(12312312.12323, {formatSubMs: true, verbose: true});
//3 3 hours 25 minutes 12 seconds 312 milliseconds 123 microseconds 230 nanoseconds

console.log(a, '\n', b, '\n', c, '\n', d, '\n', e, '\n', f, '\n', g, '\n', h, '\n', i, '\n', j);