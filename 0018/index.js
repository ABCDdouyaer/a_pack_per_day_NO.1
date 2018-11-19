/**
 *Created by Jiraiya on 2018-11-19 15:36:55
 */

const fecha = require('fecha');

let a = fecha.format(new Date('2018','3','23','12','0','0'), 'YYYY-MM-DD HH-mm-ss dddd');
//2018-04-23 12-00-00 Monday
let b = fecha.format(12312312, 'YYYY/MM/DD HH-mm-ss dddd');
//1970/01/01 11-25-12 Thursday



let c = fecha.parse('February 3rd, 2014', 'MMMM Do, YYYY'); //  2014-02-02T16:00:00.000Z
let d = fecha.parse('10-12-10 14:11:12', 'YY-MM-DD HH:mm:ss'); //2010-12-10T06:11:12.000Z
console.log(a, '\n', b, '\n', c, '\n', d);