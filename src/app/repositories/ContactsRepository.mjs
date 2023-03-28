'use-strict'
import crypto from 'node:crypto'

const { randomUUID } = crypto

let contacts = [
  {
    id: randomUUID(),
    name: 'Random Name',
    email: 'email@email.com',
    phone: '34566-0000',
    category_id: randomUUID()
  },
  {
    id: randomUUID(),
    name: 'Random Name 2',
    email: 'email2@email.com',
    phone: '34566-0002',
    category_id: randomUUID()
  }
]

class ContactsRepository {
  findAll () {
    return new Promise((resolve) => resolve(contacts))
  }

  findById (id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id)
    ))
  }

  delete (id) {
    return new Promise(resolve => {
      contacts = contacts.filter(contact => contact.id !== id)
      resolve()
    })
  }

  findByEmail (email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email)
    ))
  }

  create ({ name, phone, email, category_id }) {
    return new Promise(resolve => {
      const newContact = {
        id: randomUUID(),
        name,
        phone,
        email,
        category_id
      }
      contacts.push(newContact)
      resolve(newContact)
    })
  }

  update (id, { name, phone, email, category_id }) {
    return new Promise(resolve => {
      const updatedContact = {
        id,
        name,
        phone,
        email,
        category_id
      }
      contacts = contacts?.map((contact) => contact.id === id ? updatedContact : contact)
      resolve(updatedContact)
    })
  }
}

export default new ContactsRepository()
