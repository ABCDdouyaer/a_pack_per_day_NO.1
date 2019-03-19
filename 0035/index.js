/**
 *Created by Jiraiya on 2019-3-18 10:55:26
 */


//相关的动画在cli-spinners下面的spinners.json,当然也可以自己设置
const ora = require('ora');

const spinner = ora('Loading unicorns').start();
 
spinner.color = 'yellow';
spinner.spinner = 'shark';
spinner.text = 'Loading rainbows';

setTimeout(() => {
    spinner.stop();
}, 4000);