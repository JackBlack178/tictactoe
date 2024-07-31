import React from "react";

const ResetButton = ({ children, onClick, type = "button", ...props }) => {
  return (
    <button
      className={
        "cursor-pointer mt-3 bg-transparent border border-solid border-gray-500 py-1 px-3"
      }
      {...props}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default ResetButton;
