//seed db by populating this file and running it one time with node seedWord.js in terminal
const mongoose = require("mongoose");
//require in model
const Word = require('./db.js');

Word.deleteMany({});
//use .create and pass in an array of 3-4 word objects
var seedData = [
  {
  name:'flow',
  definition:'to proceed smoothly and readily'
  },
  {
  name:'ease',
  definition:'the state of being comfortable'
  },
  {
  name:'nourish',
  definition:'to nurture or sustain'
  },
  {
  name:'breath',
  definition:'air inhaled and exhaled'
  }
]

Word.create(seedData)
.then((response) => {
  console.log('Data successfully seeded to database: ', response);
})
.catch((error) => {
  console.log('Uh-oh, seeding data error: ', error);
})