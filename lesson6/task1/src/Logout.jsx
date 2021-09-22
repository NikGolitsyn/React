import React from 'react';

export default ({ onLogout }) => {
  return (
    <button className="logout btn" onClick={onLogout}>
      Logout
    </button>
  );
};
