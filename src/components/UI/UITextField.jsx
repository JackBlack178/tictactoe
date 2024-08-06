import React from "react";
import { clsx } from "clsx";

/**
 * @param {{
 * label?:string,
 * error?:boolean,
 * required?: boolean,
 * helperText?: string,
 * className?:string,
 * } &import('react').HTMLAttributes<HTMLInputElement> } props
 */

const UiTextField = ({
  label,
  className,
  required,
  helperText,
  error,
  ...inputProps
}) => {
  return (
    <div className={className}>
      {label && (
        <label
          className={clsx(
            "mb-1 block text-sm font-medium text-slate-900",
            required && "after:ml-0.5 after:text-red-500 after:content-['*']",
          )}
          htmlFor="fieldName"
        >
          {label}
        </label>
      )}
      <input
        type="email"
        id="fieldName"
        required={required}
        className={clsx(
          `     px-2 rounded-md border
        shadow-sm py-2 text-sm leading-tight
        disabled:cursor-not-allowed disabled:bg-gray-50 
        disabled:text-gray-500 outline-0`,
          error
            ? "focus:ring focus:ring-red-600/20 border-red-200"
            : "focus:ring focus:ring-teal-600/20 border-slate-300",
        )}
        {...inputProps}
      />
      {(helperText || error) && (
        <p
          className={clsx(
            "mt-1 text-sm",
            error ? "text-red-500" : "text-slate-400",
          )}
        >
          {error ? error : helperText}
        </p>
      )}
    </div>
  );
};

export default UiTextField;
