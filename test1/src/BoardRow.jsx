import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square.jsx';
import { Columns } from './utils/data.utils';

const BoardRow = ({ dataSet, setHoverSquares, gameStart, numberOfFields }) => (
  <div className="board-row" data-id={dataSet}>
    {Columns(numberOfFields).map((id, index) => (
      <Square
        key={id}
        dataSet={index + 1}
        setHoverSquares={setHoverSquares}
        gameStart={gameStart}
      />
    ))}
  </div>
);

export default BoardRow;

BoardRow.propTypes = {
  dataSet: PropTypes.number.isRequired,
  setHoverSquares: PropTypes.func.isRequired,
  gameStart: PropTypes.bool.isRequired,
  numberOfFields: PropTypes.number.isRequired,
};
