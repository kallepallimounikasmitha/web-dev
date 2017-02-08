var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'dusterchoco',
  database: 'chaTTerbox',
});
connection.query('SELECT * FROM chatterbox143',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  for (var i = 0; i < rows.length; i++) {
    console.log(rows[i].name);
  };
  console.log(rows);
});

connection.connect(function(err) {
  // connected! (unless `err` is set)
});
