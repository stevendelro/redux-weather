import React from 'react'
import { connect } from 'react-redux'
import { Header, Icon, Segment } from 'semantic-ui-react'
import Hour from './Hour'
import uuid from 'uuid'

const styles = {
  display: 'flex',
  minWidth: '100%',
  minHeight: '200px',
  overflowX: 'auto'
}

class HourlyList extends React.Component {
  render() {
    const { hourly, noData } = this.props.weather
    let renderedComponent
    if (noData) {
      renderedComponent = (
        <Segment placeholder>
        <Header icon>
          <Icon disabled name='umbrella' />
          <p>Umbrellapp</p>
        </Header>
      </Segment>
      )
    } else {
      renderedComponent = hourly.data.map(({ time, icon, temperature }) => (
        <Hour
          key={uuid()}
          time={time}
          // Format icon text to match the Skycon API
          icon={icon.replace(/-/g, '_').toUpperCase()}
          temp={temperature}
        />
      ))
    }

    return <Segment.Group horizontal style={styles}>{renderedComponent}</Segment.Group>
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}
export default connect(mapStateToProps)(HourlyList)
