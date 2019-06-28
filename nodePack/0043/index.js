/**
 *Created by Jiraiya on 2019-3-27 12:29:25
 */

const portfinder = require('portfinder');

portfinder.basePort = 8080;    // default: 8000
portfinder.highestPort = 8083; // default: 65535
portfinder.getPortPromise()
.then((port) => {
    console.log(port)
})
.catch((err) => {
    console.log(err)
});