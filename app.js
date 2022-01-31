const express = require('express')
const session = require('express-session')
const mysql = require('mysql2')
const store = new session.MemoryStore()
const usersRoutes = require('./routes/users')
const postRoutes = require('./routes/posts')
const dotenv = require('dotenv')

dotenv.config()

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

app.use('/users',usersRoutes)
app.use('/posts',postRoutes)


app.listen(3000, () => {

    console.log('Sever is running')
})