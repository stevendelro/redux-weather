import React from 'react'
import Skycons from 'react-skycons'
import { Segment, Header } from 'semantic-ui-react'

const Hour = props => {
  const timestamp = props.time
  const date = new Date()
  date.setTime(timestamp * 1000)
  let hours = date.getHours()
  const amOrPm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12 || 12

  const skyconStyles = {
    width: '100%',
    height: 'auto',
    maxWidth: '150px',
    paddingTop: '1rem'
  }

  const segmentStyles = {
    minWidth: '8rem',
    textAlign: 'center'
  }

  return (
    <Segment style={segmentStyles}>
      <Header style={{ paddingTop: '1rem' }}>{`${hours} ${amOrPm}`}</Header>
      <Skycons
        icon={props.icon}
        color='black'
        autoplay={true}
        style={skyconStyles}
      />
      <p style={{ paddingTop: '2rem' }}>{`${Math.round(props.temp)}°F`}</p>
    </Segment>
  )
}

export default Hour
