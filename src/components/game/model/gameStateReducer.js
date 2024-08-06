import { getNextStep } from "./getNextStep";
import { GAME_SYBOLS, SYMBOLS_ORDER } from "../constants/constants";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cellClick",
  TICK: "tick",
};

export const initGameState = ({
  playersCount,
  defaultTimer,
  currentStepStart,
}) => ({
  cells: new Array(19 * 19).fill(null),
  currentStep: GAME_SYBOLS.CROSS,
  currentStepStart,
  playersCount,
  timers: SYMBOLS_ORDER.reduce((timers, symbol, index) => {
    if (index < playersCount) {
      timers[symbol] = defaultTimer;
    }
    return timers;
  }, {}),
});

export const gameStateReducer = (state, action) => {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const { index, now } = action.payload;

      if (state.cells[index]) return state;
      return {
        ...state,
        timers: updateTimers(state, now),
        currentStep: getNextStep(state),
        currentStepStart: now,
        cells: updateCell(state, index),
      };
    }

    case GAME_STATE_ACTIONS.TICK: {
      const { now } = action.payload;

      if (!isTimeOver(state, now)) return state;

      return {
        ...state,
        timers: updateTimers(state, now),
        currentStep: getNextStep(state),
        currentStepStart: now,
      };
    }

    default:
      return state;
  }
};

function updateTimers(gameState, now) {
  const diff = now - gameState.currentStepStart;
  const timer = gameState.timers[gameState.currentStep];
  return {
    ...gameState.timers,
    [gameState.currentStep]: timer - diff,
  };
}

function updateCell(gameState, index) {
  return gameState.cells.map((cell, i) =>
    i === index ? gameState.currentStep : cell,
  );
}

function isTimeOver(gameState, now) {
  const timers = updateTimers(gameState, now);
  return timers[gameState.currentStep] <= 0;
}
