var router = require('../mysqlBaseInfo/index')

var user = require('../web/user')
var artical = require('../web/artical')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.location('./views.index.html')
  //res.render('index');
});

router.post('/signIn', user.signIn)
router.post('/signUp', user.signUp)
router.post('/artical/addSubject', artical.addSubject)
router.post('/artical/getSubjectList', artical.getSubjectList)
router.post('/artical/addArtical', artical.addArtical)
router.post('/artical/addArticalList', artical.getArticalList)
router.post('/artical/getArticalDetail', artical.getArticalDetail)
router.post('/artical/updateArtical', artical.updateArtical)

module.exports = router;
