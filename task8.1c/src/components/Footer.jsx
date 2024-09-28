import React, { useState, useEffect } from 'react';
import './Footer.css';
import emailjs from 'emailjs-com';

const Footer = () => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        emailjs.init("ske9zADikdaokBHXU"); 
    }, []);

    const sendEmail = (event) => {
        event.preventDefault();

        if (!email) {
            alert("Please fill in all fields");
            return;
        }

        emailjs.send("service_en22f8l", "template_eu66tuy", {
            sender_email: email
        })
        .then((response) => {
            alert("Your Message Was Sent Successfully!");
            setEmail(''); 
        })
        .catch((error) => {
            alert("Oops! Something Went Wrong");
        });
    };

    return (
        <footer className="footer">
          <div className="footer-section explore">
          <form id="contact-form">
    <div class="form-inline">
                <p>SIGN UP FOR OUR DAILY INSIDER</p>
                    <input type="email" id="email" name="email" placeholder="Enter your email"/>
                    <div className='footerbutton'>
                    <button type="submit">Subscribe</button>
                    </div>
    </div>
    </form>
    <div className="content">
            <div className="section">
              <h2>Explore</h2>
                <p>Home</p>
                <p>Questions</p>
                <p>Articles</p>
                <p>Tutorials</p>
              
            </div>
    
            <div className="section">
              <h2>Support</h2>
                <p>FAQs</p>
                <p>Help</p>
                <p>Contact Us</p>
            </div>
    
            <div className="section">
              <h2>Stay connected</h2>
              <div className="social-media">
              <a href="www.google.com">
              <img src="data:image/png;base64,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" alt="Logo" class="logo"/>
             </a>
             <a href="www.instagram.com">
              <img src="data:image/jpeg;base64,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" alt="Logo" class="logo"/>
             </a>
             <a href="www.youtube.com">
              <img src="data:image/jpeg;base64,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" alt="Logo" class="logo"/>
             </a>
    
              </div>
            </div>
          </div>
    
          <div className="base">
            <h2>DEV@Deakin 2022</h2>   
            <div className='baseparts'>    
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
              <a href="#">Code of Conduct</a>
            </div>
          </div>
        </div>
    
        </footer>
      );

    
};

export default Footer;