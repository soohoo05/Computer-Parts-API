var ObjectID= require('mongodb').ObjectID
module.exports = function(app,db,key){
  app.post('/computerparts/cpu/:key',(req,res)=>{
    if (req.params.key===key){
    const OBJ={name:req.body.name,speed:req.body.speed,price:req.body.price,cores:req.body.cores}
    db.collection('CPU').insert(OBJ,(err,results)=>{
      if(err){
        res.send({'error':'An error has occured'})
      }
      else{
        console.log("posted!")
        res.send(results.ops[0])
      }
    })
  }//if key correct
  else{
    res.send({'error': 'Cannot make a post request from your current url, please make a post request at ____'})
  }
  })

  // app.put('/ROUTE/:id',(req,res)=>{
  //   const id= req.params.id
  //   const details={'_id':new ObjectID(id)}
  //   const OBJ={OBJ:req.body.OBJ}
  //   db.collection('TABLENAME').update(details,OBJ,(err,item)=>{
  //     if(err){
  //       res.send({'error':'An error has occured'})
  //     }
  //     else{
  //       console.log("Updated!")
  //       res.send("Updated")
  //     }
  //   })
  // })

  app.get('/computerparts/cpu/:id',(req,res)=>{
    const id= req.params.id
    const details={'_id':new ObjectID(id)}
    db.collection('CPU').findOne(details,(err,item)=>{
      if(err){
        res.send({'error':'An error has occured'})
      }
      else{
        console.log("Got!")
        res.send(item)
      }
    })
  })

  app.get('/computerparts/cpu',(req,res)=>{
    db.collection('CPU').find().toArray((err,item)=>{
      if(err){
        res.send({'error':'An error has occured'})
      }
      else{
        res.send(item)
      }
    })
  })

  // app.delete('/ROUTE/:id',(req,res)=>{
  //   const id= req.params.id
  //   const details={'_id':new ObjectID(id)}
  //   db.collection('TABLENAME').remove(details,(err,item)=>{
  //     if(err){
  //       res.send({'error':'An error has occured'})
  //     }
  //     else{
  //       console.log("Deleted")
  //       res.send('Deleted')
  //     }
  //   })
  // })
}
