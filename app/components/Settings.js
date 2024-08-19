import React from "react";

export default function Settings() {
  return (
		<div className="flex flex-col">
		<div>Which temperature scale would you prefer?</div>

		<div className="flex justify-center space-x-4 flex-row bg-purple-400 px-4">
			<div className="flex-1 flex flex-col items-center border border-black p-3 rounded-lg">
				<div className="text-2xl font-bold">°C</div>
				<div>Celsius</div>
			</div>

			<div className="flex-1 flex flex-col items-center border border-black p-3 rounded-lg">
				<div className="text-2xl font-bold">°F</div>
				<div>Fahrenheit</div>
			</div>

			<div className="flex-1 flex flex-col items-center border border-black p-3 rounded-lg">
				<div className="text-2xl font-bold">°K</div>
				<div>Kelvin</div>
			</div>
		</div>

		<div>Do you want to enable Dark Mode?</div>
		<div>
			<div>I AM TOGGLE</div>
		</div>
	</div>
  );
}
