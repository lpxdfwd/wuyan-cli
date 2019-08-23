#!/usr/bin/env node
process.on('unhandledRejection', err => {
  throw err;
});

const {down} = require('../lib/download.git');
const {webpackConfigPath, GIT_PATH, TEMP_NAME} = require('../static/config.static');

down(GIT_PATH, TEMP_NAME, webpackConfigPath);
