import React, { useState, useEffect } from 'react';
import BoardRow from './BoardRow.jsx';
import Form from './Form.jsx';
import { Rows } from './utils/data.utils.js';
import HoverSquares from './HoverSquares.jsx';
import { getData } from './gateway.js';

const App = () => {
  const [store, setStore] = useState(null);
  const [value, setValue] = useState('pick mode');
  const [gameStart, setGameStart] = useState(false);
  const [hoverSquares, setHoverSquares] = useState([]);

  useEffect(() => {
    getData().then(data => setStore(data));
  }, []);

  if (!store) return null;

  const hoverSquaresHandler = (column, row) => {
    if (hoverSquares.some(el => el.id === column + row)) {
      return setHoverSquares(hoverSquares.filter(el => el.id !== column + row));
    }
    return setHoverSquares(hoverSquares.concat({ id: column + row, column, row }));
  };

  const numberOfFields = value === 'pick mode' ? 5 : Number(value);

  return (
    <div className="main-container">
      <div className="content">
        <div className="hover-game">
          <Form
            setGameStart={setGameStart}
            value={value}
            setValue={setValue}
            gameStart={gameStart}
            gameMode={store}
          />
          {Rows(numberOfFields).map((id, index) => (
            <BoardRow
              key={id}
              numberOfFields={numberOfFields}
              dataSet={index + 1}
              setHoverSquares={hoverSquaresHandler}
              gameStart={gameStart}
            />
          ))}
        </div>
        <HoverSquares hoverSquares={hoverSquares} />
      </div>
    </div>
  );
};

export default App;
