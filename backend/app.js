const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const postRoute = require('./routes/posts')
const userRoute = require('./routes/users')
const likeRoute = require('./routes/likes')
const auth = require('./routes/auth')

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
app.use('/auth', auth)


app.listen(4000, () =>{
    console.log('Server running')
})