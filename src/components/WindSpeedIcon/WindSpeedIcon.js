import React from 'react'
import './style.css'

import {WiWindy} from 'weather-icons-react'

function WindSpeedIcon({windSpeed}) {

    function formatWindSpeed(windSpeed){
        return Math.round(windSpeed).toFixed(1);
    }

    return (
        <div className='windSpeedIcon'>
            <WiWindy size={32} color='#FFF' />{windSpeed ? formatWindSpeed(windSpeed) : 12}km/h
        </div>
    )
}

export default WindSpeedIcon
