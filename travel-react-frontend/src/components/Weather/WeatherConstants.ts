import Sunny from '../../assets/icons/Weather_Illustartions/sunny.jpg';
import ClearNight from '../../assets/icons/Weather_Illustartions/clearsky.jpg'; //////
import PartlyCloudyDay from '../../assets/icons/Weather_Illustartions/partlycloudday.jpg';
import PartlyCloudyNight from '../../assets/icons/Weather_Illustartions/partlycloudnight.jpg';
import Cloudy from '../../assets/icons/Weather_Illustartions/cloudy.jpg';
import Overcast from '../../assets/icons/Weather_Illustartions/overcast.png';
import Showers from '../../assets/icons/Weather_Illustartions/showers.png';
import Rain from '../../assets/icons/Weather_Illustartions/rain.png';
import RainNight from '../../assets/icons/Weather_Illustartions/rainnight.png';
import Thunderstorm from '../../assets/icons/Weather_Illustartions/lightning.png';
import Snow from '../../assets/icons/Weather_Illustartions/weather.gif';
import Mist from '../../assets/icons/Weather_Illustartions/mist.png';
import Default from '../../assets/icons/Weather_Illustartions/meteorology.png';

export const weatherIconsAccuWeather: { [key: string]: { src: string; alt: string } } = {
  'Sunny': { src: Sunny, alt: 'Sunny' },
  'ClearNight': { src: ClearNight, alt: 'Clear Night' },
  'PartlyCloudyDay': { src: PartlyCloudyDay, alt: 'Partly Cloudy Day' },
  'PartlyCloudyNight': { src: PartlyCloudyNight, alt: 'Partly Cloudy Night' },
  'Cloudy': { src: Cloudy, alt: 'Cloudy' },
  'Overcast': { src: Overcast, alt: 'Overcast' },
  'Showers': { src: Showers, alt: 'Showers' },
  'Rain': { src: Rain, alt: 'Rain' },
  'RainNight': { src: RainNight, alt: 'Rain Night' },
  'Thunderstorm': { src: Thunderstorm, alt: 'Thunderstorm' },
  'Snow': { src: Snow, alt: 'Snow' },
  'Mist': { src: Mist, alt: 'Mist' },
  default: { src: Default, alt: 'Default Weather' },
};

export const weatherIcons: { [key: string]: { src: string; alt: string } } = {
  '01d': { src: Sunny, alt: 'Sunny' },
  '01n': { src: ClearNight, alt: 'Clear Night' },
  '02d': { src: PartlyCloudyDay, alt: 'Partly Cloudy Day' },
  '02n': { src: PartlyCloudyNight, alt: 'Partly Cloudy Night' },
  '03d': { src: Cloudy, alt: 'Cloudy' },
  '03n': { src: Cloudy, alt: 'Cloudy' },
  '04d': { src: Overcast, alt: 'Overcast' },
  '04n': { src: Overcast, alt: 'Overcast' },
  '09d': { src: Showers, alt: 'Showers' },
  '09n': { src: Showers, alt: 'Showers' },
  '10d': { src: Rain, alt: 'Rain' },
  '10n': { src: RainNight, alt: 'Rain Night' },
  '11d': { src: Thunderstorm, alt: 'Thunderstorm' },
  '11n': { src: Thunderstorm, alt: 'Thunderstorm' },
  '13d': { src: Snow, alt: 'Snow' },
  '13n': { src: Snow, alt: 'Snow' },
  '50d': { src: Mist, alt: 'Mist' },
  '50n': { src: Mist, alt: 'Mist' },
  default: { src: Default, alt: 'Default Weather' },
};

export const defaultLocation = 'Gulmarg';
