const express = require ('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express()
const db = require('./config/db')
const key= require('./config/key')
const port = 3000;
const cors = require('cors')
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())


 MongoClient.connect(db.url,(err,database)=>{
   if(err) return console.log(err)
   require('./app/routes')(app,database,key.key)
   app.listen(port, ()=>{
     console.log("live on http://localhost:"+port)
   })
 })
