#!/usr/bin/env node

const program = require('commander');
const pag = require('../package');

program.version(pag.version)
  .usage('<command> [项目名称]')
  .command('run', 'project run')
  .parse(process.argv);
