//@desc   Register new user
//@route POST /api/users
//@access Public
const registerUser = (req, res) => {
    res.json({ message: 'Register User' })
}

//@desc   Authenticate user
//@route POST /api/users/login
//@access Public
const loginUser = (req, res) => {
    res.json({ message: 'Login User' })
}

//@desc   Get user data, gets curently logged in user
//@route GET /api/me
//@access Public
const getMe= (req, res) => {
    res.json({ message: 'Display user data' })
}

module.exports ={
    registerUser,
    loginUser,
    getMe,
}