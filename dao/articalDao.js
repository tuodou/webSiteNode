var connection = require('../mysqlBaseInfo/mysql')

function addArtical (queryData, callback) {
  var title = queryData.title
  var content = queryData.content
  var auth = queryData.auth
  var subjectId = queryData.subjectId
  var articalId = queryData.articalId
  var sql = 'insert into web.artical (title, content, auth, subjectId, articalId) values (?, ?, ?, ?, ?)'
  var params = [title, content, auth, subjectId, articalId]
  connection.query(sql, params, callback)
}

function getArticalList (queryData, callback) {
  var subjectId = queryData.subjectId
  var sql = 'select * from web.artical where subjectId = ?'
  var params = [subjectId]
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
