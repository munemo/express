const userModel = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 10


exports.getAllusers = async (req, res ,next, ) => {
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
    let {email, password, role} = req.body
    try {
        bcrypt.hash(password,saltRounds, async (err,hash) =>{
        let  newUser = new userModel(email, hash, role)
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

exports.loginUser = async (req, res, next) => {
        const key = process.env.JWT
        let {email,password} = req.body
        let  [user,_] = await userModel.findByString(email) 
        try {
            if(user.length > 0){
            bcrypt.compare(password, user[0].password, (err, response) => {
                if(response){
                   const id = user[0].id
                   const token = jwt.sign({id}, key,
                    {expiresIn: 300,})
                   res.json({auth: true, token: token, person: user}) 
                   console.log({auth: true, token: token, person: user})
                 }
                else{
                    res.send({auth: false, message: "Wrong credentials!"}) 
                }
            })
        } else{
            res.json({auth: false, message: "User does not exist"})  
        }              
        } catch (error) {
            console.log(error)
        }
        
}