require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: process.env.DB,
    password: process.env.PASSW
    }
);

connection.connect(err => {
    err ? console.log(err) : console.log('Conectado a la DB.');;
})

module.exports = connection;