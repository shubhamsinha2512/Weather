import React from 'react'
import './style.css'
import {WiRaindrop} from 'weather-icons-react'

function HumidityRowIcon({humidity}) {
    return (
        <div className='humidityIcon'>
            <WiRaindrop size={32} color='#85BFF2' /><span style={{color: '#888'}}>{humidity}%</span>
        </div>
    )
}

export default HumidityRowIcon
