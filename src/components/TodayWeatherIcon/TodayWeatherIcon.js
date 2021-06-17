import React from 'react'
import './style.css'

function TodayWeatherIcon({weather_state_abbr, date}) {

    function getDayDate(date){
        const TodayDateISO = new Date(date);
        // console.log(TodayDateISO);
        let day = "Invalid Day"

        switch(TodayDateISO.getDay()){
            case 0: day = "Sund"; break;
            case 1: day = "Mon"; break;
            case 2: day = "Tues"; break;
            case 3: day = "Wed"; break;
            case 4: day = "Thu"; break;
            case 5: day = "Fri"; break;
            case 6: day = "Sat"; break;
            default: day = "Day";
        }

        const t_date = date ? TodayDateISO.getDate() : "date";
        let month = "";

        switch(TodayDateISO.getMonth()){
            case 0: month = 'Jan';break;
            case 1: month = 'Feb';break;
            case 2: month = 'Mar';break;
            case 3: month = 'Apr';break;
            case 4: month = 'May';break;
            case 5: month = 'Jun';break;
            case 6: month = 'Jul';break;
            case 7: month = 'Aug';break;
            case 8: month = 'Sep';break;
            case 9: month = 'Oct';break;
            case 10: month = 'Nov';break;
            case 11: month = 'Dec';break;
            default: month = 'Month';break;
        }

        // console.log(day, t_date, month);
        return `${day},${t_date} ${month}`
    }

    return (
        <div className='todayWeatherIcon'>
            <img className='weatherIcon' src={`https://www.metaweather.com/static/img/weather/${weather_state_abbr ? weather_state_abbr : "s"}.svg`} />
            <div className='dayDate'>
                <h2>Today</h2>
                <span className='today'>{getDayDate(date)}</span>
            </div>
        </div>
    )
}

export default TodayWeatherIcon
