import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fetchWeather,
  locationTextInput,
  logSearchHistory
} from '../actions/index'
import { Form } from 'semantic-ui-react'

class Search extends React.Component {
  inputLocation = event => {
    this.props.locationTextInput(event.target.value)
  }
  onFormSubmit = event => {
    event.preventDefault()
    this.props.fetchWeather(this.props.weather.location)
    this.props.logSearchHistory(this.props.weather.location)
  }

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <Form.Input
          transparent
          icon='search'
          type='text'
          placeholder='Search'
          value={this.props.weather.location}
          onChange={this.inputLocation}
        />
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchWeather, locationTextInput, logSearchHistory },
    dispatch
  )
}

const mapStateToProps = ({ weather }) => {
  return { weather }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
