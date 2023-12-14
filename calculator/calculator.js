import React, { useState, useEffect } from 'react';
import './Calculator.css'; // Import your CSS file for styling

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="datetime">
        <p>{dateTime.toLocaleDateString()}</p>
        <p>{dateTime.toLocaleTimeString()}</p>
      </div>
      <div className="display">
        <input type="text" value={input} readOnly />
        {result && <p className="result">Result: {result}</p>}
      </div>
      <div className="buttons">
        <button onClick={() => handleInput('7')}>7</button>
        {/* ... (other calculator buttons) */}
        <button onClick={() => handleInput('+')}>+</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={clearInput}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;
