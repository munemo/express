const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const userModel = require('./models/User')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const userRoute = require('./routes/users')
const likeRoute = require('./routes/likes')


const app = express()
//specify client origin  and method in cors to be able to work with cookies

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}))


app.use(cookieParser())
app.use(express.json())
app.use( bodyParser.urlencoded({ extended: true}))

app.use(session({
    key: 'userId',
    secret: 'john',
    cookie: {
        expires: 60 * 60 * 24
    },
    saveUninitialized: false,
    resave:false
}))

app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url} `)
    next();
})

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

app.post('/login', async (req, res) => {
        let {email,password} = req.body
        let  [user,_] = await userModel.findByString(email) 

            if(user.length > 0){
                bcrypt.compare(password, user[0].password, (err, response) => {
                    if(response){
                        req.session.user = user
                        console.log(req.session.user)
                        res.send(user)
                    }
                    else{
                        res.send({message: "Wrong credentials!"}) 
                    }
                })
            } else{
                res.send({message: "User does not exist"})
            }
                    
})


app.listen(4000, () =>{
    console.log('Server running')
})