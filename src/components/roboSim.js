import React, { useState } from "react";
import Robo from "./robo";
import TableTop from "./tableTop";

const RobotSimulator = () => {
  const [cords, setCords] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState("WEST");
  const place = null;
  const move = null;
  const left = null;
  const right = null;
  return (
    <div>
      <div>
        <button onClick={place}>PLACE</button>
        <button onClick={move}>MOVE</button>
        <button onClick={left}>LEFT</button>
        <button onClick={right}>RIGHT</button>
      </div>
      <Robo cords={cords} direction={direction} />
      <TableTop cords={cords} direction={direction} />
    </div>
  );
};

export default RobotSimulator;
