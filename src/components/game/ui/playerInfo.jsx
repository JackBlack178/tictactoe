import React, { memo } from "react";
import { clsx } from "clsx";
import GameSymbol from "./gameSymbol";
import Image from "next/image";
import { useNow } from "../../../lib/timer";

const PlayerInfo = memo(function PlayerInfo({
  name,
  rating,
  isRight,
  avatarSrc,
  symbol,
  timer,
  timerStartAt,
}) {
  const now = useNow(1000, timerStartAt);
  const mils = Math.max(now ? timer - (now - timerStartAt) : timer, 0);

  const seconds = Math.ceil(mils / 1000);
  const secondsStr = (seconds % 60).toString().padStart(2, "0");
  const minutesStr = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");

  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (timerStartAt) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-200";
  };

  return (
    <div className="flex items-center gap-0.5 md:gap-3 justify-between">
      <div
        className={clsx(
          "text-sm md:text-lg font-semibold w-[60px]",
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
        <div
          className={
            "ml-auto flex item-center gap-1 md:gap-2 text-start text-teal-500"
          }
        >
          <Image src={avatarSrc} alt="Profile"></Image>
          <div className="overflow-hidden">
            <div className="text-sm md:text-lg leading-tight truncate ">
              {name}
            </div>
            <div className="text-slate-400 text-xs leading-tight">
              Rating:{rating}
            </div>
          </div>
        </div>

        <div
          className={clsx(
            "w-5 h-5 rounded-full bg-white shadow absolute -left-0.5 -top-0.5 flex items-center justify-center",
            isRight && "order-1",
          )}
        >
          <GameSymbol
            symbol={symbol}
            className=" h-2 md:w-3 aspect-square flex justify-center items-center"
          ></GameSymbol>
        </div>
      </div>
    </div>
  );
});

export { PlayerInfo };
