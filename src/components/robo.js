import React from "react";

const Robo = ({ position, direction }) => {
  const getDirection = () => {
    switch (direction) {
      case "NORTH":
        return "rotate(0deg)";
      case "EAST":
        return "rotate(90deg)";
      case "SOUTH":
        return "rotate(180deg)";
      case "WEST":
        return "rotate(270deg)";
      default:
        return "";
    }
  };

  return (
    <div
      className="robo"
      style={{
        left: position?.x ? position?.x : 0 * 50 + 5,
        top: (4 - position?.y ? position.y : 0) * 50 + 5,
        transform: getDirection(),
      }}
    />
  );
};

export default Robo;
