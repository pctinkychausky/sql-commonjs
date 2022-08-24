require("dotenv").config();
const asyncMySQL = require("./mysql/connection");
const queries = require("./mysql/queries");

// const connection = require("./connection");

//Prevent callback hell, so we promisify it to below + connection.js
// connection.query(`SELECT * FROM users`, (err, results) => {
//   console.log(err, results);

//   results.forEach((result) => {
//     console.log(result.user_name);
//   });
// });

async function getData() {
  try {
    const results = await asyncMySQL(queries.getUserProfileByID(2));
    console.log(results);
  } catch (error) {
    console.log(error);
  }

  try {
    const results = await asyncMySQL(queries.getAllUsers);
    console.log(results);
  } catch (error) {
    console.log(error);
  }

  try {
    const results = await asyncMySQL(queries.addUser("bbb", "jaso11n"));
    console.log(results);
  } catch (error) {
    console.log(error);
  }
}

getData();
