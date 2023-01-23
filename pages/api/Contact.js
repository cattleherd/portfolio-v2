
// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
    require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
      secure: true,
    })
    const mailData = {
      from: process.env.USER,
      to: process.env.EMAIL,
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
    }
    
    const sendMessage = async ()=>{
      await transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          res.status(200).send('success')
          console.log(info)
      })
    }

    sendMessage()


  }