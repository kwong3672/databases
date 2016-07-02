var express = require('express');
var models = require('../models');
var request = require('request');
var fs = require('fs');
var bodyParser = require('body-parser');
var _ = require('underscore');


module.exports = {
  messages: {
    get: function (req, res) {
      // getting a request from clin
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('req-meesage', req.body);
      models.messages.post(req, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('req', req.body);
      models.users.post(req, res);
    }
  }
};

