import React, {useEffect} from 'react';
import { Grid } from '@material-ui/core';

import CurrentWeather from "./CurrentWeather";
import DetailedInfo from "./DetailedInfo";
import Forecast from "./Forecast";
import CitySelect from "../../containers/weather/CitySelect";
const kToC = k => (k - 273.15);

const WeatherWidget = ({fetchWeatherReport, report={}, isLoading})=> {
    let temperatureClass, temp, description, city = {}, iconId, main = {}, list = {};
    useEffect(()=> {
        fetchWeatherReport();
    }, []);
    if (report && report.list) {
        list = report.list[0];
        main = list.main;
        description = report.list[0].weather[0].description;
        main = report.list[0].main;
        city = report.city;
        temp = (main.temp - 273.15 );
        iconId = report.list[0].weather[0].id;
        if (temp >= 100) {
            temperatureClass = 'boiling';
        }
        if (temp < 100 && temp >= 85) {
            temperatureClass = 'hot';
        }
        if (temp < 85 && temp >= 65) {
            temperatureClass = 'warm';
        }
        if (temp < 65 && temp >= 50) {
            temperatureClass = 'perfect';
        }
        if (temp < 50 && temp >= 32) {
            temperatureClass = 'cool';
        }
        if (temp < 32) {
            temperatureClass = 'freezing';
        }
    }

    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            className={temperatureClass}
            id="main">
            <div className="city-select">
                <CitySelect selected={city.id} />
            </div>
            <Grid item xs={12} md={8}>
                <CurrentWeather
                    city={city.name}
                    temp={temp}
                    iconId={iconId}
                    description={description}
                    loading={isLoading}
                />
                <Forecast forecast={report? report.list : []} tempClass={temperatureClass}/>
                <DetailedInfo
                    high={kToC(main.temp_max)}
                    low={kToC(main.temp_min)}
                    windSpeed={list.wind ? list.wind.speed: null}
                    humidity={main.humidity}
                    time={list.dt}
                />
            </Grid>
        </Grid>
    );
};

export default WeatherWidget;