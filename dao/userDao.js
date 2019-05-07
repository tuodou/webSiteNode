var connection = require('../mysqlBaseInfo/mysql')
function signIn (queryData, callback) {
  var username = queryData.username
  var password = queryData.password
  var sql = 'select username,password,userId from web.user where username = ? and password= ?'
  var params = [username, password]
  connection.query(sql, params, callback)
}
function updateToken (userId, token, callback) {
  var sql = 'update web.user set token = ? where userId = ?'
  var params = [token, userId]
  connection.query(sql, params, callback)
}
function checkUserToken (token, callback) {
  var sql = 'select userId from web.user where token = ?'
  var params = [token]
  connection.query(sql, params, callback)
}
function signUp (queryData, callback) {
  var username = queryData.username
  var password = queryData.password
  var userId = queryData.userId
  var token = queryData.token
  var licenseLevel = queryData.licenseLevel
  var sql = 'insert into web.user (username, password, userId, licenseLevel, token) values (?, ?, ?, ?, ?)'
  var params = [username, password, userId, licenseLevel, token]
  connection.query(sql, params, callback)
}
function checkUserIsExist (username) {
  var sql = 'select username from web.user where username = ?'
  var params = [username]
  return new Promise(function (res, rej) {
    connection.query(sql, params, function (err, rows, fileds) {
      if (rows.length > 0) {
        rej()
      } else {
        res()
      }
    })
  })
}

module.exports = {
  signIn: signIn,
  signUp: signUp,
  updateToken: updateToken,
  checkUserToken: checkUserToken,
  checkUserIsExist: checkUserIsExist
}
