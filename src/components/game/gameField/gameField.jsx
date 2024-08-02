import React from "react";
import { clsx } from "clsx";
import UIButton from "../../../UI/Button/UIButton";
import { GameMoveInfo } from "./gameMoveInfo";
import { GameCell } from "./gameCell";
import { GAME_SYBOLS, SYMBOLS_ORDER } from "../../../constants/constants";
import { GameSymbol } from "../gameSymbol";

const GameField = ({
  className,
  playersCount,
  handleCellClick,
  cells,
  currentStep,
  nextStep,
  winnerSequence,
  winnerSymbol,
}) => {
  return (
    <>
      <GameFieldLayout className={className}>
        <GameMoveInfo nextStep={nextStep} currentStep={currentStep}>
          <UIButton size="md">Ничья</UIButton>
          <UIButton size="md" option="outline">
            Сдаться
          </UIButton>
        </GameMoveInfo>

        <GameGrid>
          {cells.map((symbol, i) => (
            <React.Fragment key={i}>
              <GameCell
                onClick={() => handleCellClick(i)}
                isWinner={winnerSequence?.includes(i)}
                disabled={!!winnerSymbol}
              >
                {symbol && (
                  <GameSymbol symbol={symbol} className="w-5 h-5"></GameSymbol>
                )}
              </GameCell>
            </React.Fragment>
          ))}
        </GameGrid>
      </GameFieldLayout>
    </>
  );
};

export default GameField;

const GameFieldLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}
    >
      {" "}
      {children}
    </div>
  );
};

const GameGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px mt-3">
      {children}
    </div>
  );
};
