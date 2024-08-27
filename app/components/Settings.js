import React from "react";

export default function Settings() {
  return (
    <div className="bg-slate-100 w-full h-full py-10 flex flex-col min-h-[568px]">
      {/* TITLE  */}
      <div className="text-center font-semibold text-lg mb-10">Settings</div>

      {/* TEMP SCALES QUESTION  */}
      <div className="text-center mb-3">
        Which temperature scale would you prefer?
      </div>

      {/* TEMP SCALES CONTAINER  */}
      <div className="flex justify-center space-x-4 flex-row px-4 mb-10">
        {/* CELSIUS  */}
        <button className="flex-1 flex flex-col items-center border border-slate-300 hover:border-slate-500 p-1 rounded-lg">
          <div className="text-xl font-bold">°C</div>
          <div>Celsius</div>
        </button>
        {/* FAHRENHEIT */}
        <button className="flex-1 flex flex-col items-center border border-slate-300 hover:border-slate-500 p-1 rounded-lg">
          <div className="text-xl font-bold">°F</div>
          <div>Fahrenheit</div>
        </button>
        {/* KELVIN */}
        <button className="flex-1 flex flex-col items-center border border-slate-300 hover:border-slate-500 p-1 rounded-lg">
          <div className="text-xl font-bold">K</div>
          <div>Kelvin</div>
        </button>
      </div>

      {/* WIND SCALES QUESTION  */}
      <div className="text-center mb-3">
        Which wind speed scale would you prefer?
      </div>

      {/* WIND SCALES CONTAINER  */}
      <div className="flex justify-center space-x-4 flex-row px-4 mb-10">
        {/* METERS PER SECOND  */}
        <button className="flex-1 flex flex-col items-center border border-slate-300 hover:border-slate-500 p-1 rounded-lg">
          <div className="text-xl font-bold">m/s</div>
          <div>Meters per Second</div>
        </button>
        {/* KILOMETERS PER HOUR */}
        <button className="flex-1 flex flex-col items-center border border-slate-300 hover:border-slate-500 p-1 rounded-lg">
          <div className="text-xl font-bold">km/h</div>
          <div>Kilometers per Hour</div>
        </button>
        {/* KNOTS */}
        <button className="flex-1 flex flex-col items-center border border-slate-300 hover:border-slate-500 p-1 rounded-lg">
          <div className="text-xl font-bold">kn</div>
          <div>Knots</div>
        </button>
      </div>
    </div>
  );
}
