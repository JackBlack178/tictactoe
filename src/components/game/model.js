import { SYMBOLS_ORDER } from "../../constants/constants";

export function getNextStep(currentStep, playersCount) {
  const slicedSymbolsOrder = SYMBOLS_ORDER.slice(0, playersCount);

  const nextMoveIndex =
    slicedSymbolsOrder.slice(0, playersCount).indexOf(currentStep) + 1;

  return slicedSymbolsOrder.slice(0, playersCount)[
    nextMoveIndex % playersCount
  ];
}

export function computeWinner(cells, sequenceSize = 5, fieldSize = 19) {
  const gap = Math.floor(sequenceSize / 2);

  function getSequenceIndexes(index) {
    const res = Array.from({ length: 4 }, () => []);
    for (let j = 0; j < sequenceSize; j++) {
      res[0].push(index - gap + j);
      res[1].push(index - fieldSize * (gap - j) + j - gap);
      res[2].push(index + fieldSize * (gap - j) + j - gap);
      res[3].push(index - fieldSize * (gap - j));
    }
    return res;
  }

  function compareElements(indexes) {
    let res = true;

    for (let i = 1; i < indexes.length; i++) {
      res &&= cells[indexes[i]];
      res &&= cells[indexes[i]] === cells[indexes[i - 1]];
    }
    return res;
  }

  for (let i = 0; i < cells.length; i++) {
    if (!cells[i]) continue;

    const indexRows = getSequenceIndexes(i);

    const winnerIndexes = indexRows.find((row) => compareElements(row));
    if (winnerIndexes) return winnerIndexes;
  }
}
