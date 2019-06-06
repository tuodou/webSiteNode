var router = require('../mysqlBaseInfo/index')

var user = require('../web/user')
var artical = require('../web/artical')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(99999)
  res.render('index');
});

router.post('/api/signIn', user.signIn)
router.post('/api/signUp', user.signUp)
router.post('/api/artical/addSubject', artical.addSubject)
router.post('/api/artical/getSubjectList', artical.getSubjectList)
router.post('/api/artical/addArtical', artical.addArtical)
router.post('/api/artical/addArticalList', artical.getArticalList)
router.post('/api/artical/getArticalDetail', artical.getArticalDetail)
router.post('/api/artical/updateArtical', artical.updateArtical)

module.exports = router;
