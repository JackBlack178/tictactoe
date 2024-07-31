import React from "react";
import useGameState from "../hooks/useGameState";
import GameInfo from "../gameInfo/gameInfo";
import GameCell from "../gameCell/gameCell";
import ResetButton from "../../UI/Button/resetButton";

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
      <ResetButton onClick={resetGame}>Сброс</ResetButton>
    </div>
  );
};

export default Game;
