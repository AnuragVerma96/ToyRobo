import React from "react";

const InputInterface = ({
  position,
  isReporting,
  setIsReporting,
  setPosition,
  place,
  move,
  left,
  right,
}) => {
  return (
    <div>
      <button onClick={() => place()}>PLACE</button>
      <button onClick={move}>MOVE</button>
      <button onClick={left}>LEFT</button>
      <button onClick={right}>RIGHT</button>
      <button
        onClick={() => {
          if (position?.direction) setIsReporting(true);
        }}
      >
        REPORT
      </button>
      <button
        onClick={() => {
          if (isReporting) setIsReporting(false);
          setPosition({ x: null, y: null, direction: null });
        }}
      >
        RESET
      </button>
      <button onClick={() => place(0, 0, "North")}>
        TEST CASE (0,0, North)
      </button>
    </div>
  );
};

export default InputInterface;
