import React from "react";
import { clsx } from "clsx";
import UIButton from "../../../UI/Button/UIButton";
import OIcon from "../gameInfo/icons/oIcon";
import XIcon from "../gameInfo/icons/xIcon";

const cells = new Array(19 * 19).fill(null);

const GameField = ({ className, children }) => {
  return (
    <>
      <section
        className={clsx(
          className,
          "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7 w-max  mx-auto",
        )}
      >
        <div className="flex gap-3 items-center">
          <div className="mr-auto">
            <div className="flex items-center gap-1 text-xl leading-tight">
              Ход: <OIcon className="w-5 h-5"></OIcon>
            </div>
            <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
              Следующий: <XIcon></XIcon>
            </div>
          </div>
          <UIButton size="md" option={"primary"}>
            Ничья
          </UIButton>
          <UIButton size={"md"} option="outline">
            Сдаться
          </UIButton>
        </div>

        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px mt-3">
          {cells.map((_, i) => (
            <button
              key={i}
              className="border border-slate-200 -ml-px -pt-px"
            ></button>
          ))}
        </div>
      </section>
    </>
  );
};

export default GameField;
