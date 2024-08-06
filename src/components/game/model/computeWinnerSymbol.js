export function computeWinnerSymbol(gameState, { winnerSequence, nextStep }) {
  return nextStep === gameState.currentStep
    ? gameState.currentStep
    : gameState.cells[winnerSequence?.[0]];
}
