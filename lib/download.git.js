const download = require('download-git-repo');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const logSymbols = require('log-symbols');
const ora = require('ora');
const removeDir = require('./remove.dir');

const TEMP_PATH = '.git-config';

const REPO_HEAD = 'direct:';

const HTTPS_HEAD = 'https://';

let DIR_NAME_NUM = 0;

const DEFAULT_NAME = 'default';

const down = (gitPath, dirname = `${DEFAULT_NAME}_${DIR_NAME_NUM++}`, downPath) => {
  const tempPath = downPath || path.resolve(__dirname, TEMP_PATH, dirname);

  if (gitPath.indexOf(HTTPS_HEAD) === -1) {
    console.error(logSymbols.error, chalk.red('git仓库必须是https协议的'));
    throw new Error('git仓库必须是https协议的');
  }

  if (fs.existsSync(tempPath)) return;

  return new Promise((res, rej) => {
    const newGitPath = gitPath.indexOf(REPO_HEAD) === 1 ? gitPath : (REPO_HEAD + gitPath);
    const progress = ora('正在下载项目模板...');
    progress.start('loading...');
    download(newGitPath, tempPath, {
      clone: true
    }, err => {
      if (err) {
        progress.fail('download fail');
        rej(err);
      } else {
        progress.succeed('download success');
        res(dirname, tempPath)
      }
    })
  })
};

const reDown = (gitPath, dirname = `${DEFAULT_NAME}_${DIR_NAME_NUM++}`, downPath) => {
  const tempPath = downPath || path.resolve(__dirname, TEMP_PATH, dirname);
  if (fs.existsSync(tempPath)) {
    console.log(chalk.red('removing...'));
    removeDir(tempPath);
    console.log(chalk.red('removed'));
  }
  return down(gitPath, dirname, downPath);
};

module.exports = {
  down,
  reDown
};
