const express = require('express')
const userService = require('../services/userService')

const router = express.Router()

// http://localhost:3000/api/user/create
router.post('/create', async (req,res)=>{
    // const { email , pw } = req.body
    const email  = req.body.email
    const pw = req.body.password
    console.log(email,pw);
    try {
        const result = userService.createUser(email,pw)
        res.json({message:result})
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
})

//  http://localhost:3000/api/user/getuser
router.post('/getuser',(req,res)=>{
    const { email , pw } = req.body
    try {
        const result = userService.getUserValid(email,pw)
        res.json({message:result})
    } catch (error) {
       console.log(error); 
       res.status(500).json({ error: "Internal Server Error" });
    }
})

router.post('/getuser/:id',(req,res)=>{
    const email = req.params.email
    try {
        const result = userService.getSimilerUsers(email)
        res.json({message:result})
    } catch (error) {
       console.log(error); 
       res.status(500).json({ error: "Internal Server Error" });
    }
})

router.post('/getusers',(req,res)=>{
    try {
        const result = userService.getAllUsers()
        res.json({message:result})
    } catch (error) {
       console.log(error); 
       res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports = router;