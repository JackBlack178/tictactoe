import { GameTitle } from "./ui/gameTitle";
import { GameInfo } from "./ui/gameInfo";
import React, { useReducer } from "react";
import GameLayout from "./ui/gameLayout";
import BackLink from "./ui/backLink";
import { PLAYERS, PLAYERS_COUNT } from "./constants/constants";
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

const playersCount = PLAYERS_COUNT;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount },
    initGameState,
  );

  const currentStep = gameState.currentStep;
  const nextStep = getNextStep(gameState, playersCount);
  const winnerSequence = computeWinner(gameState);
  const winnerSymbol = computeWinnerSymbol(gameState, {
    nextStep,
    winnerSequence,
  });
  const cells = gameState.cells;

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
            seconds={60}
            name={player.name}
            isRight={index % 2 === 0}
            isTimerRunning={false}
          ></PlayerInfo>
        ))}
        gameMoveInfo={
          <GameMoveInfo nextStep={nextStep} currentStep={currentStep} />
        }
        gameCells={cells.map((cell, i) => (
          <GameCell
            key={i}
            symbol={cells[i]}
            disabled={winnerSymbol !== undefined}
            isWinner={winnerSequence?.includes(i)}
            onClick={() =>
              dispatch({
                type: GAME_STATE_ACTIONS.CELL_CLICK,
                payload: { index: i },
              })
            }
          />
        ))}
      ></GameLayout>
      <GameOverModal
        winnerName={winnerName}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            symbol={player.symbol}
            avatarSrc={player.avatar}
            rating={player.rating}
            seconds={60}
            name={player.name}
            isRight={index % 2 === 0}
            isTimerRunning={false}
          ></PlayerInfo>
        ))}
      />
    </>
  );
}
