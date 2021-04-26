const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const targetPersonel = new Schema({
    isim:String,
    soyisim:String,
    email:String,
    sicilno:String,
    bolum:String,
    departman:String,
    pozisyon:String,
    durum:{
        type:Boolean,
        default:true,
    }
}, {
    timeStamp: true
})
module.exports = mongoose.model("targetPersonel", targetPersonel);