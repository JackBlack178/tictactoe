import React from "react";
import { clsx } from "clsx";

const GameCell = ({ children, onClick, isWinner }) => {
  return (
    <button
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-amber-300",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GameCell;
