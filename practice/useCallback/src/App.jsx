import React, { useState, useCallback } from 'react';
import ItemList from './ItemsList';

const App = () => {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? 'darkred' : 'black',
  };

  // useCallback как и useMemo оборачивает объект но полностью его возвращает generateItemsFromAPI это не результат ф-и а сама функция
  // useCallback нужен для того чтобы функция не изменялась при новом рендере, чтобы она кэшировалась(сохранялась), чтобы не было лишних её вызовов
  const generateItemsFromAPI = useCallback(
    indexNumber => new Array(count).fill('').map((_, index) => `Element ${index + indexNumber}`),
    [count],
  );

  return (
    <div>
      <h1 style={styles}>Amount of elements: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
      <button onClick={() => setColored(prev => !prev)}>Change</button>
      <ItemList getItems={generateItemsFromAPI} />
    </div>
  );
};

export default App;
