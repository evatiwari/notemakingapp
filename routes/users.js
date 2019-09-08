var express = require('express');
var router = express.Router();
var bcrypt= require('bcrypt');
var Joi= require('joi');
var User= require('../models/user');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/
router.post('/',async (req,res)=>{
  const {error}= validateUser(req.body);
  if(error) res.status(400).send('Bad request');
  user= await User.findOne({email: req.body.email});
  if(user){
      return res.status(400).send('This email id is already in use')
  }
  user= new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
  });
  
  user.password= await bcrypt.hash(user.password, 10);
  const result=await user.save();
  res.send(result);
})

function validateUser(user){
  const Schema={
      name: Joi.string().min(5).max(50).required(),
      email: Joi.string().min(5).max(255).required(),
      password: Joi.string().min(5).max(255).required()
  }
  return Joi.validate(user,Schema);
}

module.exports = router;
