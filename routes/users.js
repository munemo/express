const {Router} = require('express')
//Importing datasbase file
const database = require('../database')
//Importing express-validator and extracting check and validationResult methods
const {check, validationResult} = require('express-validator')

const router = Router()

router.get('/', async (req, res) => {
//geting all users from database
const results = await database.promise().query(`SELECT * FROM USERS`)
res.status(200).send(results[0])
 
})

// validating data by using check method when data is posted
//validationResult method is used to save errors
router.post('/', 
[check('username')
.notEmpty()
.withMessage('Username cannot be empty')
.isLength({min: 3})
.withMessage('Username must be at leat 5 characters')
//check('password').notEmpty().withMessage('Password cannot be empty'),
], (req, res) =>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(403).json({errors: errors.array()})

    }
    const {username, password} = req.body;
    if(username && password) {
        try{
            database.promise().query(`INSERT INTO USERS VALUES('${username}','${password}')`)
            res.status(201).send({msg: 'Created user'})
        }
        catch(err){
            console.log(err)
        }
    
    }
})

module.exports = router;