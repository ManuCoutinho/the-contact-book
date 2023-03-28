import ContactsRepository from '../repositories/ContactsRepository.mjs'

class ContactController {
  async index (_, response) {
    const contacts = await ContactsRepository.findAll()
    response.json(contacts)
  }

  async show (request, response) {
    const { id } = request.params
    const contact = await ContactController.findById(id)

    if (!contact) return response.status(404).json({ error: 'User not found' })

    return response.json(contact)
  }

  async store (request, response) {
    const { name, phone, email, category_id } = request.body

    const contactExists = await ContactsRepository.findByEmail(email)

    if (contactExists) return response.status(409).json({ error: 'This e-mail already been taken!' })

    const contact = await ContactsRepository.create({

      name, phone, email, category_id
    })

    return response.json(contact)
  }

  update () {
    // todo: edit a registry
  }

  async delete (request, response) {
    const { id } = request.params

    const contact = await ContactController.findById(id)

    if (!contact) return response.status(404).json({ error: 'User not found' })

    await ContactsRepository.delete(id)

    response.sendStatus(204)
  }
}

export default new ContactController()
