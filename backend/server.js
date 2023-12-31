const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const session = require('express-session')
const cors = require('cors')

const authRoute = require('../backend/routes/authRoute')
const userRoute = require('../backend/routes/userRoute')

const auth = require('../backend/services/authService')

const corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods:['GET', 'PUT', 'POST','DELETE','PATCH']
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: false }
  cookie: {
    maxAge: 60*60*1000, // Session timeout in milliseconds (1 hour) : (60 * 60 * 1000)
    secure: false, // Change to true if using HTTPS
    httpOnly: true,
  },
}))

// path and method test middleware
app.use((req,res,next)=>{
  console.log(req.path,req.method);
  next()
})

// http://localhost:3000/api/auth
app.use('/api/auth',authRoute)

// http://localhost:3000/api/user
app.use('/api/user',auth.isAuthenticated,userRoute)

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