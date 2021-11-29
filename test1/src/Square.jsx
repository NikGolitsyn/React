import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Square = ({ dataSet, setHoverSquares, gameStart }) => {
  const [hover, setHover] = useState(false);

  const getInfo = event => {
    if (!gameStart) {
      return null;
    }

    const { target } = event;
    setHover(prev => !prev);
    return setHoverSquares(target.dataset.id, target.parentElement.dataset.id);
  };

  return (
    <div
      className={`square ${hover && 'blue-hover'}`}
      data-id={dataSet}
      onMouseEnter={getInfo}
    ></div>
  );
};

export default Square;

Square.propTypes = {
  dataSet: PropTypes.number.isRequired,
  setHoverSquares: PropTypes.func.isRequired,
  gameStart: PropTypes.bool.isRequired,
};
