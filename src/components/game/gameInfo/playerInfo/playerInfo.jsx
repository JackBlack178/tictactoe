import React, { useEffect } from "react";
import { Profile } from "../../../profile";
import { GameSymbol } from "../../gameSymbol";
import { clsx } from "clsx";

const PlayerInfo = ({ playerInfo, isRight, isTimerRunning }) => {
  const [seconds, setSeconds] = React.useState(60);
  const minutesStr = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");

  const secondsStr = (seconds % 60).toString().padStart(2, "0");
  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(
        () => setSeconds((prev) => Math.max(prev - 1, 0)),
        1000,
      );
      return () => {
        clearInterval(interval);
        setSeconds(60);
      };
    }
  }, [isTimerRunning]);

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-200";
  };

  return (
    <div className="flex items-center gap-3">
      <div
        className={clsx(
          " text-lg font-semibold w-[60px]",
          isRight && "order-3",
          getTimerColor(),
        )}
      >
        {minutesStr}:{secondsStr}
      </div>

      <div
        className={clsx(
          "border border-solid border-slate-200 w-px h-6",
          isRight && "order-2",
        )}
      ></div>

      <div className={clsx("relative", isRight && "order-1")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatarSrc={playerInfo.avatar}
        ></Profile>
        <div
          className={clsx(
            "w-5 h-5 rounded-full bg-white shadow absolute -left-0.5 -top-0.5 flex items-center justify-center",
            isRight && "order-1",
          )}
        >
          <GameSymbol
            symbol={playerInfo.symbol}
            className="w-3 h-3 flex justify-center items-center"
          ></GameSymbol>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
