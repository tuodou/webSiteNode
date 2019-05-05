var connection = require('../mysqlBaseInfo/mysql')

function signIn (user, fn) {
  var username = user.username
  var password = user.password
  var sql = 'select username,password from web.user where username = ? and password= ?'
  var params = [username, password]
  connection.query(sql, params, function (err, rows, fields) {
    if (err) {
      console.log(err)
      return
    }
    console.log(rows, fields)
    fn(rows)
    // connection.end()
  })
}
function signUp (user, fn) {

}

module.exports = {
  signIn: signIn,
  signUp: signUp
}
