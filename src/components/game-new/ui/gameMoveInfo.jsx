import React from "react";
import GameSymbol from "./gameSymbol";

const GameMoveInfo = ({ currentStep, nextStep }) => {
  return (
    <>
      <div className="flex items-center gap-1 text-xl leading-tight">
        Ход:<GameSymbol symbol={currentStep} className="w-5 h-5"></GameSymbol>
      </div>
      <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
        Следующий:{" "}
        <GameSymbol symbol={nextStep} className="w-3 h-3"></GameSymbol>
      </div>
    </>
  );
};

export { GameMoveInfo };
