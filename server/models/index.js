var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (req, res) {
      console.log('model message hi');
      db.writeToSql(req, res, 'messages');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (req, res) {
      // console.log('user model hi');
      console.log('got data from controller', req.body);
      db.writeToSql(req, res, 'users');
    }
  }
};

