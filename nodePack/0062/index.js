/**
 *Created by Jiraiya on 2019-6-27 15:02:45
 */

const bunyan = require('bunyan');
const fse = require('fs-extra');

let log = bunyan.createLogger({
    name: 'xx',
    streams: [
        {
            level: 'info',
            path: './log/info.log'
        },
        {
            level: 'warn',
            path: './log/warn.log'
        },
        {
            level: 'error',
            path: './log/error.log'
        },
    ]
});

log.info('info');
log.error('error');
log.warn('warn');