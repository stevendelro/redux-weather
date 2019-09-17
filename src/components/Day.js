import React from 'react'
import Skycons from 'react-skycons'
import Media from 'react-media'

const Day = props => {
  const timestamp = props.time
  const date = new Date()
  date.setTime(timestamp * 1000)

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  const largeScreenStyle = {
    flexBasis: '150px',
    textAlign: 'center'
  }
  const smallerScreenStyle = {
    margin: '2rem',
    textAlign: 'center'
  }

  const day = (
    <div>
      <h1>{weekdays[date.getDay()]} </h1>
      <Skycons
        icon={props.icon}
        color='black'
        autoplay={true}
        style={{ width: '100%', height: 'auto', maxWidth: '150px' }}
      />
      <p className='day--temp-hi'>{`High: ${Math.round(props.tempHi)}°F`}</p>
      <p className='day--temp-lo'>{`Low: ${Math.round(props.tempLo)}°F`}</p>
    </div>
  )

  return (
    <div>
      <Media
        query='(min-width: 1000px)'
        render={() => <div style={largeScreenStyle}>{day}</div>}
      />
      <Media
        query='(max-width: 999px)'
        render={() => <div style={smallerScreenStyle}>{day}</div>}
      />
    </div>
  )
}

export default Day
