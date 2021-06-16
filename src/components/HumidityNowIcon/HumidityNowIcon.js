import React from 'react'
import './style.css'

import {WiHumidity} from 'weather-icons-react' 

function HumidityNowIcon({humidity}) {
    return (
        <div className='humidityNowIcon'>
            <WiHumidity size={30} color='EEE' />{humidity}%
        </div>
    )
}

export default HumidityNowIcon
