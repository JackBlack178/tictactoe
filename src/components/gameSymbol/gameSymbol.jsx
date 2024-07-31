import React from "react";

import { SYMBOL_O, SYMBOL_X } from "../constants/constants";
import { clsx } from "clsx";

const GameSymbol = ({ symbol }) => {
  return (
    <span
      className={clsx(
        `text-[20px] leading-6`,
        symbol === SYMBOL_O && "text-green-600",
        symbol === SYMBOL_X && "text-red-600",
      )}
    >
      {symbol}
    </span>
  );
};

export default GameSymbol;
