const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    passsword: '',
    database: 'course-express'
})

connection.connect();

module.exports = connection; 