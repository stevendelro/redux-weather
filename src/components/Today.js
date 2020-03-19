import React from 'react'
import Skycons from 'react-skycons'
import { connect } from 'react-redux'
import {
  Grid,
  Icon,
  Statistic,
  Divider,
  Message,
  Label
} from 'semantic-ui-react'

class Today extends React.Component {
  render() {
    const { currently, daily, noData, displayedPlace } = this.props.weather

    let renderedComponent
    noData
      ? (renderedComponent = null)
      : (renderedComponent = (
          <Grid style={{ margin: '3rem 0' }} textAlign='center' columns={3}>
            <Grid.Row>
              <Grid.Column computer={4} tablet={2} mobile={1}></Grid.Column>
              <Grid.Column computer={8} tablet={10} mobile={11}>
                <Message size='huge'>
                  <Message.Header>{displayedPlace}</Message.Header>
                </Message>
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
                    <Label basic color='red'>
                      <Icon name='caret up' size='big' />
                      {`${Math.round(daily.data[0].temperatureMax)}°F`}
                    </Label>
                  </Grid.Column>
                  <Grid.Column>
                    <Label basic color='blue'>
                      <Icon name='caret down' size='big' />
                      {`${Math.round(daily.data[0].temperatureLow)}°F`}
                    </Label>
                  </Grid.Column>
                </Grid>
                <Divider horizontal></Divider>
                <Message>{daily.summary}</Message>
              </Grid.Column>
              <Grid.Column computer={4} tablet={2} mobile={1}></Grid.Column>
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
