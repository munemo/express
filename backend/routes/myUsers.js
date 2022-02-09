const {Router} = require('express')
const userController = require('../controllers/userController')

const router = Router()

router.get('/', userController.getAllusers)
router.post('/',userController.createNewUser)
router.get('/:id', userController.getUserById)
router.get('/delete/:id',userController.deleteUserById)

module.exports = router;