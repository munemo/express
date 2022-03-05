const {Router} = require('express')
const userAthentication = require('../auth/auth')

const router = Router()

router.get('/user', userAthentication,  (req, res) =>{

})

module.exports = router