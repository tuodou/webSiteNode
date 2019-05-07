var router = require('../mysqlBaseInfo/index')

var user = require('../web/user')
var artical = require('../web/artical')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signIn', user.signIn)
router.post('/signUp', user.signUp)
router.post('/artical/addSubject', artical.addSubject)
router.post('/artical/getSubjectList', artical.getSubjectList)

module.exports = router;
