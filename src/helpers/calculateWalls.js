const calculateWalls = (barsArray) => {
  const result = barsArray.reduce((biggestA, numberA, idxA) => {
    const output = barsArray.reduce((biggestB, numberB, idxB) => {
      if (idxB < idxA) return biggestB;
      const area = (idxB - idxA) * (numberA > numberB ? numberB : numberA);

      return area > (biggestB.area || 0)
        ? {
            area,
            numberA,
            idxA,
            numberB,
            idxB,
          }
        : biggestB;
    }, {});

    return output.area > (biggestA.area || 0)
      ? output
      : biggestA;
  }, {});

  return [
    {
      number: result.numberA,
      idx: result.idxA,
    },
    {
      number: result.numberB,
      idx: result.idxB,
    },
  ];
};

export const getWallIndexes = (barsArray) => {
  const [leftWall, rightWall] = calculateWalls(barsArray);
  return [leftWall.idx, rightWall.idx];
};

export const getOutput = (barsArray) => {
  // console.log(calculateWalls(barsArray))
  const [leftWall, rightWall] = calculateWalls(barsArray);
  return (rightWall.idx - leftWall.idx) * rightWall.number;
};
