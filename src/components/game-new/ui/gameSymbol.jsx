import React from "react";
import { GAME_SYBOLS } from "../constants/constants";
import XIcon from "./icons/xIcon";
import TriangleIcon from "./icons/triangleIcon";
import OIcon from "./icons/oIcon";
import SquareIcon from "./icons/squareIcon";

const GameSymbol = ({ symbol, className }) => {
  const Icon =
    {
      [GAME_SYBOLS.CROSS]: XIcon,
      [GAME_SYBOLS.TRIANGLE]: TriangleIcon,
      [GAME_SYBOLS.ZERO]: OIcon,
      [GAME_SYBOLS.SQUARE]: SquareIcon,
    }[symbol] ?? XIcon;

  return <Icon className={className} />;
};

export default GameSymbol;
