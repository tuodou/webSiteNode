var md5 = require('md5')
var resConfig = require('../configs/responseConfig')
var constructResponse = require('../utils/constructResponse')
var userDao = require('../dao/userDao')
var getUuid = require('../utils/getUuid')

function signIn (req, res) {
  var username = req.body.username
  var password = md5(req.body.password)
  var token = getUuid()
  var queryData = {
    username: username,
    password: password,
  }
  userDao.signIn(queryData, function (err, rows, fields) {
    if (err || rows.length === 0) {
      res.send(constructResponse({
        success: false,
        errorCode: resConfig.publicErrorCode,
        errorMessage: '用户名或密码错误'
      }))
    } else {
      console.log(rows)
      var userId = rows[0].userId
      userDao.updateToken(userId, token, function (err, rows, fields) {
        if (err) {
          res.send(constructResponse({
            success: false,
            errorCode: resConfig.publicErrorCode,
            errorMessage: '系统错误，请重试'
          }))
        } else  {
          res.send(constructResponse({
            success: true,
            message: '登陆成功',
            token: token
          }))
        }
      })
    }
  })
}
function signUp (req, res) {
  var username = req.body.username
  var password = md5(req.body.password)
  var userId = getUuid()
  var token = getUuid()
  var queryData = {
    username: username,
    password: password,
    userId: userId,
    token: token,
    licenseLevel: 1
  }
  if (!username || !req.body.password) {
    res.send(constructResponse({
      success: false,
      errorMessage: '用户名或密码不能为空',
      errorCode: resConfig.publicErrorCode
    }))
  } else {
    userDao.checkUserIsExist(username).then(function () {
      userDao.signUp(queryData, function (err, rows, fields) {
        if (err) {
          res.send(constructResponse({
            success: false,
            errorMessage: '服务器异常，请重试',
            errorCode: resConfig.publicErrorCode
          }))
        } else {
          res.send(constructResponse({
            success: true,
            message: '注册成功',
            token: token
          }))
        }
      })
    }).catch(function () {
      res.send(constructResponse({
        success: false,
        errorMessage: '用户名已存在',
        errorCode: resConfig.publicErrorCode
      }))
    })
  }
}

module.exports = {
  signIn: signIn,
  signUp: signUp
}
