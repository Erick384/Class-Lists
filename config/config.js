const mysql = require("mysql2");//Installed with => npm i mysql2
// const dotenv = require('dotenv').config() //Installed with => npm i dotenv


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lethal",
  database: "classlists",
});

connection.connect((error) => {
  if (error) {
    console.log("Error connecting to the database:", error);
  }
  console.log("Connected to the database");
});

module.exports = connection;