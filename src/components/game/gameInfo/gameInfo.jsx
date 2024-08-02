import React from "react";
import { clsx } from "clsx";
import PlayerInfo from "./playerInfo/playerInfo";
import { GAME_SYBOLS } from "../../../constants/constants";

import avatarSrc1 from "./playerInfo/images/playerIcon1.png";
import avatarSrc2 from "./playerInfo/images/playerIcon2.png";
import avatarSrc3 from "./playerInfo/images/playerIcon3.png";
import avatarSrc4 from "./playerInfo/images/playerIcon4.png";

const players = [
  {
    id: 1,
    name: "Vanya",
    rating: 1234,
    avatar: avatarSrc1,
    symbol: GAME_SYBOLS.CROSS,
  },
  {
    id: 2,
    name: "Petyahat34sdasd",
    rating: 3212,
    avatar: avatarSrc2,
    symbol: GAME_SYBOLS.SQUARE,
  },
  {
    id: 3,
    name: "Igar",
    rating: 1523,
    avatar: avatarSrc3,
    symbol: GAME_SYBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "Alena",
    rating: 978,
    avatar: avatarSrc4,
    symbol: GAME_SYBOLS.ZERO,
  },
];

const GameInfo = ({
  className,
  playersCount,
  currentStep,
  winnerExist,
  onTimeOver,
}) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          playerInfo={player}
          isRight={index % 2 === 0}
          isTimerRunning={player.symbol === currentStep && !winnerExist}
          onTimeOver={onTimeOver}
        ></PlayerInfo>
      ))}
    </div>
  );
};

export default GameInfo;
