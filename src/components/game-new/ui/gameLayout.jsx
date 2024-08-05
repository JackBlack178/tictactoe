import React from "react";
import { clsx } from "clsx";
const GameLayout = ({ backLink, gameTitle, gameInfo, playerList }) => {
  return (
    <div>
      <div className="pl-2">
        {backLink}
        {gameTitle}
        {gameInfo}
      </div>
      <div
        className={
          "bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 mt-4"
        }
      >
        {playerList}
      </div>
    </div>
  );
};

export default GameLayout;
