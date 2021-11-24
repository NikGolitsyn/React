import React, { useState, useEffect, useMemo } from 'react';

function complexCompute(num) {
  console.log('render');
  let i = 0;
  while (i < 1000000000) i += 1;
  return num * 2;
}

const App = () => {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(() => ({
    color: colored ? 'red' : 'blue',
  }), [colored]);

  // useMemo нужен для оптимизации, позволяет закешировать(сохранить) значение number, тем самым избавится от ненужных действий
  // computed это результат выполнения функции complexCompute
  const computed = useMemo(() => complexCompute(number), [number]);

  useEffect(() => {
    console.log('styles changed');
  }, [styles]);

  return (
    <div>
      <h1 style={styles}>Computed property: {computed}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}>Increase</button>
      <button onClick={() => setNumber(prev => prev - 1)}>Decrease</button>
      <button onClick={() => setColored(prev => !prev)}>Change</button>
    </div>
  );
};

export default App;
