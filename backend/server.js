const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

const authRoute = require('../backend/routes/authRoute')
const userRoute = require('../backend/routes/userRoute')

app.use(express.json())

// path and method test middleware
app.use((req,res,next)=>{
  console.log(req.path,req.method);
  next()
})

// http://localhost:3000/api/auth
app.use('/api/auth',authRoute)

// http://localhost:3000/api/user
app.use('/api/user',userRoute)

mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    // listening to the port
    app.listen(process.env.PORT,()=>{
      console.log('server runs on',process.env.PORT);
    })
  })
  .catch((error)=>{
    console.log('Error', error.message)
  })