var path = require('path')

function pstats (fp) {
  return {
    root : process.cwd().split(/[\\\/]/g).slice(-1)[0],
    dir  : path.dirname(fp),
    base : path.basename(fp),
    ext  : path.extname(fp),
    name : path.basename(fp, path.extname(fp))
  }
}

module.exports = pstats
