import React from "react";

export const Button = ({ children, className, to }) => {
  return (
    <button
      className={`text-custom-maroon bg-[#FFFFFF] rounded-2xl px-6 py-3 text-sm font-semibold ${className}`}
    >
      <a href={to}>{children}</a>
    </button>
  );
};
