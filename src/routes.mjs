'use-strict'
import { Router } from 'express'
import ContactController from './app/controllers/ContactController.mjs'

export const router = Router()

router.get(
  '/contacts',
  (req, res, next) => {
    req.appId = 'MeuID'
    next()
  },
  ContactController.index
)
router.get('/contacts/:id', ContactController.show)
router.delete('/contacts/:id', ContactController.delete)
router.post('/contacts/', ContactController.store)
router.put('/contacts/:id', ContactController.update)
