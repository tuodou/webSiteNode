var uuid = require('uuid')

function getUuid () {
  return uuid.v1().replace(/-/g, '')
}

module.exports = getUuid
