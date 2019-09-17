import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { List } from 'semantic-ui-react'

class SearchHistory extends React.Component {
  render() {
    const historyList = this.props.historyList
      .map(item => (
        <List.Item key={uuid()}>
          <List.Content floated='right'>
            <List.Description>{item.date}</List.Description>
            <List.Description>{item.timeSearched}</List.Description>
          </List.Content>
          <List.Icon name='clock outline' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header>{item.location.toUpperCase()}</List.Header>
          </List.Content>
        </List.Item>
      ))
      .reverse()
    return (
      <List animated divided relaxed='very' size='massive' style={{ marginTop: '8rem' }}>
        {this.props.empty ? null : historyList}
      </List>
    )
  }
}

const mapStateToProps = state => {
  return { empty: state.history.empty, historyList: state.history.historyList }
}
export default connect(mapStateToProps)(SearchHistory)
