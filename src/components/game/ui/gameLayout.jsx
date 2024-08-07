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
    <div className={"pb-3 md:pb-10 w-[700px]"}>
      <div className="pl-2">
        {backLink}
        {gameTitle}
        {gameInfo}
      </div>
      <div
        className={
          "bg-white rounded-2xl shadow-md px-1 md:px-8 py-4 grid grid-cols-2 mt-4"
        }
      >
        {playerList}
      </div>

      <div
        className={"bg-white rounded-2xl shadow-md px-8 pt-5 pb-7 mt-6 mx-auto"}
      >
        <div className="flex gap-3 items-center">
          <div className="mr-auto">{gameMoveInfo}</div>
        </div>

        <div className="mx-auto grid grid-cols-[repeat(19,_15px)] grid-rows-[repeat(19,_15px)] md:grid-cols-[repeat(19,_17px)] md:grid-rows-[repeat(19,_17px)] lg:grid-cols-[repeat(19,_25px)] lg:grid-rows-[repeat(19,_25px)] pt-px pl-px">
          {gameCells}
        </div>
      </div>
    </div>
  );
};

export default GameLayout;
