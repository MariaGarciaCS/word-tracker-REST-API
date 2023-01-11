const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//@desc   Register new user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please fill in all fields')
    }

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('Email already in use')
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name: name,
        email: email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})

//@desc   Authenticate user
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Login User' })
})

//@desc   Get user data, gets curently logged in user
//@route GET /api/me
//@access Public
const getMe = asyncHandler(async (req, res) => {
    res.json({ message: 'Display user data' })
})

module.exports ={
    registerUser,
    loginUser,
    getMe,
}