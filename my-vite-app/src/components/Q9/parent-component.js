// ParentComponent.js
import React, { useState } from "react";
import Button from "./button";

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Button onClick={handleClick}>Increment</Button>
      <p>Count: {count}</p>
    </div>
  );
}

export default ParentComponent;
