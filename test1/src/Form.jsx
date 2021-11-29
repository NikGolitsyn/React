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
        <option value={gameMode.easyMode.field}>Easy mode</option>
        <option value={gameMode.normalMode.field}>Normal mode</option>
        <option value={gameMode.hardMode.field}>Hard mode</option>
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
  gameMode: PropTypes.object.isRequired,
};
