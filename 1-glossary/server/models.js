const express = require('express');
const mongoose = require("mongoose");
const Word = require('./db.js');

module.exports = {
  //create function
  createInDb: (word, cb) => {
    var formatWord = { name: word.name, definition: word.definition };
    Word.create(word)
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
    Word.find({}, (err, data) => {
      if (err) {
        cb(err);
      } else {
        console.log('FIND ALL DATA: ', data)
        cb(null, data);
      }
    });
  },

  //update function
  updateInDb: (word, cb) => {
    var query = { name: word.name };
    var update = {
      name: word.newName,
      definition: word.newDefinition
    };
    console.log('QUERY VAR: ', query);
    console.log('UPDATE VAR: ', update);
    Word.findOneAndUpdate(query, update,(err, response) => {
        if (err) {
          cb(err);
        } else {
          cb(null, response);
        }
      });
  },

  //delete function
  deleteFromDb: (word, cb) => {
    var query = { name: word.name };
    Word.findOneAndDelete(query, (err, response) => {
        if (err) {
          cb(err);
        } else {
          cb(null, response);
        }
      });
  }
};