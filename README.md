ssh-key-resolver [![Build Status](https://travis-ci.org/olivierkaisin/node-resolve-ssh-key.svg)](https://travis-ci.org/olivierkaisin/node-resolve-ssh-key)
================

Easily resolve the full path of your SSH private keys using their basename.


## Example

```javascript
'use strict';

var resolveSshKey = require('resolve-ssh-key');
var path = require('path');

var searchPath = path.resolve(process.env.HOME, '.ssh');

resolveSshKey(searchPath, 'my-key');
// <- '/Users/me/.ssh/my-key.pem'
```


## License 

MIT
