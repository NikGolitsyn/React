import React from 'react';
import { useAlert } from './alert/AlertContext';

const Main = () => {
  const { toggle } = useAlert();
  return (
    <>
      <h1>Hello in example with Context</h1>
      <button onClick={toggle}>Show alert</button>
    </>
  );
};

export default Main;
