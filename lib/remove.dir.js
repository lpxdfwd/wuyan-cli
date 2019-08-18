const fs = require('fs');

const removeDir = path => {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path);
    files.forEach(item => {
      const itemPath = path + '/' + item;
      if (fs.statSync(itemPath).isDirectory()) {
        removeDir(itemPath);
      } else {
        fs.unlinkSync(itemPath);
      }
    })
  }
  fs.rmdirSync(path);
};

module.exports = removeDir;
