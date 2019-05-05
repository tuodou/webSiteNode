var config = require('../web/databaseConfig')
var mysql = require('mysql')
var connention = mysql.createConnection(config)
connention.connect(function (err) {
  if (err) {
    console.log(err)
    return
  }
})

module.exports = connention
