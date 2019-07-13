const mysql = require("mysql")
const puresql = require("puresql");

const connection = mysql.createConnection(process.env.JAWSDB_URL ? process.env.JAWSDB_URL : {
  host : process.env.MYSQL_HOST,
  port : process.env.MYSQL_PORT,
  user : process.env.MYSQL_USER,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DB
})

export const sql = puresql.adapters.mysql(connection);