var resConfig = require('../configs/responseConfig')
var constructResponse = require('../utils/constructResponse')
var getUuid = require('../utils/getUuid')
var subjectDao = require('../dao/subjectDao')
var articalDao = require('../dao/articalDao')

function addSubject (req, res) {
  var body = req.body
  var subjectName = body.subjectName
  var subjectName = 'MySql'
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
        message: '科目新增成功111'
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
  var body = req.body
  var page = body.page
  var pageSize = body.pageSize
  articalDao.getArticalList({ page: page, pageSize: pageSize }, function (err, rows, fields) {
    if (err) {
      console.log(err)
      res.send(constructResponse({
        success: false,
        errorCode: resConfig.publicErrorCode,
        errorMessage: '文章列表获取失败，请重试'
      }))
    } else {
      console.log(rows)
      res.send(constructResponse({
        success: true,
        message: '文章列表获取成功',
        data: rows
      }))
    }
  })
}

function getArticalDetail (req, res) {
  var id = req.body.id
  var queryData = {
    id: id
  }
  articalDao.getArticalDetail(queryData, function (err, rows, fields) {
    if (err) {
      console.log(err)
      res.send(constructResponse({
        success: false,
        errorCode: resConfig.publicErrorCode,
        errorMessage: '文章获取失败，请重试'
      }))
    } else {
      console.log(rows)
      res.send(constructResponse({
        success: true,
        message: '文章获取成功',
        data: rows[0]
      }))
    }
  })
}

function addArtical (req, res) {
  console.log('-----', req.body)
  var body = req.body
  var articalId = getUuid()
  var queryData = {
    title: body.title,
    img: body.img,
    brief: body.brief,
    detail: body.detail,
    auth: body.auth,
    classify: body.classify,
    articalId: articalId
  }
  articalDao.addArtical(queryData, function (err, rows, fields) {
    if (err) {
      console.log(err)
      res.send(constructResponse({
        success: false,
        errorCode: resConfig.publicErrorCode,
        errorMessage: '新增文章失败，请重试'
      }))
    } else {
      console.log(rows)
      res.send(constructResponse({
        success: true,
        message: '文章新增成功'
      }))
    }
  })
}

function updateArtical (req, res) {
  var body = req.body
  var title = body.title
  var content = body.content
  var auth = body.auth
  var subjectId = body.subjectId
  var articalId = body.articalId
  console.log(body)
  var queryData = {
    title: title,
    content: content,
    auth: auth,
    subjectId: subjectId,
    articalId: articalId
  }
  console.log('44444444', queryData)
  articalDao.updateArtical(queryData, function (err, rows, fields) {
    if (err) {
      console.log(err)
      res.send(constructResponse({
        success: false,
        errorCode: resConfig.publicErrorCode,
        errorMessage: '修改文章失败，请重试'
      }))
    } else {
      res.send(constructResponse({
        success: true,
        message: '文章修改成功'
      }))
    }
  })
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
  updateArtical: updateArtical,
  removeArtical: removeArtical
}
