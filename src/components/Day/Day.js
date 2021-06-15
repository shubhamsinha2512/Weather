import React from 'react'
import './style.css'

function Day({date}) {

    function dateToDay(date){
        const day = new Date(date).getDay();
        
        switch(day){
            case 0: return "Sunday"; break;
            case 1: return "Monday"; break;
            case 2: return "Tuesday"; break;
            case 3: return "Wednesday"; break;
            case 4: return "Thursday"; break;
            case 5: return "Friday"; break;
            case 6: return "Saturday"; break;
            default: return "Invalid Date";
        }
    }

    return (
        <span className='day'>
            {dateToDay(date)}
        </span>
    )
}

export default Day
