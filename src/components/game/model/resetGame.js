import { GAME_STATE_ACTIONS } from "./gameStateReducer";

export const resetGameState = (dispatch, playersCount, defaultTimer) => {
  return () => {
    dispatch({
      type: GAME_STATE_ACTIONS.RESET,
      payload: {
        playersCount,
        defaultTimer,
        currentStepStart: Date.now(),
      },
    });
  };
};
