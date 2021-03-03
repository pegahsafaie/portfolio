const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
require('dotenv').config()
const transport = {
  //all of the configuration for making a site send an email.

  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'pegahsafaie@gmail.com',
    pass: '3Pig.com'
  }
}

const transporter = nodemailer.createTransport(transport);
  transporter.verify((error, success) => {
    if(error) {
      //if error happened code ends here
      console.error(error)
    } else {
      //this means success
      console.log('users ready to mail myself')
    }
  });

router.post('/api/sendEmail', (req,res, next) => {
  console.log(req.body);
  const mail = {
    from: process.env.THE_EMAIL,
    to: process.env.THE_EMAIL,
    subject: req.body.subject,
    text: `
    from:
    ${req.body.name} 

    contact: ${req.body.email}

    message: 

    ${req.body.text}`
  }

  transporter.sendMail(mail, (err,data) => {
    if(err) {
      res.json({
        status: 'fail',
        err
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })
});

module.exports = router