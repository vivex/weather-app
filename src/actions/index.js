import { FETCH_WEATHER_REPORT_FAILED, FETCH_WEATHER_REPORT_STARTED, FETCH_WEATHER_REPORT_SUCCESS } from '../constants'
import axios from 'axios';
import {default as CITIES} from '../constants/cities';
const API_KEY = 'aaccd4848b1aedd3a65625121fa85cc1';


export const fetchWeatherReport = dispatch => (id) => {
  id = id || CITIES[0].id;
  dispatch({type: FETCH_WEATHER_REPORT_STARTED});
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&cnt=10&appid=${API_KEY}`)
      .then((res)=> {
        dispatch({type: FETCH_WEATHER_REPORT_SUCCESS, payload: res.data});
      }).catch((e)=> {
        dispatch({type: FETCH_WEATHER_REPORT_FAILED, payload: e});
  })
}