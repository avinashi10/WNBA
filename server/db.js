const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/teams');

// 2. Set up any schema and models needed by the app
const teamsSchema = new mongoose.Schema({
  name: String,
  city: String
});
var Team = mongoose.model('Team', teamsSchema);

// 3. Export the models
module.exports = Team;

// 4. Import the models into any modules that need them