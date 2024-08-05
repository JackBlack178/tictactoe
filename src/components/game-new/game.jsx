import { GameTitle } from "../game-new/ui/gameTitle";
import { GameInfo } from "../game-new/ui/gameInfo";
import React from "react";
import GameLayout from "./ui/gameLayout";
import BackLink from "./ui/backLink";
import { PLAYERS } from "./constants/constants";
import { PlayerInfo } from "./ui/playerInfo";

export function Game() {
  console.log(PLAYERS);
  return (
    <GameLayout
      gameTitle={<GameTitle />}
      gameInfo={
        <GameInfo playersCount={4} timeMode={"1 мин на ход"} isRatingGame />
      }
      backLink={<BackLink />}
      playerList={PLAYERS.map((player, index) => (
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
    ></GameLayout>
  );
}

// return (
//   <GameTitle playersCount={playersCount}></GameTitle>
// <GameInfo
//   className="mt-6"
//   playersCount={playersCount}
//   currentStep={currentStep}
//   winnerExist={!!winnerSymbol}
//   onTimeOver={handlePlayerTimeOver}
// ></GameInfo>
// {winnerSymbol && (
//   <h3>
//     Победитель <GameSymbol symbol={winnerSymbol}></GameSymbol>{" "}
//   </h3>
// )}
// <GameField
//   className="mt-6 w-max mx-auto"
//   playersCount={playersCount}
//   cells={cells}
//   currentStep={currentStep}
//   nextStep={nextStep}
//   handleCellClick={handleCellClick}
//   winnerSequence={winnerSequence}
//   winnerSymbol={winnerSymbol}
// ></GameField>
// );
