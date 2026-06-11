import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT ? Number(process.env.PORT) : 8000
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit'

app.use(express.json())

app.get('/api/health', (_, res) => {
  res.json({ status: 'ok', env: process.env.NODE_ENV || 'development' })
})

app.get('/api', (_, res) => {
  res.json({ message: 'OctoFit Tracker backend is running' })
})

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(port, () => {
      console.log(`Backend listening on http://localhost:${port}`)
    })
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err)
    process.exit(1)
  })
