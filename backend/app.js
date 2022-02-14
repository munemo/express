const dotenv = require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const userModel = require('./models/User')
const postRoute = require('./routes/posts')
const userRoute = require('./routes/users')
const likeRoute = require('./routes/likes')
const jwt = require('jsonwebtoken')

const app = express()

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}))

app.use(cookieParser())
app.use(express.json())
app.use( bodyParser.urlencoded({ extended: true}))

app.use('/users', userRoute)
app.use('/likes', likeRoute)
app.use('/posts', postRoute)

app.get('/login', (req, res) => {
    if(req.session.user) {
        res.send({loggedIn: true, user: req.session.user})
    }else{
        res.send({loggedIn: false})
    }
})

const verifyJWT = (req, res, next) => {
    const key = process.env.JWT
    const token = req.headers["x-access-token"]

    if(!token){

        res.send("You do not have a token and therefore cannot access this content")
    }else{
        jwt.verify(token, key, (err, decoded) => {

            if(err) {
                res.json({auth: false, message: "Authentication failed, please try again with correct credentials"})
            }
            else{
                req.userId = decoded.id
                next()
            }
        })
    }
}
app.get('/auth', verifyJWT, (req,res) =>{

    res.send("You are authenticated!")
})
app.post('/login', async (req, res) => {
    const key = process.env.JWT
        let {email,password} = req.body
        let  [user,_] = await userModel.findByString(email) 

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
})

app.listen(4000, () =>{
    console.log('Server running')
})