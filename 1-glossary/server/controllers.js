const express = require('express');
const model = require('./models.js');

module.exports = {
  //create
  post: (req, res) => {
    model.createInDb(req.body, (err, response) => {
      if(err){
        res.send('Uh-oh, POST error: ' + err);
      } else {
        res.send('POST SUCCESSFUL: ' + response);
      }
    });
  },

  //retrieve
  get: (req, res) => {
    model.getAllFromDb((err, data) => {
      if(err){
        res.send('Uh-oh, GET error: '+ err);
      } else {
        res.send(data);
      }
    });
  },

  //update
  update: (req, res) => {
    console.log('REQUEST BODY: ', req.body)
    model.updateInDb(req.body, (err, response) => {
      if(err){
        res.send('Uh-oh, UPDATE error: ' + err);
      } else {
        res.send('UPDATE SUCCESSFUL: ' + response);
      }
    });
  },

  //delete
  delete: (req, res) => {
    model.deleteFromDb(req.body, (err, response) => {
      if(err){
        res.send('Uh-oh, DELETE error: ' + err);
      } else {
        res.send('DELETE SUCCESSFUL: ' + response);
      }
    });
  }
};