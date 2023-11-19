import { Router } from 'express'
import {
  login,
  register,
  logout,
  profile
} from '../controllers/auth.controllers.js'
import { authRequired } from '../middlewares/validateToken.js'

const router = Router()

router.post('/register', register)
//Esta es una forma de que entre en la ruta /api

router.post('/login', login)
router.post('/logout', logout)

router.get('/profile', authRequired, profile)

export default router
