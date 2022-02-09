const {Router} = require('express')
//Importing datasbase file
const database = require('../config/db')
//Importing express-validator and extracting check and validationResult methods
const {check, validationResult} = require('express-validator')

const router = Router()

//Getting all users from database
router.get('/', async (req, res) => {
const results = await database.promise().query(`SELECT * FROM users`)
res.status(200).send(results[0])
 
})

//Posting users to database
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
], async (req, res) =>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(403).json({errors: errors.array()})

    }
    //const {users_id, email, password, user} = req.body;
    const {email, password, user, users_id} = req.body;
    const sql =   `INSERT INTO users VALUES('${users_id}','${email}','${password}','${user}')`;

});

module.exports = router;