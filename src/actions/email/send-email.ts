'use server';
import nodemailer from 'nodemailer';

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export const sendEmail = (formData: FormData) => {
  const mailOptions: MailOptions = {
    from: `${formData.get('email')}`,
    subject: `${formData.get('subject')} - Mensaje de ${formData.get('names')} ${formData.get('lastNames')} - ${formData.get('email')}`,
    text: `${formData.get('text')}`,
    to: 'mrmoralestech@gmail.com'
  }
  console.log({mailOptions})
  let transporter = nodemailer.createTransport({
    service: 'Gmail', // Use your email provider
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
  });
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
  });
}
