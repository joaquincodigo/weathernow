"use client";

import React from "react";
import useWeatherData from "../hooks/useWeatherData";

const WeatherWidget = () => {
  const lat = 44.34; // Replace with desired latitude
  const lon = 10.99; // Replace with desired longitude
  const apiKey = "2b87b144063f738d6e1e2613bd72cf8f";

  const { weatherData, loading, error } = useWeatherData(lat, lon, apiKey);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex flex-col items-center bg-gradient-radial from-cyan-500 to-blue-500 text-white max-w-[350px] w-full rounded-lg mx-auto my-auto py-5">
      <div className="w-full text-center mb-10">
        {weatherData.cityName}
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
        alt="Weather Icon"
        className="w-[30%] aspect-w-1 aspect-h-1 object-cover"
      />
      <div className="w-full text-center capitalize mb-3">
        {weatherData.weather}
      </div>
      <div className="w-full text-center text-4xl">
        {Math.round(weatherData.temperature)} °C
      </div>
      <div className="w-full text-center text-2xl mb-20">
        Feels like {Math.round(weatherData.feelsLike)} °C
      </div>

      <div className="flex justify-between items-center w-full px-4">
        <div className="text-center">
          <div>Humidity</div>
          <div>{weatherData.humidity}%</div>
        </div>

        <div className="text-center">
          <div>Wind Speed</div>
          <div>{weatherData.windSpeed} m/s</div>
        </div>

        <div className="text-center">
          <div>Visibility</div>
          <div>{weatherData.visibility / 1000} km</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
