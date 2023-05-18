import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import SendIcon from '@mui/icons-material/Send';


export default function Contact({colors}) {

  
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();
  const [c0, c1, c2, c3, c4] = colors;
  
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
          <div className='contactForm' id='contact' style={{backgroundColor: c3}}>
            <div className='formcontainer' style={{backgroundColor: c2}}>
            {!emailSent && (
              <>
                <h1 style={{color: c1}}>Say Hello!</h1>
                <h3 style={{color: c1}}>I look forward to hearing from you!</h3>
                <div className='emailform'>
                  <form ref={form} onSubmit={sendEmail}>
                    {/* <label>Name</label> */}
                    <div className='inputform'>
                      <input type="text" name="form_name" placeholder="Name" required 
                      style={{border: `2px solid ${c1}`, caretColor: c0, color: c0,}}/>
                      <input type="email" name="form_email" placeholder='Email' required 
                      style={{border: `2px solid ${c1}`, caretColor: c0, color: c0,}}/>
                    </div>
                    <textarea name="message" placeholder='Enter Message' required
                     style={{border: `2px solid ${c1}`, caretColor: c0, color: c0,}}/>
                    <button id='contactButton' type="submit">
                      Send <SendIcon />
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
              </div>

        </>
      );
}