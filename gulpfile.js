const { watch } = require('gulp');
const { spawn } = require('child_process');

/**
 * Run codegen command
 * @param {*} cb 
 */
function codegen(cb) {
  const com = spawn('yarn', ['codegen']);
  com.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
  com.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  
  com.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
  cb();
}

exports.default = function() {
  /**
   *  Watch changed on src/graphql/Schema.ts file,
   *  and run codegen command
   */
  watch('dist/graphql/Schema.js', codegen);
};
