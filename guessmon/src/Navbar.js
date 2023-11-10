// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-500 p-4 flex items-center justify-between z-10">
      {/* Logo on the left */}
      <div className="text-white font-bold text-xl">
        <img src="/images/logo.png" alt="Logo" className="h-16 w-auto" />
      </div>

      {/* Navigation Items on the right */}
      <div className="flex space-x-4">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/about" className="text-white">
          About
        </Link>
        <Link to="/score" className="text-white">
          Score
        </Link>
        <Link to="/login" className="text-white">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
