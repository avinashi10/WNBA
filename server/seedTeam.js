//seed db by populating this file and running it one time with node seedWord.js in terminal
const mongoose = require("mongoose");
//require in model
const Team = require('./db.js');

Team.deleteMany({});
//use .create and pass in an array of 3-4 team objects
var seedData = [
  {
  name:'Chicago Sky',
  city:'Chicago'
  },
]

Team.create(seedData)
.then((response) => {
  console.log('Data successfully seeded to database: ', response);
})
.catch((error) => {
  console.log('Uh-oh, seeding data error: ', error);
})