import React from "react";
import useGameState from "../hooks/useGameState";
import GameInfo from "../gameInfo/gameInfo";
import GameCell from "../gameCell/gameCell";
import UIButton from "../../UI/Button/UIButton";

const Game = () => {
  const {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    resetGame,
    toggleCell,
    getWinnerCell,
  } = useGameState();

  return (
    <div
      className={
        "flex flex-col items-center " +
        "w-40 my-40 mx-auto p-5 " +
        "border border-solid " +
        "border-black scale-150"
      }
    >
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      ></GameInfo>

      <div
        className={
          "grid pt-px grid-cols-[repeat(_3,_30px)] grid-rows-[repeat(_3,_30px)]"
        }
      >
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            onClick={() => toggleCell(index)}
            isWinner={getWinnerCell(index)}
          ></GameCell>
        ))}
      </div>
      <UIButton
        onClick={resetGame}
        size="sm"
        option={"primary"}
        className="mt-3"
      >
        Сброс
      </UIButton>
    </div>
  );
};

export default Game;
