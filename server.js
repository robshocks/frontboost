var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Folder = require('./models/folder');
var config = require('./config'); // Imports Mongo Address setttings
var logger = require('morgan');
const jwt = require('express-jwt');
const cors = require('cors');


var data = {};


express()

  .use(express.static(__dirname + '/public'))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(logger(':method :url :status :response-time ms - :res[content-length]'))
  .get('/api/data', (req, res) => res.json(data))
  .post('/api/data', (req, res) => res.json(data = req.body))
  .get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'))
  .post('api/test', function(req, res) {
      res.json({ message: 'hooray! welcome to our api!' }); //Use postman post localhost:3333/test to test
  })
  .post('/api/folder', function(req,res) {
    var folder = new Folder();
    folder.name = req.body.name;

    folder.save(function(err) {
        if (err)
            res.send(err); // Switch this off when in production
        res.json({ name: folder.name});
    });

  })
  .listen(3333);



  mongoose.connect(config.database);
  mongoose.connection.on('error', function() {
  	  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
  });
