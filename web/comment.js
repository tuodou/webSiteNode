var resConfig = require('../configs/responseConfig')
var constructResponse = require('../utils/constructResponse')
var commentDao = require('../dao/commentDao.js')

function getComment (req, res) {
  var body = req.body
  var queryData = {
    articalId: body.articalId || 0
  }
  commentDao.getCommentList(queryData, function (err, rows, fields) {
    if (err) {
      res.send(constructResponse({
        success: false,
        errorCode: resConfig.publicErrorCode,
        errorMessage: '查询评论失败'
      }))
    } else {
      console.log('==========>', rows)
      res.send(constructResponse({
        success: true,
        message: '查询成功',
        data: {
          list: dealComment(rows)
        }
      }))
    }
  })
}
function dealComment (commentList) {
  var parents = commentList.filter(comment => !comment.parentId)
  var children = commentList.filter(comment => comment.parentId)
  var translate = (parents, children) => {
    parents.forEach(parent => {
      children.forEach(child => {
        if (child.parentId === parent.commentId) {
          parent.children ? parent.children.push(child) : parent.children = [child]
          translate([child], children)
        }
      })
    })
  }
  translate(parents, children)
  return parents
}


function addComment (req, res) {
  console.log('-----', req.body)
  var body = req.body
  var queryData = {
    articalId: body.articalId || 0,
    content: body.content,
    parentId: body.parentId || 0,
    userId: body.userId || 0,
    userName: body.userName || '匿名用户',
    parentName: body.parentName || '匿名用户'
  }
  commentDao.createComment(queryData, function (err, rows, fields) {
    if (err) {
      console.log(err)
      res.send(constructResponse({
        success: false,
        errorCode: resConfig.publicErrorCode,
        errorMessage: '新增评论失败'
      }))
    } else {
      console.log(rows)
      res.send(constructResponse({
        success: true,
        message: '评论发表成功'
      }))
    }
  })
}

function likeComment (req, res) {
  console.log('-----', req.body)
  var body = req.body
  var queryData = {
    commentId: body.commentId,
    addNum: body.addNum
  }
  commentDao.likeComment(queryData, function (err, rows, fields) {
    if (err) {
      console.log(err)
      res.send(constructResponse({
        success: false,
        errorCode: resConfig.publicErrorCode,
        errorMessage: '点赞失败'
      }))
    } else {
      console.log(rows)
      res.send(constructResponse({
        success: true,
        message: '点赞成功'
      }))
    }
  })
}

function hateComment (req, res) {
  console.log('-----', req.body)
  var body = req.body
  var queryData = {
    commentId: body.commentId,
    addNum: body.addNum
  }
  commentDao.hateComment(queryData, function (err, rows, fields) {
    if (err) {
      console.log(err)
      res.send(constructResponse({
        success: false,
        errorCode: resConfig.publicErrorCode,
        errorMessage: '点赞失败'
      }))
    } else {
      console.log(rows)
      res.send(constructResponse({
        success: true,
        message: '点赞成功'
      }))
    }
  })
}

module.exports = {
  getComment: getComment,
  addComment: addComment,
  likeComment: likeComment,
  hateComment: hateComment
}