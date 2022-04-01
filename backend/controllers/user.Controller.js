const db = require('../models');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const saltRounds = 10
const User = db.users;

exports.register = (req, res) => {
  let email = req.body.email;
  try {
    // Check user enters all fields
    if (!email ) return res.status(400).json({ message: "Please enter your email address" });
    // Check the user enters the right formatted email
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === false) return res.status(400).json({ message: "Incorrect email format" });
 
    {
      const user = {
      email: req.body.email
    }
    User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({message:"Please enter a unique email address" });
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'john.chimbani@gmail.com', 
        pass: 'MzilikaziKINGOF@!JOZA#'
      }
    });

    const mailOptions = {    
    from: 'john.chimbani@gmail.com',
    to: email,
    subject: 'Welcome to Mentify. Please confirm your email',
    html: '<p>Click <a href="//localhost:3000/confirm/?email=' + email + '">here</a> to complete your account registration</p>'
     };

   transporter.sendMail(mailOptions, function(error,info){

    if (error) {
      res.send({message:"Your email could not be registered, please try again" })
     } 

     console.log('Registration Email sent ');

   })
   

   }    
} catch (error) {
    console.log(error)
  
}        
  };

  exports.confirmation = async (req, res) => {


    const email = req.params.email;
    const password = req.body.password
    const reg = /^([A-Za-z0-9_\-\.])+\@!$/;
   // if (reg.test(password) === false) return res.status(400).json({ message: "Password must include at least 1 special character" });
    console.log(reg.test(password))

    if (password.length < 6) return res.status(400).json({ message: "Password must be at least 6 characters long" });

    const user = await User.findOne({where: {email:email}})
    if(!user){
      res.json("Please make sure your email is registered before you continue")
    }
    else{

      bcrypt.hash(password,saltRounds, async (err,hash) =>{
        const user = {
          password: hash,
          active:true
        }
        
        User.update(user, { where:{ email:email}})
        .then(user=>{
          res.send({message: "Your password has been registered."})
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Please try again because we could not register your password."
          });
  
        })
        
     })
     
    } 
  };

  
exports.login = async (req, res) => {
  const key = process.env.JWT
  let {email,password} = req.body
  const user = await User.findOne({where: {email:email}})
  try {
      bcrypt.compare(password, user.password, (err, response) => {
        if(response){
           const id = user.id
           const token = jwt.sign({id}, key,
            {expiresIn: 300,})
            res.json({auth: true, token: token, email: email}) 
         }
        else{
            res.send({auth: false, message: "Your password is is incorrect. Please try again with the correct password."}) 
        }
    })
  }catch(error){
    console.log(error)
  }    
}

exports.logout = async (req, res) => {
 // res.redirect('/settings')
  
   res.send('You are now logged out!')
}

exports.preferences = async (req, res) => {
  let {role, language, speciality, about} = req.body
  let email = req.params.email


  try {
    const user = await User.findOne({where: {email:email}})
    console.log(user.role)
    if(user.role == null & user.language == null & user.speciality == null & user.about == null){
      const user ={
        role: role,
        about: about,
        language: language,
        speciality: speciality,
        published: true
      }

      User.update(user, { where:{ email:email}})
    .then(user=>{
      res.send({message: "Your prefeferences have been updated."})
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "We could not save your preferences, please try again."
      });

    })
    }  else{
      res.send({message: "Your prefeferences already been updated."})
    } 

 
  }catch(error){
    console.log(error)
  }    
}
