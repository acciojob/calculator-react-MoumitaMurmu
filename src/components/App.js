// <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEquals = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div>
      <input type="text" value={input} readOnly />
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button onClick={() => handleClick('7')}>7</button>
      <button onClick={() => handleClick('8')}>8</button>
      <button onClick={() => handleClick('9')}>9</button>
      <button onClick={() => handleClick('0')}>0</button>
      <button onClick={() => handleClick('+')}>+</button>
      <button onClick={() => handleClick('-')}>-</button>
      <button onClick={() => handleClick('*')}>*</button>
      <button onClick={() => handleClick('/')}>/</button>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleEquals}>=</button>
      <div>Result: {result}</div>
    </div>
  );
}

export default Calculator;

