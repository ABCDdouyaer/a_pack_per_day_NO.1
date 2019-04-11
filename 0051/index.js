/**
 *Created by Jiraiya on 2019-4-4 18:02:07
 */

const _ = require('lodash')

const a = {name:'zhangsan', sex: 'man', other: {
    job: 'IT',
    company: 'wwc'
}}
const b = {name:'lisi', sex: 'man', other: {
    job: 'IT',
    company: 'mcx',
    hobby: 'computer'
}}

const c = _.mergeWith(a, b)

console.log(a, b, c)

/**
 * 
 * { name: 'lisi',
  sex: 'man',
  other: { job: 'IT', company: 'mcx', hobby: 'computer' } } { name: 'lisi',
  sex: 'man',
  other: { job: 'IT', company: 'mcx', hobby: 'computer' } } { name: 'lisi',
  sex: 'man',
  other: { job: 'IT', company: 'mcx', hobby: 'computer' } }
 */