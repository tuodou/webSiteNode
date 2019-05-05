var connection = require('../mysqlBaseInfo/mysql')
function signIn (queryData, callback) {
  var username = queryData.username
  var password = queryData.password
  var sql = 'select username,password from web.user where username = ? and password= ?'
  var params = [username, password]
  connection.query(sql, params, callback)
}
function signUp (queryData, callback) {
  var username = queryData.username
  var password = queryData.password
  var userId = queryData.userId
  checkUserIsExist(username).then(function () {
    var sql = 'insert into web.user (username, password, userId) values (?, ?, ?)'
    var params = [username, password, userId]
    connection.query(sql, params, callback)
  }).catch(function () {
    callback('用户名已存在', null, null)
  })
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
  signUp: signUp
}
