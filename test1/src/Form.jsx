import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ setGameStart, gameStart, value, setValue, gameMode }) => {
  const handleSubmit = event => {
    setGameStart(prev => !prev);
    event.preventDefault();
  };

  return (
    <form className="status" onSubmit={handleSubmit}>
      <select className="select" value={value} onChange={e => setValue(e.target.value)}>
        <option value="pick mode">pick mode</option>
        <option value={gameMode[0]}>Easy mod</option>
        <option value={gameMode[1]}>Medium mod</option>
        <option value={gameMode[2]}>Hard mod</option>
      </select>
      {gameStart ? (
        <button className="start-btn" type="submit">
          Finish
        </button>
      ) : (
        <button className="start-btn" type="submit">
          Start
        </button>
      )}
    </form>
  );
};

export default Form;

Form.propTypes = {
  setGameStart: PropTypes.func.isRequired,
  gameStart: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  gameMode: PropTypes.array.isRequired,
};
