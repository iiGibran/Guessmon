// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Game from './Game';

const Home = () => {
  return <div>Home Page Content</div>;
};

const About = () => {
  return <div>About Page Content</div>;
};

const Score = () => {
  return <div>Score Page Content</div>;
};

const Login = () => {
  return <div>Login Page Content</div>;
};

const App = () => {
  const [showGame, setShowGame] = useState(false);

  const startGame = () => {
    setShowGame(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={showGame ? <Game /> : <LandingPage onStart={startGame} />} />
        <Route path="/about" element={<About />} />
        <Route path="/score" element={<Score />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
