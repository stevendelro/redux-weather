import React from 'react'
import Search from './Search'
import { Container, Menu } from 'semantic-ui-react'

class Header extends React.Component {
  state = { activeItem: 'home '}
  handleItemClick = ( e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <Menu attached='top' tabular>
        <Container>
          <Menu.Item 
            name='home' 
            active={activeItem === 'home'}
            onClick={this.handleItemClick}>
            
          </Menu.Item>
          <Menu.Item
            name='history'
            active={activeItem === 'history'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Search />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

export { Header as default }
