var ObjectID= require('mongodb').ObjectID
module.exports = function(app,db,key){
  app.post('/computerparts/memory/:key',(req,res)=>{
    if (req.params.key===key){
    const OBJ={name:req.body.name,speed:req.body.speed,price:req.body.price,type:req.body.type,picture:req.body.picture,color:req.body.color,modules:req.body.modules,size:req.body.size}
    db.collection('MEMORY').insert(OBJ,(err,results)=>{
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

  app.get('/computerparts/memory/:id',(req,res)=>{
    const id= req.params.id
    const details={'_id':new ObjectID(id)}
    db.collection('MEMORY').findOne(details,(err,item)=>{
      if(err){
        res.send({'error':'An error has occured'})
      }
      else{
        console.log("Got!")
        res.send(item)
      }
    })
  })

  app.get('/computerparts/memory',(req,res)=>{
    db.collection('MEMORY').find().toArray((err,item)=>{
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
