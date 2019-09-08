const mongoose= require('mongoose');

const userSchema=  new mongoose.Schema({
    email:{
        type:String,
        unique: true,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    password:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }

});

module.exports= mongoose.model('User',userSchema);