// src/LandingPage.js
import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const LandingPage = ({ onStart }) => {
  return (
    
    <div className="relative flex flex-col h-screen">
<Navbar />

      {/* Local Video */}
      <video autoPlay loop muted className="object-cover w-full h-full absolute top-0 left-0 z-0">
        <source src="/videos/myvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content in the middle */}
      <div className="flex-grow flex items-center justify-center flex-col text-center relative z-10">
        {/* Animated Gradient Text */}
        <h1 className="text-4xl font-bold text-white mb-4 font-pokemon">
          <span className="animated-gradient">Guess the Pokemon</span>
        </h1>
        
        {/* Pokeball-style Start Button */}
        <button
          onClick={onStart}
          className="bg-transparent border-none p-0 m-0 focus:outline-none transform transition-transform hover:scale-110"
        >
          <img src="/images/pokeball.png" alt="Start" className="cursor-pointer w-32 h-32" />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
