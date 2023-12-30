const express = require('express');
const User = require('../models/user');
const router = express.Router();
const auth = require('../services/authService')

//  http://localhost:3000/api/auth/signin
router.post('/signin', async (req, res) => {
  try{
  const result = await auth.findUser(req.body)
  if (result) {
    req.session.user = result._id; // save session id
    res.json({
      message: 'successfully created',
      auth: true,
      result: result,
    });
  } else {
    res.json({
      message: 'unable to access the account',
      auth: false,
    });
  }
} catch (error) {
  console.error('Error in signup route:', error);
  res.status(500).json({
    message: 'internal server error',
    auth: false,
    error: error.message,
  });
}
});

//  http://localhost:3000/api/auth/signup
router.post('/signup', async (req, res) => {
  try {
    const result = await auth.createUser(req.body)
    if(result){
      req.session.user = result._id // save session id
      res.json({
        message: 'successfully created',
        auth: true,
        result:result
      });
    }else{
      res.json({
        message: 'unable to create account',
        auth: false,
        result:result
      });
    }
  } catch (error) {
    console.log(error)
  }
});

//  http://localhost:3000/api/auth/hasauth
router.get('/hasauth',(req,res)=>{
  if(req.session.user){
    return res.json({
      message:'Your are signin',
      auth:true,
      user:req.session.user
    })
  }
  return res.json({
    message:'Your are not signin',
    auth:false
  })
})

// http://localhost:3000/api/auth/signout
router.get('/signout',(req,res)=>{
  req.session.destroy()
  res.json({
    message:"Your are not signin",
    auth:false
  })
})

// http://localhost:3000/api/auth/protected-route
router.get('/protected-route', auth.isAuthenticated, (req, res) => {
  res.json({
    message: 'This is a protected route for signed-in users only.',
    auth: true,
    user: req.session.user,
  });
});

module.exports = router;