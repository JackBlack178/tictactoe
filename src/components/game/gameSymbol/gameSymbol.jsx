import React from "react";
import XIcon from "../gameInfo/icons/xIcon";
import OIcon from "../gameInfo/icons/oIcon";
import { GAME_SYBOLS } from "../../../constants/constants";
import TriangleIcon from "../gameInfo/icons/triangleIcon";
import SquareIcon from "../gameInfo/icons/squareIcon";

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
