import axios from 'axios';
import connect from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

const API_KEY = '91e924f88d327fb06984955a693516eb';
export const FETCH_WEATHER  = 'FETCH_WEATHER';
export const ROOT_URL  =  `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q={}`;

export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},US`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
