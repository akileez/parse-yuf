/*!
 * parse-yuf <https://github.com/akileez/parse-yuf>
 *
 * Copyright (c) 2015 Keith Williams.
 * Licensed under the ISC license.
 */

var fs      = require('fs')
var path    = require('path')
var extract = require('yufrontin')

function parse (input, cb) {
  fs.readFile(input, 'utf8', function (err, res) {
    if (err) return cb(err, res)

    var fm = extract(res)

    cb(null, {
      abs     : fs.realpathSync(input),
      rel     : input,
      file    : path.parse(input),
      stats   : fs.lstatSync(input),
      data    : fm.data,
      content : fm.content
    })
  })
}

function parseSync (input) {
  var str = fs.readFileSync(input, 'utf8')
  var fm = extract(str)

  return fm
}

module.exports = parse
module.exports.sync = parseSync
