import { CapacitorHttp, HttpResponse } from "@capacitor/core";
import { OpenweatherGeolocation, OpenweatherWeather, WeatherProps } from "../interfaces/weather.interface";

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
const apiUrl = "https://api.openweathermap.org";
const weatherEndpoint = "/data/2.5/weather";
const geolocationEndpoint = "/geo/1.0/direct";

const getCoordinates = async (cityName: string): Promise<OpenweatherGeolocation> => {
    try {
        // q=Roma&limit=1&appid=d3f33ac3bb96540ed07f938d7d432442
        const response: HttpResponse = await CapacitorHttp.get({
            url: apiUrl + geolocationEndpoint,
            params: {
                q: cityName,
                limit: "1",
                appid: apiKey
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getWeather = async (latitude: number, longitude: number): Promise<OpenweatherWeather> => {
    try {
        // lat=12&lon=13&appid=d3f33ac3bb96540ed07f938d7d432442
        const response: HttpResponse = await CapacitorHttp.get({
            url: apiUrl + weatherEndpoint,
            params: {
                lat: latitude.toString(),
                lon: longitude.toString(),
                appid: apiKey,
            }
        });
        let weather = response.data as OpenweatherWeather;
        weather.date = timestampToDate(weather.dt);
        weather.main.temp = kelvinToCelsius(weather.main.temp);
        weather.main.feels_like = kelvinToCelsius(weather.main.feels_like);
        console.log(weather)
        return weather;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const kelvinToCelsius = (kelvin: number): number => {
    return Math.round((kelvin - 273.15) * 10) / 10;
}

const timestampToDate = (timestamp: number): string => {
    const date = new Date(timestamp * 1000);
    return date.getDate().toString().padStart(2, "0") + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getFullYear();
}

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export { getCoordinates, getWeather };