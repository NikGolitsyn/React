import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const toggleHandler = e => {
      setIsOnline(e.target.navigator.onLine);
    };

    window.addEventListener('online', toggleHandler);
    window.addEventListener('offline', toggleHandler);

    return () => {
      window.removeEventListener('online', toggleHandler);
      window.removeEventListener('offline', toggleHandler);
    };
  });

  const result = isOnline ? (
    <div className="status">online</div>
  ) : (
    <div className="status status_offline">offline</div>
  );

  return result;
};

export default ConnectionStatus;
