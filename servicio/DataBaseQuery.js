var conections = require("./Conn");
const DB = conections.DataBaseCon;





exports.GetCategorias =  function GetCategorias(){
    
    return new Promise(  (resolve,reject)=>{
      
            DB.query("SELECT * FROM Categorias", function (err, result, fields) {
                if(err){
                    resolve([false,err])
                }else{
                    resolve([true,result])
                }
            });
        
    })


  }

  exports.GetProductos =  function GetProductos(){
    
    return new Promise(  (resolve,reject)=>{
      
            DB.query("SELECT * FROM Productos", function (err, result, fields) {
                if(err){
                    resolve([false,err])
                }else{
                    resolve([true,result])
                }
            });
        
    })


  } 
  
  exports.GetCarUsuario =  function GetCarUsuario(TokenU){
    
    return new Promise(  (resolve,reject)=>{
      
            DB.query(`SELECT * FROM Carrito where TempUserId = '${TokenU}'`, function (err, result, fields) {
                if(err){
                    resolve([false,err])
                }else{
                    resolve([true,result])
                }
            });
        
    })


  } 

  exports.CrearTempUsuario =  function GetCarUsuario(TokenU){
    let key = new Date().getTime()+"";
    return new Promise(  (resolve,reject)=>{
      
            DB.query(`INSERT INTO TempUsers (KeyUser) values ('${key}')`, function (err, result, fields) {
                if(err){
                    resolve([false,err])
                }else{
                    resolve([true,key])
                }
            });
        
    })


  }
  
  exports.AddProductToCar =  function AddProductToCar(TokenU,productoId,cantidad =0){
   
    return new Promise(  (resolve,reject)=>{
      
            DB.query(`INSERT INTO Carrito (ProductoId,Cantdad,TempUserId) values (${productoId},'${cantidad}','${TokenU}')`, function (err, result, fields) {
                if(err){
                    resolve([false,err])
                }else{
                    resolve([true,result])
                }
            });
        
    })


  }

  exports.ComprobarExistenciaInCar =  function ComprobarExistenciaInCar(TokenU,productoId){
   
    return new Promise(  (resolve,reject)=>{
      
            DB.query(`select * from Carrito where ProductoId = ${productoId} and TempUserId = '${TokenU}'`, function (err, result, fields) {
                if(err){
                    resolve([false,err])
                }else{
                    resolve([true,result])
                }
            });
        
    })


  }


  exports.RemoveProductoCar =  function RemoveProductoCar(TokenU,productoId){
   
    return new Promise(  (resolve,reject)=>{
      
            DB.query(`DELETE FROM  Carrito where TempUserId='${TokenU}' and ProductoId=${productoId}`, function (err, result, fields) {
                if(err){
                    resolve([false,err])
                }else{
                    resolve([true,result])
                }
            });
        
    })


  }
