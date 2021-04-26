var mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect("mongodb://134.122.90.161:27017/analyticfactor", {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex: true
  });

  mongoose.connection.on('open', () => {
    console.log('MongoDB: Connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });

  mongoose.Promise = global.Promise;
}