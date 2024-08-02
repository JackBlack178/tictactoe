import React from "react";
import { clsx } from "clsx";

const ArrowDown = ({ className }) => {
  return (
    <svg
      className={clsx(className, "self-center text-teal-600")}
      width="13"
      height="7"
      viewBox="0 0 13 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.18753 6.75003C6.04368 6.75003 5.89968 6.69505 5.78985 6.58522L0.164848 0.960222C-0.0549492 0.740426 -0.0549492 0.384504 0.164848 0.164848C0.384645 -0.0548086 0.740566 -0.0549492 0.960222 0.164848L6.18753 5.39216L11.4148 0.164848C11.6346 -0.0549492 11.9906 -0.0549492 12.2102 0.164848C12.4299 0.384645 12.43 0.740566 12.2102 0.960222L6.58522 6.58522C6.47539 6.69505 6.33139 6.75003 6.18753 6.75003Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowDown;
