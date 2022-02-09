const express = require('express')
const session = require('express-session')
const passport = require('passport')
const local = require('./strategies/local')
const store = new session.MemoryStore()
const usersRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/posts')
const posts = require('./routes/myPosts')
const users = require('./routes/myUsers')
const likes = require('./routes/myLikes')



const app = express()
app.use(session({
    secret: 'john',
    cookie: {maxAge: 3000},
    saveUninitialized: false,
    resave:false,
    //session store
    store
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use((req, res, next) => {
    //console.log(store)
    next();
})

app.use(passport.initialize())
app.use(passport.session())

//app.use('/users',usersRoutes)
//app.use('/posts',postRoutes)
//app.use('/auth', authRoutes)
app.use('/posts', posts)
app.use('/users', users)
app.use('/likes', likes)


app.listen(3000, () =>{
    console.log('Server running')
})