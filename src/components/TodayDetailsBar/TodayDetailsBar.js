import React from 'react'
import AirPressureIcon from '../AirPressureIcon/AirPressureIcon'
import HumidityNowIcon from '../HumidityNowIcon/HumidityNowIcon'
import WindSpeedIcon from '../WindSpeedIcon/WindSpeedIcon'

import './style.css'

function TodayDetailsBar({windSpeed, humidity, airPressure}) {
    return (
        <div className='todayDetailsBar'>
            <WindSpeedIcon windSpeed={windSpeed} />
            <HumidityNowIcon humidity={humidity} />
            <AirPressureIcon airPressure={airPressure} />
        </div>
    )
}

export default TodayDetailsBar
