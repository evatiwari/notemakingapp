var express = require('express');
var router = express.Router();
var User= require('../models/user');
var bcrypt= require('bcrypt')


module.exports = function(passport){
    router.post('/signup', async (req, res, next)=>{
        try{
        var user=await User.findOne({email:req.body.email});
        if(!user){
            return res.status(400).send("Invalid email or password");
        }
        var validPassword= await bcrypt.compare(req.body.password,user.password);
    if(!validPassword){
        return res.status(400).send('Invalid email or password')
       } 
    }
        catch(err){
            res.status(500).send("An error occured")
        }
    });
      
    return router;
}