import React, { useRef } from "react";
import List from "./List";

const TextInput = () => {
  const inputRef = useRef();
  const childRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };
  const handleKeyDown = () => {
    childRef.current.childFunction();
  };
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        tabIndex={-1}
        onKeyDown={(e) => {
          if (e.keyCode === 40) handleKeyDown();
        }}
      />
      <List handleFocus={handleFocus} ref={childRef} />
    </div>
  );
};

export default TextInput;
