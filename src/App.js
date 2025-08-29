import React, { useState } from 'react';
import Wheel from './components/Wheel';
import InputForm from './components/InputForm';
import './App.css';

import Confetti from 'react-confetti';

function App() {
  const [options, setOptions] = useState(['Alice', 'Bob', 'Charlie', 'Dave']);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(null);

  //Start Win
  const handleSpin = () => {
    setIsSpinning(true);
    setWinner(null);
    // Select a winner 
    setTimeout(() => {
      const winnerIndex = Math.floor(Math.random() * options.length);
      setWinner(options[winnerIndex]);
      setIsSpinning(false);
    }, 5000);
  };

  return (
    <div className="App">
      {winner && <Confetti />}
      <h1>🎯 Wheel Spinner</h1>
      <div className="container">
        <Wheel options={options} isSpinning={isSpinning} winner={winner} />
        <InputForm options={options} setOptions={setOptions} handleSpin={handleSpin} isSpinning={isSpinning} />
      </div>
      {winner && !isSpinning && <h2>Winner is: {winner}!</h2>}
    </div>
  );
}

export default App;