const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tanimlamaPersonel = new Schema({

    isim:String,
    soyisim:String,
    sicilno:String
    
}, {
    timeStamp: true
})
module.exports = mongoose.model("tanimlamaPersonel", tanimlamaPersonel);