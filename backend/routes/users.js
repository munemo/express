const {Router} = require('express')
const userController = require('../controllers/userController')
const userAthentication = require('../auth/auth')

const router = Router()

//use userAuthentication method if user needs to be authenticated
router.post('/', userController.register)
router.get('/', userController.users)
router.get('/:id', userController.getUserById)
router.get('/delete/:id', userController.deleteUserById)
router.post('/login', userController.login)
//router.get('/auth', userAthentication)
router.get('/logout', (req, res) => {
    res.cookie('userId', '', {maxAge:1})
})

module.exports = router;