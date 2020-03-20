import React from 'react'
import { Segment, Header, Icon, Label, Divider } from 'semantic-ui-react'
import Skycons from 'react-skycons'
import Media from 'react-media'

const Day = props => {
  const timestamp = props.time
  const date = new Date()
  date.setTime(timestamp * 1000)

  const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const largeScreenStyle = {
    marginLeft: '20px',
    flexBasis: '150px',
    textAlign: 'center'
  }
  const smallerScreenStyle = {
    margin: '2rem',
    textAlign: 'center'
  }

  const labelStyles = {
    margin: '0',
    width: '100%'
  }

  const skyconStyles = {
    width: '100%',
    height: 'auto',
    maxWidth: '150px',
    marginTop: '2rem'
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
            style={skyconStyles}
          />
        </Icon>
      </Header>
      <Segment.Inline>
        <Label basic color='red' style={labelStyles}>
          <Icon name='caret up' size='big' />
          {`${Math.round(props.tempHi)}°F`}
        </Label>
        <Divider />
        <Label basic color='blue' style={labelStyles}>
          <Icon name='caret down' size='big' />
          {`${Math.round(props.tempLo)}°F`}
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
