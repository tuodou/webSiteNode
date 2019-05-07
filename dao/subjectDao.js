var connection = require('../mysqlBaseInfo/mysql')

function addSubject (queryData, callback) {
  var subjectName = queryData.subjectName
  var subjectId = queryData.subjectId
  var sql = 'insert into web.subject (subjectId, subjectName) values (?, ?)'
  var params = [subjectId, subjectName]
  connection.query(sql, params, callback)
}

function getSubjectList (callback) {
  var sql = 'select subjectId, subjectName from web.subject'
  connection.query(sql, {}, callback)
}

module.exports = {
  addSubject: addSubject,
  getSubjectList: getSubjectList
}
