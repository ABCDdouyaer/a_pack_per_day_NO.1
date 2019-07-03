function range(val) {
    return val.split('..').map(Number);
  }
   
  function list(val) {
    return val.split(',');
  }
   
  function collect(val, memo) {
    memo.push(val);
    return memo;
  }
   
  function increaseVerbosity(v, total) {
    return total + 1;
  }

  const program = require('commander');
  const colors = require('colors');
  program
    .version('0.1.0')
    .usage('[options] <file ...>')
    .option('-i, --integer <n>', 'An integer argument', parseInt) //进行过滤
    .option('-f, --float <n>', 'A float argument', parseFloat)
    .option('-r, --range <a>..<b>', 'A range', range)//对输入的值进行分割符分割 -r 12..33 返回[12, 33]
    .option('-l, --list <items>', 'A list', list)
    .option('-o, --optional [value]', 'An optional value')
    .option('-c, --collect [value]', 'A repeatable value', collect, [])
    .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)
    .parse(process.argv);
   
  console.log(' int: %j', program.integer);
  console.log(' float: %j', program.float);
  console.log(' optional: %j', program.optional);
  program.range = program.range || [];
  console.log(' range: %j..%j', program.range[0], program.range[1]);
  console.log(' list: %j', program.list);
  console.log(' collect: %j', program.collect);
  console.log(' verbosity: %j', program.verbose);
  console.log(' args: %j', program.args);

  if (!process.argv.slice(2).length) {
    program.outputHelp(make_red);
  }
   
  function make_red(txt) {
    return colors.red(txt); //display the help text in red on the console
  }