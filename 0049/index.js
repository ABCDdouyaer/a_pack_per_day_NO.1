/**
 *Created by Jiraiya on 2019-4-3 14:38:19
 */

const {Spinner} = require('cli-spinner');
const chalk = require('chalk');

let spinner = new Spinner({
    text: '%s————————process',
    stream: process.stderr,
    onTick: function(msg){
        this.clearLine(this.stream);//清理当前行，在当前行打印
        this.stream.write(chalk.green(msg + '哈哈'));
    }
})
spinner.setSpinnerString('|/-\\');
spinner.setSpinnerDelay(100);
spinner.start();
