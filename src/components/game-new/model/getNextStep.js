import { SYMBOLS_ORDER } from "../constants/constants";

export function getNextStep(currentStep, playersCount, playersTimeOver) {
  const slicedSymbolsOrder = SYMBOLS_ORDER.slice(0, playersCount).filter(
    (symbol) => !playersTimeOver.includes(symbol),
  );

  const nextMoveIndex =
    slicedSymbolsOrder.slice(0, playersCount).indexOf(currentStep) + 1;

  return slicedSymbolsOrder.slice(0, playersCount)[
    nextMoveIndex % (playersCount - playersTimeOver.length)
  ];
}
