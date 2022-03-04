const dotenv = require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bodyParser = require('body-parser')
const postRoute = require('./routes/posts')
const userRoute = require('./routes/users')
const likeRoute = require('./routes/likes')

const app = express()

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
}))

app.use(express.json())
app.use( bodyParser.urlencoded({ extended: true}))

app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url} `)
    next();
})

app.use('/users', userRoute)
app.use('/likes', likeRoute)
app.use('/posts', postRoute)


const  verifyJWT = (req, res, next) => {
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


module.exports = verifyJWT




app.listen(4000, () =>{
    console.log('Server running')
})