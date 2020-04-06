var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userRouter = require('./routes/user');
var adduserRouter = require('./routes/adduser');
var addobjRouter = require('./routes/addobj');
var delobjRouter = require('./routes/delobj');
var objRouter = require('./routes/object');
var grcompRouter = require('./routes/grcompnames');
var savedRouter = require('./routes/saved');
var historyRouter = require('./routes/history');
var hcommentRouter = require('./routes/hcomment');
var savedHistRouter = require('./routes/savedHist');
var deleteHistRouter = require('./routes/delHist');
var addHistRouter = require('./routes/addHist');
var strucTreeRouter = require('./routes/structree');
var compRouter = require('./routes/comp');
var shipRouter = require('./routes/ship');
var ship_detRouter = require('./routes/ship_det');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user', userRouter);
app.use('/adduser', adduserRouter);
app.use('/addobj', addobjRouter);
app.use('/del', delobjRouter);
app.use('/obj', objRouter);
app.use('/grcomp', grcompRouter);
app.use('/saved', savedRouter);
app.use('/history', historyRouter);
app.use('/hcomment', hcommentRouter);
app.use('/savedHist', savedHistRouter);
app.use('/delHist', deleteHistRouter);
app.use('/addHist', addHistRouter);
app.use('/structree', strucTreeRouter);
app.use('/comp', compRouter);
app.use('/ship', shipRouter);
app.use('/ship_det', ship_detRouter);

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
