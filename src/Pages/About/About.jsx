import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1 className="about-title">About EV-olution</h1>
        <p className="about-subtitle">Pioneering the future of sustainable transportation</p>
        
        <div className="about-content">
          <div className="about-mission">
            <h2>Our Mission</h2>
            <p>At EV-olution, we're dedicated to accelerating the world's transition to sustainable energy through electric vehicles. We believe that every person should have access to clean transportation options that don't compromise on performance, design, or affordability.</p>
          </div>
          
          <div className="about-timeline">
            <h2>Our Journey</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2018</h3>
                  <p>EV-olution was founded with a vision to create the most advanced electric vehicles in the world.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2020</h3>
                  <p>Launched our first prototype, demonstrating unprecedented battery technology and range capabilities.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2022</h3>
                  <p>Opened our flagship manufacturing facility, powered entirely by renewable energy.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2023</h3>
                  <p>Released our first production models to critical acclaim, setting new industry standards.</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>2025</h3>
                  <p>Expanding globally with new models and charging infrastructure to serve customers worldwide.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Innovation</h3>
                <p>We push the boundaries of what's possible in electric vehicle technology.</p>
              </div>
              
              <div className="value-card">
                <h3>Sustainability</h3>
                <p>Every decision we make considers its environmental impact.</p>
              </div>
              
              <div className="value-card">
                <h3>Performance</h3>
                <p>We believe electric vehicles should outperform their conventional counterparts.</p>
              </div>
              
              <div className="value-card">
                <h3>Accessibility</h3>
                <p>Our goal is to make electric mobility accessible to everyone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;