import { GAME_SYBOLS, SYMBOLS_ORDER } from "../constants/constants";
import React from "react";
import { computeWinner, getNextStep } from "../components/game/model";

export const useGameState = (playersCount, winnerExist) => {
  const [{ currentStep, cells }, setGameState] = React.useState(() => ({
    currentStep: GAME_SYBOLS.CROSS,
    cells: Array(19 * 19).fill(null),
  }));

  const nextStep = getNextStep(currentStep, playersCount);
  const winnerSequence = computeWinner(cells);

  const handleCellClick = (index) => {
    setGameState((prev) => {
      if (prev.cells[index]) return prev;

      return {
        ...prev,
        currentStep: getNextStep(prev.currentStep, playersCount),
        cells: [
          ...prev.cells.slice(0, index),
          prev.currentStep,
          ...prev.cells.slice(index + 1),
        ],
      };
    });
  };

  return {
    currentStep,
    cells,
    nextStep,
    handleCellClick,
    winnerSequence,
  };
};
