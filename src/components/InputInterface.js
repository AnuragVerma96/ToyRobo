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
      <select name="xCord" id="xCord">
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <select name="yCord" id="yCord">
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <button
        onClick={() =>
          place(
            Number(document.getElementById("xCord").value),
            Number(document.getElementById("yCord").value)
          )
        }
      >
        PLACE
      </button>
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
