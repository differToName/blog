var process = require('child_process');

process.exec(' hexo s', function (error, stdout, stderr) {
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
