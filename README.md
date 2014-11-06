#bunyan-pretty
[James Wyse's](https://github.com/jameswyse) workaround for getting pretty-printed bunyan output in Node. See https://github.com/trentm/node-bunyan/issues/13 for details.

You could use it like this:

``` js
var bunyanPretty = require('bunyan-pretty');
bunyan.createLogger({
  name: 'audit',
  stream: process.stdout.isTTY ? bunyanPretty() : process.stdout,
  level: 'info'
})
```
