var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var userDao = require('./dao/userDao')
var logger = require('morgan');
var resConfig = require('./configs/responseConfig')

var indexRouter = require('./routes/index');
var cors = require('cors');
var app = express();
var ejs = require('ejs')


app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  // res.header("Content-Type", "application/json;charset=utf-8");
  console.log('req.headers', req.headers)
  if (req.headers.token) {
    userDao.checkUserToken(req.headers.token, function (err, rows, fields) {
      if (rows.length > 0) {
        next()
      } else {
        res.send({
          success: false,
          errorMessage: '在其他设备登陆，请重新登陆',
          errorCode: resConfig.userNoLogin
        })
      }
    })
  } else {
    next()
  }
});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// view engine setup
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'views')))
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
