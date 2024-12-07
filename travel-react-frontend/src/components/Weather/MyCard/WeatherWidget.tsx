import React, { useState } from 'react';
import useWeatherData from '../../../api/WeatherAPIs/AccuWeather';
import style from './WeatherWidget.module.scss';
import { FaSearch } from 'react-icons/fa'; // Import the search icon
import WeatherResponseManipulation from './WeatherResponseManipulation'; // Import the new component
import { weatherIconsAccuWeather } from '../WeatherConstants';


const WeatherWidgetAccU: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>(''); // For the input field
  const [location, setLocation] = useState<string>(''); // Actual location to search
  const { weatherData, forecastData, error, loading } = useWeatherData(location);
  console.log("WeatherrrData", weatherData);

  const handleSearch = () => {
    setLocation(searchInput); // Trigger the hook to fetch data for the new location
  };

  const getWeatherIcon = (weatherText: string) => {
    return weatherIconsAccuWeather[weatherText] || weatherIconsAccuWeather.default;
  };

  return (
 <div className={style.weatherPage}>
    <div className={style.weatherwidget}>
      <div className={style.SearchBar}>
        {/* <SearchBarModal /> */}
        <div className={style.inputContainer}>
          <FaSearch className={style.searchIcon} />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Enter a city"
            className={style.searchInput}
          />
        </div>
        <button onClick={handleSearch} className={style.searchBtn}>
          Search
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <div className={style.weatherCard}>
          <h3><WeatherResponseManipulation dateTime={weatherData.LocalObservationDateTime} /></h3>
          <h1>{weatherData.WeatherText}</h1>
          <img
            src={getWeatherIcon(weatherData.WeatherText).src}
            alt={getWeatherIcon(weatherData.WeatherText).alt}
            className={style.weatherIcon}
          />
          <div className={style.temperature}>
            {weatherData.Temperature.Metric.Value}°C
          </div>
          <div className={style.humidity}>
            Humidity: {weatherData.RelativeHumidity}%
          </div>
          <div className={style.forecast}>
            {forecastData.map((day, index) => (
              <div key={index} className={style.forecastDay}>
                <h4>{new Date(day.Date).toLocaleDateString()}</h4>
                <p>{day.Day.IconPhrase}</p>
                <p>
                  High: {day.Temperature.Maximum.Value}°C, Low: {day.Temperature.Minimum.Value}°C
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
    </div>
  );
};

export default WeatherWidgetAccU;