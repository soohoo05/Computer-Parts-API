const express = require ('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express()

const port = 3000;

require('./app/routes')(app,{})

app.user(bodyParser.urlencoded({extended:true}))

app.listen(port, ()=>{
  console.log("live on "+port)
})
