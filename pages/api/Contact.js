import nodemailer from "nodemailer";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.USER,
      to: process.env.EMAIL,
      subject: `Contact form submission from ${req.body.name}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${req.body.email}</p><br>
        <p><strong>Message: </strong> ${req.body.message}</p><br>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};