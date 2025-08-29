import React, { useState } from 'react';
import './InputForm.css';

function InputForm({ options, setOptions, handleSpin, isSpinning }) {
  const [newOption, setNewOption] = useState('');

  // Add a new name to the list
  const addOption = () => {
    if (newOption.trim() && !options.includes(newOption.trim())) {
      setOptions([...options, newOption.trim()]);
      setNewOption('');
    }
  };

  // Remove a name from the list
  const removeOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  return (
    <div className="input-form">
      <h3>Enter Names</h3>
      <div className="input-area">
        <input
          type="text"
          value={newOption}
          onChange={(e) => setNewOption(e.target.value)}
          placeholder="Add a new name"
        />
        <button onClick={addOption}>Add</button>
      </div>
      <ul className="options-list">
        {options.map((option, index) => (
          <li key={index}>
            {option}
            <button className="remove-btn" onClick={() => removeOption(index)}>×</button>
          </li>
        ))}
      </ul>
      <button className="spin-button" onClick={handleSpin} disabled={isSpinning || options.length < 2}>
        {isSpinning ? 'Spinning...' : 'SPIN!'}
      </button>
    </div>
  );
}

export default InputForm;