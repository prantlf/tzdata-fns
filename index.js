const fs = require('fs')
const path = require('path')

module.exports = {
  parseZone1970,
  parseTabFile
}

function parseZone1970 () {
  return parseTabFile('zone1970.tab').reduce((acc, record) => {
    const [code, cooridntes, tz, comments] = record
    return acc.concat({code, cooridntes, tz, comments})
  }, [])
}

function parseTabFile (pth) {
  return fs.readFileSync(tzdataPath(pth))
    .toString()
    .split('\n')
    .filter(lineStr => !/^\s*#.+/.test(lineStr))
    .map(lineStr => lineStr.split('\t'))
}

/**
 * @private
 */
function tzdataPath (pth) {
  return path.resolve(__dirname, `tzdb/${pth}`)
}
