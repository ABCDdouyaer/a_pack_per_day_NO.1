/**
 *Created by Jiraiya on 2018-12-17 11:05:08
 */
const chalk = require('chalk');
const log = console.log;

// //将样式字符串和普通字符串合并使用
// log(chalk.blue('Hello') + ' world' + chalk.red('!'));

// //采用链式方法调用多个API
// log(chalk.blue.bgRed.bold('Hello world!'));

// //传入多个参数
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// //API套用
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// log(chalk.green(
//     'I am a green line ' +
//     chalk.blue.underline.bold('with a blue substring') +
//     ' that becomes green again!'
// ));

// //支持反引号解析字符串
// log(`
// CPU: ${chalk.red('90%')}
// RAM: ${chalk.green('40%')}
// DISK: ${chalk.yellow('70%')}
// `);

// let cpu = {totalPercent: 67};
// let ram = {used:40, total:100};
// let disk = {used: 130, total: 512}
// log(chalk`
// CPU: {red ${cpu.totalPercent}%}
// RAM: {green ${ram.used / ram.total * 100}%}
// DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
// `);

// //支持各种书写颜色的方式
// log(chalk.keyword('orange')('Yay for orange colored text!'));
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));






// const error = chalk.bold.red;
// const warning = chalk.keyword('orange');

// log(error('Error!'));
// log(warning('Warning!'));





// const name = 'Sindre';
// console.log(chalk.green('Hello %s'), name);



// const ctx1 = new chalk.constructor({enabled: true});
// log(ctx1.red('Hello World'));
// const ctx2 = new chalk.constructor({enabled: false});
// log(ctx2.red('Hello World'));




