'use-strict'
import ContactsRepository from '../repositories/ContactsRepository.js'

class ContactController {
  async index (request, response) {
    const { orderBy } = request.query
    const contacts = await ContactsRepository.findAll(orderBy)
    response.json(contacts)
  }

  async show (request, response) {
    const { id } = request.params
    const contact = await ContactsRepository.findById(id)

    if (!contact) return response.status(404).json({ error: 'User not found' })

    return response.json(contact)
  }

  async store (request, response) {
    const { name, phone, email, category_id } = request.body

    if (!name) return response.status(400).json({ error: 'Name is required' })

    const contactExists = await ContactsRepository.findByEmail(email)

    if (contactExists) return response.status(409).json({ error: 'This e-mail already in use' })

    const contact = await ContactsRepository.create({

      name, phone, email, category_id
    })

    return response.json(contact)
  }

  async update (request, response) {
    const { id } = request.params
    const { name, phone, email, category_id } = request.body
    const contactExists = await ContactsRepository.findById(id)

    if (!contactExists) return response.status(404).json({ error: 'User not found' })
    if (!name) return response.status(400).json({ error: 'Name is required' })
    const contactByEmailExists = await ContactsRepository.findByEmail(email)
    if (contactByEmailExists && contactByEmailExists.id !== id) {
      return response.status(400).json({ error: 'This e-mail is already in use' })
    }
    const contact = await ContactsRepository.update(id, { name, phone, email, category_id })

    return response.status(200).json(contact)
  }

  async delete (request, response) {
    const { id } = request.params

    const contact = await ContactsRepository.findById(id)

    if (!contact) return response.status(404).json({ error: 'User not found' })

    await ContactsRepository.delete(id)

    response.sendStatus(204)
  }
}

export default new ContactController()
