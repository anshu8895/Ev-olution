import React, { useState } from 'react';
import './Explore.css';
// Import local images for car models
import modelQuantumImg from '../../assets/model-quantum.jpg';
import modelVelocityImg from '../../assets/model-velocity.jpg';
import modelUrbanImg from '../../assets/model-urban.jpg';

const Explore = () => {
  const [activeModel, setActiveModel] = useState(0);
  
  const models = [
    {
      id: 1,
      name: "Model Quantum",
      tagline: "The future is now",
      range: "700 miles",
      acceleration: "0-60 mph in 2.3s",
      topSpeed: "220 mph",
      price: "From $79,900",
      features: ["Autopilot included", "Over-the-air updates", "Solar charging capabilities"],
      image: modelQuantumImg
    },
    {
      id: 2,
      name: "Model Velocity",
      tagline: "Redefining sports cars",
      range: "550 miles",
      acceleration: "0-60 mph in 1.9s",
      topSpeed: "250 mph",
      price: "From $129,900",
      features: ["Ceramic braking system", "Track mode", "Aerodynamic design"],
      image: modelVelocityImg
    },
    {
      id: 3,
      name: "Model Urban",
      tagline: "City driving reimagined",
      range: "400 miles",
      acceleration: "0-60 mph in 3.5s",
      topSpeed: "155 mph",
      price: "From $45,900",
      features: ["Compact design", "Enhanced parking assist", "Customizable interior"],
      image: modelUrbanImg
    }
  ];
  
  return (
    <section id="explore" className="explore-section">
      <div className="explore-container">
        <h1 className="explore-title">Explore Our Models</h1>
        <p className="explore-subtitle">Discover the perfect electric vehicle for your lifestyle</p>
        
        <div className="model-selector">
          {models.map((model, index) => (
            <button 
              key={model.id}
              className={`model-tab ${activeModel === index ? 'active' : ''}`}
              onClick={() => setActiveModel(index)}
            >
              {model.name}
            </button>
          ))}
        </div>
        
        <div className="model-details">
          <div className="model-image">
            <img src={models[activeModel].image} alt={models[activeModel].name} />
          </div>
          
          <div className="model-info">
            <h2>{models[activeModel].name}</h2>
            <p className="model-tagline">{models[activeModel].tagline}</p>
            
            <div className="model-specs">
              <div className="spec">
                <h3>Range</h3>
                <p>{models[activeModel].range}</p>
              </div>
              <div className="spec">
                <h3>Acceleration</h3>
                <p>{models[activeModel].acceleration}</p>
              </div>
              <div className="spec">
                <h3>Top Speed</h3>
                <p>{models[activeModel].topSpeed}</p>
              </div>
              <div className="spec">
                <h3>Starting Price</h3>
                <p>{models[activeModel].price}</p>
              </div>
            </div>
            
            <div className="model-features">
              <h3>Key Features</h3>
              <ul>
                {models[activeModel].features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="model-actions">
              <button className="btn-configure">Configure Yours</button>
              <button className="btn-test-drive">Schedule Test Drive</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;