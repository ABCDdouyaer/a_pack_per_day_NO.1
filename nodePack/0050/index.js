/**
 *Created by Jiraiya on 2019-4-4 17:40:57
 */

const fg = require('fast-glob')
const path = require('path')

const pattern = __dirname + '/test/*'

fg(pattern, {
    onlyFiles: false,
    deep: 3
}).then(entries => {
    console.log(entries)
})