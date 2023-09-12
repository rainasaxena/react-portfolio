import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../assets/styles/Footer.scss";
import toast, {Toaster} from 'react-hot-toast';

const Footer = () => {
  const [status, setStatus] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ys0ydkp', 'template_ahj3b4a', form.current, 'lVd1vrU3NK2jkh923')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Query Sent Successfully!")
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div>
      <div id="footer-container">
        <div className="deets-content">
          <h3>GET IN TOUCH</h3>
          <p>
            Do you have any cool architectural ideas or want to team up on a
            project? Feel free to reach out; I'm all ears and excited to connect
            with fellow architects!
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="data">
            {/* <label>Name:</label> */}
            <input type="text" name="user_name" placeholder='Enter your name' />
            {/* <label>E-mail ID:</label> */}
            <input type="email" name="user_email" placeholder="Enter your E-mail" />
            </div>            
            {/* <label>Type your message:</label> */}
            <textarea name="message" placeholder='Enter your message here..' />
            <button className='send-email' type="submit" value="Send" >Send</button>
            <Toaster position='bottom-center'/>
          </form>
          
          <h6>©Designed & developed by Raina Saxena</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
