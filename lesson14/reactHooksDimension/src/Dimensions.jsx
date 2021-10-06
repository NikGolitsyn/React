import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({ width: null, height: null });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const onResize = e => {
      const { innerHeight, innerWidth } = e.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const { width, height } = dimensions;

  return (
    <div>
      {width}px - {height}px
    </div>
  );
};

export default Dimensions;
