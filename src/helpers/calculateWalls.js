const calculateWalls = (barsArray) => {
  const rightWall = barsArray.reduce((biggest, number, idx) => {
    const multiplied = number * idx;
    return multiplied > (biggest.multiplied || 0)
      ? {
          multiplied,
          number,
          idx,
        }
      : biggest;
  }, {});

  const leftWallIdx = barsArray.findIndex((number) => number >= rightWall.number);
  const leftWallNumber = barsArray[leftWallIdx];

  return [
    {
      number: leftWallNumber,
      idx: leftWallIdx,
    },
    rightWall,
  ];
};

export const getWallIndexes = (barsArray) => {
  const [leftWall, rightWall] = calculateWalls(barsArray);
  return [leftWall.idx, rightWall.idx];
};

export const getOutput = (barsArray) => {
  const [leftWall, rightWall] = calculateWalls(barsArray);
  return leftWall.number * rightWall.number;
};
