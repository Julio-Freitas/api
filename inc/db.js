const mysql = require('mysql');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'jotaw647',
  database: 'jotaw647_teste',
  password: 'jotaw647_teste',
  port:3000
});

connection.connect(function(err){
  if(err) return console.log(err);
  console.log('Banco conectou!');
})
module.exports = connection;
