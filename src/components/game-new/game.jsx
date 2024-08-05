import { GameTitle } from "./ui/gameTitle";
import { GameInfo } from "./ui/gameInfo";
import React from "react";
import GameLayout from "./ui/gameLayout";
import BackLink from "./ui/backLink";
import { PLAYERS, PLAYERS_COUNT } from "./constants/constants";
import { PlayerInfo } from "./ui/playerInfo";
import { GameMoveInfo } from "./ui/gameMoveInfo";
import { useGameState } from "./model/useGameState";
import { GameCell } from "./ui/gameCell";
import GameOverModal from "./ui/gameOverModal";

export function Game() {
  const {
    cells,
    winnerSymbol,
    winnerSequence,
    handleCellClick,
    currentStep,
    nextStep,
  } = useGameState(PLAYERS_COUNT);
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
            onClick={() => handleCellClick(i)}
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
