#!/usr/bin/env node

const {down} = require('../lib/download.git');
const {webpackConfigPath, GIT_PATH, TEMP_NAME} = require('../static/config.static');

down(GIT_PATH, TEMP_NAME, webpackConfigPath);
