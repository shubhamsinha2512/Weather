import React from 'react'
import './style.css'

import Day from '../Day/Day'
import HumidityRowIcon from '../HumidityRowIcon/HumidityRowIcon'
import TempMinMax from '../TempMinMax/TempMinMax'
import WeatherStateIcon from '../WeatherStateIcon/WeatherStateIcon'

function DayOverviewRow({date, humidity, weather_state_abbr, min, max}) {
    return (
        <div className='dayOverviewRow'>
            <Day date={date}/>
            <HumidityRowIcon humidity={humidity} />
            <WeatherStateIcon weather_state_abbr={weather_state_abbr} />
            <TempMinMax className="temp" min={min} max={max} />
        </div>
    )
}

export default DayOverviewRow
