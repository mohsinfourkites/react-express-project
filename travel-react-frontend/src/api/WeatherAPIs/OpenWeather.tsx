// OpenWeather.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { defaultLocation } from '../../components/Weather/WeatherConstants';
import { appConfig } from '../../config/App-Config';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: { description: string; icon: string }[];
}

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKeyOpenWeather = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const response = await axios.get(
          `${appConfig.weatherAPIOpenWeatherBAseUrl}/data/2.5/weather`,
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

  return { weatherData, error };
};

export default useWeatherData;