const Agenda = require('agenda');

const agenda = new Agenda({db:{
    address: 'mongodb://127.0.0.1:27017/cms',
    collection: 'agendaJobs',
    options: {
        useNewUrlParser: true,
    }
}})

agenda.define('test', (job, done)=>{
    a
    console.log(1);
    done();
})

agenda.on('ready',job=>{
    console.log('--------准备哦好了');
    const collection = agenda._collection.collection || agenda._collection;
    collection.createIndexes([
      {key: {nextRunAt: -1, lastRunAt: -1, lastFinishedAt: -1}},
      {key: {name: 1, nextRunAt: -1, lastRunAt: -1, lastFinishedAt: -1}}
    ], err => {
      if (err) {
        console.warn('Agendash indexes might not exist. Performance may decrease.');
      }
    });

    agenda.start();
    agenda.every('5 seconds', 'test');
})
agenda.on('fail',(err, job)=>{
    console.log('--------------ccc')
    console.log('失败', err)
})


  async function graceful() {
    await agenda.stop();
    console.log('停止')
    process.exit(0);
  }
   
  process.on('SIGTERM', graceful);
  process.on('SIGINT' , graceful);