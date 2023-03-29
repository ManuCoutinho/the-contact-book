const { Client } = require('pg')

const client = new Client({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_SECRET,
  database: process.env.PG_DATABASE
})

client.connect()

exports.query = async (query) => {
  const { rows } = await client.query(query)

  return rows
}
