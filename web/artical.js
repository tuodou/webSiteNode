var resConfig = require('../configs/responseConfig')
var constructResponse = require('../utils/constructResponse')
var getUuid = require('../utils/getUuid')
var subjectDao = require('../dao/subjectDao')

function addSubject (req, res) {
  var body = req.body
  var subjectName = body.subjectName
  var subjectId = getUuid()
  var queryData = {
    subjectName: subjectName,
    subjectId: subjectId
  }
  subjectDao.addSubject(queryData, function (err, rows, fields) {
    if (err) {
      res.send(constructResponse({
        success: false,
        errorCode: resConfig.publicErrorCode,
        errorMessage: '新增科目失败，请重试'
      }))
    } else {
      res.send(constructResponse({
        success: true,
        message: '科目新增成功'
      }))
    }
  })
}

function getSubjectList (req, res) {
  subjectDao.getSubjectList(function (err, rows, fields) {
    if (err) {
      console.log(err)
      res.send(constructResponse({
        success: false,
        errorCode: resConfig.publicErrorCode,
        errorMessage: '新增科目失败，请重试'
      }))
    } else {
      console.log(rows)
      res.send(constructResponse({
        success: true,
        message: '科目查询成功',
        data: rows
      }))
    }
  })
}

function removeSubject (req, res) {

}

function getArticalList (req, res) {

}

function getArticalDetail (req, res) {

}

function addArtical (req, res) {

}

function removeArtical (req, res) {

}


module.exports = {
  addSubject: addSubject,
  getSubjectList: getSubjectList,
  removeSubject: removeSubject,
  addArtical: addArtical,
  getArticalList: getArticalList,
  getArticalDetail: getArticalDetail,
  removeArtical: removeArtical
}
