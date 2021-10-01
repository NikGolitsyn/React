import React from 'react';

const TemperatureInput = ({ onTemperatureChange, scale, temperature }) => {
  const handleChange = e => {
    onTemperatureChange(e.target.value);
  };

  const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChange} />
    </fieldset>
  );
};

export default TemperatureInput;
