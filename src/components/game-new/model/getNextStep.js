import { SYMBOLS_ORDER } from "../constants/constants";

export function getNextStep(gameState, playersCount) {
  const timers = gameState.timers;

  const currentStep = gameState.currentStep;
  const slicedSymbolsOrder = SYMBOLS_ORDER.slice(0, playersCount).filter(
    (symbol) => timers[symbol] > 0,
  );

  const nextMoveIndex = slicedSymbolsOrder.indexOf(currentStep) + 1;
  return slicedSymbolsOrder[nextMoveIndex] ?? slicedSymbolsOrder[0];
}
