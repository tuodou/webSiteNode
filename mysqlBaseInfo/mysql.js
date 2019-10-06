var config = require('../configs/databaseConfig')
var mysql = require('mysql')
var pool = mysql.createPool(config)
function getConnect (cb) {
  pool.getConnection(function (err, conn) {
    if (err) {
      cb(null)
    } else {
      cb(conn)
    }
  })
}

module.exports = getConnect
