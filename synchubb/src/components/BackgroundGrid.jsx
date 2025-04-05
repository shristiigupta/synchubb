import React from "react";
import "./BackgroundGrid.css";

const BackgroundGrid = () => {
  return (
    <div className="grid-background">
      {[...Array(400)].map((_, i) => (
        <div className="square" key={i}></div>
      ))}
    </div>
  );
};

export default BackgroundGrid;
