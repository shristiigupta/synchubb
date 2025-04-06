import React from 'react';
import './BackgroundGrid.css';

const BackgroundGrid = () => {
  const gridItems = Array.from({ length: 400 }); 

  return (
    <div className="background-grid">
      {gridItems.map((_, index) => (
        <div
          key={index}
          className="grid-box"
          style={{ animationDelay: `${(index % 20) * 0.2}s` }}
        />
      ))}

      <div className="blue-sparkle sparkle-1" />
      <div className="blue-sparkle sparkle-2" />
      <div className="blue-sparkle sparkle-3" />
    </div>
  );
};

export default BackgroundGrid;
