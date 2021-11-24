import React from 'react';
import { useAlert } from './alert/AlertContext';

const Main = () => {
  const { show } = useAlert();
  return (
    <>
      <h1>Hello in example with Context</h1>
      <button onClick={() => show('This is main.js')}>Show alert</button>
    </>
  );
};

export default Main;
