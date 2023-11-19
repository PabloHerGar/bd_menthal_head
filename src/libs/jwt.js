import { TOKEN_SECRET } from '../config.js'
import jwt from 'jsonwebtoken'

export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      { id: userSaved._id },
      'secret123',
      { expiresIn: '1d' },
      (err, token) => {
        if (err) reject(err) //si hay un error devuelve el error
        resolve(token) // si no hay error se resuelve y devuelve el token
      }
    )
  })
}
