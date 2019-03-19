/**
 *Created by Jiraiya on 2019-3-19 17:20:38
 */

const metalsmith = require('metalsmith');
metalsmith(__dirname)
.source('./src')
.use(test)
.build(err => {
    console.log(err, 'finish')
})


function test(files, metalsmith, done){
    let obj = {};
    for(let file in files){
        Object.assign(obj, JSON.parse(files[file].contents.toString()));
        delete files[file]
    }
    files['index.json'] = {
        contents: Buffer.from(JSON.stringify(obj))
    }
    console.log(files)
    done()
}
