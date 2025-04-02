import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com'

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  serviceID = 'service_i23nh1g';
  templateID = 'template_q1ht91d';
  userID = 'QMa7GYz5F2QWsf9bU';

  constructor() { }

  sendEmail(to_email, title, message): void {
    const templateParams = {
      to_email: to_email,
      title: title,
      message: message,
    };

    emailjs.send(this.serviceID, this.templateID, templateParams, this.userID)
    .then(response => {
      console.log('Email sent successfully:', response);
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
  }
}
