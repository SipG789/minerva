const express = require('express');
const res = require('express/lib/response');
const mysql = require('mysql');

const app = express();

//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Meme107465!',
    database: 'inventory_db'
});
//connect
db.connect( (err) => {
    if(err){
        throw err;
    }
    console.log('MySQL Connected....')
});

//create DB
// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE inventory_db';
//     db.query(sql, (err, result) =>{
//         if(err) throw err;
//         res.send('database created...');
//     });
// });

app.listen('3000',() => {
    console.log('Server started on Port 3000')
});
