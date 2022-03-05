const userModel = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 10

exports.register = async (req, res, next) => {
    let {email, password, role} = req.body
    try {
        // Check user enters all fields
        if (!email || !password) return res.status(400).json({ message: "Please provide email and password" });
        // Check the user enters the right formatted email
        const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email) === false) return res.status(400).json({ message: "Incorrect email format" });
        // Check user password length is more than 8 characters
        if (password.length < 6) return res.status(400).json({ message: "Password must be at least 6 characters long" });
        // create new User object    
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


exports.login = async (req, res, next) => {
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

exports.logout = async (req, res, next) => {
        //res.cookie('userId', '', {maxAge:1})
        res.send('thanks for logging out!')
  
}

exports.users = async (req, res ,next, ) => {
    try{
        const [users,_] = await userModel.findAll()
        res.status(200).json( users)
    }catch(error)
    {
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
            let id = req.params.id
            let [user,_] = await userModel.deleteById(id)
            res.status(201).json({message: `User ${id} deleted!`} )
    } catch (error) {
        console.log(error)
    }

}


