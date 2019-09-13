import React from 'react'
import './App.css'
import Header from './components/Header'
import HourlyList from './components/HourlyList'
import DailyList from './components/DailyList'
import Today from './components/Today'
import { Container } from 'semantic-ui-react'
function App() {
  return (
    <div className='App'>
      <Header />
      <Container>
        <Today />
        <HourlyList />
        <DailyList />
      </Container>

      
    </div>
  )
}

export default App
