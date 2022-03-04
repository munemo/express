const userAthentication = require('../auth/auth')
const {Router} = require('express')

const app = Router()

app.get('/check', userAthentication, (req, res) => {
    console.log('you rock!')
}
)

module.exports = app