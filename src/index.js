import app from './app.js'
import { connectDB } from './db.js'

connectDB()
app.listen(3000)
console.log('Server on port', 3000)

// app.listen(3000)

// const PORT = process.env.PORT ?? 3001

// app.listen(PORT, () => {
//   console.log(`Server listening on port http://localhost:${PORT}`)
// })
