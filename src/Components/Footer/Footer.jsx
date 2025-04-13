import React from 'react';
import './Footer.css';
import facebookIcon from '../../assets/facebook-brands.svg';
import twitterIcon from '../../assets/square-x-twitter-brands.svg';
import instagramIcon from '../../assets/instagram-brands.svg';
import linkedinIcon from '../../assets/linkedin-brands.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo-section">
            <h2 className="footer-logo">EV-olution</h2>
            <p>Pioneering the future of sustainable transportation with innovative electric vehicles.</p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" className="footer-social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <img src={twitterIcon} alt="Twitter" className="footer-social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" className="footer-social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" className="footer-social-icon" />
              </a>
            </div>
          </div>

          <div className="footer-links-container">
            <div className="footer-links">
              <h3>Company</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#investors">Investors</a></li>
                <li><a href="#sustainability">Sustainability</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>Vehicles</h3>
              <ul>
                <li><a href="#explore">Model Quantum</a></li>
                <li><a href="#explore">Model Velocity</a></li>
                <li><a href="#explore">Model Urban</a></li>
                <li><a href="#explore">Compare Models</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>Resources</h3>
              <ul>
                <li><a href="#charging">Charging Network</a></li>
                <li><a href="#service">Service Centers</a></li>
                <li><a href="#support">Support</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h3>Contact</h3>
              <ul>
                <li>123 Innovation Drive</li>
                <li>Silicon Valley, CA 94043</li>
                <li>+1 (800) EV-OLUTION</li>
                <li>info@ev-olution.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {currentYear} EV-olution. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <a href="#terms">Terms of Use</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#cookies">Cookie Policy</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;