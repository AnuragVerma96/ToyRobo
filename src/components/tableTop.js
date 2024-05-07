import React from "react";

const TableTop = ({ cords, direction }) => {
  return (
    <div className="table">
      {[Array(5)].map((el, ycord) => (
        <div key={ycord} style={{ display: "flex" }}>
          {[
            Array(5).map((el, xcord) => (
              <div
                key={xcord}
                style={{
                  width: "50px",
                  height: "50px",
                  border: "1px solid black",
                }}
              >
                {cords?.x === xcord && cords?.y === 4 - ycord && (
                  <div className={`robot-${direction}`}></div>
                )}
              </div>
            )),
          ]}
        </div>
      ))}
    </div>
  );
};

export default TableTop;
