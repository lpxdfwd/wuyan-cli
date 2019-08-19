const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');
const {RUN_PATH} = require('../static/config.static');
const {down} = require('../lib/download.git');

const TPL_NAMES = [{
  name: 'default',
  gitUrl: 'https://github.com/lpxdfwd/react-webpack-template.git'
}, {
  name: 'react',
  gitUrl: 'https://github.com/lpxdfwd/react-webpack-template.git'
}, {
  name: 'vue',
  gitUrl: 'https://github.com/taylorchen709/vue-admin.git'
}];

let promptList = [
  {
    type: 'list',
    message: '选择模版',
    name: 'templateName',
    choices: TPL_NAMES.map(item => item.name)
  },
  {
    type: 'input',
    message: '项目名称',
    name: 'projectName',
    validate (val) {
      if (val !== '') {
        console.log('项目名称: ', chalk.red(val));
        return true
      }
      return '请输入项目名称'
    }
  }
];

const run = () => {
  inquirer.prompt(promptList).then(({templateName, projectName}) => {
    const tmpGitUrl = TPL_NAMES.filter(item => item.name === templateName)[0].gitUrl;
    const projectDownPath = path.resolve(path.resolve(RUN_PATH), projectName);
    down(tmpGitUrl, projectName, projectDownPath).then(name => {
      console.log(chalk.green(`\n √ ${name} 项目生成完毕!`));
      console.log(`\n cd ${name} && npm install \n`)
    });
  })
};

run();
