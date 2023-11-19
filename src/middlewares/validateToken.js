import jwt from 'jsonwebtoken'

export const authRequired = (req, res, next) => {
  // console.log('validing token')
  // console.log(req.headers)

  const { token } = req.cookies
  // console.log(cookies)

  if (!token)
    return res.status(401).json({ mess: 'No token, authorization denied' })

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ mess: 'Invalid Token' })

    req.user = user
  })
  next()
}
