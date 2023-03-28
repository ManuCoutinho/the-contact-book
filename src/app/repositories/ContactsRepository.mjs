import crypto from 'node:crypto'

const { randomUUID } = crypto

let contacts = [
  {
    id: randomUUID(),
    name: 'Random Name',
    email: 'email@email.com',
    phone: '34566-0000',
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
}

export default new ContactsRepository()
