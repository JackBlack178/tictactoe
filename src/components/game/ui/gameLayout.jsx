import React from "react";

const GameLayout = ({
  backLink,
  gameTitle,
  gameInfo,
  playerList,
  gameMoveInfo,
  actions,
  gameCells,
}) => {
  return (
    <div className={"pb-10"}>
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

      <div className={"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7 mt-6"}>
        <div className="flex gap-3 items-center">
          <div className="mr-auto">{gameMoveInfo}</div>
        </div>
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px mt-3">
          {gameCells}
        </div>
      </div>
    </div>
  );
};

export default GameLayout;
