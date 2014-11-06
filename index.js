
var spawn   = require('child_process').spawn;
var through = require('through');
var path    = require('path');
var fs      = require('fs');

module.exports = prettyStream;

function prettyStream(args) {
  args = args || ['-o', 'short'];
  var bin = path.resolve(path.dirname(require.resolve('bunyan')), '..', 'bin', 'bunyan');
  var stream = through(function write(data) {
    this.queue(data);
  }, function end () {
    this.queue(null);
  });

  var formatter = spawn(bin, ['-o', 'short'], {
    stdio: [null, process.stdout, process.stderr]
  });
  stream.pipe(formatter.stdin);
  return stream;
}
