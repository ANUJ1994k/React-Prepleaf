import React, { useRef, useState } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null);
  const [displayValue, setDisplayValue] = useState('');

  const handleInputChange = () => {
    setDisplayValue(inputRef.current.value);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        onChange={handleInputChange}
      />
      <p>Current value: {displayValue}</p>
    </div>
  );
};

export default UncontrolledInput;
