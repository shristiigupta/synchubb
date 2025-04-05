import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero">

      <div className="grid-bg"></div>

      <div className="blue-lines">
      <span className="line" style={{ left: '15%', animationDuration: '5s' }}></span>
      <span className="line" style={{ left: '30%', animationDuration: '4s' }}></span>
      <span className="line" style={{ left: '45%', animationDuration: '6s' }}></span>
      <span className="line" style={{ left: '60%', animationDuration: '3.5s' }}></span>
      <span className="line" style={{ left: '75%', animationDuration: '5.5s' }}></span>

      </div>

    
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>XYZ</li>
          <li>ABC</li>
          <li>DEF</li>
        </ul>
      </nav>


      <div className="hero-content">
        <div className="badge">
          <span className="new">New</span>
          <span>Demo version is available to download</span>
        </div>
        <h1>A design test for</h1>
        <h1><span>SyncHubb</span></h1>
      </div>
    </div>

    
  );
};

export default HeroSection;
