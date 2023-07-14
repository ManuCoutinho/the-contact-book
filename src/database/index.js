const { Client } = require('pg')

const client = new Client({
  host: 'postgres',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'contacts_book'
})

client.connect()
exports.query = async (query, values) => {
  const { rows } = await client.query(query, values)

  return rows
}
