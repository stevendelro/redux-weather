import React from 'react'
import Skycons from 'react-skycons'

const Hour = props => {
  const timestamp = props.time
  const date = new Date()
  date.setTime(timestamp * 1000)
  let hours = date.getHours()
  const amOrPm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12 || 12

  return (
    <div style={{ minWidth: '8rem', textAlign: 'center' }}>
      <h3 className='hour--time'>{`${hours} ${amOrPm}`}</h3>
      <Skycons 
        icon={props.icon} 
        color='black'
        autoplay={true}
        style={{width: '100%', height: 'auto', maxWidth: '150px'}}
        />
      <p className='hour--temp'>{`${Math.round(props.temp)}°F`}</p>
    </div>
  )
}

export default Hour
