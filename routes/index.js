var router = require('../mysqlBaseInfo/index')
var user = require('../web/user')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signIn', user.signIn)
router.post('/signUp', user.signUp)

module.exports = router;
