let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    num: Number,
    userid: String,
    image: String,
    email: String,
    passwd: String,
    name: String,
    auth: Number, //관리자 0 , 고용주 1, 근로자 2
    privatekey: String
});

module.exports = mongoose.model('user',userSchema);