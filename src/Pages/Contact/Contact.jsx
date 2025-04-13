import React, { useState } from 'react';
import './Contact.css';
// Import social media icons
import facebookIcon from '../../assets/facebook-brands.svg';
import twitterIcon from '../../assets/square-x-twitter-brands.svg';
import instagramIcon from '../../assets/instagram-brands.svg';
import linkedinIcon from '../../assets/linkedin-brands.svg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false
      });
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false
        });
      }, 5000);
    }, 1000);
  };
  
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">Have questions about our vehicles or want to schedule a test drive?</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Visit Us</h3>
              <p>123 Innovation Drive<br />Silicon Valley, CA 94043<br />United States</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>+1 (800) EV-OLUTION<br />Monday - Friday: 9AM - 6PM<br />Weekends: 10AM - 4PM</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email Us</h3>
              <p>info@ev-olution.com<br />sales@ev-olution.com<br />support@ev-olution.com</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">🔄</div>
              <h3>Social Media</h3>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <img src={facebookIcon} alt="Facebook" className="social-icon-img" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <img src={twitterIcon} alt="Twitter" className="social-icon-img" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <img src={instagramIcon} alt="Instagram" className="social-icon-img" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <img src={linkedinIcon} alt="LinkedIn" className="social-icon-img" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Send Us A Message</h2>
            
            {formStatus.submitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows="5" 
                    required 
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
        
        <div className="contact-map">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <div className="map-overlay">Interactive Map Coming Soon</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;