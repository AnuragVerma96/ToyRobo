import React from "react";

const RoboSimulator = ({ position }) => {
  return (
    <div id="tabletop">
      <div className="container">
        <div>
          {[...new Array(5)].map((_, colIdx) => (
            <div className="row" key={colIdx + "rowIdx"}>
              {[...new Array(5)].map((_, rowIdx) => (
                <div
                  className={`box ${
                    (colIdx % 2 === 0 && rowIdx % 2 === 0) ||
                    (colIdx % 2 === 1 && rowIdx % 2 === 1)
                      ? "redBox"
                      : "yellowBox"
                  }`}
                  key={rowIdx + colIdx}
                >
                  {position.x === rowIdx && position.y === colIdx ? (
                    <div className={`triangle-${position.direction}`}></div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoboSimulator;
