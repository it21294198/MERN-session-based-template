const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

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