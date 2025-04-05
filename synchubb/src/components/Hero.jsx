import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="badge">
        <span className="new">New</span>
        <span>Demo version is available to download</span>
      </div>
      <h1>
        A design test for <span>SyncHubb</span>
      </h1>
    </section>
  );
};

export default Hero;
