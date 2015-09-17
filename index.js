/*!
 * parse-yuf <https://github.com/akileez/parse-yuf>
 *
 * Copyright (c) 2015 Keith Williams.
 * Licensed under the ISC license.
 */

var fs      = require('fs')
var extract = require('yufrontin')
var pstats  = require('./lib/pstats')

function parse (input, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  fs.readFile(input, 'utf8', function (err, res) {
    if (err) return cb(err)
    var fm = extract(res)

    cb(null, opts.extend ? extend(fm, input) : fm)
  })
}

function parseSync (input, opts) {
  opts = opts || {}
  var str = fs.readFileSync(input, 'utf8')
  var fm = extract(str)

  return opts.extend ? extend(fm, input) : fm
}

function extend (obj, fp) {
  return {
    abs     : fs.realpathSync(fp),
    rel     : fp,
    file    : pstats(fp),
    stats   : fs.lstatSync(fp),
    data    : obj.data,
    content : obj.content
  }
}

module.exports = parse
module.exports.sync = parseSync
