import React from 'react';
import PropTypes from 'prop-types';

const HoverSquares = ({ hoverSquares }) => (
  <div className="hover-squares">
    Hover squares
    <ul className="list">
      {hoverSquares.map((el, index) => (
        <li className="list-item" key={index + 1}>
          {`row ${el.row} col ${el.column}`}
        </li>
      ))}
    </ul>
  </div>
);

export default HoverSquares;

HoverSquares.propTypes = {
  hoverSquares: PropTypes.array.isRequired,
};
