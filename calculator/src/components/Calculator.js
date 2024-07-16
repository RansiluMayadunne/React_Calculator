import React, { useState } from 'react';

const Calculator = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [result, setResult] = useState(null);

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  };

  const add = () => {
    setResult(Number(input1) + Number(input2));
  };

  const subtract = () => {
    setResult(Number(input1) - Number(input2));
  };

  const multiply = () => {
    setResult(Number(input1) * Number(input2));
  };

  const divide = () => {
    setResult(Number(input1) / Number(input2));
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      <input type="number" value={input1} onChange={handleInput1Change} />
      <input type="number" value={input2} onChange={handleInput2Change} />
      <br /><br />
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>
      <br /><br />
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
};

export default Calculator;
