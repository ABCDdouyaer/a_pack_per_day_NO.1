/**
 * created by Jiraiya on 11/16/2018
 * 常用的一些根路径
 */

const path = require('path');


module.exports = {
    rootPath: path.resolve(__dirname, '../../'),
    rootPathBoom: path.resolve(__dirname, '../'),
    rootPathLib: __dirname,
    rootPathTem: path.resolve(__dirname, '../', 'template'),
}