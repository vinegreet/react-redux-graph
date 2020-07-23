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

  return {
    output: result.area,
    walls: [
      {
        number: result.numberA,
        idx: result.idxA,
      },
      {
        number: result.numberB,
        idx: result.idxB,
      },
    ],
  };
};

export const getWallIndexes = (barsArray) => calculateWalls(barsArray).walls.map(wall => wall.idx);

export const getOutput = (barsArray) => calculateWalls(barsArray).output;
