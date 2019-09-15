const express= require('express');
const router=express.Router();
const User= require('../models/user.js');
const bcrypt= require('bcrypt');

router.put('/',async (req,res,next)=>{
    const user= await User.findOne({email: req.body.email});
    if(user){
        const valid=await bcrypt.compare(req.body.oldpassword,user.password);
        if(!valid){
            return res.status(400).send("Incorrect email or password");
        }
        //var salt= await bcrypt.genSalt(10);
            user.password= await bcrypt.hash(req.body.newpassword,10);
           /* user.save().then(()=>{
                res.render('login')

            }).catch((err)=>{
                console.log(err);
            });*/
            const newUser= await user.save();
            if(newUser){
                res.render('login')
            }
        }
        else{
            return res.status(400).send("Invalid email or password")
        }
   
    
});
module.exports= router;
