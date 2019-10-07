var getConnect = require('../mysqlBaseInfo/mysql')

function addArtical (queryData, callback) {
  var title = queryData.title
  var detail = queryData.detail
  var auth = queryData.auth
  var brief = queryData.brief
  var img = queryData.img
  var classify = queryData.classify
  var articalId = queryData.articalId
  var sql = 'insert into web.artical (title, img, brief, detail, auth, classify, articalId) values (?, ?, ?, ?, ?, ?, ?)'
  var params = [title, img, brief, detail, auth, classify, articalId]
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

function getArticalList (queryData, callback) {
  var sql = 'select * from web.artical limit ?, ?'
  // select * from table limit (start-1)*pageSize,pageSize;
  var page = queryData.page
  var pageSize = queryData.pageSize
  getConnect(function (connect) {
    if (!connect) {
      callback(new Error('network error'))
    } else {
      connect.query(sql, [(page - 1) * pageSize, pageSize], function (err, rows, fields) {
        callback(err, rows, fields)
        connect.release()
      })
    }
  })
}

function getArticalDetail (queryData, callback) {
  var id = queryData.id
  var sql = 'select * from web.artical where id = ?'
  var params = [id]
  console.log('+++++++++++', id)
  getConnect(function (connect) {
    if (!connect) {
      callback(new Error('network error'))
    } else {
      connect.query(sql, params, function (err, rows, fields) {
        callback(err, rows, fields)
        connect.release()
      })
    }
  })
}

function getRecentArtical (queryData, callback) {
  var sql = 'select * from web.artical order by uTime desc LIMIT 3'
  getConnect(function (connect) {
    if (!connect) {
      callback(new Error('network error'))
    } else {
      connect.query(sql, [], function (err, rows, fields) {
        callback(err, rows, fields)
        connect.release()
      })
    }
  })
}

function updateArtical (queryData, callback) {
  var id = queryData.id
  var title = queryData.title
  var img = queryData.img
  var brief = queryData.brief
  var detail = queryData.detail
  var auth = queryData.auth
  var classify = queryData.classify
  var sql = 'update web.artical set title = ?, img = ?, brief=?, detail = ?, auth = ?, classify = ? where id = ?'
  var params = [title, img, brief, detail, auth, classify, id]
  getConnect(function (connect) {
    if (!connect) {
      callback(new Error('network error'))
    } else {
      connect.query(sql, params, function (err, rows, fields) {
        callback(err, rows, fields)
        connect.release()
      })
    }
  })
}

module.exports = {
  addArtical: addArtical,
  getArticalDetail: getArticalDetail,
  getArticalList: getArticalList,
  updateArtical: updateArtical,
  getRecentArtical: getRecentArtical
}
