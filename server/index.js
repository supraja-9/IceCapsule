import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000,
  // eslint-disable-next-line no-undef
  HOST = process.env.HOST || '0.0.0.0'

app.get('/api', (_, res) => {
  res.status(200).json({
    message: 'Api [IceCapsule]',
  })
})

app.listen(PORT, () => console.log(`visit http://${HOST}:${PORT}`))
