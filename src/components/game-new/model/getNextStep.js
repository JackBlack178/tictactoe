import { SYMBOLS_ORDER } from "../constants/constants";

export function getNextStep(gameState, playersCount, playersTimeOver) {
  // const slicedSymbolsOrder = SYMBOLS_ORDER.slice(0, playersCount).filter(
  //   (symbol) => !playersTimeOver.includes(symbol),
  // );

  const currentStep = gameState.currentStep;
  const slicedSymbolsOrder = SYMBOLS_ORDER;

  const nextMoveIndex =
    slicedSymbolsOrder.slice(0, playersCount).indexOf(currentStep) + 1;

  return slicedSymbolsOrder.slice(0, playersCount)[
    // nextMoveIndex % (playersCount - playersTimeOver.length)
    nextMoveIndex % playersCount
  ];
}
