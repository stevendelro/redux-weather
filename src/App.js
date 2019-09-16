import React from 'react'
import './App.css'
import { Container } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import SearchHistory from './components/SearchHistory'
import MainDisplay from './components/MainDisplay'

function App() {
  return (
    <Router className='App'>
      <Header />
      <Container>
        <Switch>
          <Route exact path='/' component={MainDisplay} />
          <Route exact path='/history' component={SearchHistory} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
