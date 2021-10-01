import React from 'react';

const CardTitle = ({ userName, count }) => {
  return (
    <div className="cart-title">
      {userName}, you added {count} items
    </div>
  );
};

export default CardTitle;
