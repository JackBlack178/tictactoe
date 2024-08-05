import React from "react";
import StarIcon from "./icons/starIcon";
import PlayersCountIcon from "./icons/playersCountIcon";
import TimeLeftIcon from "./icons/timeLeftIcon";

const GameInfo = ({ playersCount, isRatingGame, timeMode }) => {
  return (
    <div className="flex items-center gap-3 text-slate-400 text-xs">
      {isRatingGame && <StarIcon></StarIcon>}
      <div className="flex items-center gap-1">
        <PlayersCountIcon></PlayersCountIcon>
        {playersCount}
      </div>
      <div className="flex items-center gap-1">
        <TimeLeftIcon></TimeLeftIcon>
        {timeMode}
      </div>
    </div>
  );
};

export { GameInfo };
