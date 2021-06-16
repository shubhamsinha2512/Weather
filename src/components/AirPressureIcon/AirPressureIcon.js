import React from 'react'
import './style.css'

import {WiBarometer} from 'weather-icons-react'

function AirPressureIcon({airPressure}) {
    return (
        <div className='airPressureIcon'>
            <WiBarometer size={32} color='#FFF' />{airPressure}bar
        </div>
    )
}

export default AirPressureIcon
