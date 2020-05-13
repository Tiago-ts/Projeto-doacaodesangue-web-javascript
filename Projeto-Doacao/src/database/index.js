const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/posttoview',{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true, useFindAndModify: false });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected")
});
module.exports= mongoose;