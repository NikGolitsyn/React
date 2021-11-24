import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [value, setValue] = useState('initial');
  const renderCount = useRef(1);
  // renderCount is an object. Value inside useRef() save after component render
  // and we won't call another render like in useState() case
  const inputRef = useRef(null); // link to DOM element

  // we also can use ref to get prev value of state
  const prevValue = useRef('');

  useEffect(() => {
    renderCount.current += 1;
    console.log(inputRef.current.value);
  });

  // we also can use ref to get prev value of state
  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  // ref is often used to add focus to the element
  const focus = () => inputRef.current.focus();

  return (
    <div>
      <h1>Rencer count: {renderCount.current}</h1>
      <h2>Prev state value: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default App;
