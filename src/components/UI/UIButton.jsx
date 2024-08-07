import React from "react";
import { clsx } from "clsx";
import { on } from "next/dist/client/components/react-dev-overlay/pages/bus";

/**
 * @param {{
 * children: any,
 * className: string,
 * size: 'md' | 'lg',
 * option: 'primary' | 'outline'
 * }} props
 */

const UIButton = ({
  children,
  onClick,
  type = "button",
  size = "lg",
  option = "primary",
  className,
}) => {
  const buttonClassName = clsx(
    className,
    {
      md: "rounded-xl px-2 py-2 md:px-5 xl:px-6 xl:py-3 text-sm leading-tight",
      lg: "rounded-lg px-2 py-1 md:px-4 xl:px-5 xl:py-2 text-xl leading-tight",
    }[size],
    {
      primary:
        "bg-teal-600 hover:bg-teal-700 ease-in transition-all duration-300 text-white",
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    }[option],
  );

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default UIButton;
