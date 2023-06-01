import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import SendIcon from '@mui/icons-material/Send';
import Resume from '../ResumeView/ResumeView';


export default function Contact() {

  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();


  useEffect(() => {
    if (emailSent) {
      const timer = setTimeout(() => {
        setEmailSent(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [emailSent]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m19uao8', 'template_bp2v5xx', form.current, 'GTFXUyur1bqYGfTkG')
      .then((result) => {
        console.log(result.text);
        console.log("message sent")
        setEmailSent(true);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <>
      <div className='contactForm'>
        <div className='formcontainer' id='contact'>
          {!emailSent && (
            <>
              <h1>Contact Me</h1>
              {/* <h3>I look forward to hearing from you!</h3> */}
              <div className='emailform'>
                <form ref={form} onSubmit={sendEmail}>
                  <div className='inputform'>
                    <input type="text" name="form_name" placeholder="Name" required/>
                    <input type="email" name="form_email" placeholder='Email' required/>
                  </div>
                  <textarea name="message" placeholder='Enter Message' required/>
                  <button id='contactButton' type="submit">
                    Send <SendIcon/>
                  </button>
                </form>
              </div>
            </>
          )}
          {emailSent &&
            <div className='formSent'>
              Thank you! Your Message Is On The Way!
            </div>}
        </div>
        <Resume />
      </div>

    </>
  );
}