import React from "react";
import "../styles/WeatherCard.css";

const WeatherCard = ({ weather }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <img
        src={iconUrl}
        alt={weather.weather[0].description}
        className="weather-icon"
      />
      <h3>{weather.weather[0].description}</h3>
      <p>🌡 Temp: {weather.main.temp}°C</p>
      <p>💨 Wind: {weather.wind.speed} m/s</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
