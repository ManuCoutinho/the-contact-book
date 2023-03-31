'use-strict'
import CategoryRepository from '../repositories/CategoryRepository.js'

class CategoryController {
  async index (request, response) {
    const categories = await CategoryRepository.findAll()

    response.json(categories)
  }

  async store (request, response) {
    const { name } = request.body

    if (!name) return response.status(400).json({ error: 'Name is required' })
    const category = await CategoryRepository.create({ name })

    return response.json(category)
  }
}

export default new CategoryController()
