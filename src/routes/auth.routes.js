import { Router } from 'express'
import { login, register, logout } from '../controllers/auth.controllers.js'

const router = Router()

router.post('/register', register)
//Esta es una forma de que entre en la ruta /api

router.post('/login', login)
router.post('/logout', logout)

export default router
