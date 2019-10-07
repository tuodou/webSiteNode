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

function getRecentArtical(req, res) {
  articalDao.getRecentArtical({}, function (err, rows, fields) {
    if (err) {
      console.log(err)
      res.send(constructResponse({
        success: false,
        errorCode: resConfig.publicErrorCode,
        errorMessage: '最新文章获取失败，请重试'
      }))
    } else {
      console.log(rows)
      res.send(constructResponse({
        success: true,
        message: '最新文章获取成功',
        data: rows
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
        errorMessage: '更新文章失败，请重试'
      }))
    } else {
      console.log(rows)
      res.send(constructResponse({
        success: true,
        message: '文章更新成功'
      }))
    }
  })
}

function updateArtical (req, res) {
  var body = req.body
  var id = body.id
  var title = body.title
  var img = body.img
  var brief = body.brief
  var detail = body.detail
  var auth = body.auth
  var classify = body.classify
  var articalId = body.articalId
  var queryData = {
    id: id,
    title: title,
    img: img,
    brief: brief,
    detail: detail,
    auth: auth,
    classify: classify,
    articalId: articalId
  }
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
  getRecentArtical: getRecentArtical,
  updateArtical: updateArtical,
  removeArtical: removeArtical
}
