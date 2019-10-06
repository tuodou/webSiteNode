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
    if (!connect) callback(new Error('network error'))
    connect.query(sql, params, function (err, rows, fields) {
      console.log(err)
      callback(err, rows, fields)
      connect.release()
    })
  })
}

function getArticalList (queryData, callback) {
  var sql = 'select * from web.artical'
  var params = []
  connection.query(sql, params, callback)
}

function getArticalDetail (queryData, callback) {
  var articalId = queryData.articalId
  var sql = 'select * from web.artical where articalId = ?'
  var params = [articalId]
  connection.query(sql, params, callback)
}

function updateArtical (queryData, callback) {
  var title = queryData.title
  var content = queryData.content
  var auth = queryData.auth
  var subjectId = queryData.subjectId
  var articalId = queryData.articalId
  var sql = 'update web.artical set title = ?, content = ?, auth = ?, subjectId = ? where articalId = ?'
  var params = [title, content, auth, subjectId, articalId]
  connection.query(sql, params, callback)
}

module.exports = {
  addArtical: addArtical,
  getArticalDetail: getArticalDetail,
  getArticalList: getArticalList,
  updateArtical: updateArtical
}
