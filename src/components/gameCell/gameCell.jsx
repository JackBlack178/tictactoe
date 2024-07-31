import React from "react";
import GameSymbol from "../gameSymbol/gameSymbol";

import { clsx } from "clsx";

const GameCell = ({ isWinner, onClick, symbol }) => {
  return (
    <button
      className={clsx(
        `outline outline-1 outline-gray-500 
                flex items-center justify-center bg-transparent`,
        isWinner && "bg-[#847ef2]",
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol}></GameSymbol> : null}
    </button>
  );
};

export default GameCell;
