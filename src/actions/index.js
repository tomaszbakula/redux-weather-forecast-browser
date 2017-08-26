import axios from 'axios';

const API_KEY = '8e69bac5e02a1b87584b4ebe15163729';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
    const url = ROOT_URL + '&q=' + city + ',uk';
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}