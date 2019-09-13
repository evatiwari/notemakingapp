const mongoose= require('mongoose');
const googleUser= mongoose.Schema({
    username: String,
    googleID: String
});
module.exports= mongoose.model('Guser',googleUser);