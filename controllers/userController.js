const userModel = require('../models/User')


exports.getAllusers = async (req, res, next, ) => {
    try{
        const [users,_] = await userModel.findAll()
        res.status(200).json({count: users.length, users})
    }catch(err)
    {
        console.log(err)
        next(err)
    }
}


exports.createNewUser = async (req, res, next) => {
    try {
        let {email, password, user} = req.body
        let  newUser = new userModel(email, password, user)
        newUser  = await newUser.save()
        res.status(201).json({message: "User created"})
        
    } catch (error) {
        console.log(err)
        next(err)
        
    }    
}


exports.getUserById = async (req, res, next) => {
    try {
        let userId = req.params.id
        let [user,_] = await userModel.findById(userId)
        res.status(200).json({user:user[0]})
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}


exports.deleteUserById = async (req, res, next) => {
    try {
            let userId = req.params.id
            let [user,_] = await userModel.deleteById(userId)
            res.status(201).json({message: `Post ${userId} deleted!`} )
    } catch (error) {
        console.log(error)
    }


}