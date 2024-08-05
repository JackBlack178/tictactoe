import { getNextStep } from "./getNextStep";
import { GAME_SYBOLS } from "../constants/constants";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
};
export const gameStateReducer = (state, action) => {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const index = action.payload.index;

      if (state.cells[index]) return state;

      return {
        ...state,
        currentStep: getNextStep(state.currentStep, state.playersCount),
        cells: [
          ...state.cells.slice(0, index),
          state.currentStep,
          ...state.cells.slice(index + 1),
        ],
      };
    }
    default:
      return state;
  }
};
export const initGameState = ({ playersCount }) => ({
  cells: new Array(19 * 19).fill(null),
  currentStep: GAME_SYBOLS.CROSS,
  playersCount,
});
