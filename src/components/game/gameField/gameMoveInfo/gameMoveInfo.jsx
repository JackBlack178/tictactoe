import React from "react";
import OIcon from "../../gameInfo/icons/oIcon";
import XIcon from "../../gameInfo/icons/xIcon";
import UIButton from "../../../../UI/Button/UIButton";
import { GameSymbol } from "../../gameSymbol";

const GameMoveInfo = ({ children, currentStep, nextStep }) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl leading-tight">
          Ход:<GameSymbol symbol={currentStep} className="w-5 h-5"></GameSymbol>
        </div>
        <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
          Следующий:{" "}
          <GameSymbol symbol={nextStep} className="w-3 h-3"></GameSymbol>
        </div>
      </div>
      {children}
    </div>
  );
};

export default GameMoveInfo;
