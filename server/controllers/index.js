var express = require('express');
var models = require('../models');
var request = require('request');
var fs = require('fs');
var bodyParser = require('body-parser');
var _ = require('underscore');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('we are getting a request from the user messages');
      models.messages.get(req, res);
      // getting a request from clin
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('we are getting a requst from the user for users');
    },
    post: function (req, res) {
      models.users.post(req, res);
    }
  }
};

