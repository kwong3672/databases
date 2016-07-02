var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('are we getting here???????');
      db.readFromSql(req, res, 'messages');
    }, // a function which produces all the messages
    post: function (req, res) {
      db.writeToSql(req, res, 'messages');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      db.readFromSql(req, res, 'users');
    },
    post: function (req, res) {
      // console.log('user model hi');
      db.writeToSql(req, res, 'users');
    }
  }
};

