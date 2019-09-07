const mysql2 = require('mysql2');
 
// create the connection to database
const connection = mysql2.createConnection({
  host: '127.0.0.1',
  user: 'jotaw647',
  database: 'jotaw647_provadev',
  password: 'julioefran261289',
});


module.exports = connection;