import React from 'react';
import styles from './WeatherCard.module.scss';
import { weatherIcons } from './WeatherConstants';
import AnimateBookPagesLoader from '../UIVerse/AnimateBookPages/AnimateBookPages';
import useWeatherData from '../../api/WeatherAPIs/OpenWeather';
import CalendarDateNow from '../DateAndClock/CalendarDateNow';
import SearchBarHover from '../UIVerse/SearchBarHover/SearchBarHover';
// Import the new component

const WeatherCard: React.FC = () => {
  const { weatherData, error } = useWeatherData();

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!weatherData) {
    return <div className={styles.loading}><AnimateBookPagesLoader /></div>;
  }

  const { name, main, weather } = weatherData;
  const { src, alt } = weatherIcons[weather[0].icon] || weatherIcons.default;

  return (
    <div className={styles.weatherCard}>
      <div className={styles.weatherCardContent}> 
        <div className={styles.weatherCardHeader}>
          <CalendarDateNow />
        </div>
        <img className={styles.icon} src={src} alt={alt} />
        <div className={styles.LocationSearchBar}>
        <SearchBarHover />
          </div>
        <h2 className={styles.location}>{name}</h2>
        
        <p className={styles.description}>{weather[0].description}</p>
        <p className={styles.temperature}>{main.temp}°C</p>
        <p className={styles.humidity}>Humidity: {main.humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherCard;
