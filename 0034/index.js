#!/usr/bin/env node

/**
 *Created by Jiraiya on 2019-3-15 17:17:33
 */

const program = require('commander');

program
  .version('0.0.1')
  .usage('<template-name> [project-name]')
  .option('-c, --clone', 'use git clone')
  .option('--offline', 'use cached template')
  .parse(process.argv)

program.on('--help', () => {
    console.log('  Examples:')
    console.log()
    console.log(chalk.gray('    # create a new project with an official template'))
    console.log('    $ vue init webpack my-project')
    console.log()
    console.log(chalk.gray('    # create a new project straight from a github template'))
    console.log('    $ vue init username/repo my-project')
    console.log()
})