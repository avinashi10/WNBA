const express = require('express');
const mongoose = require("mongoose");
const Team = require('./db.js');

module.exports = {
  //create function
  createInDb: (team, cb) => {
    var formatTeam = { name: team.name, city: team.city };
    Team.create(formatTeam)
    .then((response) => {
      cb(null, response);
    })
    .catch((err) => {
      cb(err);
    })
  },

  //get all function
  getAllFromDb: (cb) => {
    //use .find with an empty object as the first filter parameter
    Team.find({}, (err, data) => {
      if (err) {
        cb(err);
      } else {
        console.log('FIND ALL DATA: ', data)
        cb(null, data);
      }
    });
  },

  //update function
  updateInDb: (team, cb) => {
    var query = { name: team.name };
    var update = {
      name: team.newName,
      city: team.newCity
    };
    console.log('QUERY VAR: ', query);
    console.log('UPDATE VAR: ', update);
    Team.findOneAndUpdate(query, update,(err, response) => {
        if (err) {
          cb(err);
        } else {
          cb(null, response);
        }
      });
  },

  //delete function
  deleteFromDb: (team, cb) => {
    var query = { name: team.name };
    Team.findOneAndDelete(query, (err, response) => {
        if (err) {
          cb(err);
        } else {
          cb(null, response);
        }
      });
  }
};