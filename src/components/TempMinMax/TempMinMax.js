import React from 'react'
import './style.css'
import {WiThermometerExterior, WiThermometer} from 'weather-icons-react'

function TempMinMax({min, max}) {

    function formatTemp(temp) {
        return Math.round(temp).toFixed(0);
    }

    return (
        <div className='tempMinMax'>
            <span className='min'>
                <WiThermometerExterior size={24} color='#85bff2' />{min ? formatTemp(min) : 0}&deg;C
            </span>
            <span className='max'>
                <WiThermometer size={24} color='#85bff2' />{max ? formatTemp(max) : 0}&deg;C
            </span>
        </div>
    )
}

export default TempMinMax
