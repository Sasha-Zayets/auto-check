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
  from: "autocheck.cz@gmail.com",
  to: "autocheck.cz@gmail.com", // when need send email
  subject: "New user from form",
};

async function sendEmailToOwner({ name, phone }) {
  return new Promise((resolve, reject) => {
    transporter.sendMail({
      ...mailOptions,
      text: `New user submit form, name: ${name}, phone: ${phone}`
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
