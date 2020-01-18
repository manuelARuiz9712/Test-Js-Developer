var mysql = require("mysql");
exports.defaultCon = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "1234"
  });
  
exports.DataBaseCon = mysql.createConnection({
      host: "localhost",
      user: "user",
      password: "1234",
      database: "storeapp"
  
    });