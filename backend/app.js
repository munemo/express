const express = require('express')
const userModel = require('./models/User')
//const session = require('express-session')
const cors = require('cors')
const db = require('./config/db')
//const store = new session.MemoryStore()

const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const userRoute = require('./routes/users')
const likeRoute = require('./routes/likes')


const app = express()
app.use(cors())
/*
app.use(session({
    secret: 'john',
    cookie: {maxAge: 3000},
    saveUninitialized: false,
    resave:false,
    //session store
    store
}))*/
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use((req, res, next) => {
    console.log(`${req.method} - ${req.url} `)
    next();
})

app.use('/users', userRoute)
app.use('/likes', likeRoute)
app.use('/posts', postRoute)

app.post('/login', async (req, res) => {

    
        let {email,password} = req.body
        let  [user,_] = await userModel.findByString(email,password) 
        if(user){
            res.send( user)
        }else{
            console.log('No use')
            res.send({message: "wrong credentials"})
        }
     
})


app.listen(4000, () =>{
    console.log('Server running')
})