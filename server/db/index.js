var mysql = require('mysql');
var _ = require('underscore');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var writeToSql = function (req, res, table) {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'chat'
  });

  var columns = '';
  var valueSql = '';

  _.each(req.body, function(value, key) {
    columns += key + ', ';
    valueSql += '"' + value + '", '; 
  });
  columns = columns.slice(0, -2);
  valueSql = valueSql.slice(0, -2);

  // console.log('this is the value of column', columns);
  // console.log('this is the value of valueSql', valueSql);
  console.log('(' + columns + ') VALUES (' + valueSql + ')');

  console.log('name', req.body.username);
  connection.connect();
  // TODO replaced 'SELECT * FROM messages' with:
  connection.query('INSERT INTO ' + table + ' (' + columns + ') VALUES (' + valueSql + ')', function(err, rows, fields) {
    if (err) {
      console.log('err', err);
    } else {
      console.log('good to go');
      res.status(201).send('message sent');    
    }
  }); 
  connection.end();
};





exports.writeToSql = writeToSql;