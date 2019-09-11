const express= require('express');
const router= express.Router();
const Note= require('../models/note');

router.get('/',async(req,res)=>{
    const notes= await Note.find();

});
router.post('/',async(req,res)=>{
    note= new Note({
        date: req.body.date,
        title: req.body.title,
        body: req.body.body
    });
    user.save().then(()=>{
        res.send("Note successfully created!");
    }).catch((err)=>{

    });
})
router.get('/:id',async(req,res)=>{
    
});
router.put('/:id',async(req,res)=>{


});
router.delete('/:id',async(req,res)=>{


});
module.exports=router;

