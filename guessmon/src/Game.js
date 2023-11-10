// src/Game.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import 'tailwindcss/tailwind.css';

const Game = () => {
  const [pokemon, setPokemon] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const getRandomPokemonId = () => {
    return Math.floor(Math.random() * 151) + 1;
  };

  const generateOptions = async (correctPokemon) => {
    const newOptions = [];
    const pokemonNames = [];
    for (let i = 0; i < 3; i++) {
      const randomPokemonId = getRandomPokemonId();
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`);
      if (response.data.name !== correctPokemon.name && !pokemonNames.includes(response.data.name)) {
        newOptions.push(response.data.name);
        pokemonNames.push(response.data.name);
      } else {
        i--;
      }
    }
    newOptions.push(correctPokemon.name);
    newOptions.sort(() => Math.random() - 0.5);
    setOptions(newOptions);
  };

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${getRandomPokemonId()}/`);
      setPokemon(response.data);
      generateOptions(response.data);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

  const handleOptionClick = (option) => {
    if (option === pokemon.name) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
    setSelectedOption(option);
  };

  const handleNextPokemon = () => {
    setCorrect(false);
    setSelectedOption(null);
    fetchPokemon();
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 p-4 shadow-lg rounded-lg flex items-center justify-center">
        {pokemon && (
          <div className="flex items-center">
            <div className="mr-4">
              <img
                className="w-64 h-64 object-cover rounded-lg"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
            </div>
            <div className="flex flex-col">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`bg-blue-500 text-white py-2 px-4 rounded mb-2 ${
                    selectedOption === option ? 'bg-blue-700' : ''
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
        {!correct && selectedOption && (
          <div className="mt-4 text-center">
            <p className="text-red-500 font-bold">Wrong! The correct answer is {pokemon.name}.</p>
          </div>
        )}
        {correct && (
          <div className="mt-4 text-center">
            <p className="text-green-500 font-bold">Correct!</p>
            <button
              onClick={handleNextPokemon}
              className="bg-purple-500 text-white py-2 px-4 rounded mt-2 hover:bg-purple-700"
            >
              Next Pokémon
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
