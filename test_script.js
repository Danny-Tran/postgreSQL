// const pg = require("pg");
// const settings = require("./settings"); // settings.json

// const client = new pg.Client({
//   user     : settings.user,
//   password : settings.password,
//   database : settings.database,
//   host     : settings.hostname,
//   port     : settings.port,
//   ssl      : settings.ssl
// });

// client.connect((err) => {
//   if (err) {
//     return console.error("Connection Error", err);
//   }
//   client.query("SELECT $1::int AS number", ["1"], (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     }
//     console.log(result.rows[0].number); //output: 1
//     client.end();
//   });
// });

const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect();

const queryType = process.argv.slice(2)[0];
// let first_name = null
// if (queryType === 'read' || queryType === 'delete' || queryType === 'update') {
//     first_name = process.argv.slice(2)[1]
// }

// if (queryType === "list") {
//     client.query("SELECT * FROM famous_people", (err, res) => {
//         if (err) {
//             console.log("ERR:", err)
//             return false
//         }
//         console.log(res.rows)
//         client.end()
//     })
// }


client.query("SELECT * FROM famous_people WHERE first_name=$1 OR last_name=$1", [queryType], (err, res) => {
    if (err) {
        console.log("ERR:", err)
        return false
        }
        console.log(res.rows)
        client.end()
    })


// var nameSearch = (

// )