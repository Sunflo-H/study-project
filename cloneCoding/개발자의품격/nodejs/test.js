"use strict";

const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2224c4a43f0f20",
      pass: "9e6fba9273a1fc"
    }
}

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option,(error,info)=>{
        if(error){
            console.log(error);
        }else {
            console.log(info);
        }
    })
}

let email_data = {
    from: "hbj2cjswodla@gmail.com",
    to:"hbj2cjswodla@gamil.com",
    subject: "테스트 메일",
    text : "node mailer test"
}

// send(email_data);

let transporter = nodemailer.createTransport(email);
transporter.sendMail(email_data);