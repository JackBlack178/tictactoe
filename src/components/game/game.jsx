import { GameTitle } from "./ui/gameTitle";
import { GameInfo } from "./ui/gameInfo";
import React, { useCallback, useMemo, useReducer } from "react";
import GameLayout from "./ui/gameLayout";
import BackLink from "./ui/backLink";
import {
  DEFAULT_TIMER_MS,
  PLAYERS,
  PLAYERS_COUNT,
} from "./constants/constants";
import { PlayerInfo } from "./ui/playerInfo";
import { GameMoveInfo } from "./ui/gameMoveInfo";
import { GameCell } from "./ui/gameCell";
import GameOverModal from "./ui/gameOverModal";
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initGameState,
} from "./model/gameStateReducer";
import { getNextStep } from "./model/getNextStep";
import { computeWinner } from "./model/computeWinner";
import { computeWinnerSymbol } from "./model/computeWinnerSymbol";
import { computePlayerTimer } from "./model/computePlayerTimer";
import { useInterval } from "../../lib/timer";
import { resetGameState } from "./model/resetGame";

const playersCount = PLAYERS_COUNT;
const defaultTimer = DEFAULT_TIMER_MS;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount, defaultTimer, currentStepStart: Date.now() },
    initGameState,
  );

  useInterval(
    1000,
    !!gameState.currentStep,
    useCallback(
      () =>
        dispatch({
          type: GAME_STATE_ACTIONS.TICK,
          payload: { now: Date.now() },
        }),
      [],
    ),
  );

  const handleCellClick = useCallback(
    (i) =>
      dispatch({
        type: GAME_STATE_ACTIONS.CELL_CLICK,
        payload: { index: i, now: Date.now() },
      }),
    [],
  );

  const cells = gameState.cells;
  const currentStep = gameState.currentStep;
  const nextStep = getNextStep(gameState, playersCount);
  const resetGame = resetGameState(dispatch, playersCount, defaultTimer);
  const winnerSequence = useMemo(() => computeWinner(gameState), [gameState]);

  const winnerSymbol = computeWinnerSymbol(gameState, {
    nextStep,
    winnerSequence,
  });

  const winnerName = PLAYERS.find(
    (player) => player.symbol === winnerSymbol,
  )?.name;
  return (
    <>
      <GameLayout
        gameTitle={<GameTitle />}
        gameInfo={
          <GameInfo
            playersCount={PLAYERS_COUNT}
            timeMode={"1 мин на ход"}
            isRatingGame
          />
        }
        backLink={<BackLink />}
        playerList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            symbol={player.symbol}
            avatarSrc={player.avatar}
            rating={player.rating}
            name={player.name}
            isRight={index % 2 === 0}
            {...computePlayerTimer(gameState, player.symbol)}
          ></PlayerInfo>
        ))}
        gameMoveInfo={
          <GameMoveInfo nextStep={nextStep} currentStep={currentStep} />
        }
        gameCells={cells.map((cell, i) => (
          <GameCell
            key={i}
            index={i}
            symbol={cells[i]}
            disabled={winnerSymbol !== undefined}
            isWinner={winnerSequence?.includes(i)}
            onClick={handleCellClick}
          />
        ))}
      ></GameLayout>
      <GameOverModal
        resetGame={resetGame}
        winnerName={winnerName}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          const { timer } = computePlayerTimer(gameState, player.symbol);
          return (
            <PlayerInfo
              key={player.id}
              symbol={player.symbol}
              avatarSrc={player.avatar}
              rating={player.rating}
              name={player.name}
              isRight={index % 2 === 0}
              timer={timer}
            ></PlayerInfo>
          );
        })}
      />
    </>
  );
}
