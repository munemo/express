const {Router} = require('express')
const postController = require('../controllers/postController')

const router = Router()

router.get('/',postController.getAllposts)
router.post('/',postController.createNewPost)
router.get('/:id',postController.getPostById)
router.get('/delete/:id',postController.deletePostById)



module.exports = router;