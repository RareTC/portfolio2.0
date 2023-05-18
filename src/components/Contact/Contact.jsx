import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import SendIcon from '@mui/icons-material/Send';
import { MdEmail } from 'react-icons/md';



export default function Contact () {

    const [emailSent, setEmailSent] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const dialogRef = useRef(null);
    const form = useRef();

    // const handleClick = () => {
    //   setShowModal(false);
    // }
    
    const handleOutsideClick = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };
    
    useEffect(() => {
      if (showModal) {
        document.addEventListener('mousedown', handleOutsideClick);
      } else {
        document.removeEventListener('mousedown', handleOutsideClick);
      }
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [showModal]);
    
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
          <button onClick={() => setShowModal(true)}>
            <MdEmail />
            Contact
          </button>
          {showModal && (
          <dialog ref={dialogRef}>
            <div className='contactForm' id='contact'>
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
          </dialog>
          )}

        </>
      );
}