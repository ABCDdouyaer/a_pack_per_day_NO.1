/**
 *Created by Jiraiya on 2019-6-21 16:46:00
 */

var low = require('lowlight')
var tree = low.highlight('js', `
var rehype = require('rehype')
var html = rehype()
  .stringify({type: 'root', children: tree})
  .toString()


`).value
var rehype = require('rehype')
var html = rehype()
  .stringify({type: 'root', children: tree})
  .toString()

console.log(html)
