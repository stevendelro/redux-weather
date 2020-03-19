import React from 'react'
import HourlyList from './HourlyList'
import DailyList from './DailyList'
import Today from './Today'

function MainDisplay() {
  return (
    <>
      <Today />
      <HourlyList />
      <DailyList />
    </>
  )
}

export default MainDisplay