import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import postRoutes from './routes/post.routes.js'

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors())

app.use('/posts', postRoutes)

app.listen(PORT, console.log(`🔥 Server is running on http://localhost:${PORT}`))
