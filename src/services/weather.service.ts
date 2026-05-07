import { CapacitorHttp, HttpResponse } from "@capacitor/core";
import { OpenweatherGeolocation, OpenweatherWeather, WeatherProps } from "../interfaces/weather.interface";

const apiKey = "d3f33ac3bb96540ed07f938d7d432442";
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
        console.log(response.data);
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
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export { getCoordinates, getWeather };