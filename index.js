const fs = require('fs')
const path = require('path')

module.exports = {
  parseZone1970
}

function parseZone1970 () {
  return parseTabFile('zone1970.tab').reduce((acc, record) => {
    const [countryCodes, coordinates, code, comments] = record
    return acc.concat({
      countryCodes: countryCodes.split(','),
      coordinates: coordinates.match(/([-\+]\d+)/g),
      code,
      comments: comments || ''
    })
  }, [])
}

/**
 * @private
 */
function parseTabFile (pth) {
  return fs.readFileSync(tzdataPath(pth))
    .toString()
    .split('\n')
    .filter(lineStr => !/^#/.test(lineStr) && lineStr.trim() !== '')
    .map(lineStr => lineStr.split('\t'))
}

/**
 * @private
 */
function tzdataPath (pth) {
  return path.resolve(__dirname, `tzdb/${pth}`)
}
