const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GOOGLE_USER_EMAIL,
    pass: process.env.GOOGLE_USER_PASS,
  },
});

const mailOptions = {
  from: "sachazaets@gmail.com",
  to: "sasha-zayets@ukr.net", // when need send email
  subject: "Hello from Nodemailer",
  // text: "This is a test email sent using Nodemailer.",
};

async function sendEmailToOwner({ name, email }) {
  return new Promise((resolve, reject) => {
    transporter.sendMail({
      ...mailOptions,
      text: `New user submit form, name: ${name}, email: ${email}`
    }, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
        reject(error);
      } else {
        console.log("Email sent: ", info.response);
        resolve();
      }
    });
  });
}

module.exports = { sendEmailToOwner };
