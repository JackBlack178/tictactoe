import React, { memo, useEffect } from "react";
import { clsx } from "clsx";
import GameSymbol from "./gameSymbol";

const GameCell = memo(function GameCell({
  onClick,
  isWinner,
  disabled,
  symbol,
  index,
}) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-amber-300",
      )}
      onClick={() => onClick(index)}
    >
      {symbol && (
        <GameSymbol symbol={symbol} className="w-2 sm:w-3 md:w-5"></GameSymbol>
      )}
    </button>
  );
});

export { GameCell };
