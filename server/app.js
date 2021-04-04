var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config(); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const dbutils = require('./dbutil');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use('/kitchen/create', function(req, res, next) {
  /* MONGODB */
});

app.use('/kitchen/post', function(req,res,next) {
  
});

app.use('/orders/get', function(req,res,next) {

});


app.use('/users/create', function(req,res,next) {
  const u_data = req.query.user;
  dbutils.newUser(u);
  res.send(`New user created: ${u}`);
});


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
