const {Router} = require('express')


const router = Router()

router.get('/', (req, res) => {
 res.send(200)
})


router.get('/postTitle/:title', (req, res) => {
    res.json({title: 'Some random Post'})
   })
   

module.exports = router;