import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square.jsx';
import { Columns } from './utils/data.utils';

const BoardRow = ({ dataSet, setHoverSquares, gameStart, styles }) => (
  <div className="board-row" data-id={dataSet}>
    {Columns.map((id, index) => (
      <Square
        key={id}
        dataSet={index + 1}
        setHoverSquares={setHoverSquares}
        styles={styles}
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
  styles: PropTypes.object,
};
