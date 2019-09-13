//packages
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser= require('body-parser');
var passport= require('passport')
var passportSetup= require('./config/passport');
var mongoose= require('mongoose');
var app = express();
var cookieSession= require('cookie-session');
var keys=require('./config/keys');

//route handlers
var indexRouter = require('./routes/index');
var usersRouter= require('./routes/users');
var authRouter= require('./routes/auth');
var profileRouter= require('./routes/profile');



var session= require('express-session');

mongoose.connect('mongodb://localhost/notemaker').then(()=>{
  console.log('Connected to the mongodb database...');
})
.catch((err)=>{
  console.log("Could not connect to the mongodb database...");
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cookieSession({
  maxAge: 24*60*60*1000,
  keys: [keys.session.cookieKey]
}))

//middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'thesecret',
  saveUninitialized: false,
  resave: false
}))

app.use('/auth', indexRouter);
app.use('/profile', profileRouter);
app.use('/signup', usersRouter);
app.use('/login', authRouter);




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
