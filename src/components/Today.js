import React from 'react'
import Skycons from 'react-skycons'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'

class Today extends React.Component {
  render() {
    const { currently, daily, noData, displayedPlace } = this.props.weather

    let renderedComponent
    noData
      ? (renderedComponent = null)
      : (renderedComponent = (
          <Grid textAlign='center' columns={3}>
            <Grid.Row>
              <Grid.Column width={4}>
                <Skycons
                  icon={currently.icon.replace(/-/g, '_').toUpperCase()}
                  color='black'
                  autoplay={true}
                  style={{ width: '100%', height: 'auto', maxWidth: '150px' }}
                />
                <h1>{`${Math.round(currently.temperature)}°F`}</h1>
              </Grid.Column>
              <Grid.Column width={8}>
                <h1>{displayedPlace}</h1>
                <h4>{daily.summary}</h4>
              </Grid.Column>
              <Grid.Column width={4}>
                <p>High: {`${Math.round(daily.data[0].temperatureMax)}°F`}</p>
                <p>Low: {`${Math.round(daily.data[0].temperatureLow)}°F`}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        ))

    return renderedComponent
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}
export default connect(mapStateToProps)(Today)
