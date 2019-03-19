/**
 *Created by Jiraiya on 2019-3-19 16:37:51
 */

const read = require('read-metadata');

read('./package.json', (err, data) => {
    console.log(data.name)
})

const result = read.sync('./package.json');
console.log(result.name)