// useWeatherData.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { appConfig } from '../../config/App-Config';

interface WeatherData {
  LocalObservationDateTime: string;
  WeatherText: string;
  Temperature: {
    Metric: {
      Value: number;
    };
  };
  RelativeHumidity: number;
}

interface ForecastData {
  Date: string;
  Day: {
    IconPhrase: string;
  };
  Temperature: {
    Maximum: {
      Value: number;
    };
    Minimum: {
      Value: number;
    };
  };
}

const useWeatherData = (location: string) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!location) return;

    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const apiKey = import.meta.env.VITE_WEATHER_API_ACCU_WEATHER_KEY;

        // Fetch location key based on the location
        const locationResponse = await axios.get(
          `${appConfig.weatherAPIAccuWeatherBaseUrl}/locations/v1/cities/search`,
          {
            params: {
              apikey: apiKey,
              q: location,
            },
          }
        );
        const locationKey = locationResponse.data[0]?.Key;

        if (!locationKey) {
          throw new Error('Location not found');
        }

        // Fetch current weather
        const currentWeatherResponse = await axios.get(
          `${appConfig.weatherAPIAccuWeatherBaseUrl}/currentconditions/v1/${locationKey}`,
          {
            params: { apikey: apiKey },
          }
        );

        // Fetch forecast data
        const forecastResponse = await axios.get(
          `${appConfig.weatherAPIAccuWeatherBaseUrl}/forecasts/v1/daily/5day/${locationKey}`,
          {
            params: { apikey: apiKey },
          }
        );

        setWeatherData(currentWeatherResponse.data[0]);
        setForecastData(forecastResponse.data.DailyForecasts);
        setError(null);
      } catch (err: any) {
        setError(err.response?.data?.message || err.message);
        setWeatherData(null);
        setForecastData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [location]);

  return { weatherData, forecastData, error, loading };
};

export default useWeatherData;
