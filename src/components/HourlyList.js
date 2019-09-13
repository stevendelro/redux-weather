import React from 'react'
import { connect } from 'react-redux'
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
      renderedComponent = <div></div>
    } else {
      renderedComponent = hourly.data.map(({ time, icon, temperature }) => (
        <Hour
          key={uuid()}
          time={time}
          icon={icon.replace(/-/g, '_').toUpperCase()}
          temp={temperature}
        />
      ))
    }
    return <div style={styles}>{renderedComponent}</div>
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}
export default connect(mapStateToProps)(HourlyList)
