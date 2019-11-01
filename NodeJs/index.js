//1. call mysql package

const mysql= require('mysql');

//2. call express package

const express= require('express');

//3. call body-parser package

const bodyparser = require('body-parser')

//4. instance a new express application

var app= express();

//5. Enable json request

app.use(bodyparser.json());

//6. Create mysql database connection

var connectionDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'market'
    });
//7. Validate mysql connection

//8. Run server

app.listen(3000,()=>console.log('Server is running at port 3000'));

