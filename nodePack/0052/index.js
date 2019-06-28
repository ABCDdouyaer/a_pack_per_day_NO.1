/**
 *Created by Jiraiya on 2019-4-8 15:42:05
 */

const pathToRegexp = require('path-to-regexp')

const keys = []
const regexp = pathToRegexp('/activity/:activityId-:pageId.html', keys)
console.log(regexp)//  /^\/activity\/([^\/]+?)-([^-\/]+?)\.html(?:\/)?$/i
console.log(keys)
/**
 * [ { name: 'bar',
    prefix: '/',
    delimiter: '/',
    optional: false,
    repeat: false,
    pattern: '[^\\/]+?' } ]
 */
console.log(regexp.exec('/activity/123-456.html'))