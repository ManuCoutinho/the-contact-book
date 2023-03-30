'use-strict'
const db = require('../../database')

class ContactsRepository {
  async findAll (orderBy = 'ASC') {
    const order = orderBy === 'DESC' ? 'DESC' : orderBy === 'desc' ? 'DESC' : 'ASC'
    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${order}`)
    return rows
  }

  async findById (id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id])
    return row
  }

  async findByEmail (email) {
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email])
    return row
  }

  async delete (id) {
    const deleteOp = await db.query('DELETE FROM contacts WHERE id = $1', [id])
    return deleteOp
  }

  async create ({ name, phone, email, category_id }) {
    const [row] = await db.query(`
      INSERT INTO contacts(name, phone, email, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, phone, email, category_id])

    return row
  }

  async update (id, { name, phone, email, category_id }) {
    const [row] = await db.query(`
      UPDATE contacts
      SET name = $1, phone = $2, email = $3, category_id = $4
      WHERE id = $5
      RETURNING *
    `, [name, phone, email, category_id, id])

    return row
  }
}

module.exports = new ContactsRepository()
