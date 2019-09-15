var express = require('express');
var router = express.Router();
var User= require('../models/user');
var bcrypt= require('bcrypt');



    router.post('/', async (req, res)=>{
        try{
        var user=await User.findOne({email:req.body.email});
        if(!user){
            return res.status(400).send("Invalid email or password");
        }
        var validPassword= await bcrypt.compare(req.body.password,user.password);
    if(!validPassword){
        return res.status(400).send('Invalid email or password')
       } ;
       res.render('profile');
    }
        catch(err){
            res.status(500).send("An error occured")
        }
    });
      
 module.exports= router;
