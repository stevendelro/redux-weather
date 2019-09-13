import React from 'react'
import { connect } from 'react-redux'
import Day from './Day'
import uuid from 'uuid'


const styles = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between'

} 

class DailyList extends React.Component {

  render() {
    const { daily, noData } = this.props.weather
    let renderedComponent
    if (noData) {
      renderedComponent = <div></div>
    } else {
      renderedComponent = daily.data.slice(1).map(
        ({ time, icon, temperatureHigh, temperatureLow }, index) => (
          <Day
            key={uuid()}
            time={time}
            icon={icon.replace(/-/g,'_').toUpperCase()}
            tempHi={temperatureHigh}
            tempLo={temperatureLow}
          />
        )
      )
    }
    return <div style={styles}>{renderedComponent}</div>
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}
export default connect(mapStateToProps)(DailyList)
