#!/usr/bin/env node

const program = require('commander');
const gradient = require('gradient-string');
const callBack = require('./lib/commander-callback');


program.version(require('./package.json').version, '-v, --version')
program.command('init')
       .description('创建项目')
       .action(callBack.initAction)
program.command('add')
       .description('追加模板到README.md文件')
       .action(callBack.addAction)
program.command('pub')
       .description('生成segmentFault发版格式')
       .action(callBack.pubAction)
program.command('commit')
       .description('提交item到仓库')
       .action(callBack.commitAction)
program.on('command:*', function () {
    let str = '◎'.repeat(150);
    console.log(gradient(['red', 'green', 'red'])(str, {interpolation: 'hsv', hsvSpin: 'long'}))
    process.exit(1);
});
program.parse(process.argv)


