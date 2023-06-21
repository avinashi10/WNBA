const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary');

// 2. Set up any schema and models needed by the app
const glossarySchema = new mongoose.Schema({
  name: String,
  definition: String
});
var Word = mongoose.model('Word', glossarySchema);

// 3. Export the models
module.exports = Word;

// 4. Import the models into any modules that need them