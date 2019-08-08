var {CronJob, CronTime} = require('cron');

const moment = require('moment');
new CronJob('20/10 * * * * *', function() {
  console.log('You will see this message every second', new Date());
}, null, true, 'America/Los_Angeles');

const time = new CronTime('*/10 * * * * *');
// let t1 = time._getNextDateFrom(new Date(), 'Asia/ShangHai');
// let t2 = time._getNextDateFrom(t1, 'Asia/ShangHai');
console.log(time)