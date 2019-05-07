var config = require('../configs/databaseConfig')
var mysql = require('mysql')
var connention = mysql.createConnection(config)
connention.connect(function (err) {
  if (err) {
    console.log(err)
    return
  }
})

module.exports = connention
