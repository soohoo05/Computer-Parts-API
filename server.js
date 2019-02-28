const express = require ('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express()
const db = require('./config/db')
const port = 3000;


app.use(bodyParser.urlencoded({extended:true}))



 MongoClient.connect(db.url,{useNewUrlParser:true})





 require('./app/routes')(app,db)
 app.listen(port, ()=>{
   console.log("live on "+port)
 })
