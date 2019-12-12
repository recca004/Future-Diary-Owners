//Set up mongoose connection
const mongoose = require('mongoose');
require('dotenv').config();
const uri='mongodb+srv://mario:mario004@cluster0-nyvhz.mongodb.net/app_auth';
 mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// const mongoDB = "mongodb+srv://mario:mario004@cluster0-nyvhz.mongodb.net/app_auth", { useFindAndModify: true };

// mongoose.connect("mongodb+srv://mario:mario004@cluster0-nyvhz.mongodb.net/app_auth", { useUnifiedTopology: true }, { useNewUrlParser: true }, { useFindAndModify: true });
// mongoose.Promise = global.Promise;
module.exports = mongoose;