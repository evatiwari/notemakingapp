var express = require('express');
var router = express.Router();
const passport= require('passport');



router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/logout', function(req,res,next){
  req.logout();
  res.redirect('/auth');
})

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/google',passport.authenticate('google',{
  scope:['profile']
}));

router.get('/welcome',(req,res,next)=>{
  res.render('userhomepage');
})

router.get('/google/redirect',passport.authenticate('google'),(req,res,next)=>{
  res.redirect('/profile/');
 
})

router.get('/changepassword', (req,res,next)=>{
  res.render('changepassword');
})

module.exports = router;
