var program = require('commander');
 
program
    .version('0.1.0')
    .option('-p, --peppers', 'Add peppers')
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq-sauce', 'Add bbq sauce')
    .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')//不输入type采用默认的type->，marble
    .option('--no-sauce', 'Remove sauce')
  
 
console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.sauce);

program
    .command('rm <dir>')//rm a -r xx 则删除a并且打印 remove a xx
    .option('-r, --recursive', 'Remove recursively')
    .action(function (dir, cmd) {
        console.log('remove ' + dir + (cmd.recursive ? ' recursively' : ''))
    })

program
    .parse(process.argv);