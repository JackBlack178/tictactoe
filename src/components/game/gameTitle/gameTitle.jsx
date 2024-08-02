import React from "react";
import Link from "next/link";
import ArrowLeftIcon from "../icons/arrowLeftIcon";
import StarIcon from "../icons/starIcon";
import PlayersCountIcon from "../icons/playersCountIcon";
import TimeLeftIcon from "../icons/timeLeftIcon";

const GameTitle = () => {
  return (
    <div className="pl-2">
      <Link href="#" className="flex items-center gap-2 text-xs text-teal-600">
        <ArrowLeftIcon></ArrowLeftIcon>
        На главную
      </Link>
      <h1 className="text-4xl">Крестики нолики</h1>
      <div className="flex items-center gap-3 text-slate-400 text-xs">
        <StarIcon></StarIcon>
        <div className="flex items-center gap-1">
          <PlayersCountIcon></PlayersCountIcon>2
        </div>
        <div className="flex items-center gap-1">
          <TimeLeftIcon></TimeLeftIcon>1 мин на ход
        </div>
      </div>
    </div>
  );
};

export default GameTitle;
