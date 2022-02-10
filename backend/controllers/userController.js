const userModel = require('../models/User')
const bcrypt = require('bcrypt')
const saltRounds = 10


exports.getAllusers = async (req, res, next, ) => {
    try{
        const [users,_] = await userModel.findAll()
        res.status(200).json( users)
    }catch(error)
    {
        console.log(error)
        next(error)
    }
}
 
exports.createNewUser = async (req, res, next) => {
    try {
       
        let {email, password} = req.body
        bcrypt.hash(password,saltRounds, async (err,hash) =>{
        let {email, password, user} = req.body
        let  newUser = new userModel(email, hash, user)
        newUser  = await newUser.save()
        res.status(201).json({message: "User created"})
     })
        
    } catch (error) {
        console.log(error)
        next(error)
        
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
            res.status(201).json({message: `User ${userId} deleted!`} )
    } catch (error) {
        console.log(error)
    }

}
