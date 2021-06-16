import React from 'react'
import './style.css'

import {WiWindy} from 'weather-icons-react'

function WindSpeedIcon({windSpeed}) {
    return (
        <div className='windSpeedIcon'>
            <WiWindy size={32} color='#FFF' />{windSpeed}kmph
        </div>
    )
}

export default WindSpeedIcon
