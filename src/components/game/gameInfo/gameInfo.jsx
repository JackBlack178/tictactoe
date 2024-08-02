import React from "react";
import { Profile } from "../../profile";
import { clsx } from "clsx";
import XIcon from "./icons/xIcon";
import OIcon from "./icons/oIcon";
import SquareIcon from "./icons/squareIcon";
import TriangleIcon from "./icons/triangleIcon";

const GameInfo = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        "flex items-center justify-between bg-white rounded-2xl shadow-md px-8 py-4",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <Profile className="w-44"></Profile>
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-0.5 -top-0.5 flex items-center justify-center">
            <XIcon></XIcon>
          </div>
        </div>
        <div className="border border-solid border-slate-200 w-px h-6"></div>
        <div className="text-slate-900 text-lg font-semibold">01:08</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-orange-600 text-lg font-semibold">01:08</div>
        <div className="border border-solid border-slate-200 w-px h-6"></div>
        <div className="relative">
          <Profile className="w-44"></Profile>
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-0.5 -top-0.5 flex items-center justify-center">
            <XIcon></XIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
