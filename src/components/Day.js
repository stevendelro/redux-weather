import React from 'react'
import Skycons from 'react-skycons'

const Day = props => {
  const timestamp = props.time
  const date = new Date()
  date.setTime(timestamp*1000)

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  return (
    <div style={{
      flexBasis: '150px',
      textAlign: 'center'
    }}>
      <h1>{weekdays[date.getDay()]} </h1>
      <Skycons 
        icon={props.icon} 
        color='black'
        autoplay={true}
        style={{width: '100%', height: 'auto', maxWidth: '150px'}}
        />
      <p className='day--temp-hi'>{`High: ${Math.round(props.tempHi)}°F`}</p>
      <p className='day--temp-lo'>{`Low: ${Math.round(props.tempLo)}°F`}</p>
    </div>
  )
}

export default Day