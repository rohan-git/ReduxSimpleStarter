import axios from 'axios';

const API_KEY = '91e924f88d327fb06984955a693516eb';
export const FETCH_WEATHER  = 'FETCH_WEATHER';
export const ROOT_URL  =  `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},US`;
  const request = axios.get(url);

  console.log('req:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
