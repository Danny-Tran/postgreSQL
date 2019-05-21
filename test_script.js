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

client.query("SELECT * FROM famous_people WHERE first_name=$1 OR last_name=$1", [queryType], (err, res) => {
  if (err) {
    console.log("ERR:", err)
    return false
  }
  let j = 0
  for (let index = 0; index < res.rows.length; index++) {
    j++
    console.log(`-${j}: ${res.rows[index].first_name} , ${res.rows[index].last_name} born ${res.rows[index].birthdate}`)
  }
    client.end()
})


