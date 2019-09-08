const mysql = require('mysql');

// create the connection to database
const connection = mysql.createConnection({
  host: '',
  user: '',
  database: '',
  password: '',
  port:3000
});

connection.connect(function(err){
  if(err) return console.log(err);
  console.log('Banco conectou!');
})
module.exports = connection;
