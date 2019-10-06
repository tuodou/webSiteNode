var config = require('../configs/databaseConfig')
var mysql = require('mysql')
var pool = mysql.createPool(config)
console.log('pool', pool)
function getConnect (cb) {
  pool.getConnection(function (err, conn) {
    if (err) {
      console.log(err)
      cb(null)
    } else {
      cb(conn)
    }
  })
}

module.exports = getConnect
