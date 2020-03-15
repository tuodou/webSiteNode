var getConnect = require('../mysqlBaseInfo/mysql')

function createComment (queryData, callback) {
  var articalId = queryData.articalId,
    content = queryData.content,
    parentId = queryData.parentId,
    userId = queryData.userId,
    userName = queryData.userName,
    parentName = queryData.parentName,
    isGlobal = queryData.articalId ? 2 : 1
  var sql = 'insert into web.comment (articalId, content, parentId, userId, userName, parentName, isGlobal) values (?, ?, ?, ?, ?, ?, ?)'
  var params = [articalId, content, parentId, userId, userName, parentName, isGlobal]
  console.log('params ******', params)
  getConnect(function (connect) {
    if (!connect) {
      callback(new Error('network error'))
    } else {
      connect.query(sql, params, function (err, rows, fields) {
        console.log(err)
        callback(err, rows, fields)
        connect.release()
      })
    }
  })
}

function getCommentList (queryData, callback) {
  var articalId = queryData.articalId
  var sql = 'select id as commentId, content, userId, userName, parentId, parentName, likeNum, hateNum, createTime from web.comment where '
  var params = [articalId]
  if (articalId) {
    sql += 'articalId = ?'
  } else {
    sql += 'isGlobal = ?'
    params = [1]
  }
  console.log('params ******', params)
  getConnect(function (connect) {
    if (!connect) {
      callback(new Error('network error'))
    } else {
      connect.query(sql, params, function (err, rows, fields) {
        console.log(err)
        callback(err, rows, fields)
        connect.release()
      })
    }
  })
}

function likeComment (queryData, callback) {
  var commentId = queryData.commentId,
    addNum = queryData.addNum
  var sql = 'update web.comment set likeNum = if((likeNum + ?) > 0, likeNum + ?, 0) where id = ?'
  var params = [addNum, addNum, commentId]
  getConnect(function (connect) {
    if (!connect) {
      callback(new Error('network error'))
    } else {
      connect.query(sql, params, function (err, rows, fields) {
        console.log(err)
        callback(err, rows, fields)
        connect.release()
      })
    }
  })
}

function hateComment (queryData, callback) {
  var commentId = queryData.commentId,
    addNum = queryData.addNum
  var sql = 'update web.comment set hateNum = if((hateNum + ?) > 0, hateNum + ?, 0) where id = ?'
  var params = [addNum, addNum, commentId]
  getConnect(function (connect) {
    if (!connect) {
      callback(new Error('network error'))
    } else {
      connect.query(sql, params, function (err, rows, fields) {
        console.log(err)
        callback(err, rows, fields)
        connect.release()
      })
    }
  })
}

module.exports = {
  getCommentList: getCommentList,
  createComment: createComment,
  likeComment: likeComment,
  hateComment: hateComment
}
