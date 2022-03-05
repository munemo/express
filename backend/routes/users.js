const {Router} = require('express')
const userController = require('../controllers/userController')
const userAthentication = require('../auth/auth')

const router = Router()

router.post('/', userController.register)
router.get('/',  userController.users)
router.get('/:id',  userController.getUserById)
router.get('/delete/:id', userAthentication,  userController.deleteUserById)
router.post('/login', userController.login)
router.post('/logout', userController.logout)

module.exports = router;