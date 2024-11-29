import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './WeatherCard.module.scss';
import { weatherIcons, defaultLocation } from './WeatherConstants';
import AnimateBookPagesLoader from '../UIVerse/AnimateBookPages/AnimateBookPages';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: { description: string; icon: string }[];
}

const WeatherCard: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKeyOpenWeather = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: defaultLocation,
              units: 'metric',
              appid: apiKeyOpenWeather,
            },
          }
        );
        setWeatherData(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || err.message);
      }
    };

    fetchWeather();
  }, []);

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
      <h2 className={styles.location}>{name}</h2>
      <img className={styles.icon} src={src} alt={alt} />
      <p className={styles.description}>{weather[0].description}</p>
      <p className={styles.temperature}>{main.temp}°C</p>
      <p className={styles.humidity}>Humidity: {main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
