const fs = require('fs');
const path = require('path');

const DOWN_PATN = fs.realpathSync(process.cwd());

const GIT_PATH = 'https://github.com/lpxdfwd/webpack-config.git';

const TEMP_NAME = 'lpx-webpack-config';

const webpackConfigPath = path.resolve(DOWN_PATN, TEMP_NAME);

module.exports = {
  webpackConfigPath,
  GIT_PATH,
  TEMP_NAME
};
