const {Router} = require('express')
//Importing datasbase file
const database = require('../database')
//Importing express-validator and extracting check and validationResult methods
const {check, validationResult} = require('express-validator')

const router = Router()

router.get('/', async (req, res) => {
//geting all users from database
const results = await database.promise().query(`SELECT * FROM customer`)
res.status(200).send(results[0])
 
})

// validating data by using check method when data is posted
//validationResult method is used to save errors
router.post('/', 
[check('email')
.isEmail().withMessage('Please enter valid email address').normalizeEmail()
.notEmpty()
.withMessage('Username cannot be empty')
.isLength({min: 3})
.withMessage('Username must be at leat 5 characters'),
check('password').notEmpty().withMessage('Password cannot be empty').isLength({min: 5})
.withMessage('Password must be at leat 5 characters').isStrongPassword(),
], (req, res) =>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(403).json({errors: errors.array()})

    }
    const {email, password} = req.body;

    if(email && password) {
        try{
            database.promise().query(`INSERT INTO customer VALUES('${email}','${password}')`)
            res.status(201).send({msg: 'Created user'})
        }
        catch(err){
            console.log(err)
        }
    
    }
})

module.exports = router;