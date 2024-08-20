import React from "react";

export default function Settings() {
  return (
    <div className="flex flex-col max-w-[350px] mx-auto">
      <div className="text-center font-bold text-lg mb-5">Settings</div>

      <div className="text-center">
        Which temperature scale would you prefer?
      </div>

      <div className="flex justify-center space-x-4 flex-row bg-purple-400 px-4">
        <div className="flex-1 flex flex-col items-center border border-black p-1 rounded-lg">
          <div className="text-xl font-bold">°C</div>
          <div>Celsius</div>
        </div>

        <div className="flex-1 flex flex-col items-center border border-black p-1 rounded-lg">
          <div className="text-xl font-bold">°F</div>
          <div>Fahrenheit</div>
        </div>

        <div className="flex-1 flex flex-col items-center border border-black p-1 rounded-lg">
          <div className="text-xl font-bold">K</div>
          <div>Kelvin</div>
        </div>
      </div>

    </div>
  );
}
