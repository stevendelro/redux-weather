import { combineReducers } from 'redux'
import HistoryListReducer from './reducers/HistoryListReducer'
import WeatherDashReducer from './reducers/WeatherDashReducer'

const rootReducer = combineReducers({
  history: HistoryListReducer,
  weather: WeatherDashReducer
})

export default rootReducer