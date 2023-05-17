import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import SendIcon from '@mui/icons-material/Send';


export default function Contact () {

    const [emailSent, setEmailSent] = useState(false);
    const form = useRef();

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
            {!emailSent && (
              <>
                <h1>Say Hello!</h1>
                <h3>I look forward to hearing from you!</h3>
                <form ref={form} onSubmit={sendEmail}>
                  {/* <label>Name</label> */}
                  <input type="text" name="form_name" placeholder="Name" required/>
                  <input type="email" name="form_email" placeholder='Email' required/>
                  <textarea name="message" placeholder='Enter Message' required/>
                  <button id='contactButton' type="submit">
                    Send <SendIcon />
                  </button>
                </form>
              </>
            )}
            {emailSent && 
            <div className='formSent'>
              Thank you! Your Message Is On The Way!
            </div>}
          </div>

        </>
      );
}