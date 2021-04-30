 import React from 'react'
import './Timer.css'

const msToTime = ms => {
    const msPerSecond = 1000
    const msPerMinute = msPerSecond * 60
    const msPerHour = msPerMinute * 60

    const hours = Math.floor(ms / msPerHour)
    const hoursRest = ms % msPerHour
    const minutes = Math.floor(hoursRest / msPerMinute)
    const minutesRest = hoursRest % msPerMinute
    const seconds = Math.floor(minutesRest / msPerSecond)
    return hours + ':' + minutes + ':' + seconds
}


const Time = (props) => {
    const ms = props.ms
    return <div className="time-container">
        <div className="time-inner-container">
            <div className="time-digits">
                {msToTime(ms)}
            </div>
            <div className="time-text">
                <div className="time-text-item">Hour(s)</div>
                <div className="time-text-item">Minute(s)</div>
                <div className="time-text-item">Second(s)</div>
            </div>
        </div>
    </div>
}
    
export default Time