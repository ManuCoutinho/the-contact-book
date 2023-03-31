'use-strict'
import { Router } from 'express'
import ContactController from './app/controllers/ContactController.mjs'
import CategoryController from './app/controllers/CategoryController.mjs'

export const routes = Router()

routes.get(
  '/contacts',
  (req, res, next) => {
    req.appId = 'MeuID'
    next()
  },
  ContactController.index
)
routes.get('/contacts/:id', ContactController.show)
routes.delete('/contacts/:id', ContactController.delete)
routes.post('/contacts/', ContactController.store)
routes.put('/contacts/:id', ContactController.update)

routes.get('/categories', CategoryController.index)
routes.post('/categories', CategoryController.store)
