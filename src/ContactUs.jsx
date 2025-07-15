import React, { useRef } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';
import {
  FaUser, FaEnvelope, FaPen, FaCommentDots, FaPhoneAlt, FaMapMarkerAlt
} from 'react-icons/fa';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('your_service_id', 'your_template_id', form.current, 'your_public_key')
      .then(() => {
        alert('✅ Message sent successfully!');
        form.current.reset();
      }, () => {
        alert('❌ Failed to send. Please try again.');
      });
  };

  return (
    <section className="contact-section">
  
      <div className="contact-container">
       
        <div className="contact-left">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="subtitle">We're Here to Power Your Digital Transformation</p>
          <p className="description">
            Have questions about our services or want to collaborate on your next big idea?
            Reach out to <strong>TechNova Solutions</strong> — your trusted partner in innovation.
          </p>

          <div className="info-box">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h4>Call Us</h4>
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 987-6543</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>support@technova.com</p>
            </div>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Office Address</h4>
              <p>301 Innovation Drive, Suite 200</p>
              <p>San Francisco, CA 94105</p>
              <p>United States</p>
            </div>
          </div>
        </div>

     
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h2 className="form-title">Send Us a Message</h2>

            <div className="input-group">
              <FaUser className="icon" />
              <input type="text" name="user_name" placeholder="Your Name" required />
            </div>
            <div className="input-group">
              <FaEnvelope className="icon" />
              <input type="email" name="user_email" placeholder="Your Email" required />
            </div>
            <div className="input-group">
              <FaPen className="icon" />
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <div className="input-group textarea">
              <FaCommentDots className="icon" />
              <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
