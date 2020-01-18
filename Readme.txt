Hi Good day 

First we have to Run the Sql script to create the database
is In Mysql 

go to the folder  name service and open the file <<Conn.js >>
and Change the mysql Credentials Only host,user and password

then Open a console windows and navigate to <<servicio >> folder 
and run the next command line

node InitDataBase.js

is the output

Connected DataBase !
Database created
Creating Tables
Process finished
Table TempUsers created Successfully
prueba function
Table Categorias created Successfully
hii
Table Productos created Successfully
Table Carrito created Successfully
prueba function
Product Cat =>Video Games:: NumInserted => 4
Product Cat =>Books:: NumInserted => 4
Product Cat =>Health:: NumInserted => 4
Product Cat =>Technologies:: NumInserted => 4
Product Cat =>Toys:: NumInserted => 4
Product Cat =>Clothes for men:: NumInserted => 4
Product Cat =>Clothes for men:: NumInserted => 4



if there an Error please check mysql credential in <<Conn.js >> file
and run again

when finished the output press CTRL+C to kill the process 

and run the next command 

npm start

the output 

node index.js

check hello world api  in your navigator
http://localhost:3201/

Now We got Ready for launch de store

open other Console and go to the folder named << storewebapp >>
and exec this command  npm start






