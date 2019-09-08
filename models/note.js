const mongoose= require('mongoose');

const note= mongoose.model('Note',new mongoose.Schema({
    title:{
        type: String,
        default: "Untitled",
        maxlength: 15,
        unique: true
    },
    body:{
        type: String,
        required: true
    }
}));

module.exports= note;