import React from 'react'
import { connect } from 'react-redux'
import Day from './Day'
import uuid from 'uuid'
import Media from 'react-media'

const largeScreenStyles = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between'
}
const smallerScreenStyles = {
  display: 'flex',
  flexFlow: 'column',
  width: '100%',
  justifyContent: 'space-between'
}

class DailyList extends React.Component {
  render() {
    const { daily, noData } = this.props.weather
    let renderedComponent
    if (noData) {
      renderedComponent = null
    } else {
      // .slice removes the current day from the 7 week forecast.
      renderedComponent = daily.data
        .slice(1)
        .map(({ time, icon, temperatureHigh, temperatureLow }, index) => (
          <Day
            key={uuid()}
            time={time}
            // formating icon name to match the Skycon API
            icon={icon.replace(/-/g, '_').toUpperCase()}
            tempHi={temperatureHigh}
            tempLo={temperatureLow}
          />
        ))
    }
    return (
      <div>
        <Media
          query='(min-width: 1000px)'
          render={() => (
            <div style={largeScreenStyles}>{renderedComponent}</div>
          )}
        />
        <Media
          query='(max-width: 999px)'
          render={() => (
            <div style={smallerScreenStyles}>{renderedComponent}</div>
          )}
        />
      </div>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}
export default connect(mapStateToProps)(DailyList)
