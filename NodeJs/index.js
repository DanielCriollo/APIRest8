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

connectionDB.connect((err)=>{
    if(!err){
        console.log('Succesfull connection to database');
    }else{
        console.log('DB connection failed /n Error: '+JSON.stringify(err,undefined,2));
    }
});

//8. Run server

app.listen(3000,()=>console.log('Server is running at port 3000'));

//9. get all users

app.get('/list_users',(req,res)=>{
    connectionDB.query('SELECT * FROM users',(err,rows,fieds)=>{
        if(!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});

//9. get an users

app.get('/list_users/:id',(req,res)=>{
    connectionDB.query('SELECT * FROM users WHERE id=?',[req.params.id],(err,rows,fieds)=>{
        if(!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});

//9. delete an users

app.delete('/list_users/:id',(req,res)=>{
    connectionDB.query('DELETE  FROM users WHERE id=?',[req.params.id],(err,rows,fieds)=>{
        if(!err){
            console.log('THE USER HAS BEEN DELETED');
        
        
        }else{
            console.log(err);
        }
    });
});


