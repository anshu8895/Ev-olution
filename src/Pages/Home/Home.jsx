import React from 'react';
import './Home.css';

const Home = () => {
  const handleDiscoverModelsClick = () => {
    // Navigate to the Explore section smoothly
    document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">The Future of Mobility</h1>
          <p className="home-subtitle">Experience the next generation of electric vehicles</p>
          
          <div className="home-features">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Revolutionary Range</h3>
              <p>Up to 700 miles on a single charge</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔋</div>
              <h3>Rapid Charging</h3>
              <p>0-80% in just 15 minutes</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Zero Emissions</h3>
              <p>100% electric, 0% compromise</p>
            </div>
          </div>
          
          <button className="home-cta" onClick={handleDiscoverModelsClick}>Discover Models</button>
        </div>
      </div>
    </section>
  );
};

export default Home;