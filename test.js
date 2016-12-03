const test = require('ava')
const {parseZone1970} = require('.')

test('parseZone1970 parses zone1970.tab file', t => {
  const zone1970 = parseZone1970()
  t.deepEqual(zone1970[0], {
    countryCodes: ['AD'],
    coordinates: ['+4230', '+00131'],
    code: 'Europe/Andorra',
    comments: ''
  })
  t.deepEqual(zone1970[1], {
    countryCodes: ['AE', 'OM'],
    coordinates: ['+2518', '+05518'],
    code: 'Asia/Dubai',
    comments: ''
  })
  const cordobaTz = zone1970.find(tz => tz.code === 'America/Argentina/Cordoba')
  t.is(cordobaTz.comments, 'Argentina (most areas: CB, CC, CN, ER, FM, MN, SE, SF)')
})
