import React, { useEffect, useRef, useState } from "react";

const Overflowbox = () => {
  const boxRef = useRef();
  const childRef = useRef([]);
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    console.log(boxRef);
    console.log(boxRef.current.clientWidth);
    console.log(boxRef.current.scrollWidth);
  }, []);

  const handleScroll = () => {
    // Your scroll event logic goes here
    // console.log(boxRef.current.scrollLeft);
  };

  const handleInView = (idx) => {
    setSelectedIdx(idx);
    childRef.current[idx].scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      style={{ display: "flex", gap: "12px", height: "200px", padding: "12px" }}
    >
      <div style={{ flex: 1, backgroundColor: "black", flexShrink: 0 }}></div>
      <div
        ref={boxRef}
        style={{
          boxSizing: "border-box",
          flex: 5,
          backgroundColor: "red",
          display: "flex",
          padding: "16px",
          overflow: "auto",
        }}
        onScroll={handleScroll}
      >
        {Array(10)
          .fill(1)
          .map((data, idx) => (
            <div
              key={idx}
              ref={(el) => (childRef.current[idx] = el)}
              style={{
                width: "250px",
                flexShrink: 0,
                padding: "0 8px",
                cursor: "pointer",
              }}
              onClick={() => handleInView(idx)}
            >
              <div
                style={{
                  height: "100%",
                  backgroundColor: selectedIdx === idx ? "black" : "yellow",
                }}
              ></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Overflowbox;
