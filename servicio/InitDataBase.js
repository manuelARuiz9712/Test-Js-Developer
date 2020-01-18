
var conections = require("./Conn");

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "user",
//   password: "1234"
// });
var con = conections.defaultCon;

// var DataBaseCon = mysql.createConnection({
//     host: "localhost",
//     user: "user",
//     password: "1234",
//     database: "storeapp"

//   });

var DataBaseCon = conections.DataBaseCon;


  const tables =[{
    name:"TempUsers",
    lookBak:Prueba,
    query:`
    CREATE TABLE IF NOT EXISTS TempUsers (
     idTempUser INT NOT NULL AUTO_INCREMENT,
     dateCreated DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
     KeyUser VARCHAR(200) NULL,
     PRIMARY KEY (idTempUser))
    `
  },
{
    name:"Categorias",
    lookBak:DataSetCategories,
    query:`CREATE TABLE IF NOT EXISTS Categorias (
     idCategoria INT NOT NULL AUTO_INCREMENT,
     nameIcon VARCHAR(200) NOT NULL,
     nameCat VARCHAR(45) NULL,
     PRIMARY KEY (idCategoria))`
},
{
 name:"Productos",
 lookBak:ProductosData,
 query:`CREATE TABLE IF NOT EXISTS Productos (
     IdProducto INT NOT NULL AUTO_INCREMENT,
     Nombre VARCHAR(200) NULL,
     ImagenName VARCHAR(200) NULL,
     CategoriaId INT NULL,
     Precio INT NULL,
     PRIMARY KEY (IdProducto))`
},
{

 name:"Carrito",
 lookBak:Prueba,
 query:`CREATE TABLE IF NOT EXISTS Carrito (
     IdItem INT NOT NULL AUTO_INCREMENT,
     ProductoId INT NULL,
     Cantdad INT NULL,
     TempUserId  VARCHAR(200) NULL,
     PRIMARY KEY (IdItem))`
}
// {
//     name:,
//     query:``
// },

]

const CategoriasData = [
    ["ic_video_games.png","Video Games"],
    ["ic_book.png","Books"],
    ["ic_care.png","Health"],
    ["ic_tecnologies.png","Technologies"],
    ["ic_toy_aditional.png","Toys"],
    ["ic_clotches_mens.png","Clothes for men"],
    ["ic_clothess_women.png","Clothes for woman"],
   

]

const CatVideoGamesProd= [
    ['Console PS4 Pro 1TB - PlayStation 4 Pro','games_ps4.webp',1,1100000],
    ['CONSOLE PS VITA PLAYSTATION VITA SLIM PCH 2006','games_psvita.jpg',1,800000],
    ['Console Nintendo Switch Neon 32Gb','games_nintendo_shitch.jpg',1,1250000],
    ['Earphone Gamer Usb Microphone LED Light G2000 Blue','games_audios_gamers.webp',1,80000]
    
];
const CatBookProd= [
    ['1000 Animals in a book','animal_books.jpg',2,40000],
    ['Harry Potter and the Philosophers Stone','book_harry_p_filosofal.jpg',2,120000],
    ['Astronomy Encyclopedia','books_astrinomy.jpg',2,330000],
    ['The Ghost','book_the_gost.jpg',2,210000]
    
];

const CatCareProd= [
    ['Back corrector','heal_correctorPos.webp',3,40000],
    ['slimming product','heal_adelgasante.webp',3,120000],
    ['Sure Quicken Milkshake','heal_malteada.webp',3,22000],
    ['Protein','heal_prote.webp',3,60000]
    
];

const CatTecnologiesProd= [
    ['Xiami Redmi Note 8','tecnologies_xiami.webp',4,830000],
    ['Huawey Y9','teconologies_huawey_y9.jpg',4,890000],
    ['Laptop Alien Ware Gamer with intel','tecnologies_alien_ware.webp',4,3200000],
    ['Laptop Hp i3','tecnologies_hp.webp',4,1200000]
    
];
const CatToyProd= [
    ['Scooter yellow  Boy Toys','toys_yellow_scoter.jpg',5,40000],
    ['Childrens Motorcycle with Lights','toys_motorbyke.jpg',5,600000],
    ['HEDBANZ Board Game For Children','toys_hedbans.jpg',5,150000],
    ['My Little Kitchen Boy Toys Kitchen','toys_house.jpg',5,80000]
    
];

const CatClotWomanProd= [
    ['Heel shoes Beira','women_Beira.jpg',6,60000],
    ['Short dress Active','women_active.jpg',6,130000],
    ['Paris Style Dress','women_paris_distric.jpg',6,145000],
    ['glamour dress','women_glamorous.jpg',6,80000]
    
];

const CatCloMensProd= [
    ['Levis sweater','men_levis.jpg',7,35000],
    ['Nautica sweater','men_nautica.jpg',7,42000],
    ['Jeans  top','men_boorks_field.jpg',7,45000],
    ['tomy jeans shirt','men_tomy_jeans.jpg',7,50000]
    
];



let ProductosDataSet = [
        {
            name:"Video Games",
            list:CatVideoGamesProd
        },
        {
            name:"Books",
            list:CatBookProd

        },
        {
            name:"Health",
            list:CatCareProd
        },
        
        {
            name:"Technologies",
            list:CatTecnologiesProd
        },
        {
            name:"Toys",
            list:CatToyProd
        },
        {
            name:"Clothes for men",
            list:CatCloMensProd
        },
        {
            name:"Clothes for men",
            list:CatClotWomanProd
        }
    ]











con.connect((err) => {
  if (err) throw err;
  console.log("Connected DataBase !");
   
  con.query("CREATE DATABASE storeapp",  (err, result)=> {
    if (err) throw err;
    console.log("Database created");
    CreateTables()




  });




});

function CreateTables(){
    console.log("Creating Tables");
    
      tables.forEach(  element=>{

        DataBaseCon.query(element.query, function (err, result) {
            if (err) throw err;
            console.log("Table "+element.name+" created Successfully");
            element.lookBak();
          });



      } );
      console.log("Process finished ");
    //  process.exit();


}


function Prueba(){
    console.log("prueba function");

}
function ProductosData(){
  
    let query = "INSERT INTO Productos (Nombre,ImagenName,CategoriaId,Precio ) VALUES ?";
    ProductosDataSet.forEach( element=>{

        DataBaseCon.query(query,[element.list],(err,result)=>{
            if (err) throw err;
            console.log("Product Cat =>"+element.name+":: NumInserted => "+ result.affectedRows);
        }) 

    } );



}

function DataSetCategories(){
console.log("hii")

    let query = "INSERT INTO Categorias (nameIcon,nameCat ) VALUES ?";
    DataBaseCon.query(query,[CategoriasData], function (err, result) {
        if (err) throw err;
       // console.log("Cetegories Inserted: " + result.affectedRows);
        //console.log(result.insertId);
         
    })

}




