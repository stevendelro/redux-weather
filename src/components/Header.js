import React from 'react'
import Search from './Search'
import { Container, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu attached='top' tabular>
        <Container>
          <Menu.Item
            as={NavLink}
            exact
            to='/'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}></Menu.Item>
          <Menu.Item
            as={NavLink}
            to='/history'
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
