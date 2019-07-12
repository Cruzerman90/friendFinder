const express = require('express');
const mysql = require('mysql');

//establshing connection with database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
 

  // Your username
  user: "root",

  // Your password
  password: "Wildflowers90!",
  database: "ice_creamDB"
});

connection.connect((err) => {
    if(err){
        throw err;
    }
    console.log('mysql connected...')
});
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId);
//   connection.end();
// });


const app = express();

app.get('/createpoststable', (req, res) => {

    let sql = 'CREATE TABLE post(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id) )';

    connection.query(sql, (err, result) => {

        if(err) throw err;
        
        console.log(result);

        res.send('post table created...')
    });
});

app.listen('3000', () => {
    console.log('server started on port 3000')
});
