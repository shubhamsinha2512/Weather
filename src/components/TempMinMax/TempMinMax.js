import React from 'react'
import './style.css'
import {WiThermometerExterior, WiThermometer} from 'weather-icons-react'

function TempMinMax({min, max}) {
    return (
        <div className='tempMinMax'>
            <span className='min'>
                <WiThermometerExterior size={24} color='#85bff2' />{min}&deg;C
            </span>
            <span className='max'>
                <WiThermometer size={24} color='#85bff2' />{max}&deg;C
            </span>
        </div>
    )
}

export default TempMinMax
