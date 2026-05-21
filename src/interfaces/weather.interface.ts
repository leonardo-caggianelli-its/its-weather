export interface OpenweatherGeolocation {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export interface OpenweatherWeather {
  coord: {
    lat: number;
    lon: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  dt: number;
  date: string;
  sys: {
    country: string;
  }
  name: string;
}

// export interface OpenweatherWeather {
//   coord: OpenweatherCoordProp;
//   weather: OpenweatherWeatherWeatherProp[];
// }

// export interface OpenweatherCoordProp {
//   lat: number;
//   lon: number;
// }

// export interface OpenweatherWeatherWeatherProp {
//   main: string;
//   description: string;
// }






export interface WeatherProps {
  city: string;
  country: string;
  weather_condition: string;
  date: string;
  weather_temperature: number;
  weather_wind: number;
  weather_feel_temperature: number;
  weather_uv: number;
  weather_pressure: number;
}