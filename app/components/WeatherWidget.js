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
    <div className="py-10 w-full h-full flex flex-col items-center bg-gradient-radial from-cyan-500 to-blue-600 text-white min-h-[568px]">

      {/* CITI NAME */}
      <div className="w-full text-center mb-5 text-lg font-semibold">
        {weatherData.cityName}
      </div>

      {/* IMAGE */}
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
        alt="Weather Icon"
        className="w-[50%] aspect-w-1 aspect-h-1 object-cover"
      />

      {/* CURRENT WEATHER */}
      <div className="w-full text-center capitalize mb-10 font-bold text-xl">
        {weatherData.weather}
      </div>

      {/* CURRENT TEMP */}
      <div className="w-full text-center text-4xl mb-1">
        {Math.round(weatherData.temperature)} °C
      </div>
      
      {/* FEELED TEMP */}
      <div className="w-full text-center text-xl mb-20">
        ( Feels like {Math.round(weatherData.feelsLike)} °C )
      </div>

      {/* LOWER HORIZONTAL CONTAINER */}
      <div className="flex justify-between items-center w-full px-4 max-w-[300px]">

        {/* HUMIDITY */}
        <div className="text-center">
          <div>Humidity</div>
          <div>{weatherData.humidity}%</div>
        </div>

        {/* WIND */}
        <div className="text-center">
          <div>Winds</div>
          <div>{weatherData.windSpeed} m/s</div>
        </div>

        {/* VISIBILITY */}
        <div className="text-center">
          <div>Visibility</div>
          <div>{weatherData.visibility / 1000} km</div>
        </div>

      </div>
      
    </div>
  );
};

export default WeatherWidget;
