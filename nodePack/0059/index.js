/**
 *Created by Jiraiya on 2019-6-18 16:36:15
 */

const bunyan = require('bunyan');




class Index{
    get log(){
        return bunyan.createLogger({
            name: 'rrd-h5',
            streams: [
                {
                    level: 'debug',
                    path:'./log/debug.log'
                }
            ]
        })
    }
}

const app = new Index();

app.log.debug({
    status: 0,
    message: "ok",
    data: {a:1}
})