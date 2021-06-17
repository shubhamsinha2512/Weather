import React, {useContext} from 'react'
import DayOverviewRow from '../DayOverviewRow/DayOverviewRow'
import './style.css'

import WeatherContext from '../../Contexts/WeatherContext'

function FiveDayDetails() {

    const data = useContext(WeatherContext);

    return (
        <div className='fiveDayDetails'>
            <div className='header'>
                <h1>Weather Forecast</h1>
            </div>

            <div className='overviewRows'>
                {data.consolidated_weather.map((day, index)=>{
                    if(index!=0)
                        return (
                            <DayOverviewRow
                                key={index} 
                                date={day.applicable_date}
                                humidity={day.humidity}
                                weather_state_abbr={day.weather_state_abbr}
                                min={day.min_temp}
                                max={day.max_temp}
                            />
                        )
                })}
            </div>
        </div>
    )
}

export default FiveDayDetails
