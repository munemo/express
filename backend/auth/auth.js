const  verifyJWT = (req, res, next) => {
    const key = process.env.JWT
    const token = req.headers["x-access-token"]

    if(!token){

        res.send("You do not have a token and therefore cannot access this content")
    }else{
        jwt.verify(token, key, (err, decoded) => {

            if(err) {
                res.json({auth: false, message: "Authentication failed, please try again with correct credentials"})
            }
            else{
                req.userId = decoded.id
                console.log( req.userId = decoded.id)
                next()
            }
        })
    }
}

module.exports = verifyJWT