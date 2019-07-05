var {CronJob, CronTime} = require('cron');

const moment = require('moment');
// new CronJob('* * * * * *', function() {
//   console.log('You will see this message every second');
// }, null, true, 'America/Los_Angeles');

const time = new CronTime('0 0 15 * * *');
let t1 = time._getNextDateFrom(new Date(), 'Asia/ShangHai');
let t2 = time._getNextDateFrom(t1, 'Asia/ShangHai');
console.log(t1, t2)