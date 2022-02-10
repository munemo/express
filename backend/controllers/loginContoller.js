const userModel = require('../models/User')


exports.loginUser = async (req, res, next) => {
    try {
            let {email, password} = req.body
            let username = await userModel.findByString(email)
            console.log(username)
           // res.status(201).json({message: `User ${userId} deleted!`} )
    } catch (error) {
        console.log(error)
    }


}