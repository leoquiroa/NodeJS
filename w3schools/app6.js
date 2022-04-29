/**
 * The Nodemailer module makes it easy to send emails from your computer.
 * npm install nodemailer
 */

 var nodemailer = require('nodemailer');

 var transporter = nodemailer.createTransport({
   service: 'hotmail',
   auth: {
     user: 'leoq057@hotmail.com',
     pass: 'password'
   }
 });
 
 var mailOptions = {
   from: 'leoq057@hotmail.com',
   to: 'leonelquiroa@gmail.com',
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