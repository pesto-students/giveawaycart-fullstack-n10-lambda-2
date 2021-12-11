import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import path from 'path'

dotenv.config();
connectDB()

const app = express();
app.use(cors())
//this will allow to accept json data in the body - for instance accepting username and password from form login
app.use(express.json())


console.log('does server gets triggerred?')
app.use('/api/products/',productRoutes)
app.use('/api/users/',userRoutes)
app.use('/api/orders/',orderRoutes)

// app.get('/s3Url', async (req, res) => {
//   const url = await generateUploadUrl()
//   res.send({url})
// })

app.get('/api/orders/myorders', (req, res) => {
  const actualPage = '/orders/myorders'
  app.render(req,res,actualPage)
})

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
  // app.use(express.static(path.join(__dirname, '/frontend/out')))
  // console.log('ENTER HERE FOR RESOLVING PATH',path.resolve(__dirname,'frontend','out','index.html'))
  // app.get('*', (req, res) => res.sendFile(path.resolve(__dirname,'frontend','out','index.html')))
} else {
  app.get('/', (req, res) => {
  res.send('API is running...')
})
}

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

