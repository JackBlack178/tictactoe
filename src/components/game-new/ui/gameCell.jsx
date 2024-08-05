import React from "react";
import { clsx } from "clsx";
import GameSymbol from "./gameSymbol";

const GameCell = ({ onClick, isWinner, disabled, symbol }) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-amber-300",
      )}
      onClick={onClick}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5"></GameSymbol>}
    </button>
  );
};

export { GameCell };
