import mongoose from 'mongoose'
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export default mongoose.model('User', userSchema)

// export default ModelUser

// import ModelUser, { create, find, findById, findOneAndUpdate, deleteOne } from '../userModel'
// const app = express()

// const router = express.Router()

// router.post('/', async (req, res) => {
//   const body = req.body
//   const respuesta = await create(body)
//   res.send(respuesta)
// })

// router.get('/', async (req, res) => {
//   const respuesta = await find({})
//   res.send(respuesta)
// })
// router.get('/id', async (req, res) => {
//   const id = req.params.id
//   const respuesta = await findById(id)
//   res.send(respuesta)
// })
// router.put('/id', async (req, res) => {
//   const body = req.body
//   const id = req.params.id
//   const respuesta = await findOneAndUpdate({ _id: id }, body)
//   res.send(respuesta)
// })

// router.delete('/id', async (req, res) => {
//   const id = req.params.id
//   const respuesta = await deleteOne({ _id: id })
//   res.send(respuesta)
// })
