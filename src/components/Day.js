import React from 'react'
import { Segment, Header, Icon, Label } from 'semantic-ui-react'
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
    marginLeft: '20px',
    flexBasis: '150px',
    textAlign: 'center'
  }
  const smallerScreenStyle = {
    margin: '2rem',
    textAlign: 'center'
  }

  const day = (
    <Segment placeholder raised>
      <Header icon>
        {weekdays[date.getDay()]}
        <Icon>
          <Skycons
            icon={props.icon}
            color='black'
            autoplay={true}
            style={{ width: '100%', height: 'auto', maxWidth: '150px', marginTop: '2rem' }}
          />
        </Icon>
      </Header>
      <Segment.Inline>
        <Label basic color='red' style={{margin: '0'}} >
          <Icon name='caret up' size='big' />
          {`Hi: ${Math.round(props.tempHi)}°F`}
        </Label>
        <Label basic color='blue' style={{margin: '0'}} >
          <Icon name='caret down' size='big' />
          {`Low: ${Math.round(props.tempLo)}°F`}
        </Label>
      </Segment.Inline>
    </Segment>
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
