# parse-yuf
[![NPM version][npm-image]][npm-url]
[![schoolmarm-standard-style][marm-image]][marm-url]
[![experimental][stability-image]][stability-url]
[![Downloads][downloads-image]][downloads-url]

> Parse front matter extracted from yufrontin

## Installation
```bash
$ npm install akileez\parse-yuf
```

## Usage
file: kmx/test/one.hbs

```handlebars
---
title: one
layout: default
description: This is a test. This is only a test
tags: ['apple', 'orange', 'pear']
---

This is one.
```

```js
var parsefm = require('parse-yuf')

var syncExtend = parsefm.sync('kmx/test/one.hbs', {extend: true})
console.log(syncExtend)
// or
parsefm('kmx/test/one.hbs', {extend: true}, function (err, res) {
  assert.ifError(err)
  console.log(res)
})

// results in -->
{ abs: '/Volumes/BigStor/Developer/web/sites/testproj949/kmx/test/one.hbs',
  rel: 'kmx/test/one.hbs',
  file:
   { root: 'testproj949',
     dir: 'kmx/test',
     base: 'one.hbs',
     ext: '.hbs',
     name: 'one' },
  stats:
   { dev: 16777242,
     mode: 33188,
     nlink: 1,
     uid: 501,
     gid: 20,
     rdev: 0,
     blksize: 4096,
     ino: 3441487,
     size: 137,
     blocks: 16,
     atime: Thu Sep 17 2015 09:22:26 GMT-0400 (EDT),
     mtime: Tue Sep 15 2015 12:33:08 GMT-0400 (EDT),
     ctime: Tue Sep 15 2015 12:33:08 GMT-0400 (EDT),
     birthtime: Tue Sep 01 2015 17:02:30 GMT-0400 (EDT) },
  data:
   { title: 'one',
     layout: 'default',
     description: 'This is a test. This is only a test',
     tags: [ 'apple', 'orange', 'pear' ] },
  content: '\nThis is one.\n' }

//////// Example #2 /////////

var syncPlain = parsefm.sync('kmx/test/one.hbs')
console.log(syncPlain)
// or
parsefm('kmx/test/one.hbs', function (err, res) {
  assert.ifError(err)
  console.log(res)
})

// results in -->
{ data:
   { title: 'one',
     layout: 'default',
     description: 'This is a test. This is only a test',
     tags: [ 'apple', 'orange', 'pear' ] },
  content: '\nThis is one.\n' }
```

## API

#### `parse(filepath[, options], callback)`
#### `parse.sync(filepath[, options])`

## Why?


## See Also
-

## License
[ISC](https://github.com/akileez/parse-yuf/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/parse-yuf.svg?style=flat-square
[npm-url]: https://npmjs.org/package/parse-yuf
[marm-image]: https://img.shields.io/badge/code%20style-marm-brightgreen.svg?style=flat-square
[marm-url]: https://github.com/akileez/eslint-config-marm
[stability-image]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[stability-url]: https://github.com/akileez/parse-yuf
[downloads-image]: http://img.shields.io/npm/dm/parse-yuf.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/parse-yuf
