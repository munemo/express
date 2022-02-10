const {Router} = require('express')
const database = require('../config/db')
const passport = require('passport')
const loginController = require('../controllers/loginContoller')

const router = Router()

router.post('/login/', loginController.loginUser, (req, res, ) =>{
    passport.authenticate('local')
    console.log('you hit me!')
    res.send(200)

} )
module.exports = router;

