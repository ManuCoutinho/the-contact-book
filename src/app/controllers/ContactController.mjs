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

  store () {
    // todo: create a new registry
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
