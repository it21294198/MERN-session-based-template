const User = require('../models/user')
const bcrypt = require('bcrypt');

const createUser = async (user) =>{
    
    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email: user.email });

    // If the user with the given email already exists, return false
    if (existingUser) {
        return false;
    }

    const result = await User.create({
        username:user.username,
        email:user.email,
        password:user.password
    })
    return result
}

const findUser = async (user) =>{
        const result = await User.findOne({email:user.email})

        // if user is not found
        if (!result) {
            return null;
        }

        const isPasswordMatch = await bcrypt.compare(user.password,result.password)
        
        // if user is found but password doesn't match
        if(!isPasswordMatch){
            console.log('ran false')
            return false
        }else{
            return result
        }
}

const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
      // User is signed in, proceed to the next middleware or route handler
      next();
    } else {
      // User is not signed in, send an unauthorized response
      res.status(401).json({
        message: 'Unauthorized access, please sign in.',
        auth: false,
      });
    }
  };

module.exports = {
    createUser,
    findUser,
    isAuthenticated
}
