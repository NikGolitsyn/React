import React from 'react';

export default ({ onLogin }) => {
  return (
    <button className="login btn" onClick={() => onLogin()}>
      Login
    </button>
  );
};
