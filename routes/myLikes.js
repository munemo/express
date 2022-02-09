const {Router} = require('express')
const likeController = require('../controllers/likeController')

const router = Router()

router.get('/',likeController.getAlllikes)
router.post('/',likeController.createNewLike)
router.get('/:id',likeController.getLikeById)
router.get('/delete/:id',likeController.deleteLikeById)



module.exports = router;