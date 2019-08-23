#!/usr/bin/env node
process.on('unhandledRejection', err => {
  throw err;
});

const program = require('commander');
const pag = require('../package');

program.version(pag.version)
  .usage('<command> [项目名称]')
  .command('run', 'project run')
  .command('config', 'show-config')
  .command('create', 'create-template')
  .parse(process.argv);
