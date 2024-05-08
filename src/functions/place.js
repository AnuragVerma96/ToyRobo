export const place = (x, y, f) => {
  if (isReporting) setIsReporting(false);
  if (!x && !y && !f) {
    setPosition({ x: 0, y: 4 - 0, direction: getRandomDirection() });
  } else {
    setPosition({ x, y: 4 - y, direction: f });
  }
};
