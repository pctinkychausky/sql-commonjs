const mysql = require("mysql"); //pull in the driver

const connection = mysql.createConnection({
  // database: "ft1",
  // user: "root",
  // password: "",
  // host: "localhost",
  // port: 3306,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
});

connection.connect();

function asyncMySQL(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (err) {
        console.log(err);
        reject();
      }
      resolve(results);
    });
  });
}

module.exports = asyncMySQL;
