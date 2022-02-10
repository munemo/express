const LocalStrategy = require('passport-local')
const passport = require('passport')
const userModel = require('../models/User')
/*
passport.serializeUser((email, done) => {
    done(null, email)
    console.log(email)

})

passport.deserializeUser(async (email, done) => {
    try{    
        const result = await db.promise().query(`SELECT * FROM users WHERE email = '${email}'`)
        if(result[0][0]){
             done(null, result[0][0])
        
        } 


    }catch (err) {

            done(err,null)
    }
    
})*/


passport.use(new LocalStrategy(
    async (email, password, done) =>{
         
         const result = await userModel.findByString(email)
        //const result = await db.promise().query(`SELECT * FROM USERS WHERE EMAIL = '${email}'`)
        
         console.log(result)
       /* try {
                const result = await db.promise().query(`SELECT * FROM users WHERE email = '${email}'`)
               
                if(result[0].length === 0){
                     done(null,false)
                }else{
                    if(result[0][0].password === password){
                          done(null,result[0])
                    }else{
                      done(null, false)
                    }
                }
            
    
        } catch (err){
          done(err,false)
       }*/
    }))