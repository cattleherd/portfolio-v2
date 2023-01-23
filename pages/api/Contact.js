import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default function(){

  async function sendEmail(req, res) {
    try {
      // console.log("REQ.BODY", req.body);
      await sendgrid.send({
        to: "radwan.ahmed@live.com", // Your email where you'll receive emails
        from: "manuarorawork@gmail.com", // your website email address here
        subject: `you got mail from ${req.body.email}, name is ${req.body.name}`,
        html: `<div>${req.body.message}</div>`,
      });
    } catch (error) {
      // console.log(error);
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  
    return res.status(200).json({ error: "" });
  }
  
  sendEmail()

}
