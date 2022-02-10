const postModel = require('../models/Post')
const {check, validationResult} = require('express-validator')

exports.getAllposts = async (req, res, next, ) => {
    try{
        const [posts,_] = await postModel.findAll()
        res.status(200).json({count: posts.length, posts})
    }catch(error)
    {
        console.log(error)
        next(error)
    }
}

exports.createNewPost = async (req, res, next) => {
    try {
        let {title, body} = req.body
        let post = new postModel(title, body)
        post = await post.save()
        res.status(201).json({message: "Post created"})
        
    } catch (error) {
        console.log(error)
        next(error)
        
    }    
}

exports.getPostById = async (req, res, next) => {
    try {
        let postId = req.params.id
        let [post,_] = await postModel.findById(postId)
        res.status(200).json({post:post[0]})
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.deletePostById = async (req, res, next) => {
    try {
            let postId = req.params.id
            let [post,_] = await postModel.deleteById(postId)
            res.status(201).json({message: `Post ${postId} deleted!`} )
    } catch (error) {
        console.log(error)
    }


}
