var express = require('express');
var Queries = require("./DataBaseQuery");
var cors = require('cors');

var app = express();
app.use(express.json());//Le digo a express que use para los json este parsing 
app.use(cors()); //Enable All Cors
app.post('/Init',async function (req, res) {

 // req.body
 let UsuarioToken = req.body.TokenTemp;  
 let Carrito = [];
 let Categorias=[];
 let Productos= [];   
 let CategoriaResult = await Queries.GetCategorias();
 let ProductosResult = await Queries.GetProductos();

 if( CategoriaResult[0]  !== false){
    Categorias = CategoriaResult[1];
 }

 if( CategoriaResult[0]  !== false){
  Productos = ProductosResult[1];
}




// let CategoriaResult = await Queries.GetCategorias();

  if(UsuarioToken == undefined || UsuarioToken == null ){
    
    let resultUser = await Queries.CrearTempUsuario();
     
    if(resultUser[0] != false){
       UsuarioToken = resultUser[1];
      }

  }else{
    let resultCarrito = await Queries.GetCarUsuario(UsuarioToken);

    if( resultCarrito[0] !== false ){
      Carrito = resultCarrito[1];
    }



  }
 
 let response = {
   msg:"Wellcome",
   value:{
    UsuarioToken,
    Categorias,
    Productos,
    Carrito
   },

 }



//  if( result[0] == false ){
//    response.state = false;
//    response.value = null;
//    response.msg="error";
     
//  }else{
//   response.state = true;
//   response.value = result[1];
//   response.msg="list A";
//  }
   
  res.json(response);
  })

 app.get("/pruebaToken",async function (req,res){

  let result = await Queries.CrearTempUsuario();
  let response = new Object();
  if( result[0] == true ){
    response.value = result[1];
    response.msg = "Usuario creado";
    response.state = true;
  }else{
    response.value = result[1];
    response.msg = "Usuario creado";
    response.state = false;

  }

  res.json(  result );

 }) 


app.get('/', function (req, res) {
    res.send('hello world')
  })


  app.post('/AddProduct', async function (req, res) {
    
    let params = req.body;
    let response = new Object();
    let existencias = await Queries.ComprobarExistenciaInCar(params.UserKey,params.ProducId); 
     
   if( existencias[0] === false ){
     
    response.msg='Fail to add item ';
    response.state = false;
    response.value= existencias[0];

   }else{
  if( existencias[1].length > 0 ){
         response.msg='Product Exist';
         response.state = false;
         response.value= existencias[1];

       }else{
          let Result = await Queries.AddProductToCar(params.UserKey,params.ProducId);
       
          if( Result[0] == false ){

            response.msg='Fail to add item ';
            response.state = false;
            response.value= Result[1];

          }else{
            response.msg='Success ';
            response.state = true;
            response.value= Result[1];
          }

       }

   }

   


    res.json( response );


  }) 
  
  app.post('/RemoveProductCar', async function (req, res) {
    
    let params = req.body;

    let Result = await Queries.RemoveProductoCar(params.UserKey,params.ProducId);
    let response = new Object();
    if( Result[0] == false ){

      response.msg='Fail to remove item ';
      response.state = false;
      response.value= [];


    }else{
      response.msg='Success ';
      response.state = true;
      response.value= Result[1];
    }

    res.json( response );

  }) 










app.listen(3201)