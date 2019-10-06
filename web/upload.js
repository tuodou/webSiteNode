var constructResponse = require('../utils/constructResponse')
var formidable = require("formidable")
var path = require('path')
var getUuid = require('../utils/getUuid')
var fs = require('fs')

function uploadImage (req, res, next) {
  var form = new formidable.IncomingForm();
  form.encoding = 'utf-8'; // 编码
  // 保留扩展名
  form.keepExtensions = true;
  //文件存储路径 最后要注意加 '/' 否则会被存在public下
  form.uploadDir = path.join(__dirname, '../public/images/');
  // 解析 formData 数据
  form.parse(req, function(err, fields ,files) {
    console.log(err, fields ,files)
    if(err) return next(err)
    var imgData = fields.image.replace(/^data:image\/\w+;base64,/, '')
    var suffix = fields.image.match(/^data:image\/(\w+);/)[1]
    var imgBuffer = Buffer.alloc(imgData.length, imgData, 'base64')
    var imgName = fields.fileName + '_' + getUuid() + '.' + suffix
    var imgPath = 'public/images/' + imgName
    fs.writeFile(imgPath, imgBuffer, function (err) {
      if (err) {
        res.send(constructResponse({
          success: false,
          message: '保存图片失败，请重试'
        }))
      } else {
        // 返回路径和文件名
        res.send(constructResponse({
          success: true,
          message: '图片上传成功',
          data: {
            name: imgName,
            path: 'http://' + req.headers.host + '/images/' + imgName
          }
        }))
      }
    })
  })
}
module.exports = {
  uploadImage: uploadImage
}
