var ObjectID= require('mongodb').ObjectID
module.exports = function(app,db){
  app.post('/jobs',(req,res)=>{
    const job={Company:req.body.Company,Date:req.body.Date}
    db.collection('jobs').insert(job,(err,res)=>{
      if(err){
        res.send({'error':'An error has occured'})
      }
      else{
        res.send(result.ops[0])
      }
    })
  })

  app.put('/jobs/:id',(req,res)=>{
    const id= req.params.id
    const details={'_id':new ObjectID(id)}
    const job={Company:req.body.Company,Date:req.body.Date}
    db.collection('jobs').update(details,(err,item)=>{
      if(err){
        res.send({'error':'An error has occured'})
      }
      else{
        res.send(item)
      }
    })
  })

  app.get('/jobs/:id',(req,res)=>{
    const id= req.params.id
    const details={'_id':new ObjectID(id)}
    db.collection('jobs').findOne(details,(err,item)=>{
      if(err){
        res.send({'error':'An error has occured'})
      }
      else{
        res.send(item)
      }
    })
  })

  app.delete('/jobs/:id',(req,res)=>{
    const id= req.params.id
    const details={'_id':new ObjectID(id)}
    db.collection('jobs').remove(details,(err,item)=>{
      if(err){
        res.send({'error':'An error has occured'})
      }
      else{
        res.send('Deleted')
      }
    })
  })
}
