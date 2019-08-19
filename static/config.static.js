const fs = require('fs');
const path = require('path');

const RUN_PATH = fs.realpathSync(process.cwd());

const GIT_PATH = 'https://github.com/lpxdfwd/webpack-config.git';

const TEMP_NAME = 'lpx-webpack-config';

const webpackConfigPath = path.resolve(RUN_PATH, TEMP_NAME);

module.exports = {
  webpackConfigPath,
  GIT_PATH,
  TEMP_NAME,
  RUN_PATH
};
