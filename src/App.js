import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import RecentSearches from "./components/RecentSearches";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/App.css";
const apiKey = "3547406997e5733cd8a95a10604292da";
const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const storedSearches =
      JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(storedSearches);
  }, []);
  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
        fetchForecast(city);
        updateRecentSearches(city);
      } else {
        setWeather(null);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchForecast = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      if (data.cod === "200") {
        const dailyForecast = new Map();

        data.list.forEach((item) => {
          const dateStr = item.dt_txt.split(" ")[0];

          if (!dailyForecast.has(dateStr)) {
            dailyForecast.set(dateStr, item);
          }
        });

        setForecast([...dailyForecast.values()].slice(1, 6));
      }
    } catch (error) {
      console.error("Error fetching forecast:", error);
    }
  };

  const updateRecentSearches = (city) => {
    const updatedSearches = [
      city,
      ...recentSearches.filter((item) => item !== city),
    ].slice(0, 5);
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  return (
    <div className="app">
      <ThemeToggle />
      <h1>Weather Dashboard</h1>
      <h2>Check the weather and forecast for your favorite cities!!!!</h2>
      <SearchBar onSearch={fetchWeather} />
      {weather && <WeatherCard weather={weather} />}
      {forecast.length > 0 && <Forecast forecast={forecast} />}
      <RecentSearches searches={recentSearches} onSearch={fetchWeather} />
    </div>
  );
};

export default App;
