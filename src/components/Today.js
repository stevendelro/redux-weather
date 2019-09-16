import React from 'react'
import Skycons from 'react-skycons'
import { connect } from 'react-redux'
import { Grid, Icon, Statistic, Divider } from 'semantic-ui-react'

class Today extends React.Component {
  render() {
    const { currently, daily, noData, displayedPlace } = this.props.weather

    let renderedComponent
    noData
      ? (renderedComponent = null)
      : (renderedComponent = (
          <Grid style={{ margin: '3rem 0' }} textAlign='center' columns={3}>
            <Grid.Row>
              <Grid.Column width={4}></Grid.Column>
              <Grid.Column width={8}>
                <h1>{displayedPlace}</h1>
                <Divider horizontal></Divider>
                <Skycons
                  icon={currently.icon.replace(/-/g, '_').toUpperCase()}
                  autoplay={true}
                  style={{ width: '100%', height: 'auto', maxWidth: '150px' }}
                />
                <Divider horizontal></Divider>
                <Statistic>
                  <Statistic.Value>{`${Math.round(
                    currently.temperature
                  )}°F`}</Statistic.Value>
                </Statistic>
                <Divider horizontal></Divider>
                <Grid columns={2}>
                  <Grid.Column>
                    {`${Math.round(daily.data[0].temperatureMax)}°F`}
                    <Icon name='caret up' size='big'></Icon>
                  </Grid.Column>
                  <Grid.Column>
                    <Icon name='caret down' size='big'></Icon>
                    {`${Math.round(daily.data[0].temperatureLow)}°F`}
                  </Grid.Column>
                </Grid>
                <Divider horizontal></Divider>
                {daily.summary}
              </Grid.Column>
              <Grid.Column width={4}></Grid.Column>
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
