import React from "react";
import { clsx } from "clsx";
import { on } from "next/dist/client/components/react-dev-overlay/pages/bus";

/**
 * @param {{
 * children: any,
 * className: string,
 * size: 'md' | 'sm',
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
      md: "rounded px-6 py-2 text-sm leading-tight",
      lg: "rounded-lg px-5 py-2 text-2xl leading-tight",
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
