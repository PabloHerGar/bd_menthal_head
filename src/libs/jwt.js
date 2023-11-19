import jwt from 'jsonwebtoken'

export function createAccessToken(payload) {
  if (typeof payload !== 'object') {
    return 'payload no es an object'
  }

  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.TOKEN_SECRET || '',
      { expiresIn: '1d' },
      (err, token) => {
        if (err) reject(err) //si hay un error devuelve el error
        resolve(token) // si no hay error se resuelve y devuelve el token
      }
    )
  })
}
