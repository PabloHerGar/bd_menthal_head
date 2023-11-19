import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../libs/jwt.js'

export const register = async (req, res) => {
  const { email, password, username } = req.body
  console.log(email, password, username)

  try {
    const passwordHash = await bcrypt.hash(password, 10) // Esto nos va a dar un contraseña encriptada

    const newUser = new User({
      username,
      password: passwordHash,
      email
    })
    // console.log(req.body) Sale exactamente lo que ponemos en el body
    // console.log(newUser) //Sale en la consola del terminal junto con la id porque estamos creando un nuevo objeto

    const userSaved = await newUser.save() // Se crea una constante userSaved y se guarda en la base de datos y el guardado se hace de forma asincrona
    const token = await createAccessToken({ id: userSaved._id })

    console.log('hola')
    res.cookie('token', token)
    //   res.json({
    //     message: 'User created sucessfully'
    // })

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createAt: userSaved.createdAt,
      updateAt: userSaved.updatedAt
    }) //Esto hace que en la consola de thunder client salga el nuevo usuario guardado
    // res.send('registrando') //Esto sale en la consola de thunder client
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// const userSaved = newUser.save()

// import User from '../models/user.model.js'

// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'

// export const register = async (req, res) => {
//   const { email, password, username } = req.body
//   console.log(email, password, username)
//   try {
//     const passwordHash = await bcrypt.hash(password, 10)

//     const newUser = new User({
//       username,
//       password: passwordHash,
//       email
//     })

// console.log(newUser)
// res.send('registrando')
// const userSaved = newUser.save()

//   jwt.sign({ id: userSaved._id }, 'secret123', { expiresIn: '1d' })

//   res.json({
//     id: userSaved._id,
//     username: userSaved.username,
//     email: userSaved.email,
//     createAt: userSaved.createdAt,
//     updateAt: userSaved.updatedAt
//   })
// } catch (error) {
//   console.log(error)
// }
// }

export const login = async (req, res) => {
  const { email, password, username } = req.body
  console.log(email, password, username)

  try {
    const userFound = await User.findOne({ email })

    if (!userFound)
      return res.status(400).json({
        message: ['The email does not exist']
      })
    const isMatch = await bcrypt.compare(password, userFound.password)
    if (!isMatch) {
      return res.status(400).json({
        message: ['The password is incorrect']
      })
    }

    const token = await createAccessToken({ id: userFound._id })

    res.cookie('token', token)
    //   res.json({
    //     message: 'User created sucessfully'
    // })

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createAt: userFound.createdAt,
      updateAt: userFound.updatedAt
    }) //Esto hace que en la consola de thunder client salga el nuevo usuario guardado
    // res.send('registrando') //Esto sale en la consola de thunder client
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const logout = (req, res) => {
  res.cookie('token', '', { expires: new Date(0) })
  return res.sendStatus(200)
}

export const profile = async (req, res) => {
  // console.log(req.user)
  const userFound = await User.findById(req.user.id)
  if (!userFound) return res.status(400).json({ message: 'User not found' })
  res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createAt: userFound.createdAt,
    updateAt: userFound.updatedAt
  })
}
