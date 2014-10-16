ssh-key-resolver
================

Easily resolve the full path of your SSH private keys using their basename.


## Example

```
'use strict';

var resolveSshKey = require('resolve-ssh-key');

resolveSshKey('my-key');
// <- '/Users/me/.ssh/my-key.pem'
```


## License 

MIT
