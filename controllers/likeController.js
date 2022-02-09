const likeModel = require('../models/Like')


exports.getAlllikes = async (req, res, next, ) => {
    try{
        const [likes,_] = await likeModel.findAll()
        res.status(200).json({count: likes.length, likes})
    }catch(err)
    {
        console.log(err)
        next(err)
    }
}

exports.createNewLike = async (req, res, next) => {
        try {
             let {post_id, user_id} = req.body
             let like = new likeModel(post_id, user_id)
             like = await like.save()
             res.status(201).json({message: "Like created"})
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
   
    
exports.getLikeById = async (req, res, next) => {
    try {
        let likeId = req.params.id
        let [like,_] = await likeModel.findById(likeId)
        res.status(200).json({like:like[0]})
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}


exports.deleteLikeById = async (req, res, next) => {
    try {
            let likeId = req.params.id
            let [like,_] = await likeModel.deleteById(likeId)
            res.status(201).json({message: `Post ${likeId} deleted!`} )
    } catch (error) {
        console.log(error)
    }

    
}