import React from "react";

import GameSymbol from "../gameSymbol/gameSymbol";

const GameInfo = ({ isDraw, winnerSymbol, currentStep }) => {
  if (isDraw) {
    return <div>Ничья</div>;
  }

  if (winnerSymbol) {
    return (
      <div>
        Победитель: <GameSymbol symbol={winnerSymbol}></GameSymbol>
      </div>
    );
  }

  return (
    <div>
      Ход: <GameSymbol symbol={currentStep}></GameSymbol>
    </div>
  );
};

export default GameInfo;
