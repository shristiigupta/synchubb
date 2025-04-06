import React from 'react';
import './HeroSection.css';
import BackgroundGrid from './BackgroundGrid';

const HeroSection = () => {
  // Generate sparkle dots
  const sparkles = Array.from({ length: 25 }).map((_, i) => (
    <div
      key={i}
      className="sparkle"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
      }}
    />
  ));

  return (
    <div className="hero">
      <BackgroundGrid />

      {/* Add animated blue sparkles instead of lines */}
      <div className="blue-sparkles">
        {sparkles}
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
