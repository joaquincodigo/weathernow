import React from "react";

export default function Card({ children }) {
  return (
    <div className=" flex items-center justify-center p-3">
      <div
        className="
          shadow-xl
          overflow-hidden
          rounded-xl
          w-full
          xs:max-w-[380px]
          min-h-[568px]
          flex
          flex-col
        "
      >
        {children}
      </div>
    </div>
  );
}
