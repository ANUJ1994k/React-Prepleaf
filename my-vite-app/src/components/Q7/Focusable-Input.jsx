import React, { useRef, useEffect } from 'react';
import UncontrolledInput from './Uncontrolled-Input';
import ChangeBackgroundColor from "./ChangeBackground-Color"
const FocusableInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input field when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div>
        <div>
      <input ref={inputRef} type="text" placeholder="Focus on me!" />
    </div>
    <UncontrolledInput/>
    <ChangeBackgroundColor/>
    </div>
  );
};

export default FocusableInput;
