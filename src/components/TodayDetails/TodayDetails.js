import React, {useContext} from 'react'
import TempLocToday from '../TempLocToday/TempLocToday'
import TodayDetailsBar from '../TodayDetailsBar/TodayDetailsBar'
import TodayWeatherIcon from '../TodayWeatherIcon/TodayWeatherIcon'
import './style.css'

import WeatherContext from '../../Contexts/WeatherContext'

function TodayDetails() {

    const data = useContext(WeatherContext);

    return (
            <div className="todayDetails">
            <div className='bg'>
                <img className='bgDeco d1' src="https://www.metaweather.com/static/img/weather/s.svg" />
                <img className='bgDeco d2' src="https://www.metaweather.com/static/img/weather/hc.svg" />
                <img className='bgDeco d3' src="https://www.metaweather.com/static/img/weather/lc.svg" />
                <img className='bgDeco d4' src="https://www.metaweather.com/static/img/weather/sn.svg" />
            </div>
                <TodayWeatherIcon
                    weather_state_abbr={data.consolidated_weather[0].weather_state_abbr}
                    date={data.consolidated_weather[0].applicable_date} 
                />

                <TempLocToday 
                    temp={data.consolidated_weather[0].the_temp}
                    sunrise={data.sun_rise}
                    sunset={data.sun_set}
                    city={data.title}
                    country={data.parent.title}
                />

                <TodayDetailsBar 
                    windSpeed={data.consolidated_weather[0].wind_speed}
                    humidity={data.consolidated_weather[0].humidity}
                    airPressure={data.consolidated_weather[0].air_pressure}
                />
            </div>
    )
}

export default TodayDetails
