const CaseRoutes= require('./Case_routes')
const CoolerRoutes= require('./Cooler_routes')
const CPURoutes= require('./CPU_routes')
const MemoryRoutes= require('./Memory_routes')
const MotherboardRoutes= require('./Motherboard_routes')
const PowerSupplyRoutes= require('./PowerSupply_routes')
const StorageRoutes= require('./Storage_routes')
const VideoCardRoutes= require('./VideoCard_routes')

module.exports=function(app,db,key){
  CaseRoutes(app,db,key)
  CoolerRoutes(app,db,key)
  CPURoutes(app,db,key)
  MemoryRoutes(app,db,key)
  MotherboardRoutes(app,db,key)
  PowerSupplyRoutes(app,db,key)
  StorageRoutes(app,db,key)
  VideoCardRoutes(app,db,key)
}
