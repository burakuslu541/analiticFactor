const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tanimlamaSure = new Schema({

    gunluk:String,
    haftalik:String,
    aylik:String
    
}, {
    timeStamp: true
})
module.exports = mongoose.model("tanimlamaSure", tanimlamaSure);