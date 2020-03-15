var router = require('../mysqlBaseInfo/index')

var user = require('../web/user')
var artical = require('../web/artical')
var upload = require('../web/upload')
var comment = require('../web/comment')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/api/signIn', user.signIn)
router.post('/api/signUp', user.signUp)

router.post('/api/artical/addSubject', artical.addSubject)
router.post('/api/artical/getSubjectList', artical.getSubjectList)
router.post('/api/artical/addArtical', artical.addArtical)
router.post('/api/artical/addArticalList', artical.getArticalList)
router.post('/api/artical/getArticalDetail', artical.getArticalDetail)
router.post('/api/artical/getRecentArtical', artical.getRecentArtical)
router.post('/api/artical/updateArtical', artical.updateArtical)

router.post('/api/comment/getComment', comment.getComment)
router.post('/api/comment/addComment', comment.addComment)
router.post('/api/comment/likeComment', comment.likeComment)
router.post('/api/comment/hateComment', comment.hateComment)

router.post('/api/upload/image', upload.uploadImage)

module.exports = router;
