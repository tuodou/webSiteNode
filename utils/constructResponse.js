var defaultResponse = {
  success: true,
  message: 'OK',
  errorCode: 555,
  errorMessage: '网络错误，请重试'
}
var construtResponse = function (config) {
  // config  {success, message}
  var response = config || defaultResponse
  return response
}

module.exports = construtResponse
