const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findUser(email, password);
  if (user) {
    res.json({
      message: 'You are successfully login',
      auth: true,
    });
  } else {
    res.json({
      message: 'Unable to login',
      auth: false,
    });
  }
});

router.post('/signup', (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      res.json({
        message: 'successfully created',
        auth: true,
      });
    })
    .catch((err) => {
      res.json({
        message: 'unable to create account',
        auth: false,
      });
    });
});

module.exports = router;