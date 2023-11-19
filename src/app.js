import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api', authRoutes)
//todas las rutas que vengan de authRoutes empizan por /api

export default app

// import morgan from 'morgan'
// import cors from 'cors'
// import dotenv from 'dotenv'
// dotenv.config()
// import { dbConnect } from '../mongo.js'

// app.use(morgan('dev'))

// // app.use(router)
// app.use(cors())
