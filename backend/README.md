[See More Details](https://itnext.io/mastering-session-authentication-aa29096f6e22)

1. initialze backend folder
```bash
npm init -y
npm i
```
2. created `models`,`routes` and `services` folders and `README.md` file to root folder
3. add `.env` file to root folder and add following
   ```
   PORT = 3000
   MONGO_URI = 
   ```
4. add `.gitignore` file to root folder and add `.env` and `/node_modules`

### Added external packeges
```
express - server
nodemon - server restarter on changes
mongodb - DB
mongoose - creates a connection between MongoDB and the Node.js
dotenv - import environment variables
bcrypt - password encription
express-session - sessions for express
```
by `npm i express nodemon mongodb mongoose dotenv bcrypt express-session`

### Add main imports to `server.js` file
```js
const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

const userRoute = require('../backend/routes/userRoute')
```

### Add main middlewares to `server.js` file
```js
// json body paser
app.use(express.json())

// path and method test middleware
app.use((req,res,next)=>{
  console.log(req.path,req.method);
  next()
})
```

### Add routes to `server.js` file
```js
// http://localhost:3000/api/user
app.use('/api/user',userRoute)
```

### Make connection to mongoDB in `server.js` file
```js
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
```

### Start dev server using
```bash
npm run dev
```

#### More about security

[x-powered-by](https://stackoverflow.com/questions/5867199/cant-get-rid-of-header-x-powered-byexpress/12484642#12484642)