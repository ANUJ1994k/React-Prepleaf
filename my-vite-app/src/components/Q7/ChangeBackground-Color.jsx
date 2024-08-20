
import React, { useRef } from 'react';

const getRandomColor = () => {
  // Generate a random hex color
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ChangeBackgroundColor = () => {
  const divRef = useRef(null);

  const handleClick = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = getRandomColor();
    }
  };

  return (
    <div>
      <div
        ref={divRef}
        onClick={handleClick}
        style={{
          width: '200px',
          height: '200px',
          border: '2px solid black',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.3s', // Smooth transition
        }}
      >
        Click me to change color
      </div>

    </div>
  );
};

export default ChangeBackgroundColor;
