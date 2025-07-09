const mysql = require("mysql2");
const config = require("../config");

const dbconfig = {
  host:config.mysql.host,
  user:config.mysql.user,
  password:config.mysql.password,
  database:config.mysql.database,
};

console.log(config);

let connection;
let attemptCount = 0;
const maxAttempts = 5;

function conMysql() {
  connection = mysql.createConnection(dbconfig);
  connection.connect((err) => {
    if (err) {
      console.log("[Database error]",err);
      attemptCount++;
      if (attemptCount < maxAttempts) {
        setTimeout(conMysql, 200);
      } else {
        console.log("Se alcanzo el numero maximo de intentos");
      }
    } else {
      console.log("Database conectado");
    }
  });
}

conMysql();

function getConnection(){
    return connection;
}

module.exports={

    getConnection,

};