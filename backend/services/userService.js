// userService.js
const User = require('../models/user')

const createUser = async (email,password) =>{
    try {
        const createUser = await User.create({email,password})
        return createUser
    } catch (error) {
        console.log(error); 
        return "user error"
    }
}

const getUserValid = async (email,password) => {
    try {
        const user = await User.findOne({ email });
        console.log(user);
        return user
    } catch (error) {
        console.log(error);
        return error
    }
}

const getAllUsers = async (email,password) => {
    try {
        const user = await User.find();
        console.log(user);
        return user
    } catch (error) {
        console.log(error);
        return error
    }
}

module.exports = {
    createUser,
    getUserValid,
    getAllUsers
};