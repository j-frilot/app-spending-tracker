//install mysql 2
// npm install --save mysql2
const mysql = require('mysql2');

//connecting to db
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'josh',
    database: 'spending_log',
    password: 'funk2013'
});

connection.query(
    'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
    function (err, results, fields) {
        console.log(fileds);
        console.log(results);
    }
);
