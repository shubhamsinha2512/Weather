import React, { Component } from 'react'
import './style.css'

import WeatherContext, {WeatherProvider} from '../../Contexts/WeatherContext'

import TodayDetails from '../../components/TodayDetails/TodayDetails'
import FiveDayDetails from '../../components/FiveDayDetails/FiveDayDetails'

export default class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            city:{
                cityName : 'London',
                woeid : '44418'
            },
            data: {
                "consolidated_weather": [
                  {
                    "id": 4706885715361792,
                    "weather_state_name": "Light Cloud",
                    "weather_state_abbr": "lc",
                    "wind_direction_compass": "SSW",
                    "created": "2021-06-17T06:35:28.072500Z",
                    "applicable_date": "2021-06-17",
                    "min_temp": 20.18,
                    "max_temp": 31.634999999999998,
                    "the_temp": 30.17,
                    "wind_speed": 5.00449926053713,
                    "wind_direction": 208.3780778653654,
                    "air_pressure": 1009,
                    "humidity": 48,
                    "visibility": 14.015337926509186,
                    "predictability": 70
                  },
                  {
                    "id": 5654782313234432,
                    "weather_state_name": "Light Cloud",
                    "weather_state_abbr": "lc",
                    "wind_direction_compass": "SSW",
                    "created": "2021-06-17T06:35:31.266583Z",
                    "applicable_date": "2021-06-18",
                    "min_temp": 20.33,
                    "max_temp": 31.755000000000003,
                    "the_temp": 30.87,
                    "wind_speed": 4.999927169132268,
                    "wind_direction": 212.8342294381926,
                    "air_pressure": 1008.5,
                    "humidity": 45,
                    "visibility": 13.960346575996182,
                    "predictability": 70
                  },
                  {
                    "id": 5091832359813120,
                    "weather_state_name": "Light Cloud",
                    "weather_state_abbr": "lc",
                    "wind_direction_compass": "SW",
                    "created": "2021-06-17T06:35:33.964083Z",
                    "applicable_date": "2021-06-19",
                    "min_temp": 20.205,
                    "max_temp": 30.630000000000003,
                    "the_temp": 28.924999999999997,
                    "wind_speed": 5.002029397598028,
                    "wind_direction": 218.49316097492922,
                    "air_pressure": 1008.5,
                    "humidity": 46,
                    "visibility": 14.253944464328322,
                    "predictability": 70
                  },
                  {
                    "id": 5608132425285632,
                    "weather_state_name": "Light Cloud",
                    "weather_state_abbr": "lc",
                    "wind_direction_compass": "SW",
                    "created": "2021-06-17T06:35:36.972529Z",
                    "applicable_date": "2021-06-20",
                    "min_temp": 20.744999999999997,
                    "max_temp": 32.355,
                    "the_temp": 27.96,
                    "wind_speed": 5.158905221689334,
                    "wind_direction": 218.00649729921184,
                    "air_pressure": 1010,
                    "humidity": 46,
                    "visibility": 14.353053169490178,
                    "predictability": 70
                  },
                  {
                    "id": 6533696468287488,
                    "weather_state_name": "Clear",
                    "weather_state_abbr": "c",
                    "wind_direction_compass": "SW",
                    "created": "2021-06-17T06:35:39.963778Z",
                    "applicable_date": "2021-06-21",
                    "min_temp": 18.67,
                    "max_temp": 29.674999999999997,
                    "the_temp": 30.62,
                    "wind_speed": 4.131970293486042,
                    "wind_direction": 217,
                    "air_pressure": 1010,
                    "humidity": 44,
                    "visibility": 9.999726596675416,
                    "predictability": 68
                  },
                  {
                    "id": 5215514029719552,
                    "weather_state_name": "Clear",
                    "weather_state_abbr": "c",
                    "wind_direction_compass": "SW",
                    "created": "2021-06-17T06:35:42.951299Z",
                    "applicable_date": "2021-06-22",
                    "min_temp": 17.265,
                    "max_temp": 27.455,
                    "the_temp": 26.95,
                    "wind_speed": 4.083671955778255,
                    "wind_direction": 219.5,
                    "air_pressure": 1013,
                    "humidity": 48,
                    "visibility": 9.999726596675416,
                    "predictability": 68
                  }
                ],
                "time": "2021-06-17T01:37:25.014070-07:00",
                "sun_rise": "2021-06-17T05:41:23.233154-07:00",
                "sun_set": "2021-06-17T20:06:26.978213-07:00",
                "timezone_name": "LMT",
                "parent": {
                  "title": "California",
                  "location_type": "Region / State / Province",
                  "woeid": 2347563,
                  "latt_long": "37.271881,-119.270233"
                },
                "sources": [
                  {
                    "title": "BBC",
                    "slug": "bbc",
                    "url": "http://www.bbc.co.uk/weather/",
                    "crawl_rate": 360
                  },
                  {
                    "title": "Forecast.io",
                    "slug": "forecast-io",
                    "url": "http://forecast.io/",
                    "crawl_rate": 480
                  },
                  {
                    "title": "HAMweather",
                    "slug": "hamweather",
                    "url": "http://www.hamweather.com/",
                    "crawl_rate": 360
                  },
                  {
                    "title": "Met Office",
                    "slug": "met-office",
                    "url": "http://www.metoffice.gov.uk/",
                    "crawl_rate": 180
                  },
                  {
                    "title": "OpenWeatherMap",
                    "slug": "openweathermap",
                    "url": "http://openweathermap.org/",
                    "crawl_rate": 360
                  },
                  {
                    "title": "Weather Underground",
                    "slug": "wunderground",
                    "url": "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
                    "crawl_rate": 720
                  },
                  {
                    "title": "World Weather Online",
                    "slug": "world-weather-online",
                    "url": "http://www.worldweatheronline.com/",
                    "crawl_rate": 360
                  }
                ],
                "title": "Los Angeles",
                "location_type": "City",
                "woeid": 2442047,
                "latt_long": "34.053490,-118.245323",
                "timezone": "US/Pacific"
              }
            }
        }

    async getWeatherData(woeid){
        await fetch(`https://www.metaweather.com/api/location/44418/`, 
        {
            method: 'GET',
            mode: 'no-cors'
        })
        .then(response=> response.json())
        .then(response => this.setState((state)=>{
            state.data = response;
            console.log(response);
        }))
        .catch(err => console.log(err));
    }

    componentDidMount(){
        // this.getWeatherData(44418);
    }


    render() {
        return (
            <div className="Home">
                <WeatherProvider value={this.state.data} >
                    <FiveDayDetails />
                    <TodayDetails />
                </WeatherProvider>
            </div>
        )
    }
}
