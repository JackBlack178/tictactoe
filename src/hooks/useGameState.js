import { GAME_SYBOLS, SYMBOLS_ORDER } from "../constants/constants";
import React from "react";
import { computeWinner, getNextStep } from "../components/game/model";

export const useGameState = (playersCount, winnerExist) => {
  const [{ currentStep, cells, playersTimeOver }, setGameState] =
    React.useState(() => ({
      currentStep: GAME_SYBOLS.CROSS,
      cells: Array(19 * 19).fill(null),
      playersTimeOver: [],
    }));

  const nextStep = getNextStep(currentStep, playersCount, playersTimeOver);
  const winnerSequence = computeWinner(cells);

  const winnerSymbol =
    nextStep === currentStep ? currentStep : winnerSequence?.[0];

  const handleCellClick = (index) => {
    setGameState((prev) => {
      if (prev.cells[index]) return prev;

      return {
        ...prev,
        currentStep: getNextStep(
          prev.currentStep,
          playersCount,
          playersTimeOver,
        ),
        cells: [
          ...prev.cells.slice(0, index),
          prev.currentStep,
          ...prev.cells.slice(index + 1),
        ],
      };
    });
  };

  const handlePlayerTimeOver = (symbol) => {
    setGameState((prev) => {
      return {
        ...prev,
        playersTimeOver: [...prev.playersTimeOver, symbol],
        currentStep: getNextStep(
          prev.currentStep,
          playersCount,
          playersTimeOver,
        ),
      };
    });
  };

  return {
    currentStep,
    cells,
    nextStep,
    winnerSequence,
    winnerSymbol,
    handleCellClick,
    handlePlayerTimeOver,
  };
};
