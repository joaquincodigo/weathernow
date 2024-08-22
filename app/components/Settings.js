import React from "react";

export default function Settings() {
  return (
    <div className="bg-slate-100 w-full h-full py-10 flex flex-col min-h-[568px]">

     {/* TITLE  */}
      <div className="text-center font-bold text-lg mb-5">Settings</div>

      <div className="text-center mb-3">
        Which temperature scale would you prefer?
      </div>

      <div className="flex justify-center space-x-4 flex-row px-4">

        <div className="flex-1 flex flex-col items-center border border-slate-300 hover:border-slate-500 p-1 rounded-lg">
          <div className="text-xl font-bold">°C</div>
          <div>Celsius</div>
        </div>

        <div className="flex-1 flex flex-col items-center border border-slate-300 hover:border-slate-500 p-1 rounded-lg">
          <div className="text-xl font-bold">°F</div>
          <div>Fahrenheit</div>
        </div>

        <div className="flex-1 flex flex-col items-center border border-slate-300 hover:border-slate-500 p-1 rounded-lg">
          <div className="text-xl font-bold">K</div>
          <div>Kelvin</div>
        </div>
      </div>

    </div>
  );
}
