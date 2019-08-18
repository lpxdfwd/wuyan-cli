#!/usr/bin/env node

const chalk = require('chalk');
const logSymbols = require('log-symbols');

function run() {
  const status = process.argv[2];
  if (!status || (['build', 'start'].indexOf(status) === -1)) {
    console.error(logSymbols.error, chalk.red('需要传入第二个参数：build|start'));
    throw new Error('arguments 2 empty!');
  }
  const isBuild = status === 'build';

  isBuild ? require('lpx-webpack-config/scripts/build') : require('lpx-webpack-config/scripts/start');
}

run();
