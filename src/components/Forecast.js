import React from "react";
import "../styles/Forecast.css";

const Forecast = ({ forecast }) => {
  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-grid">
        {forecast.map((day, index) => {
          const date = new Date(day.dt * 1000);
          const localDate = date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          });

          const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

          return (
            <div key={index} className="forecast-item">
              <p>{localDate}</p>
              <img
                src={iconUrl}
                alt={day.weather[0].description}
                className="forecast-icon"
              />
              <p>🌡 {Math.round(day.main.temp)}°C</p>
              <p>{day.weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
