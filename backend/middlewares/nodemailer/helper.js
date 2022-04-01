const nodemailer = require('nodemailer');
const receiver = require('../../controllers/tutorialController')


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'john.chimbani@gmail.com',
      pass: 'MbuyaNEHANDA!1957'
    }
  });

  
  const mailOptions = {
    
    from: 'john.chimbani@gmail.com',
    to: `user@outlook.com`,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  module.exports = {
    transporter,
    mailOptions,
    
 
    
    };