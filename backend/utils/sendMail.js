import nodemailer from "nodemailer";
import { SENDER_EMAIL, SENDER_EMAIL_PASSWORD } from "./constants.js";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: SENDER_EMAIL,
    pass: SENDER_EMAIL_PASSWORD,
  },
});

export const sendMail = (email, subject, message) => {
  try {
    const mailOptions = {
      from: "no-reply@content.com",
      to: email,
      subject,
      text: message,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.log(error);
    throw new Error("Unable to send an email. ");
  }
};
