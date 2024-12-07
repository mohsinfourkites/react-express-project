  
  export const appConfig = {
    basePath: import.meta.env.PUBLIC_URL,
    weatherAPIOpenWeatherBAseUrl: import.meta.env.VITE_WEATHER_API_OPEN_WEATHER ?? '',
    weatherAPIAccuWeatherBaseUrl: import.meta.env.VITE_WEATHER_API_ACCU_WEATHER ?? '',
  };
  
  export const styleConfig = {
    screen: {
      maxMobileSize: 768,
      minWebSize: 1279,
    },
    font: {
      family: 'Lato, sans-serif',
      weight: 400,
      size: 12,
    },
  };