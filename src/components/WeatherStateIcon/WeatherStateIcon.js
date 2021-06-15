import React, {useEffect} from 'react'
import './style.css'

function WeatherStateIcon({weather_state_abbr}) {
    
    return (
        <div className='weatherStateIcon'>
            <img src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`}/>
        </div>
    )
}

export default WeatherStateIcon
