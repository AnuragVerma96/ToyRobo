import { useState } from "react";
import "./App.css";
import RoboSimulator from "./components/RoboSimulator";
import InputInterface from "./components/InputInterface";

function App() {
  const [position, setPosition] = useState({
    x: null,
    y: null,
    direction: null,
  });
  const [isReporting, setIsReporting] = useState(false);
  const getRandomDirection = () => {
    const value = Math.random();
    if (value < 0.25) {
      return "North";
    } else if (value < 0.5) {
      return "East";
    } else if (value < 0.75) {
      return "West";
    } else return "South";
  };
  const place = (x, y, f) => {
    if (isReporting) setIsReporting(false);
    if (!f) {
      setPosition({ x, y: 4 - y, direction: getRandomDirection() });
    } else {
      setPosition({ x, y: 4 - y, direction: f });
    }
  };
  const move = () => {
    if (isReporting) setIsReporting(false);
    const { x, y, direction } = position;
    if (!x && !y && !direction) return;

    let newX = x;
    let newY = y;

    switch (direction) {
      case "North":
        newY = y - 1;
        break;
      case "South":
        newY = y + 1;
        break;
      case "East":
        newX = x + 1;
        break;
      case "West":
        newX = x - 1;
        break;
      default:
        break;
    }
    if (newX >= 0 && newX < 5 && newY >= 0 && newY < 5) {
      setPosition({ x: newX, y: newY, direction });
    }
  };
  const left = () => {
    if (isReporting) setIsReporting(false);
    const { direction } = position;
    if (!direction) return;

    switch (direction) {
      case "North":
        setPosition({ ...position, direction: "West" });
        break;
      case "West":
        setPosition({ ...position, direction: "South" });
        break;
      case "South":
        setPosition({ ...position, direction: "East" });
        break;
      case "East":
        setPosition({ ...position, direction: "North" });
        break;
      default:
        break;
    }
  };
  const right = () => {
    if (isReporting) setIsReporting(false);
    const { direction } = position;
    if (!direction) return;

    switch (direction) {
      case "North":
        setPosition({ ...position, direction: "East" });
        break;
      case "West":
        setPosition({ ...position, direction: "North" });
        break;
      case "South":
        setPosition({ ...position, direction: "West" });
        break;
      case "East":
        setPosition({ ...position, direction: "South" });
        break;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <h1>Toy Robo Demo</h1>
      <h3>
        Forced Render Cords: ({position?.x},{position.y ? 4 - position.y : ""});
        Direction: {position?.direction}
      </h3>
      <InputInterface
        position={position}
        isReporting={isReporting}
        setIsReporting={setIsReporting}
        setPosition={setPosition}
        place={place}
        move={move}
        left={left}
        right={right}
      />

      {isReporting &&
        `Current Position: (${position.x},${
          position.y ? 4 - position.y : ""
        }); Facing: ${position.direction}`}
      <RoboSimulator position={position} />
    </div>
  );
}

export default App;
