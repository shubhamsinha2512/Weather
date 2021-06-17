import React from 'react'
import { WiSunrise, WiSunset } from 'weather-icons-react'
import './style.css'

function TempLocToday({temp, sunrise, sunset, city, country}) {

    function toHHMM(date){
        if(date)
            return new Date(date).toISOString().replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1");
        return "hh:mm"
    }

    function tempFormat(temp){
        return Math.round(temp).toFixed(0);
    }

    return (
        <div className='tempLocToday'>
            <h1 className='temp'>{temp ? tempFormat(temp) : "99"} &deg;C</h1>
            <span className='location'>{city ? city : "City"}, {country ? country : "Country"}</span>
            <div className='riseSet'>
                <span className='sunRise'> <WiSunrise size={18} color='#FFF' /> Sunrise {toHHMM(sunrise)}</span> | <span className='sunSet'><WiSunset size={18} color='#FFF' /> Sunset {toHHMM(sunset)}</span>
            </div>
        </div>
    )
}

export default TempLocToday
{}