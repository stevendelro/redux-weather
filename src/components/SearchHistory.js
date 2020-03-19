import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { List, Segment, Header, Icon } from 'semantic-ui-react'

class SearchHistory extends React.Component {
  render() {
    const historyList = this.props.historyList
      .map(item => (
        <List.Item key={uuid()}>
          <List.Content floated='left'>
            <List.Header>
              {item.location.toUpperCase()}
            </List.Header>
          </List.Content>
          <List.Content floated='right'>
            <List.Description>{item.date}</List.Description>
            <List.Description>{item.timeSearched}</List.Description>
          </List.Content>
        </List.Item>
      ))
      .reverse()
    return (
      <Segment raised placeholder style={{ marginTop: '1rem' }}>
        <Header icon>
          <List divided relaxed='very' size='massive'>
            {this.props.empty ? (
                <Icon disabled name='history' />
            ) : (
              historyList
            )}
          </List>
        </Header>
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return { empty: state.history.empty, historyList: state.history.historyList }
}
export default connect(mapStateToProps)(SearchHistory)
