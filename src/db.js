import mongoose from 'mongoose'

import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
    // await mongoose.connect('mongodb://localhost/helthdb')

    console.log('**** CONEXION CORRECTA')
  } catch (err) {
    console.log('**** ERROR DE CONEXION', err)
  }
}
