const express = require('express')
const userService = require('../services/userService')

const router = express.Router()

// http://localhost:3000/api/user/create
router.post('/create', async (req,res)=>{
    const { content } = req.body
    res.send(content)
})

// http://localhost:3000/api/user/create/123?name=123445
router.post('/create/:id',(req,res)=>{

    const id = req.params.id; // Access params '123

    const name = req.query.name; // Access the 'name' query parameter
    
    // Accessing header parameters
    const userAgent = req.headers['user']; // Example: Accessing the 'User-Agent' header
    
    res.json({
        id: id,
        name: name,
        userAgent:userAgent
    });
})

module.exports = router;