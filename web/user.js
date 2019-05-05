var md5 = require('md5')
var uuid = require('uuid')
var resConfig = require('./responseConfig')
var constructResponse = require('./constructResponse')
var userDao = require('../dao/userDao')

function signIn (req, res) {
  var username = req.body.username
  var password = md5(req.body.password)
  var queryData = {
    username: username,
    password: password
  }
  userDao.signIn(queryData, function (err, rows, fields) {
    if (err || rows.length === 0) {
      res.send(constructResponse({
        success: false,
        errorCode: resConfig.publicErrorCode,
        errorMessage: '用户名或密码错误'
      }))
    } else {
      res.send(constructResponse({
        success: true,
        message: '登陆成功'
      }))
    }
  })
}
function signUp (req, res) {
  var username = req.body.username
  var password = md5(req.body.password)
  var userId = uuid.v1().split('-').join('')
  var queryData = {
    username: username,
    password: password,
    userId: userId
  }
  userDao.signUp(queryData, function (err, rows, fields) {
    if (err) {
      res.send(constructResponse({
        success: false,
        errorCode: resConfig.publicErrorCode,
        errorMessage: err === '用户名已存在' ? err : '网络错误，请重试'
      }))
    } else {
      res.send(constructResponse({
        success: true,
        message: '注册成功'
      }))
    }
  })
}

module.exports = {
  signIn: signIn,
  signUp: signUp
}
