import React from 'react'
import './style.css'

import Day from '../Day/Day'
import HumidityIcon from '../HumidityIcon/HumidityIcon'
import TempMinMax from '../TempMinMax/TempMinMax'
import WeatherStateIcon from '../WeatherStateIcon/WeatherStateIcon'

function DayOverviewRow({date, humidity, weather_state_abbr, min, max}) {
    return (
        <div className='dayOverviewRow'>
            <Day date={date}/>
            <HumidityIcon humidity={humidity} />
            <WeatherStateIcon weather_state_abbr={weather_state_abbr} />
            <TempMinMax className="temp" min={min} max={max} />
        </div>
    )
}

export default DayOverviewRow
