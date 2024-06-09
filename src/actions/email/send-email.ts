"use server";
import nodemailer from "nodemailer";

interface MailOptions {
  from: {
    name: string;
    address: string;
  };
  to: string;
  subject: string;
  text: string;
}

export const sendEmail = async (formData: FormData) => {
  const mailOptions: MailOptions = {
    from: {
      name: `${formData.get("names")} ${formData.get("lastNames")}`,
      address: "myEmail@gmail.com",
    },
    subject: `${formData.get("subject")} - Mensaje de ${formData.get(
      "names"
    )} ${formData.get("lastNames")} - ${formData.get("email")}`,
    text: `${formData.get("text")}`,
    to: "mrmoralestech@gmail.com",
  };
  console.log({ mailOptions });
  let transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com", // Use your email provider
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  return {
    ok: true,
  };
};
