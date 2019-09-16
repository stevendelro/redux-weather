import React from 'react'
import './App.css'
import { Container } from 'semantic-ui-react'
import Header from './components/Header'
import SearchHistory from './components/SearchHistory'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HourlyList from './components/HourlyList'
import DailyList from './components/DailyList'
import Today from './components/Today'



function App() {
  return (
    <div className='App'>
      <Header />
      <Container>
        <SearchHistory />
        {/* <Today />
        <HourlyList />
        <DailyList /> */}
      </Container>

      
    </div>
  )
}

export default App
